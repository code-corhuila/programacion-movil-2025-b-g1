<template>
  <IonPage>
    <IonContent class="nazoru-content" fullscreen>
      <div class="nazoru-bg">
        <div class="nazoru-inner">
          <!-- Título -->
          <h1 class="nazoru-title">Nazoru</h1>

          <!-- Botones -->
          <div class="nazoru-buttons">
            <button class="nazoru-btn" @click="goRegister">Registrarse</button>
            <button class="nazoru-btn" @click="goLogin">Iniciar sesión</button>
            <button class="nazoru-btn" @click="goGuest">Continuar sin iniciar sesión</button>
          </div>

          <!-- Personajes abajo -->
          <img src="@/assets/nazoru/iconinicio.png" alt="Inicio" class="nazoru-characters" />
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useSound } from '@/composables/useSound';

const router = useRouter();
const { playClick } = useSound();

function goRegister() {
  playClick();
  router.push('/register');
}

function goLogin() {
  playClick();
  router.push('/login');
}

function goGuest() {
  playClick();
  router.push('/select-image');
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
  width: 85%;
  max-width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 16px;
}

.nazoru-title {
  margin-bottom: 28px;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  -webkit-text-stroke: 1px #4db4ff;
  text-shadow: 0 0 4px #4db4ff, 0 0 8px #003366;
}

.nazoru-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  margin-top: 56px;
  margin-bottom: auto;
}

.nazoru-btn {
  width: 80%;
  max-width: 320px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 2px solid #4db4ff;
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  -webkit-text-stroke: 0.4px #4db4ff;
  text-shadow: 0 0 4px #002244;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
}

.nazoru-btn:active {
  transform: scale(0.97);
  background: rgba(77, 180, 255, 0.2);
  box-shadow: 0 0 10px rgba(77, 180, 255, 0.8);
}

.nazoru-characters {
  margin-top: auto;
  margin-bottom: 12px;
  width: 75%;
  max-width: 320px;
  height: auto;
}

@media (max-height: 720px) {
  .nazoru-inner { padding: 70px 12px 18px; }
  .nazoru-title { margin-bottom: 18px; font-size: 30px; }
  .nazoru-characters { margin-bottom: 18px; width: 50%; }
}
</style>
