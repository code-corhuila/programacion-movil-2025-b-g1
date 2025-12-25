# Backlog

---

### Épica 1: Registro y Autenticación de Usuarios

* *HU1.1:* Como emprendedor estudiantil quiero registrarme con mis datos básicos (correo universitario, teléfono, nombre de usuario o empresa, contraseña y rol —Estudiante o Empresarial—) para poder crear mi perfil en la aplicación.  
  - El sistema debe validar que el correo contenga el dominio **@corhuila.edu.co** (dato quemado en la aplicación).  
  - Si la validación es correcta, se envía un token de verificación al correo registrado.  
  - El usuario debe ingresar el token en la aplicación para activar su cuenta.   
* *HU1.2:* Como estudiante que va a ser comprador me registro de la misma manera que el emprendedor, la única diferencia es que cambia el rol por estudiante. 
* *HU1.3:* Como usuario quiero iniciar sesión con mi correo y contraseña para acceder a mi cuenta.
* *HU1.4:* Como usuario quiero recuperar mi contraseña para no perder acceso a la app.

Tareas:

* Implementar formulario de registro con campos: correo universitario, teléfono, nombre de usuario o empresa, contraseña y rol.  
* Validar que el correo contenga el dominio **@corhuila.edu.co** (dato quemado).  
* Configurar autenticación y verificación mediante token enviado al correo.  
* Implementar recuperación de contraseña vía correo electrónico.  

---

### Épica 2: Gestión de Perfil

* *HU2.1:* Como emprendedor quiero editar mi perfil para mostrar información relevante de mi negocio (foto, descripción, contacto).
* *HU2.2:* Como comprador quiero editar mi perfil básico (foto, nombre, descripción) para personalizar mi experiencia.

Tareas:

* Implementar pantalla de edición de perfil.
* Almacenamiento de imágenes (foto de perfil para los usuarios).

---

### Épica 3: Publicación de Productos y Servicios

* *HU3.1:* Como emprendedor quiero publicar productos/servicios con fotos, precio y descripción para que mis compañeros y el público los vean.
* *HU3.2:* Como administrador voy a organizar las publicaciones por categorías (alimentos, ropa, accesorios, servicios, etc.) para que los compradores lo encuentren fácilmente.
* *HU3.3:* Como emprendedor quiero editar o eliminar mis publicaciones para gestionar sus productos o servicios.

Tareas:

* Crear formulario de publicación.
* Subida de imágenes.
* Implementar categorías.
* Función de editar/eliminar publicación.

---

### Épica 4: Catálogo y Búsqueda

* *HU4.1:* Como comprador quiero navegar en un catálogo de productos y servicios para explorar opciones disponibles.  
* *HU4.2:* Como comprador quiero acceder a una categoría (ej. Comidas, Tennis, Relojes) y ver el listado de productos disponibles dentro de ella, mostrando el nombre de cada emprendimiento (ej. "Salchipapas Daniela", "Hamburguesas Leandro").

Tareas:

* Implementar vista principal del catálogo.  
* Crear botones de categorías (Comidas, Tennis, Relojes).  
* Diseñar la vista/listado de cada categoría con los nombres de emprendimientos.  

---

### Épica 5: Interacción y Comunicación

* *HU5.1:* Como comprador quiero contactar al emprendedor dentro de la app (botón redirección a WhatsApp) para coordinar la compra.
* *HU5.2:* Como comprador quiero dejar reseñas sobre los productos y servicios de la empresa.
* *HU5.3:* Como emprendedor quiero recibir notificaciones cuando alguien me contacte o deje reseñas en mis publicaciones (opcional).

Tareas:

* Implementar integración con WhatsApp.
* Sistema de reseñas con comentarios.
* Notificaciones push (opcional).

---

### Épica 6: Promociones y Notificaciones

* *HU6.1:* Como emprendedor quiero publicar promociones temporales para atraer más clientes.

Tareas:

* Crear módulo de promociones.

---

### Épica 7: Administración y Seguridad

* *HU7.1:* Como administrador quiero moderar empresas inapropiadas para mantener un espacio seguro.
* *HU7.2:* Como administrador quiero gestionar usuarios y reportes para garantizar el buen uso de la app.

Tareas:

* Revisión de reportes y el porqué; si son válidos se hace uso del botón de eliminación del emprendimiento.

---

📍 *Opcional a futuro (para escalar la app):*

* Sistema de pagos integrado (ej: Nequi, Bancolombia, PayPal).
* Estadísticas para emprendedores (ventas, clics, reseñas).
* Integración con redes sociales.