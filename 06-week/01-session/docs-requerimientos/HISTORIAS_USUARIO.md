# Historias de Usuario (documentadas y trazables)

| HU    | Usuario                         | Quiero (objetivo)                                                                 | Para (beneficio)                                           | Prioridad | RF/RFN relacionados     |
|-------|----------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------|--------------------------|
| H0    | Usuario (emprendedor o comerciante) | Registrarme con correo institucional, contraseña                                  | Poder acceder a la app y que el sistema                     | Alta      | RF1, RNF1                |
| H2    | Usuario                         | Iniciar sesión con correo electrónico y rol                                       | Habilite funcionalidades según mi rol                       | Alta      | RF5, RNF1                |
| HU03  | Emprendedor                     | Recuperar mi contraseña                                                           | En caso de no poder acceder a mi cuenta                     | Alta      | RF6, RF1                 |
| HU04  | Emprendedor                     | Editar mi perfil (foto, descripción, contacto, nombre)                            | Mostrar más información relevante de mi empresa             | Media     | RF6, RF3                 |
| HU05  | Comprador                       | Publicar comentarios o reseñas con fotos, precios y descripción                   | Que los emprendedores vean mis productos                    | Media     | RF8, RN10                |
| HU06  | Comprador                       | Ver la calificación de los productos                                              | Mantener mi catálogo actualizado                            | Alta      | RF9, RN10                |
| HU07  | Administrador                   | Editar o eliminar publicaciones                                                   | Mantener el sitio actualizado                               | Alta      | RF9, RN10                |
| HU08  | Comprador                       | Encontrar productos organizados por categorías                                    | Que los compradores encuentren fácilmente los productos     | Alta      | RF10, RN4                |
| HU09  | Comprador                       | Ver listas de emprendedores disponibles                                           | Elegir un emprendedor para ver sus productos                | Alta      | RF14, RN11               |
| HU10  | Comprador                       | Conocer todos los emprendedores y ver todos sus productos                         | Que todos los emprendedores se den a conocer                | Alta      | RF12, RN6                |
| HU1   | Comprador                       | Ver detalle de un producto (foto, descripción, precio, contacto)                  | Decidir si me interesa comprar o contactar                  | Alta      | RF13, RF16               |
| HU2   | Comprador                       | Contactar al emprendedor vía WhatsApp                                             | Facilitar la comunicación con el emprendedor                | Alta      | RF14, RF16               |
| HU3   | Comprador                       | Dejar reseña en un producto                                                       | Dar feedback y ayudar a otros usuarios                      | Alta      | RF15, RN6                |
| HU4   | Emprendedor o negocios          | Ver detalles de contacto o reseña (opcional)                                      | Estar al tanto de la interacción con mis productos          | Media     | RF15, RN6                |
| HU5   | Emprendedor o negocios          | Publicar productos                                                                | Atraer más clientes                                         | Media     | RF13, RF16               |
| HU16  | Administrador                   | Revisar y moderar reportes de productos inapropiados                              | Mantener un espacio seguro en la app                        | Alta      | RF17, RNF9               |
| HU17  | Administrador                   | Suspender cuenta de empresarios que incumplan normas                              | Garantizar el buen uso de la app                            | Alta      | RF18, RNF9               |

## 2.2 Criterios de aceptación (Gherkin)

### HU01 – Registro de usuario (emprendedor o comprador)
Funcionalidad: Registro de usuario. 

Escenario: Registro exitoso con correo institucional
| Paso       | Acción                                                                 |
|------------|------------------------------------------------------------------------|
| Dado que   | estoy en la pantalla de registro                                       |
| Y          | completo los campos: correo institucional, teléfono, nombre, contraseña, y selecciono rol |
| Cuando     | envío el formulario                                                    |
| Entonces   | el sistema valida el correo con dominio @corhuila.edu.co              |
| Y          | envía un token de verificación al correo                              |
| Y          | mi cuenta queda en estado "pendiente"                                 |


Escenario: Activación de cuenta mediante token
| Paso       | Acción                                      |
|------------|---------------------------------------------|
| Dado que   | recibí el token en mi correo                |
| Cuando     | ingreso el token en la app                  |
| Entonces   | mi cuenta cambia a estado "activo"          |
| Y          | puedo iniciar sesión normalmente            |



### HU02 – Inicio de sesión
Funcionalidad: Login. 

Escenario: Inicio de sesión exitoso
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | estoy en la pantalla de inicio de sesión         |
| Y          | ingreso un correo y contraseña válidos           |
| Cuando     | presiono "Iniciar sesión"                        |
| Entonces   | puedo acceder a mi perfil y funcionalidades según mi rol |


Escenario: Inicio de sesión con credenciales incorrectas
| Paso       | Acción                                 |
|------------|----------------------------------------|
| Dado que   | ingreso correo o contraseña incorrectos|
| Cuando     | intento iniciar sesión                 |
| Entonces   | la app muestra un mensaje de error     |
| Y          | no permite el acceso                   |



### HU03 – Recuperación de contraseña
Funcionalidad: Recuperación de contraseña. 

Escenario: Solicitar restablecimiento de contraseña
| Paso       | Acción                                                                 |
|------------|------------------------------------------------------------------------|
| Dado que   | olvidé mi contraseña                                                    |
| Cuando     | solicito recuperar contraseña ingresando mi correo institucional       |
| Entonces   | recibo un enlace o token en el correo para restablecerla               |



### HU04 – Edición de perfil (emprendedor)
Funcionalidad: Editar perfil. 

Escenario: Modificar información permitida
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | estoy en la pantalla de edición de perfil        |
| Cuando     | cambio foto, descripción, contacto o nombre      |
| Y          | guardo los cambios                               |
| Entonces   | los cambios se reflejan en mi perfil             |



### HU05 – Edición de perfil (comprador)
Funcionalidad: Editar perfil básico. 

Escenario: Modificar información permitida
| Paso       | Acción                                 |
|------------|----------------------------------------|
| Dado que   | estoy en la pantalla de edición de perfil |
| Cuando     | cambio foto, nombre o descripción      |
| Y          | guardo los cambios                     |
| Entonces   | los cambios se reflejan en mi perfil   |



### HU06 – Publicación de productos o servicios
Funcionalidad: Publicar productos. 

Escenario: Crear producto exitosamente
| Paso       | Acción                                                           |
|------------|------------------------------------------------------------------|
| Dado que   | soy emprendedor y estoy en mi empresa                            |
| Cuando     | completo título, descripción, precio, foto y categoría           |
| Y          | guardo la publicación                                            |
| Entonces   | el producto se agrega al listado de mi empresa                   |
| Y          | aparece visible para los compradores                             |



### HU07 – Editar o eliminar publicaciones
Funcionalidad: Editar o eliminar producto. 

Escenario: Editar publicación
| Paso       | Acción                                               |
|------------|------------------------------------------------------|
| Dado que   | selecciono un producto existente                     |
| Cuando     | modifico la información permitida y guardo           |
| Entonces   | los cambios se reflejan en la publicación            |


Escenario: Eliminar publicación
| Paso       | Acción                                               |
|------------|------------------------------------------------------|
| Dado que   | selecciono un producto existente                     |
| Cuando     | presiono "Eliminar" y confirmo                       |
| Entonces   | la publicación se elimina del sistema                |



### HU08 – Organización de categorías (admin)
Funcionalidad: Gestionar categorías de empresas. 

Escenario: Crear categoría para empresas
| Paso       | Acción                                                       |
|------------|--------------------------------------------------------------|
| Dado que   | soy administrador                                            |
| Cuando     | creo una nueva categoría con nombre válido                   |
| Entonces   | la categoría se agrega al sistema                            |
| Y          | queda disponible para asignar a futuras empresas o emprendedores |


Escenario: Editar o eliminar categoría
| Paso       | Acción                                                       |
|------------|--------------------------------------------------------------|
| Dado que   | soy administrador y selecciono una categoría existente       |
| Cuando     | modifico su nombre o elimino la categoría                    |
| Entonces   | los cambios se reflejan en el sistema                        |
| Y          | las empresas asociadas se ajustan según la acción           |



### HU09 – Ver lista de emprendedores
Funcionalidad: Lista de emprendedores. 

Escenario: Acceso a lista de emprendedores
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | soy comprador                                    |
| Cuando     | ingreso a la sección de emprendedores            |
| Entonces   | veo la lista de todos los emprendedores registrados |



### HU10 – Ver productos de un emprendedor
Funcionalidad: Catálogo por emprendedor. 

Escenario: Acceso a productos de un emprendedor
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | selecciono un emprendedor de la lista            |
| Cuando     | ingreso a su perfil                              |
| Entonces   | veo todos los productos que ha publicado         |



### HU11 – Ver detalle de un producto
Funcionalidad: Detalle de producto. 

Escenario: Información completa del producto
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | selecciono un producto                           |
| Cuando     | ingreso a su detalle                             |
| Entonces   | veo foto, descripción, precio, y contacto del emprendedor |



### HU12 – Contactar emprendedor vía WhatsApp
Funcionalidad: Comunicación. 

Escenario: Redirección a WhatsApp
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | estoy viendo un producto                         |
| Cuando     | presiono "Contactar"                             |
| Entonces   | la app abre WhatsApp con el número del emprendedor |



### HU13 – Dejar reseña
Funcionalidad: Reseñas de productos. 

Escenario: Crear reseña
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | estoy en un producto                             |
| Cuando     | escribo comentario                               |
| Y          | envío la reseña                                  |
| Entonces   | la reseña se agrega al producto y es visible para el emprendedor y otros usuarios |



### HU14 – Notificaciones para emprendedor (opcional)
Funcionalidad: Notificaciones push. 

Escenario: Recibir notificación
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | un comprador deja una reseña o contacto          |
| Cuando     | ocurre la acción                                 |
| Entonces   | el emprendedor recibe una notificación en su dispositivo |



### HU15 – Publicar promociones
Funcionalidad: Promociones temporales. 

Escenario: Crear promoción
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | soy emprendedor y selecciono un producto         |
| Cuando     | agrego descripción, precio en oferta, fecha inicio y fin |
| Y          | guardo la promoción                              |
| Entonces   | la promoción se muestra vinculada al producto    |



### HU16 – Moderar reportes (admin)
Funcionalidad: Gestión de reportes. 

Escenario: Validar y eliminar contenido inapropiado
| Paso       | Acción                                           |
|------------|--------------------------------------------------|
| Dado que   | soy administrador y reviso un reporte            |
| Cuando     | confirmo que el contenido es inapropiado         |
| Entonces   | puedo eliminar la publicación o empresa según gravedad |



### HU17 – Gestión de usuarios (admin)
Funcionalidad: Administración de usuarios. 

Escenario: Suspender o eliminar usuario
| Paso     | Acción                                           |
|----------|--------------------------------------------------|
| Dado que | soy administrador                                |
| Cuando   | selecciono un usuario infractor y lo suspendemos/eliminamos |
| Entonces | el usuario pierde acceso a la app                |                                      |

---

**Fecha:** 8 de septiembre del 2025

**Versión:** #1 

**Responsable:** Harold Camilo Barrera Giraldo