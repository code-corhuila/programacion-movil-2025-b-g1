# Especificación de Requerimientos de Software (SRS)
**Proyecto:** HealthyHabits (App de gestión de hábitos saludables)
**Versión:** 1.0
**Fecha:** 08/09/2025
**Responsable:** Equipo de Desarrollo

---

## 1. Introducción
### 1.1 Propósito
Este documento SRS describe los requerimientos de la aplicación **HealthyHabits**, cuyo objetivo es brindar a los usuarios una herramienta digital para organizar, monitorear y mejorar rutinas de ejercicio, hidratación, sueño y estudio.

### 1.2 Alcance
La aplicación permitirá:
- Registrar y hacer seguimiento de rutinas de **ejercicio**.
- Configurar recordatorios y registrar consumo de **agua**.
- Controlar y analizar patrones de **sueño**.
- Planificar sesiones de **estudio** y aplicar técnicas de concentración.
- Recibir **notificaciones inteligentes** y visualizar **gráficas de progreso**.
- Sincronización opcional con **wearables** (smartwatch, pulseras de actividad).

No incluye:
- Diagnóstico médico.
- Venta de productos o servicios de salud.

### 1.3 Definiciones
- **RF**: Requisito Funcional.
- **RNF**: Requisito No Funcional.
- **Wearables**: dispositivos inteligentes portátiles como relojes o pulseras.

### 1.4 Referencias
- IEEE 830 – Software Requirements Specification.
- OMS: Recomendaciones de hábitos saludables.
- Documentación Android/iOS para apps de salud.

### 1.5 Visión general
Este documento presenta introducción, descripción general, requerimientos funcionales/no funcionales, y anexos relacionados.

---

## 2. Descripción general
### 2.1 Perspectiva del producto
Aplicación móvil híbrida/nativa con backend en la nube y base de datos centralizada. Puede integrarse opcionalmente con APIs de wearables.  

### 2.2 Funciones del producto
- Registro e inicio de sesión de usuarios.
- Gestión de rutinas en los cuatro pilares (ejercicio, agua, sueño, estudio).
- Recordatorios automáticos configurables.
- Visualización de gráficos de progreso y estadísticas.
- Sincronización con wearables.

### 2.3 Características de los usuarios
- **Usuarios generales**: jóvenes y adultos interesados en mejorar hábitos.
- **Usuarios con wearables**: perfil más avanzado, buscan sincronización automática.

### 2.4 Restricciones
- Disponible en Android 10+ y iOS 14+.
- Cumplimiento de normativas de privacidad y protección de datos de salud.

### 2.5 Supuestos y dependencias
- El usuario dispone de conexión a internet para sincronizar datos.
- Los wearables dependen de APIs de terceros (ej. Google Fit, Apple Health).

---

## 3. Requerimientos específicos
### 3.1 Interfaces externas
- **API**: `/api/habits/{user_id}` para registro y consulta de hábitos.
- **UI**: Pantallas adaptadas con notificaciones push.

### 3.2 Requisitos funcionales
| ID     | Descripción | Prioridad | Criterio de aceptación |
|--------|-------------|-----------|-------------------------|
| RF-01  | El sistema permitirá registrar usuarios con correo y contraseña. | Alta | Al ingresar email válido y contraseña ≥8 caracteres, se crea la cuenta. |
| RF-02  | El usuario podrá registrar y consultar rutinas de ejercicio. | Alta | Se registran minutos, calorías y actividades; se guardan en su historial. |
| RF-03  | El usuario podrá configurar recordatorios de hidratación y registrar consumo de agua. | Alta | Se activa una notificación según la frecuencia definida y se suma el consumo diario. |
| RF-04  | El usuario podrá registrar horas de sueño y recibir sugerencias para mejorarlas. | Media | Se almacenan horas dormidas y se muestra un análisis básico. |
| RF-05  | El usuario podrá planificar sesiones de estudio con cronómetro integrado. | Media | Se guarda duración de la sesión y se asocia a estadísticas de concentración. |
| RF-06  | El sistema mostrará gráficas de progreso para cada pilar (ejercicio, agua, sueño, estudio). | Alta | Se generan gráficos semanales/mensuales. |

### 3.3 Requisitos no funcionales
- **RNF-01 (Rendimiento):** El tiempo de respuesta de carga de gráficos será ≤ 2 s.
- **RNF-02 (Seguridad):** Toda la información se almacenará cifrada en base de datos.
- **RNF-03 (Accesibilidad):** Compatibilidad con lectores de pantalla y tamaños ajustables.
- **RNF-04 (Disponibilidad):** El backend tendrá un uptime ≥ 99%.
- **RNF-05 (Motivación):** El sistema incluirá notificaciones y recompensas digitales.
- **RNF-06 (Portabilidad):** Compatibilidad con Android, iOS y sincronización con wearables.

### 3.4 Lógica de datos
- **Tabla USERS**: id, email, password_hash, edad, género.
- **Tabla HABITS**: id, user_id, tipo (ejercicio/agua/sueño/estudio), valor, fecha.
- **Tabla REWARDS**: id, user_id, puntos, medallas.

---

## 4. Apéndices
- Mockups iniciales (pantallas de cada pilar).
- DER simplificado con entidades principales.
