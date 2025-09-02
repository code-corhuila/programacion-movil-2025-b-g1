# Fundamentacion y planificación de proyectos móviles

## Nativa vs Hibrida
|Nativa|Hibrida|
|------|-------|
|Se desarrolla especificamente para una plataforma (iOS/Android) usando sus lenguajes de programacion y herramientas; Ofreciendo mejor rendimiento y accseso completo a sus funciones del dispositivo (camara, gps, etc..).|Se construye usando tecnologias web(HTML,CSS,JavaScript) y luego se empaquetan ppara funcionar en multiples plataformas; Son mas rapidasy economicas de desarrollar.|

*Offline-first:* Un enfoque de diseño que asume que la conexion a internet del usuario no es constante. La app esta diseñada para funcionar sin conexion, guardando datos localmente y sincronizandose con el servidor cuando la conexion se restablezca

*Privacidad por diseño:* Un enfoque que incorpora la privacidad y la proteccion de datos desde las primeras etapas del diseño y desarrollo de una aplicacion, siendo una parte fundamental de la arquitectura.

## ⏳ Hitos Relevates en la Evolución
  - *Tiendas de Apps(2008):* Creacion de *App Store* de apple y *Google Play Store* de Android revoluciona la distribucin; Facilitando el descubrimiento de apps y dando a los desarrolladores un control sobre el ciclo de actualizaciones.
  - *Boom Social(2010-2015):* Enfoque en la retencion de usuarios. Exitos en redes sociales como Facebook, Twitter e Instagram impulsó el uso de *notificaciones push*. La analitica de producto se vuelve crucial para entender el comportamiento del usuario.
  - *Madurez de Sensores/IA(2016/2020):* Los moviles se vuelven mas potentes. La integracion de la *IA*, la *realidad aumentada(AR)* y *biometria* se hizo comun. Permitidiendo mas experiencias como filtros, desbloqueo por reconocimiento y asistencia de voz.
  - *Multiplataforma Robusta(2021-hoy):* Las herramientas hibridas o multiplataformas han madurado consideradamente. Frameworks como Flutter de google y react native de facebook han alcanzado una calidad que permite crear aplicaciones con un rendimiento y una experiencia de usuario cercana a las aplicaciones nativas

## Tendencias que Afectan a tu Proyecto
  
  - *Experiencias Inteligentes:* Uso de IA para ofrecer funcionalidades mas rapidas y personalizadas (analisis y sugerencias), reduce la latencia, omite la necesidad de enviar datos al servidor y mejora la privacidad
  - *Privaciad por Diseño: Proteger los datos se ha convertido en prioridad. Las apps deben solicitar permisos granulares (acceder a fotos, contactos ...), ademas de eliminar informacion cuando no es necesaria y almacenar de forma cifrada en el dispositivo.
  - *Performance Consistente:* Se establecen objeticos claros de rendimiento, como un tiempo de carga (cold start) de menos de 2 segundos, y una tasa de "cero fallos". Monitorwo  continuo es esencial para identificar y solucionar problemas de forma proactiva.

### 🤖 Android:
Se destaca por su cobertura global y su vasto ecosistema de librerias. Sin embargo, su mayor reto es el *Hardware heterogeneo *(la gran variedad de dispositivos y fabricantes)* que provoca fragmentacion (la gran variedad de dispositivos que ejecutan el mismo sistema operativo) manifestandose en:
 - versiones del sistema operativo, lo que obliga a los desarrolladores a garantizar que su aplicacion  funcione en multiples versiones.
 - Hardware diverso, una aplicacion que se ve bien en un telefono gama alta puede no funcionar igual en uno gama baja.
 - capas de paerzonalizacion, lo que puede alterar el comportamiento del sistema y la compatibilidad.

### 🍎 iOS
Distinguido por un *hardware mas homogeneo*, lo que simplifica las pruebas y asegura una experiencia de usuario consistente; Sumado al estricto control de calidad de apple, eleva el estandar de las aplicaciones. Su desarrollo se hace con *Swift* y *SwiftUI*.

## Criterios de Decision
|Publico Objetivo|Acceso a Hardware|Time-to-Market|Politicas de Publicidad|Costos y Mantenimiento|
|-|-|-|-|-|
|¿Donde estan tus usuarios?|¿Tu aplicacion necesita utilizar sensores avanzados? Un desarrollo nativo es mejor opcion|¿Necestitas rapidez? El desarrollo hibrido es mejor opcion|Reglas sobre *pagos, privacidad y contenido|¿Cual es tu presupuesto para equipos separados (iOS/Android) o un solo equipo (codigo comun)|

### antipatrones: 
Son errores comunes que se deben evitar:
  1. Ignorar la fragmentacion de Android.
  2. Ignorar los requisitos de iOs.

## Trade-offs
La eleccion del tipo de app es una decision critica que implica una serie de compromisos entre rendimiento, costos y funcionalidad

### Aplicaciones Nativas
|Caracteristicas|Descripcion|
|---------------|-----------|
|Lenguajes|Swift/Objective-C (iOS), Kotoline/Java(Android)|
|Rendimiento|Alto rendimiento, acceseso completo y directo al hadware|
|Acceso a APIs|Acceso a todas las funcionalidades del dispositivo|
|Costos y mantenimiento|Mas alto, requiere dos bases de codigo y a menudo dos equipos de desarrollo|
|Expereciancia de Usuario|Optima,Interfaz fluida e integrada con la plataforma|
|Distribucion|App Store(iOS) y Google Play Store(Android)|

### Aplicaciones Hibridas/Multiplataforma
|Característica|Descripción|
|-|-|
|Lenguajes|Dart (Flutter), JavaScript/TypeScript (React Native).|
|Rendimiento|Bueno a muy bueno. Puede ser inferior al nativo en tareas intensivas.|
|Acceso a APIs|Limitado, pero expandible a través de "puentes" o "plugins" nativos.|
|Costos y Mantenimiento|Más bajo. Un solo código base reduce el tiempo y el costo de desarrollo.|
|Experiencia de Usuario|Casi nativa. Muy similar, aunque puede tener pequeñas inconsistencias.|
|Distribución|App Store (iOS) y Google Play Store (Android).|

### Web Apps/PWAs
|Característica|Descripción|
|-|-|
|Lenguajes|HTML, CSS, JavaScript.|
|Rendimiento|Variable. Depende del navegador y la optimización del sitio web.|
|Acceso a APIs|Limitado. Acceso restringido a APIs del navegador (geolocalización, cámara, etc.).|
|Costos y Mantenimiento|Más bajo. Un único código base web y despliegue instantáneo en el servidor.|
|Experiencia de Usuario|Buena. Depende de la calidad del diseño web adaptable.|
|Distribución|Vía URL (enlace web). No se distribuye en tiendas de aplicaciones.|

# Arquitectura
# Mockup
# Backlog
# MVP