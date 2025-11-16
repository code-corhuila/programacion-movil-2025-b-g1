<template>
  <IonPage>
    <IonContent class="nazoru-content" fullscreen>
      <div class="nazoru-bg">
        <div class="nazoru-inner">
          <!-- Título -->
          <h1 class="nazoru-title">Nazoru</h1>

          <!-- Personajes + texto -->
          <div class="nazoru-top">
            <img
              src="@/assets/nazoru/iconexplicacion.png"
              alt="Explicación"
              class="nazoru-characters"
            />

            <p class="nazoru-text">
              Nazoru es la aplicación móvil definitiva para calcar y dibujar
              usando la tecnología de tu teléfono. Olvídate de las mesas de luz
              voluminosas; Nazoru convierte tu pantalla en una cámara lúcida
              digital que te permite transferir cualquier imagen al papel.
            </p>
          </div>

          <!-- Tarjeta completa como botón -->
          <button class="nazoru-card-btn" @click="onCardClick">
            <div class="nazoru-card-inner">
              <img
                src="@/assets/nazoru/icongaleria.png"
                alt="Seleccionar imagen"
                class="nazoru-pochita"
              />
              <span class="nazoru-card-text">Seleccionar imagen</span>
            </div>
            <!-- input oculto para seleccionar imagen (por ahora solo demo) -->
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="nazoru-file-input"
              @change="onFileChange"
            />
          </button>

          <!-- Si quieres, nombre de la imagen seleccionada -->
          <p v-if="selectedFileName" class="nazoru-file-name">
            Imagen seleccionada: {{ selectedFileName }}
          </p>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import { useSound } from '@/composables/useSound';
import { useSelectedImage } from '@/composables/useSelectedImage';
import { useRouter } from 'vue-router';

const { playClick } = useSound();
const { setImage } = useSelectedImage();
const router = useRouter();

const fileInput = ref<HTMLInputElement | null>(null);
const selectedFileName = ref<string | null>(null);

function onCardClick() {
  playClick();
  fileInput.value?.click();
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    selectedFileName.value = file.name;
    const url = URL.createObjectURL(file);
    setImage(url);
    // Ir directo a la pantalla de cámara
    router.push('/camera');
  }
}
</script>

<style scoped>
.nazoru-content {
  --background: transparent;
}

/* Fondo HUD */
.nazoru-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: #001432;
  background-image: url('@/assets/nazoru/Hudprincipal.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.nazoru-inner {
  width: 88%;
  max-width: 440px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 16px 24px;   /* baja el bloque principal dentro del HUD */
}

/* Título */
.nazoru-title {
  margin-bottom: 18px;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  -webkit-text-stroke: 1.2px #4db4ff;
  text-shadow:
    0 0 6px #4db4ff,
    0 0 10px #003366;
}

/* Parte superior: personajes + texto */
.nazoru-top {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 26px;      /* BAJA TODO EL BLOQUE */
  margin-top: 10px;         /* SEPARA DEL TÍTULO */
}

.nazoru-characters {
  width: 60%;
  max-width: 300px;
  height: auto;
  margin-top: 10px;
}

.nazoru-text {
  flex: 1;
  color: #e4f4ff;
  font-size: 15.5px;        /* antes 14px → más legible */
  line-height: 1.55;
  margin-top: 14px;         /* baja el texto para alinearlo */
}

/* Tarjeta botón */
.nazoru-card-btn {
  margin-top: 12px;
  width: 100%;
  max-width: 360px; /* limitar en tablets */
  border-radius: 20px;
  border: 2px solid #4db4ff;
  background: rgba(4, 30, 80, 0.95);
  padding: 18px 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.1s ease, box-shadow 0.1s ease,
    background 0.1s ease;
}

@media (max-height:720px) {
  .nazoru-inner { padding: 12px 12px 18px; }
  .nazoru-card-btn { max-width: 320px; padding: 16px 10px; }
  .nazoru-characters { width: 55%; max-width: 260px; }
}

.nazoru-card-btn:active {
  transform: scale(0.97);
  box-shadow: 0 0 12px rgba(77, 180, 255, 0.8);
  background: rgba(10, 50, 110, 0.95);
}

.nazoru-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.nazoru-pochita {
  width: 150px;
  height: auto;
}

.nazoru-card-text {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  -webkit-text-stroke: 0.6px #4db4ff;
  text-shadow: 0 0 6px #002244;
}

/* Input file oculto */
.nazoru-file-input {
  display: none;
}

/* Nombre de la imagen seleccionada */
.nazoru-file-name {
  margin-top: 8px;
  font-size: 12px;
  color: #d0e8ff;
  text-align: center;
}
</style>
