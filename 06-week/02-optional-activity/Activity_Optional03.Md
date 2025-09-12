# Actividad práctica — Tema 3: Requerimientos y casos de uso

---

## 1. Identificación de requerimientos

### Requisitos Funcionales (RF)

- RF-01: La aplicación permitirá registrar usuarios con correo institucional, teléfono, nombre usuario o empresa, contraseña y rol (empresario o comprador).    
- RF-02: La aplicación validará que el correo pertenezca al dominio @corhuila.edu.co.  
- RF-03: La aplicación enviará un token de verificación al correo registrado para activar la cuenta.  
- RF-04: La aplicación permitirá la recuperación de contraseña mediante enlace o token enviado al correo.  
- RF-05: La aplicación permitirá iniciar sesión con correo, contraseña registrados y rol.  
- RF-06: El administrador podrá gestionar categorías de empresas en la plataforma.  
- RF-07: El emprendedor podrá crear publicaciones con título, descripción, precio, foto y categoría.  
- RF-08: El comprador podrá visualizar un catálogo de emprendedores y sus productos/servicios.  

### Requisitos No Funcionales (RNF)

- RNF-01: El tiempo de arranque de la aplicación en dispositivos de gama media no debe superar los 3 segundos (p95).  
- RNF-02: El tiempo de respuesta para mostrar el catálogo de productos/servicios no debe superar los 800 ms en condiciones de red 4G o WiFi estable.  
- RNF-03: El tiempo de carga de imágenes almacenadas en AWS S3 no debe superar los 1.5 segundos (p95) por recurso individual.  
- RNF-04: El flujo de registro y autenticación (incluyendo verificación de token por correo) debe completarse en un máximo de 5 segundos.  
- RNF-05: La aplicación debe garantizar una disponibilidad del 99.5% mensual, minimizando caídas o interrupciones en el servicio.  

___

## 2. Levantamiento de requerimientos

Para conocer mejor las necesidades de los emprendedores y compradores de CORHUILA, decidimos usar dos técnicas: **observación** y **entrevista**. Estas nos permiten entender no solo lo que las personas dicen, sino también lo que hacen en su día a día.

### 2.1 Observación
La idea es recorrer los espacios más comunes de la universidad, como cafeterías, pasillos y zonas de descanso, donde normalmente los estudiantes ofrecen sus productos.  
De esta manera podremos ver de primera mano cómo se da la interacción entre emprendedores y compradores: cómo promocionan lo que venden, cómo organizan la información y qué dificultades tienen para darse a conocer.  

Por ejemplo, se observará si los compradores encuentran fácilmente lo que buscan, si existe desorganización en la oferta o si la comunicación depende solo de WhatsApp o redes sociales externas. Esta mirada directa ayudará a detectar oportunidades que la aplicación puede solucionar, como la visibilidad de productos o una mejor forma de clasificarlos.

### 2.2 Entrevista
Las entrevistas serán con dos grupos: estudiantes emprendedores y estudiantes compradores. Con esto buscamos escuchar sus experiencias de forma más cercana, conocer qué esperan de una aplicación y qué problemas les gustaría resolver.  

**Ejemplos de preguntas para emprendedores:**  
- ¿Cómo promocionas hoy en día tus productos dentro de la universidad?  
- ¿Qué obstáculos enfrentas para dar a conocer lo que vendes?  
- Si tuvieras una aplicación hecha a tu medida, ¿qué es lo primero que le pedirías?  
- ¿Cómo prefieres mantener el contacto con tus clientes?  

**Ejemplos de preguntas para compradores:**  
- Cuando quieres comprar algo en la universidad, ¿qué tan fácil te resulta encontrarlo?  
- ¿Qué información mínima necesitas antes de decidirte por un producto (precio, fotos, reseñas)?  
- ¿Prefieres contactar al emprendedor desde la app mediante un botón que te redirija a WhatsApp, o solo visualizar la información del producto?  
- ¿Qué tanto influye la opinión de otros estudiantes a la hora de comprar?  

---

Con estas dos técnicas buscamos no solo recolectar información, sino también ponernos en el lugar de quienes usarán la aplicación. Observar su realidad y escuchar sus opiniones nos será un punto clave para que el sistema responda realmente a sus necesidades.

## 3. Creación de Casos de Uso

A continuación, se definen tres casos de uso principales de la aplicación.

---

### Caso de Uso 1: Registrar Usuario

**Actor principal:** Estudiante (emprendedor o comprador)  

**Flujo principal:**
1. El usuario abre la aplicación y selecciona "Registrarse".  
2. Ingresa su correo institucional, teléfono, nombre usuario o empresa, contraseña y rol (empresario o comprador).  
3. El sistema valida que el correo pertenezca al dominio `@corhuila.edu.co`.  
4. El sistema envía un token de verificación al correo registrado.  
5. El usuario ingresa el token recibido para activar la cuenta.  
6. El sistema confirma la activación y el usuario puede iniciar sesión.

**Flujos alternos:**
- **Correo inválido:** Si el correo no pertenece al dominio, el sistema muestra un mensaje de error y solicita uno válido.  
- **Token incorrecto o expirado:** Se ofrece la opción de reenviar el token.  

---

### Caso de Uso 2: Publicar Producto/Servicio

**Actor principal:** Estudiante emprendedor  
**Actor secundario:** Administrador (solo para categorías)  

**Flujo principal:**
1. El emprendedor inicia sesión.  
2. Selecciona "Crear publicación".  
3. Ingresa título, descripción, precio, categoría y carga fotos.  
4. El sistema valida los campos y la categoría seleccionada.  
5. El sistema almacena la publicación y la hace visible en el catálogo.  

**Flujos alternos:**
- **Campos incompletos:** El sistema muestra un mensaje indicando los campos que faltan.  

---

### Caso de Uso 3: Visualizar categorías y empresas con sus Productos/Servicios

**Actor principal:** Estudiante comprador  
**Actor secundario:** Emprendedor (para contacto)  

**Flujo principal:**
1. El comprador inicia sesión en la app.  
2. Accede a alguna de las categorías de productos/servicios.  
3. Filtra por empresas y busca una empresa en específico.  
4. Selecciona un producto para ver detalles: foto, descripción, precio y si tiene promoción aparece promoción.  
5. Opcional: Contacta al emprendedor mediante botón de WhatsApp (según preferencia).  

**Flujos alternos:**
- **Producto sin contacto directo:** Si el emprendedor no ha habilitado el contacto por WhatsApp, el sistema solo muestra información del producto y un mensaje indicando “Contacto no disponible”.  
- **Producto con información incompleta:** Si falta algún dato (precio, fotos o descripción), el sistema muestra un mensaje “Información incompleta” y destaca los datos disponibles.  
---

### Diagrama de Casos de Uso 1,2,3 (ASCII)

[Diagrama Nexo De Casos De Uso](./Caso_de_uso_activity_optional03.png)

---

## 4. Definición de Criterios de Aceptación y DoD

### 4.1 Criterios de Aceptación

### Caso de Uso 1: Registrar Usuario

**Criterios de aceptación:**
1. El usuario puede registrarse únicamente con un correo institucional que termine en `@corhuila.edu.co`.  
2. Al enviar el registro, el sistema envía automáticamente un token de verificación al correo registrado.  
3. El usuario puede activar su cuenta ingresando correctamente el token recibido.  
4. La operación de registro y verificación debe completarse en **menos de 5 segundos** en condiciones normales de red (4G o WiFi).  
5. Si el correo no es válido o el token es incorrecto, el sistema muestra mensajes claros de error.  

---

### Caso de Uso 2: Publicar Producto/Servicio

**Criterios de aceptación:**
1. El emprendedor puede crear publicaciones ingresando título, descripción, precio, categoría y fotos.  
2. El sistema valida que todos los campos obligatorios estén completos antes de permitir publicar.  
3. La publicación se almacena correctamente y se refleja en el catálogo visible para los compradores.  
4. La operación de creación de publicación no debe tardar más de **3 segundos**.  
5. Si la categoría seleccionada no existe, el sistema notifica al usuario y no permite publicar hasta corregirla.  

---

### 4.2 Definición de Terminado (DoD) del Equipo

Para que un caso de uso o una historia de usuario se considere **terminada**, se deben cumplir los siguientes aspectos:

**Calidad y funcionalidad:**
- Todos los criterios de aceptación definidos han sido cumplidos y validados.  
- La funcionalidad ha sido probada en **dispositivos de gama media** y funciona correctamente.  
- No hay errores críticos o bloqueantes.  

**Pruebas:**
- Se han realizado pruebas unitarias y de integración para las funciones involucradas.  
- Se han hecho pruebas de interfaz (UI) y experiencia de usuario básica.  
- Se documentan los resultados de pruebas en el repositorio de proyecto.  

**Estándares y documentación:**
- El código cumple con los estándares de estilo definidos por el equipo.  
- La documentación del caso de uso, criterios de aceptación y flujos alternos está actualizada.  
- Los cambios han sido revisados mediante **pull request** y aprobados por al alguno de nosotros dos.  

> Solo cuando todos estos aspectos se cumplan, se considera que la historia de usuario o caso de uso está **“terminada”**.

## 5. Priorización de Requerimientos (MoSCoW)

A continuación se presenta la priorización de los requerimientos funcionales y no funcionales utilizando la técnica **MoSCoW**:

| Categoría       | Requerimiento                                                                 |
|-----------------|-------------------------------------------------------------------------------|
| **Must have**   | RF-01: Registro de usuarios con correo institucional, teléfono, nombre usuario o empresa, contraseña y rol (empresario o comprador).             |
|                 | RF-02: Validación de correo con dominio `@corhuila.edu.co`.                  |
|                 | RF-03: Envío de token de verificación para activar la cuenta.                 |
|                 | RF-05: Inicio de sesión con correo, contraseña y rol.                         |
|                 | RF-07: El emprendedor puede crear publicaciones con título, descripción, precio, foto y categoría. |
|                 | RF-08: Visualización del catálogo de productos/servicios.                     |
|                 | RNF-01: Tiempo de arranque < 3 segundos (p95).                                |
|                 | RNF-02: Tiempo de respuesta para mostrar catálogo < 800 ms.                   |
|                 | RNF-05: Disponibilidad del 99.5% mensual.                                     |
| **Should have** | RF-04: Recuperación de contraseña mediante enlace o token enviado al correo.  |
|                 | RF-06: Administrador puede gestionar categorías de empresas.                  |
|                 | RNF-04: Flujo de registro y autenticación completado en máximo 5 segundos.    |
| **Could have**  | RNF-03: Tiempo de carga de imágenes de AWS S3 < 1.5 segundos (p95).          |
| **Won’t have**  | Cobro en la aplicación (no se implementará en esta versión).                  |
