# Casos de Uso
**Proyecto:** HealthyHabits
**Versión:** 1.0
**Fecha:** 08/09/2025

---

## UC-01: Registrar rutina de ejercicio
- **Actor primario:** Usuario
- **Precondiciones:** Usuario registrado e iniciado sesión.
- **Postcondiciones (éxito):** Rutina almacenada en historial.
- **Flujo principal:**
  1. Usuario selecciona “Ejercicio”.
  2. Ingresa datos de actividad (tipo, duración, calorías).
  3. El sistema guarda la rutina en la base de datos.
- **Extensiones:**
  - 2a) Datos incompletos → mostrar mensaje de error.
- **Reglas de negocio:** Duración > 5 minutos, calorías ≥ 10.
- **RF/RNF relacionados:** RF-02, RNF-01.

---

## UC-02: Configurar recordatorio de agua
- **Actor primario:** Usuario
- **Precondiciones:** Usuario registrado e iniciado sesión.
- **Postcondiciones (éxito):** Notificaciones activas según frecuencia definida.
- **Flujo principal:**
  1. Usuario selecciona “Agua”.
  2. Configura frecuencia de recordatorios.
  3. El sistema activa notificaciones automáticas.
- **Extensiones:**
  - 2a) Intervalo inválido (< 15 minutos) → mostrar advertencia.
- **Reglas de negocio:** Mínimo 1 notificación cada 2 horas.
- **RF/RNF relacionados:** RF-03, RNF-05.