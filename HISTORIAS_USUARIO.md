# Historias de Usuario
**Proyecto:** HealthyHabits
**Versión:** 1.0
**Fecha:** 08/09/2025

---

| ID   | Como (rol)   | Quiero (objetivo)                | Para (beneficio)                   | Prioridad | RF/RNF relacionados |
|------|--------------|----------------------------------|------------------------------------|-----------|----------------------|
| HU-01 | Usuario      | registrarme en la app            | acceder a mis hábitos              | Alta      | RF-01 |
| HU-02 | Usuario      | registrar rutinas de ejercicio   | monitorear mi progreso físico      | Alta      | RF-02 |
| HU-03 | Usuario      | configurar recordatorios de agua | mantenerme hidratado               | Alta      | RF-03 |
| HU-04 | Usuario      | registrar mis horas de sueño     | mejorar mi descanso                | Media     | RF-04 |
| HU-05 | Usuario      | planificar mis sesiones de estudio | organizar mi tiempo académico    | Media     | RF-05 |
| HU-06 | Usuario      | ver gráficas de progreso         | motivarme con mis avances          | Alta      | RF-06 |

---

## Criterios de aceptación (formato Gherkin)

### Funcionalidad: Recordatorios de agua
**Escenario:** Notificación de hidratación
```
Dado que configuro recordatorios cada 2 horas
Cuando pasan 2 horas desde el último aviso
Entonces recibo una notificación para beber agua
```

### Funcionalidad: Registro de sueño
**Escenario:** Registro válido de horas de descanso
```
Dado que ingreso hora de inicio 23:00 y hora de fin 07:00
Cuando guardo el registro
Entonces el sistema calcula 8 horas dormidas
Y las agrega a mis estadísticas
```
