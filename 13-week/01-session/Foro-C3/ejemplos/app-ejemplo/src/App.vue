<template>
  <div id="app">
    <header class="app-header">
      <h1>🎯 Balance App</h1>
      <p>Diseño vs Rendimiento en la práctica</p>
    </header>

    <main class="app-main">
      <!-- Demostración de diseño vs rendimiento -->
      <section class="demo-section">
        <h2>⚖️ Control de Complejidad Visual</h2>
        
        <div class="slider-container">
          <label for="complexity">Nivel de diseño:</label>
          <input 
            id="complexity"
            v-model="complexityLevel" 
            type="range" 
            min="1" 
            max="3"
            class="slider"
          >
          <div class="slider-labels">
            <span>Mínimo</span>
            <span>Balance</span>
            <span>Máximo</span>
          </div>
        </div>

        <!-- Componente que cambia según complejidad -->
        <div class="demo-component" :class="`level-${complexityLevel}`">
          <h3>{{ getTitle }}</h3>
          <p>{{ getDescription }}</p>
          
          <div class="performance">
            <span>⚡ Rendimiento: {{ getPerformance }}</span>
            <div class="performance-bar">
              <div class="performance-fill" :style="{ width: getPerformanceWidth }"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Demostración de accesibilidad -->
      <section class="accessibility-section">
        <h2>♿ Principios de Accesibilidad</h2>
        
        <div class="accessibility-grid">
          <div class="card">
            <h3>👁️ Perceptibilidad</h3>
            <div class="contrast-demo">
              <div class="good">Texto con buen contraste</div>
              <div class="bad">Texto con mal contraste</div>
            </div>
          </div>

          <div class="card">
            <h3>🖐️ Operabilidad</h3>
            <button class="btn" @click="showMessage">
              Botón accesible
            </button>
            <p class="hint">Prueba con teclado (Tab + Enter)</p>
          </div>

          <div class="card">
            <h3>🧠 Comprensibilidad</h3>
            <p><strong>Claro:</strong> "Guardar cambios"</p>
            <p class="unclear"><strong>Confuso:</strong> "Ejecutar persistencia de estado modificado"</p>
          </div>
        </div>
      </section>

      <!-- Feedback como Duolingo -->
      <section class="feedback-section">
        <h2>💡 Feedback Inmediato</h2>
        <div class="feedback-buttons">
          <button 
            v-for="action in actions" 
            :key="action.id"
            class="feedback-btn"
            @click="showFeedback(action)"
          >
            {{ action.label }}
          </button>
        </div>
        
        <div v-if="currentFeedback" class="feedback-message">
          {{ currentFeedback }}
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const complexityLevel = ref(2)
const currentFeedback = ref('')

const getTitle = computed(() => {
  const titles = ['Enfoque Rendimiento', 'Balance Ideal', 'Enfoque Diseño']
  return titles[complexityLevel.value - 1]
})

const getDescription = computed(() => {
  const desc = [
    'Mínimos efectos visuales → Mejor rendimiento',
    'Diseño atractivo + Rendimiento óptimo', 
    'Máximos efectos → Posible impacto rendimiento'
  ]
  return desc[complexityLevel.value - 1]
})

const getPerformance = computed(() => {
  const values = ['Excelente', 'Bueno', 'Aceptable']
  return values[complexityLevel.value - 1]
})

const getPerformanceWidth = computed(() => {
  const widths = ['95%', '80%', '65%']
  return widths[complexityLevel.value - 1]
})

const actions = [
  { id: 1, label: '👍 Fácil de usar' },
  { id: 2, label: '🎨 Diseño agradable' },
  { id: 3, label: '⚡ Muy rápida' }
]

const showMessage = () => {
  currentFeedback.value = '✅ Botón accesible funcionando correctamente'
  setTimeout(() => { currentFeedback.value = '' }, 2000)
}

const showFeedback = (action: any) => {
  const messages = [
    '¡La usabilidad es esencial para una buena experiencia!',
    'El diseño visual mejora la experiencia cuando está optimizado',
    'El rendimiento rápido es clave para la retención de usuarios'
  ]
  currentFeedback.value = messages[action.id - 1]
  setTimeout(() => { currentFeedback.value = '' }, 3000)
}
</script>

<style>
/* Reset y base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
  line-height: 1.6;
  color: #333;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  background: white;
}

/* Header */
.app-header {
  background: linear-gradient(135deg, #2C5AA0, #1e3c72);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

.app-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.app-header p {
  opacity: 0.9;
}

/* Main content */
.app-main {
  padding: 2rem 1rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  color: #2C5AA0;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
}

/* Slider */
.slider-container {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border: 1px solid #e0e0e0;
}

.slider {
  width: 100%;
  margin: 1rem 0;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

/* Demo component */
.demo-component {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 4px solid #2C5AA0;
  transition: all 0.3s ease;
}

.demo-component.level-1 {
  border-left-color: #4CAF50;
  background: #f8fff8;
}

.demo-component.level-3 {
  border-left-color: #FF9800;
  background: #fffbf0;
}

.demo-component h3 {
  color: #2C5AA0;
  margin-bottom: 0.5rem;
}

.performance {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.performance-bar {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.performance-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #2C5AA0);
  transition: width 0.3s ease;
}

/* Accessibility */
.accessibility-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
}

.card h3 {
  color: #2C5AA0;
  margin-bottom: 1rem;
}

.contrast-demo > div {
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 6px;
  font-weight: 500;
}

.good {
  background: #2C5AA0;
  color: white;
}

.bad {
  background: #cccccc;
  color: #eeeeee;
}

.btn {
  background: #2C5AA0;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;
}

.btn:hover {
  background: #1e4a8a;
}

.hint {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
  text-align: center;
}

.unclear {
  color: #666;
  font-style: italic;
}

/* Feedback */
.feedback-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.feedback-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #2C5AA0;
  background: white;
  color: #2C5AA0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.feedback-btn:hover {
  background: #2C5AA0;
  color: white;
}

.feedback-message {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #4caf50;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 1.5rem;
  }
  
  .app-main {
    padding: 1rem;
  }
  
  .accessibility-grid {
    grid-template-columns: 1fr;
  }
  
  .feedback-buttons {
    flex-direction: column;
  }
  
  .feedback-btn {
    width: 100%;
  }
}
</style>