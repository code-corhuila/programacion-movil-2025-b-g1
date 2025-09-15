# App Nexo — Requerimientos y Casos de Uso

---

## 1. Identificación de Requerimientos

### Requerimientos Funcionales (RF)

* **RF-01:** La aplicación deberá permitir que los usuarios se registren ingresando correo institucional, número de teléfono, nombre (personal o de empresa), contraseña y rol (emprendedor o comprador).
* **RF-02:** El sistema validará que el correo usado para registrarse pertenezca al dominio `@corhuila.edu.co`.
* **RF-03:** Al completar el registro, la app enviará un token de verificación al correo ingresado para confirmar la cuenta.
* **RF-04:** Los usuarios podrán restablecer su contraseña mediante un enlace o token recibido en su correo.
* **RF-05:** Los usuarios podrán iniciar sesión con sus credenciales registradas y rol asignado.
* **RF-06:** El administrador tendrá la capacidad de crear, editar o eliminar categorías de empresas dentro de la plataforma.
* **RF-07:** Los emprendedores podrán generar publicaciones con información detallada: título, descripción, precio, imagen y categoría.
* **RF-08:** Los compradores tendrán acceso a un catálogo donde podrán explorar emprendedores y sus productos o servicios.

### Requerimientos No Funcionales (RNF)

* **RNF-01:** La app debe iniciar en menos de **3 segundos** en dispositivos de gama media (percentil 95).
* **RNF-02:** La carga del catálogo de productos/servicios no debe superar los **800 ms** en condiciones de red 4G o WiFi estable.
* **RNF-03:** La carga de imágenes desde AWS S3 no debe demorar más de **1.5 segundos** por recurso (p95).
* **RNF-04:** El proceso completo de registro y autenticación, incluida la verificación del token, debe ejecutarse en menos de **5 segundos**.
* **RNF-05:** La aplicación garantizará una **disponibilidad mínima del 99.5% mensual**, evitando interrupciones prolongadas del servicio.

---

## 2. Técnicas de levantamiento de requerimientos

Para recolectar información realista sobre las necesidades de los usuarios, se seleccionaron dos técnicas: **observación** y **entrevista**.

### 2.1 Observación

Se aplicará observación directa en los espacios de la universidad (cafeterías, pasillos, zonas comunes) donde normalmente los estudiantes venden productos. El objetivo es ver cómo se da la interacción entre compradores y emprendedores: cómo promocionan lo que venden, cómo gestionan la información y qué dificultades encuentran para ofrecer sus productos.

Ejemplo de hallazgos esperados:

* Los compradores pueden tener problemas para localizar lo que buscan.
* La oferta suele estar dispersa y desorganizada.
* La mayoría de contactos se hace vía WhatsApp o redes externas, lo que dificulta centralizar la comunicación.

### 2.2 Entrevista

Se realizarán entrevistas cortas a dos grupos principales: **emprendedores** y **compradores**. Esto permitirá comprender mejor sus expectativas y problemas.

**Preguntas para emprendedores:**

* ¿De qué manera promocionas actualmente tus productos en la universidad?
* ¿Qué obstáculos enfrentas al dar a conocer lo que vendes?
* Si tuvieras una aplicación, ¿qué funcionalidad sería indispensable para ti?
* ¿Qué canal prefieres para comunicarte con tus clientes?

**Preguntas para compradores:**

* ¿Qué tan sencillo es para ti encontrar productos o servicios en la universidad?
* ¿Qué información necesitas antes de decidir una compra (precio, fotos, reseñas)?
* ¿Preferirías contactar al vendedor desde la app por WhatsApp o solo ver la información del producto?
* ¿Qué tanto influyen las recomendaciones de otros estudiantes en tu decisión de compra?

---

## 3. Casos de Uso

### Caso de Uso 1: Registro de Usuario

**Actor principal:** Estudiante (emprendedor o comprador)

**Flujo principal:**

1. El usuario selecciona la opción *Registrarse*.
2. Ingresa correo institucional, nombre, teléfono, rol y contraseña.
3. El sistema valida el dominio del correo (`@corhuila.edu.co`).
4. La app envía un token de verificación al correo.
5. El usuario introduce el token recibido.
6. El sistema confirma la activación de la cuenta.

**Flujos alternos:**

* **Correo inválido:** Se muestra un mensaje de error y se solicita un correo válido.
* **Token inválido/expirado:** El usuario podrá solicitar reenvío del token.

---

### Caso de Uso 2: Publicar Producto o Servicio

**Actor principal:** Estudiante emprendedor
**Actor secundario:** Administrador (para categorías)

**Flujo principal:**

1. El emprendedor inicia sesión.
2. Selecciona *Nueva publicación*.
3. Completa título, descripción, precio, categoría y adjunta fotos.
4. El sistema valida la información ingresada.
5. La publicación queda almacenada y visible en el catálogo.

**Flujos alternos:**

* **Campos incompletos:** El sistema advierte al usuario y no permite guardar la publicación.

---

### Caso de Uso 3: Consultar Catálogo

**Actor principal:** Estudiante comprador
**Actor secundario:** Emprendedor (para contacto)

**Flujo principal:**

1. El comprador accede al catálogo desde la app.
2. Explora las categorías disponibles.
3. Selecciona una empresa o producto específico.
4. Visualiza detalles (foto, descripción, precio, promociones si existen).
5. Opcionalmente, contacta al emprendedor vía WhatsApp.

**Flujos alternos:**

* **Sin contacto habilitado:** Solo se muestra la información del producto.
* **Datos incompletos:** El sistema indica que falta información y muestra lo disponible.

---

## Diagrama de Casos de Uso

![Casos_de_Uso_UML](/06-week/02-optional-activity/Diagrama_casos_de_uso.png)

---

## 4. Criterios de aceptación y Definición de Terminado (DoD)

### Caso de Uso 1: Registro

* Solo se permite registro con correos `@corhuila.edu.co`.
* El sistema envía automáticamente un token de verificación.
* La cuenta se activa únicamente si el token es válido.
* Todo el proceso debe tardar máximo **5 segundos**.
* Si hay error (correo inválido o token incorrecto), se debe mostrar un mensaje claro.

### Caso de Uso 2: Publicar Producto

* Se debe permitir al emprendedor llenar título, descripción, precio, categoría y fotos.
* La publicación solo será válida si los campos obligatorios están completos.
* La publicación debe ser visible en el catálogo después de creada.
* El proceso no debe tardar más de **3 segundos**.
* Si la categoría no existe, el sistema notifica al usuario.

### Definición de Terminado (DoD)

Un caso de uso o historia se considerará terminado cuando:

* Cumple todos los criterios de aceptación.
* Se valida su funcionamiento en dispositivos de gama media.
* No existen errores críticos pendientes.
* Cuenta con pruebas unitarias, de integración y de interfaz documentadas.
* El código respeta los estándares definidos y pasó revisión por parte del equipo.
* La documentación está actualizada y los cambios fueron aprobados en revisión de código.

---

## 5. Priorización de Requerimientos – MoSCoW

| Categoría       | Requerimientos                                                                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Must have**   | RF-01 Registro de usuario, RF-02 Validación de correo, RF-03 Envío de token, RF-05 Inicio de sesión, RF-07 Publicaciones de productos, RF-08 Catálogo visible, RNF-01 Tiempo de arranque < 3s, RNF-02 Respuesta del catálogo < 800ms, RNF-05 Disponibilidad 99.5%. |
| **Should have** | RF-04 Recuperación de contraseña, RF-06 Gestión de categorías, RNF-04 Registro completo < 5s.                                                                                                                                                                      |
| **Could have**  | RNF-03 Carga de imágenes desde S3 < 1.5s.                                                                                                                                                                                                                          |
| **Won’t have**  | Funcionalidad de pagos dentro de la aplicación (no en esta versión).                                                                                                                                                                                               |

