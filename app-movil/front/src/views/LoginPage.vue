<template>
  <IonPage>
    <IonContent class="nazoru-content" fullscreen>
      <div class="nazoru-bg">
        <div class="nazoru-inner">
          <!-- Título -->
          <h1 class="nazoru-title">Nazoru</h1>

          <!-- Campos con label flotante -->
          <div class="nazoru-form">
            <ion-item class="nazoru-item">
              <ion-label position="floating">Gmail</ion-label>
              <ion-input
                v-model="form.email"
                type="email"
                autocomplete="email"
              />
            </ion-item>

            <ion-item class="nazoru-item">
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input
                v-model="form.password"
                type="password"
                autocomplete="current-password"
              />
            </ion-item>
          </div>

          <!-- Personajes + botón iniciar -->
          <div class="nazoru-bottom">
            <img
              src="@/assets/nazoru/iconinicio.png"
              alt="Iniciar sesión"
              class="nazoru-characters"
            />

            <button
              class="nazoru-login-btn"
              @click="onSubmit"
              :disabled="loading"
            >
              {{ loading ? 'Ingresando...' : 'Iniciar sesión' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Popup azul centrado -->
      <div v-if="isDialogOpen" class="nazoru-dialog-overlay">
        <div class="nazoru-dialog">
          <p class="nazoru-dialog-text">
            {{ dialogMessage }}
          </p>
          <button class="nazoru-dialog-button" @click="closeDialog">
            Aceptar
          </button>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSound } from '@/composables/useSound';

const router = useRouter();
const { playClick } = useSound();

const form = reactive({
  email: '',
  password: '',
});

const loading = ref(false);

// Popup azul
const isDialogOpen = ref(false);
const dialogMessage = ref('');

function showDialog(message: string) {
  dialogMessage.value = message;
  isDialogOpen.value = true;
}

function closeDialog() {
  isDialogOpen.value = false;
}

async function onSubmit() {
  playClick();

  if (!form.email || !form.password) {
    showDialog('Por favor completa todos los campos.');
    return;
  }

  loading.value = true;
  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.error('Error login', body);
      throw new Error('Credenciales inválidas. Intenta de nuevo.');
    }

    const data = await res.json();
    localStorage.setItem('nazoru_token', data.access_token);

    showDialog('Bienvenido de nuevo ✨');
    setTimeout(() => {
      isDialogOpen.value = false;
      router.push('/select-image');
    }, 800);
  } catch (err: any) {
    showDialog(err.message || 'No se pudo iniciar sesión.');
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.nazoru-content {
  --background: transparent;
}

/* Fondo HUD igual */
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
  width: 85%;
  max-width: 420px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 14px 20px;
}

/* Título */
.nazoru-title {
  margin-bottom: 24px;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  -webkit-text-stroke: 1px #4db4ff;
  text-shadow:
    0 0 4px #4db4ff,
    0 0 8px #003366;
}

/* Formulario */
.nazoru-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
  margin-top: 6px;
}

/* IonItem */
.nazoru-item {
  --background: transparent;
  --color: #ffffff;
  --border-color: #4db4ff;
  --border-radius: 12px;
  --border-width: 2px;

  border-radius: 12px;
  margin-inline: 0;
}

.nazoru-item ion-label {
  color: #cfe9ff;
  font-size: 14px;
}

.nazoru-item ion-input {
  color: #ffffff;
  font-size: 14px;
}

/* Parte inferior */
.nazoru-bottom {
  margin-top: auto;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.nazoru-characters {
  width: 70%;
  max-width: 360px;
  height: auto;
  margin: 0 auto;
}

@media (max-height:720px) {
  .nazoru-inner { padding: 12px 12px 18px; }
  .nazoru-form { margin-bottom: 8px; gap: 8px; }
  .nazoru-characters { width: 60%; max-width: 300px; }
}

/* Botón iniciar sesión */
.nazoru-login-btn {
  padding: 10px 20px;
  border-radius: 16px;
  border: 2px solid #4db4ff;
  background: rgba(0, 80, 160, 0.9);
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  -webkit-text-stroke: 0.4px #4db4ff;
  text-shadow: 0 0 4px #002244;
  transition: transform 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease;
}

.nazoru-login-btn:active {
  transform: scale(0.96);
  box-shadow: 0 0 10px rgba(77, 180, 255, 0.9);
}

.nazoru-login-btn:disabled {
  opacity: 0.6;
}

/* Popup azul centrado */
.nazoru-dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.nazoru-dialog {
  width: 80%;
  max-width: 320px;
  background: rgba(0, 60, 140, 0.9);
  border: 2px solid #4db4ff;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 0 18px rgba(77, 180, 255, 0.9);
}

.nazoru-dialog-text {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-bottom: 12px;
}

.nazoru-dialog-button {
  display: block;
  margin: 0 auto;
  padding: 6px 18px;
  border-radius: 999px;
  border: 2px solid #4db4ff;
  background: rgba(0, 100, 200, 0.9);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
}
</style>