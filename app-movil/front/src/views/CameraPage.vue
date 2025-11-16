<template>
  <IonPage>
    <IonContent
      class="camera-content"
      :class="{ 'camera-on': isCameraStarted }"
      fullscreen
    >
      <div class="camera-root">
        <!-- Área de cámara -->
        <div class="camera-view">
          <div id="cameraContainer" class="camera-placeholder"></div>

          <!-- Imagen superpuesta para calcar -->
          <div
            v-if="imageSrc"
            class="overlay-image"
            :class="{ 'overlay-locked': isLocked }"
            :style="overlayStyle"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @pointerleave="onPointerUp"
          >
            <img :src="imageSrc" alt="Imagen para calcar" />
          </div>
        </div>

        <!-- Botón Cámara -->
        <div class="camera-toggle-container">
          <button
            class="camera-toggle-btn"
            :class="{ active: isCameraStarted }"
            @click="toggleCamera"
          >
            Cámara
          </button>
        </div>

        <!-- Panel de opacidad -->
        <div v-if="showOpacityPanel" class="opacity-panel">
          <div class="opacity-inner">
            <img src="@/assets/nazoru/opacidad.png" alt="Opacidad" class="opacity-icon" />
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              v-model.number="opacity"
              class="opacity-range"
            />
            <img src="@/assets/nazoru/opacidad.png" alt="Opacidad" class="opacity-icon" />
          </div>
        </div>

        <!-- Barra inferior -->
        <div class="camera-toolbar">
          <button class="tool-btn" :class="{ active: activeTool === 'flash' }" @click="toggleFlash">
            <img src="@/assets/nazoru/iconflash.png" alt="Flash" />
          </button>

          <button class="tool-btn" :class="{ active: isLocked }" @click="toggleLock">
            <img src="@/assets/nazoru/iconcandado.png" alt="Candado" />
          </button>

          <div class="tool-mascot">
            <img src="@/assets/nazoru/imgdecoracion.png" alt="Nazoru" />
          </div>

          <button class="tool-btn" :class="{ active: activeTool === 'opacity' }" @click="toggleOpacityPanel">
            <img src="@/assets/nazoru/opacidad.png" alt="Opacidad" />
          </button>

          <button class="tool-btn" :class="{ active: activeTool === 'invert' }" @click="toggleInvert">
            <img src="@/assets/nazoru/iconinvertir.png" alt="Invertir" />
          </button>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { computed, ref, onBeforeUnmount } from 'vue';
import { Capacitor } from '@capacitor/core';
import { CameraPreview } from '@capacitor-community/camera-preview';
import { useSelectedImage } from '@/composables/useSelectedImage';
import { useSound } from '@/composables/useSound';

const { imageSrc } = useSelectedImage();
const { playClick } = useSound();

const platform = Capacitor.getPlatform(); // 'android' | 'ios' | 'web'

/* estado cámara/flash */
const isCameraStarted = ref(false);
const isFlashOn = ref(false);

/* estado de herramientas */
type Tool = 'flash' | 'opacity' | 'invert' | null;
const activeTool = ref<Tool>(null);
const isLocked = ref(false);
const opacity = ref(0.6);
const isInverted = ref(false);
const showOpacityPanel = ref(false);

/* movimiento + escala (pinch zoom) */
const dragging = ref(false);
const startX = ref(0);
const startY = ref(0);
const offsetX = ref(0);
const offsetY = ref(0);

const scale = ref(1);
const baseScale = ref(1);
const initialDistance = ref(0);
const pointers = new Map<number, PointerEvent>();

function getDistance(p1: PointerEvent, p2: PointerEvent) {
  const dx = p2.clientX - p1.clientX;
  const dy = p2.clientY - p1.clientY;
  return Math.hypot(dx, dy);
}

/* estilo dinámico de la imagen */
const overlayStyle = computed(() => {
  const sx = (isInverted.value ? -1 : 1) * scale.value;
  const sy = scale.value;

  return {
    opacity: opacity.value.toString(),
    transform: `translate(${offsetX.value}px, ${offsetY.value}px) scale(${sx}, ${sy})`,
  };
});

/* gestos */
function onPointerDown(event: PointerEvent) {
  pointers.set(event.pointerId, event);

  if (pointers.size === 1 && !isLocked.value) {
    // drag con un dedo
    dragging.value = true;
    startX.value = event.clientX - offsetX.value;
    startY.value = event.clientY - offsetY.value;
  }

  if (pointers.size === 2) {
    // inicio pinch
    const [p1, p2] = Array.from(pointers.values());
    initialDistance.value = getDistance(p1, p2);
    baseScale.value = scale.value;
  }
}

function onPointerMove(event: PointerEvent) {
  if (!pointers.has(event.pointerId)) return;
  pointers.set(event.pointerId, event);

  if (pointers.size === 1 && dragging.value && !isLocked.value) {
    offsetX.value = event.clientX - startX.value;
    offsetY.value = event.clientY - startY.value;
  }

  if (pointers.size === 2) {
    const [p1, p2] = Array.from(pointers.values());
    const currentDist = getDistance(p1, p2);
    if (initialDistance.value > 0) {
      const newScale = (baseScale.value * currentDist) / initialDistance.value;
      scale.value = Math.min(Math.max(newScale, 0.5), 4); // límites
    }
  }
}

function onPointerUp(event?: PointerEvent) {
  if (event) {
    pointers.delete(event.pointerId);
  } else {
    pointers.clear();
  }

  if (pointers.size < 2) {
    initialDistance.value = 0;
  }
  if (pointers.size === 0) {
    dragging.value = false;
  }
}

async function toggleCamera() {
  playClick();

  // En navegador: solo avisar
  if (platform === 'web') {
    alert('El modo cámara en vivo solo funciona en el APK.');
    return;
  }

  try {
    if (!isCameraStarted.value) {
      await CameraPreview.start({
        position: 'rear',
        parent: 'cameraContainer', // el div del template
        toBack: true,              // cámara detrás del WebView
        disableAudio: true,
        width: window.innerWidth,
        height: window.innerHeight
      });

      isCameraStarted.value = true;
      isFlashOn.value = false;
      activeTool.value = null;
    } else {
      await CameraPreview.stop();
      isCameraStarted.value = false;
      isFlashOn.value = false;
    }
  } catch (err) {
    console.error('Error toggleCamera', err);
    alert('Error al iniciar la cámara: ' + (err as any).message);
  }
}

onBeforeUnmount(async () => {
  if (isCameraStarted.value) {
    try {
      await CameraPreview.stop();
    } catch (err) {
      console.error('Error stopping CameraPreview onUnmount', err);
    }
    isCameraStarted.value = false;
    isFlashOn.value = false;
  }
});

/* herramientas */
async function toggleFlash() {
  playClick();
  // Solo en dispositivo real y con la cámara ya iniciada
  if (platform === 'web' || !isCameraStarted.value) {
    console.warn('No se puede activar el flash sin cámara nativa');
    return;
  }

  try {
    if (!isFlashOn.value) {
      // TORCH = linterna constante
      await CameraPreview.setFlashMode({ flashMode: 'torch' });
      activeTool.value = 'flash';
      isFlashOn.value = true;
    } else {
      await CameraPreview.setFlashMode({ flashMode: 'off' });
      activeTool.value = null;
      isFlashOn.value = false;
    }
  } catch (err: any) {
    console.error('Error toggling flash', err);
    alert('No se pudo activar el flash: ' + (err?.message || 'error desconocido'));
  }
}

function toggleLock() {
  playClick();
  isLocked.value = !isLocked.value;
}

function toggleOpacityPanel() {
  playClick();
  if (activeTool.value === 'opacity') {
    activeTool.value = null;
    showOpacityPanel.value = false;
  } else {
    activeTool.value = 'opacity';
    showOpacityPanel.value = true;
  }
}

function toggleInvert() {
  playClick();
  if (activeTool.value === 'invert') {
    activeTool.value = null;
  } else {
    activeTool.value = 'invert';
  }
  isInverted.value = !isInverted.value;
}
</script>

<style scoped>
.camera-content {
  /* Fondo TRANSPARENTE para que se vea la cámara nativa detrás */
  --background: transparent;
  background: transparent;
}

.camera-root {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;        /* antes #000 */
  display: flex;
  flex-direction: column;
}

/* Área de cámara */
.camera-view {
  flex: 1;
  position: relative;
  background: transparent;        /* antes #808080 */
  overflow: hidden;
}

.camera-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;        /* por si acaso */
}

/* Botón Cámara arriba de la barra */
.camera-toggle-container {
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: transparent;        /* que no tape la cámara */
}

.camera-toggle-btn {
  padding: 6px 18px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  background: #1e6bff;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.camera-toggle-btn.active {
  background: #ffffff;
  border-color: #ffffff;
  color: #1e6bff;
}

.overlay-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%);
  touch-action: none;
}

.overlay-image img {
  max-width: 90vw;
  max-height: 90vh;
  pointer-events: none;
}

.overlay-locked {
  cursor: not-allowed;
}

#cameraContainer,
.camera-preview {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;   /* cámara debajo */
}

.overlay-image,
.camera-toolbar,
.opacity-panel {
  z-index: 2;
}

.opacity-panel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 96px;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.opacity-inner {
  pointer-events: auto;
  background: #ffffff;
  border-radius: 18px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 80%;
  max-width: 360px;
}

.opacity-icon {
  width: 20px;
  height: 20px;
}

.opacity-range {
  flex: 1;
}

.camera-toolbar {
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  gap: 4px;
}

.tool-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-btn img { width: 26px; height: 26px; }

.tool-btn.active { background: #1e6bff; }
.tool-btn.active img { filter: brightness(10); }

.tool-mascot { width: 62px; height: 62px; border-radius: 50%; display:flex; align-items:center; justify-content:center; }
.tool-mascot img { width: 60px; height: 60px; }
</style>
