<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ categoryTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Tarjeta -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ currentCard.question }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p v-if="showAnswer">{{ currentCard.answer }}</p>
          <p v-else>Presiona "Mostrar respuesta"</p>

          <!-- Imagen opcional -->
          <img 
            v-if="currentCard.image" 
            :src="currentCard.image" 
            alt="flashcard image" 
            style="max-width:100%; margin-top:10px; border-radius:10px;" 
          />
        </ion-card-content>
      </ion-card>

      <!-- Botones -->
      <ion-button expand="block" color="primary" @click="toggleAnswer">
        {{ showAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta' }}
      </ion-button>

      <ion-button expand="block" color="success" @click="nextCard">
        ➡️ Siguiente pregunta
      </ion-button>

      <ion-button expand="block" color="medium" router-link="/home">
        🔙 Volver a categorías
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonButton 
} from '@ionic/vue'

const route = useRoute()

// Preguntas por categoría (con opción de imagen)
const cardsByCategory: Record<string, { question: string; answer: string; image?: string }[]> = {
  matematica: [
    { question: '¿Cuánto es 5 + 7?', answer: '12', image: '/img/mate1.png' },
    { question: '¿Derivada de x²?', answer: '2x', image: '/img/mate2.png' },
    { question: '¿Integral de 1/x?', answer: 'ln(x)' }
  ],
  informatica: [
    { question: '¿Qué es un algoritmo?', answer: 'Un conjunto de pasos ordenados para resolver un problema.' },
    { question: '¿Qué significa CPU?', answer: 'Unidad Central de Procesamiento.' },
    { question: '¿Qué es una base de datos?', answer: 'Un sistema para almacenar y organizar información.', image: '/img/db.png' }
  ],
  fisica: [
    { question: '¿Quién formuló la Ley de la Gravitación Universal?', answer: 'Isaac Newton' },
    { question: '¿Velocidad = ?', answer: 'Distancia / Tiempo', image: '/img/velocidad.png' },
    { question: '¿Unidad de fuerza?', answer: 'Newton (N)' }
  ]
}

const category = route.params.category as string
const categoryTitle = computed(() => category.charAt(0).toUpperCase() + category.slice(1))

const cards = cardsByCategory[category] || []
const currentIndex = ref(0)
const currentCard = ref(cards[currentIndex.value])
const showAnswer = ref(false)

function toggleAnswer() {
  showAnswer.value = !showAnswer.value
}

function nextCard() {
  currentIndex.value = (currentIndex.value + 1) % cards.length
  currentCard.value = cards[currentIndex.value]
  showAnswer.value = false
}
</script>
