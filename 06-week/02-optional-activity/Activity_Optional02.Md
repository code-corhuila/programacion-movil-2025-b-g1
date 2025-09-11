# App Nexo

## 1. Comprender el manifiesto ágil
---

### Los 4 valores ágiles que se van a utilizar en Nexo

1. **Primero individuos e interacciones sobre procesos y herramientas**  
   En el desarrollo de la aplicación, va a ser siempre más importante la comunicación entre nosotros los desarrolladores y los usuarios (emprendedores, compradores y administradores), que depender únicamente de herramientas.  
   *Ejemplo:* lo que nosotros vamos a realizar serán entrevistas rápidas con emprendedores para validar los campos del registro antes de complicarnos con integraciones.

2. **Software funcionando sobre documentación extensiva**  
   Este es otro de los valores importantes y que también voy a aplicar. En lugar de gastar semanas en documentación, mostraré una versión funcional mediante un **prototipo navegable en Figma** (por ejemplo, el flujo de registro e inicio de sesión).  
   *Ejemplo:* en lugar de solo documentar HU01 (registro de usuario), entregar un **MVP navegable en Figma** donde ya se pueda simular el registro con validación de correo institucional.

3. **Colaboración con el cliente sobre negociación de contratos**  
   Los usuarios son los estudiantes y emprendedores de Corhuila. Lo importante siempre será escucharlos y adaptar la app a sus necesidades más que cumplir con lo establecido desde un principio.  
   *Ejemplo:* si al probar HU12 (contactar por WhatsApp) los usuarios piden también correo electrónico, se hace un ajuste de la funcionalidad sin problema.

4. **Responder ante el cambio sobre seguir un plan**  
   Si nos damos cuenta de que los compradores valoran más las promociones (HU15) que las reseñas (HU13), se cambia la prioridad del backlog para darle una mejor experiencia al usuario.  
   *Ejemplo:* reorganizar sprints en el tablero Jira para incluir las promociones antes, ya que aportan mayor valor para los usuarios.

---

### Ejemplos de principios ágiles aplicados

1. **Principio 1: Prioridad en la satisfacción del cliente mediante entregas tempranas y continuas de valor.**  
   *Aplicación:* en esta parte entregaremos un avance en el Sprint 1 con (registro, login y recuperación de contraseña) lo antes posible, para que los usuarios ya puedan probar la app y se hagan pruebas de usuario para retroalimentar el desarrollo.

2. **Principio 3: Entregar software funcional con frecuencia, en semanas más que en meses.**  
   *Aplicación:* en cada sprint lo que haremos será liberar funcionalidades claves para seguir avanzando con el siguiente.  
   *Ejemplo:* en Sprint 2 se libera HU09 (lista de emprendedores), en Sprint 3 HU06 (publicar productos) y así seguiremos avanzando.

3. **Principio 12: Reflexionar regularmente sobre cómo mejorar y ajustar.**  
   *Aplicación:* al terminar el Sprint 4, si los usuarios tienen problemas encontrando productos, priorizaremos la HU08 (categorías) en el siguiente sprint para mejorar la experiencia del usuario.

---

## 2. Configurar un marco Scrum para el proyecto

### Roles en nuestro equipo

- **Product Owner (PO):** A mí me corresponde este rol en conjunto con mi compañera, ya que nos encargamos de priorizar el backlog, definir qué funcionalidades tienen más valor para los usuarios y mantener la visión del producto.  
- **Scrum Master (SM):** Este rol sí me corresponde a mí, ya que ayudo a que trabajemos con la metodología Scrum, organizando las reuniones y apoyando a resolver impedimentos.  
- **Development Team (DT):** Los dos hacemos este rol, ya que ambos trabajaremos en el desarrollo de la app; programamos, diseñamos y probamos las funcionalidades.  

---

### 2.1 Product Backlog

| HU   | Usuario                 | Quiero (Objetivo)                                | Para (Beneficio)                                     | Prioridad | RF/RFN relacionados |
|------|-------------------------|--------------------------------------------------|------------------------------------------------------|-----------|----------------------|
| HU01 | Emprendedor o comprador | Registrarme con correo institucional y contraseña | Acceder a la app y que el sistema valide mi cuenta   | Alta      | RF1, RNF1 |
| HU02 | Usuario                 | Iniciar sesión con correo electrónico y rol       | Habilitar funcionalidades según mi rol               | Alta      | RF5, RNF1 |
| HU03 | Emprendedor             | Recuperar mi contraseña                           | Acceder en caso de olvidarla                         | Media     | RF6, RF1 |
| HU04 | Administrador           | Gestionar categorías de empresas                  | Permitir que los emprendedores creen su empresa organizada | Alta | RF7, RNF2 |
| HU05 | Emprendedor             | Crear mi empresa dentro de una categoría          | Ofrecer mis productos o servicios                    | Alta      | RF8, RNF3 |
| HU06 | Emprendedor o negocio   | Publicar productos o servicios                    | Atraer más clientes                                  | Alta      | RF9, RF16 |
| HU07 | Emprendedor o negocio   | Editar o eliminar publicaciones                   | Mantener mis productos actualizados                  | Alta      | RF10, RNF4 |
| HU08 | Comprador               | Ver lista de emprendedores                        | Elegir un emprendedor para explorar sus productos    | Alta      | RF11, RNF5 |

---

### 2.2 Criterios de aceptación (Gherkin)

#### HU01 – Registro de usuario
Funcionalidad: Registro de usuario  

**Escenario: Registro exitoso con correo institucional**  
- **Dado que** estoy en la pantalla de registro  
- **Y** completo los campos: correo institucional, teléfono, nombre, contraseña y selecciono rol  
- **Cuando** envío el formulario  
- **Entonces** el sistema valida el correo con dominio `@corhuila.edu.co`  
- **Y** envía un token de verificación al correo  
- **Y** mi cuenta queda en estado *pendiente*  

**Escenario: Activación de cuenta mediante token**  
- **Dado que** recibí el token en mi correo  
- **Cuando** ingreso el token en la app  
- **Entonces** mi cuenta cambia a estado *activo*  
- **Y** puedo iniciar sesión normalmente  

---

#### HU02 – Inicio de sesión
Funcionalidad: Login  

**Escenario: Inicio de sesión exitoso**  
- **Dado que** estoy en la pantalla de inicio de sesión  
- **Y** ingreso un correo y contraseña válidos  
- **Cuando** presiono *Iniciar sesión*  
- **Entonces** puedo acceder a mi perfil y funcionalidades según mi rol  

**Escenario: Inicio de sesión con credenciales incorrectas**  
- **Dado que** ingreso correo o contraseña incorrectos  
- **Cuando** intento iniciar sesión  
- **Entonces** la app muestra un mensaje de error  
- **Y** no permite el acceso  

---

#### HU03 – Recuperación de contraseña
Funcionalidad: Recuperación de contraseña  

**Escenario: Solicitar restablecimiento de contraseña**  
- **Dado que** olvidé mi contraseña  
- **Cuando** solicito recuperar contraseña ingresando mi correo institucional  
- **Entonces** recibo un enlace o token en el correo para restablecerla  

---

#### HU04 – Organización de categorías (admin)
Funcionalidad: Gestionar categorías de empresas  

**Escenario: Crear categoría para empresas**  
- **Dado que** soy administrador  
- **Cuando** creo una nueva categoría con nombre válido  
- **Entonces** la categoría se agrega al sistema  
- **Y** queda disponible para asignar a futuras empresas o emprendedores  

**Escenario: Editar o eliminar categoría**  
- **Dado que** soy administrador y selecciono una categoría existente  
- **Cuando** modifico su nombre o elimino la categoría  
- **Entonces** los cambios se reflejan en el sistema  
- **Y** las empresas asociadas se ajustan según la acción  

---

## 3. Diseñar un tablero Kanban

### Link de vista de Jira
Para acceder, profe, tiene que aceptarme la solicitud que le envié al correo de Corhuila, para que lo pueda ver, ya que por la versión gratuita no me deja colocarlo público. 

https://app-nexo.atlassian.net/jira/software/projects/APPNEXO1/boards/1/backlog?atlOrigin=eyJpIjoiYTdlYzIyMDVkYTQ3NGQ1NGFhODQwNmVhNzQzODVjNDQiLCJwIjoiaiJ9 

[Diagrama Nexo en Jira](./App-Nexo_Jira.png)

---

## 4. Comparativa Ágil vs Tradicional

| Aspecto                      | Enfoque Tradicional (Cascada)                                   | Enfoque Ágil (Scrum/XP)                                               |
|------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------------|
| **Planificación**            | Todo el proyecto se planifica al inicio con requisitos fijos.   | La planificación es iterativa e incremental, ajustándose a cambios.   |
| **Flexibilidad ante cambios**| Difícil incorporar cambios una vez iniciado el desarrollo.      | Alta adaptabilidad, se priorizan los cambios según valor al cliente.  |
| **Entrega de funcionalidades**| Entrega única al final del proyecto.                          | Entregas frecuentes en sprints de 1-4 semanas.                        |
| **Participación del cliente**| El cliente participa al inicio y al final, con poca retroalimentación. | El cliente participa constantemente en revisiones y retroalimentación. |
| **Tiempo de lanzamiento**    | El producto puede tardar meses en estar disponible.             | Se lanza una versión funcional temprana (MVP) y se mejora con iteraciones. |
| **Gestión de riesgos**       | Riesgos detectados tarde, cuando el proyecto está muy avanzado. | Riesgos gestionados temprano, se corrigen en cada iteración.          |

---

### Enfoque más beneficioso para el proyecto

Para el desarrollo de nuestra **aplicación móvil llamada Nexo que es de emprendedores y compradores en Corhuila**, el enfoque **Ágil** nos resulta más beneficioso porque:  

- Nos permite **entregas rápidas** de funcionalidades como el registro, login o publicación de productos.  
- Facilita **ajustar los requisitos** a medida que recibimos retroalimentación de los usuarios (emprendedores y compradores).  
- Incrementa la **participación del cliente**, asegurando que la app responda a necesidades reales.  
- Ayuda a **gestionar mejor los riesgos** como fallos de usabilidad o problemas de integración en móviles.  

---

## 5. Plan de aplicación ágil en el proyecto

Para el desarrollo de nuestra aplicación implementaremos Scrum como marco ágil principal, complementado con tableros Kanban para visualizar el flujo de trabajo. El proyecto se organizará en sprints de una y dos semanas en los que seleccionaremos las historias de usuario prioritarias del Product Backlog y las trasladaremos al Sprint Backlog. Al finalizar cada sprint realizaremos una revisión con los interesados para presentar los avances y recibir retroalimentación, seguida de una retrospectiva con el equipo para analizar fortalezas, debilidades y oportunidades de mejora. El progreso se controlará mediante un tablero Kanban digital que sera Jira, donde las tareas estarán organizadas en columnas de *Por hacer*, *En curso* y *Listo*, permitiendonos mantener una visión clara y actualizada del avance del proyecto.




