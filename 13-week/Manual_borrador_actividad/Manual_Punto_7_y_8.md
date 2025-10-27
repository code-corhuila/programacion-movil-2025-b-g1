# Manual punto 7 y 8**

**Presentado por:**

Sebastian Puentes Gonzalez, Daniela Sanabria Mosquera,

Jesus David Bernal Gonzáles, César David Quintero Ramírez y

Danay Mariana Pereira Ospina


**Introducción**

El presente proyecto forma parte del desarrollo práctico de los temas
**7 y 8** del curso, los cuales están enfocados en la **construcción de
proyectos con componentes reutilizables** y la **implementación de un
CRUD funcional** con despliegue mediante pipelines.

El trabajo desarrollado consiste en el diseño y desarrollo de un sistema
denominado **Task-Móvil**, orientado a la **gestión de categorías y
productos**. Este sistema está conformado por un **frontend**
desarrollado en diferentes marcos de trabajo (Ionic con Vue, React y
Angular) y un **backend** implementado en **Java**, ambos comunicándose
a través de servicios REST.

El enfoque principal del proyecto es aplicar **buenas prácticas de
desarrollo, modularidad y automatización**, logrando una arquitectura
que facilite el mantenimiento, la escalabilidad y el despliegue continuo
(CI/CD).

### **Objetivo general**

Desarrollar un sistema de gestión de categorías y productos (CRUD) con
frontend y backend, aplicando el uso de **componentes reutilizables** y
**pipelines de despliegue automatizados**, con el fin de optimizar el
flujo de desarrollo y la integración de los diferentes entornos de
trabajo.

### **Objetivos específicos**

-   **Implementar componentes reutilizables**, especialmente botones
    genéricos para las acciones principales del sistema: **Agregar**,
    **Modificar**, **Eliminar** y **Consultar**, que puedan ser
    utilizados en diferentes pantallas y proyectos.

-   **Diseñar dos pantallas funcionales** que consuman los componentes
    reutilizables y permitan gestionar la información de manera dinámica
    (una para categorías y otra para productos).

-   **Configurar pipelines de despliegue** para el frontend y el
    backend, utilizando **GitHub Actions** y **Docker**, con el fin de
    automatizar las fases de construcción, pruebas y despliegue.

-   **Implementar un CRUD funcional** en React que permita la creación,
    consulta, actualización y eliminación de datos, estableciendo la
    conexión entre la aplicación frontend y el backend Java.

**Glosario**

En esta sección se presentan los principales términos técnicos
utilizados a lo largo del desarrollo del proyecto **Task-Móvil**, con el
fin de facilitar la comprensión de los conceptos aplicados en la
implementación del sistema.

-   **CRUD (Create, Read, Update, Delete):**\
    Conjunto de operaciones básicas que permiten la gestión de datos
    dentro de una aplicación. En este proyecto, el CRUD se implementó
    para crear, consultar, actualizar y eliminar registros de categorías
    y productos, tanto desde el frontend como desde el backend.

-   **Pipeline:**\
    Secuencia automatizada de procesos utilizada en el desarrollo de
    software para compilar, probar y desplegar aplicaciones. Los
    pipelines permiten aplicar la metodología **CI/CD (Integración
    Continua y Despliegue Continuo)**, asegurando que los cambios en el
    código se integren y distribuyan de manera eficiente y confiable.

-   **Componente reutilizable:**\
    Fragmento de código independiente y modular que puede emplearse en
    diferentes partes de una aplicación sin necesidad de volver a
    programarlo. En este proyecto se crearon componentes reutilizables
    para las acciones principales del sistema, como los botones de
    agregar, modificar, eliminar y consultar.

-   **Docker:**\
    Plataforma que permite empaquetar aplicaciones y sus dependencias
    dentro de contenedores, garantizando que se ejecuten de manera
    uniforme en cualquier entorno. En este proyecto se utilizó Docker
    para exponer los servicios del backend y el frontend mediante
    puertos específicos.

-   **Ionic:**\
    Framework de desarrollo que facilita la creación de aplicaciones
    móviles híbridas utilizando tecnologías web como HTML, CSS y
    JavaScript. En el proyecto, Ionic se combinó con los frameworks
    **React**, **Vue** y **Angular** para construir las interfaces de
    usuario del frontend.

-   **Backend:**\
    Parte lógica y funcional de la aplicación que se encarga de procesar
    la información, gestionar la base de datos y responder a las
    peticiones del cliente (frontend). En este proyecto, el backend se
    desarrolló con **Java (Spring Boot)**.

-   **Frontend:**\
    Parte visible e interactiva de la aplicación con la que el usuario
    final interactúa. En este caso, se construyeron interfaces con
    **Ionic React**, **Ionic Vue** e **Ionic Angular**.

-   **CI/CD (Integración Continua / Despliegue Continuo):**\
    Práctica de desarrollo que automatiza la integración de código y la
    entrega de aplicaciones, garantizando la detección temprana de
    errores y una entrega más rápida y estable del software.

## **Requerimientos y Herramientas**

En esta sección se describen las tecnologías, herramientas y
configuraciones utilizadas para el desarrollo e implementación del
proyecto **Task-Móvil**, tanto en el entorno de frontend como de
backend, así como los recursos empleados para la gestión del código y la
automatización de despliegues.

### Tecnologías utilizadas

-   **Backend:**\
    Desarrollado en **Java** utilizando el framework **Spring Boot**,
    que permite la creación de servicios REST de manera rápida y
    estructurada. Este componente se encarga de procesar la lógica del
    negocio, manejar las peticiones del cliente y gestionar los datos.

-   **Frontend:**\
    Construido con **Ionic Framework**, combinándolo con los tres
    principales frameworks web: **React**, **Vue** y **Angular**.\
    Cada uno de estos entornos permitió explorar diferentes enfoques
    para la creación de interfaces dinámicas y responsivas, haciendo uso
    de **componentes reutilizables** para mantener la coherencia visual
    y funcional de la aplicación.

-   **Herramientas adicionales:**

    -   **Docker:** para la creación de contenedores y la exposición de
        los servicios de backend y frontend en distintos puertos,
        garantizando la portabilidad y estandarización de los entornos.

    -   **Visual Studio Code (VS Code):** entorno de desarrollo
        principal utilizado para la codificación, configuración y
        control de versiones.

    -   **Node.js y NPM/Yarn:** utilizados para la gestión de
        dependencias, ejecución de scripts y construcción del frontend.

    -   **Git y GitHub:** para el control de versiones, trabajo
        colaborativo y alojamiento de los repositorios del proyecto.

    -   **GitHub Actions:** empleado para la implementación de
        **pipelines CI/CD**, que automatizan los procesos de
        compilación, prueba y despliegue.

### **Puertos y configuración Docker**

Con el fin de estandarizar el despliegue de los servicios y facilitar la
comunicación entre el frontend y el backend, se definieron los
siguientes puertos dentro de los contenedores Docker:

  ------------------------------------------------------------------------
  **Repositorio /      **Configuración   **Descripción**
  Servicio**           Docker**          
  -------------------- ----------------- ---------------------------------
  **task-movil-app**   8080:9000         Puerto asignado al frontend
                                         (aplicación móvil/web)

  **task-movil-api**   80:(4200, 3000,   Puertos asignados al backend
                       8080)             según el entorno de desarrollo
  ------------------------------------------------------------------------

De esta manera, la aplicación frontend se comunica con el backend a
través del puerto **8080**, garantizando la interoperabilidad entre los
servicios y el acceso mediante protocolo **HTTPS** cuando se despliega
en entornos virtualizados.

## **Organización del Proyecto**

El proyecto **Task-Móvil** fue desarrollado siguiendo una estructura
modular, que permite mantener una **separación clara de
responsabilidades** entre el **frontend** y el **backend**. Esta
organización facilita la **mantenibilidad**, la **escalabilidad** del
código y la **colaboración entre los integrantes del equipo**,
garantizando que cada parte del sistema pueda evolucionar de manera
independiente.

### Estructura del Backend

El backend, desarrollado en **Java con Spring Boot**, está organizado
siguiendo el patrón **MVC (Modelo - Vista - Controlador)**, lo que
permite una mejor distribución de las responsabilidades del código.

A continuación, se muestra la estructura general de carpetas del
proyecto backend:

![](imagenes/image1.png){width="4.863281933508311in"
height="7.700492125984252in"}

![](imagenes/image2.png){width="6.1375in" height="3.933333333333333in"}

**CRUD implementado**

![](imagenes/image3.png){width="6.1375in" height="5.45in"}

![](imagenes/image4.png){width="6.1375in" height="5.113888888888889in"}

**Descripción de las carpetas principales:**

-   **controller/** → Contiene las clases que manejan las solicitudes
    HTTP (endpoints del API).

-   **service/** → Incluye la lógica del negocio y la comunicación con
    los repositorios.

-   **repository/** → Define las interfaces para acceder a la base de
    datos.

-   **model/** → Contiene las clases que representan las entidades del
    sistema (por ejemplo, Categoría y Producto).

-   **resources/** → Almacena los archivos de configuración, como
    application.properties.

Esta organización permite mantener el código limpio, modular y fácil de
probar.

### Estructura del Frontend

El frontend fue desarrollado utilizando **Ionic Framework**, combinado
con **React**, **Vue** y **Angular**, con el objetivo de demostrar la
interoperabilidad del diseño y el uso de **componentes reutilizables**
en distintos entornos.

A continuación, se presenta la estructura general de carpetas de cada
implementación:

**Estructura de carpetas del frontend con React (Ionic React)**

![](imagenes/image5.png){width="3.3762478127734035in"
height="5.812239720034996in"}

**Estructura de carpetas del frontend con Vue (Ionic Vue)**

![](imagenes/image6.png){width="3.050670384951881in"
height="5.5594455380577426in"}
![](imagenes/image7.png){width="2.592050524934383in"
height="5.567665135608049in"}

**Estructura de carpetas del frontend con Angular (Ionic Angular)**

![](imagenes/image8.png){width="3.465971128608924in"
height="5.911924759405075in"}

**Descripción general de las carpetas comunes:**

-   **src/components/** → Contiene los componentes reutilizables, como
    los botones de acciones (Agregar, Modificar, Eliminar, Consultar) y
    un Layout base para las pantallas.

-   **src/pages/** → Incluye las pantallas principales del sistema (por
    ejemplo, Gestión de Categorías y Gestión de Productos).

-   **src/services/** → Define las funciones o clases que manejan la
    comunicación con el backend mediante peticiones HTTP.

-   **src/assets/** → Almacena imágenes, íconos y archivos estáticos.

### Justificación de la organización

La estructura adoptada sigue los principios de **modularidad** y
**separación de responsabilidades**, lo que permite:

-   Facilitar la **comprensión del código** por parte de diferentes
    desarrolladores.

-   **Reutilizar componentes** visuales y lógicos en distintas partes
    del proyecto.

-   **Aislar los errores** y simplificar las pruebas unitarias e
    integradas.

-   Permitir una **evolución independiente** de los módulos del sistema
    (frontend o backend) sin afectar la funcionalidad general.

## **Componentes Reutilizables**

### Explicación general

En el proyecto **Task-Móvil (Ionic React)**, se diseñó un sistema de
**componentes reutilizables** enfocado en la implementación de las
acciones principales del CRUD: **crear, consultar, editar y eliminar**
tanto categorías como productos.

El enfoque modular permitió desarrollar cada acción como un **componente
independiente**, lo que mejora la **legibilidad del código**, la
**reutilización** y la **mantenibilidad** del proyecto.

En este caso, el frontend desarrollado con **Ionic React** se diseñó
bajo el principio de **reutilización de componentes**, tanto a nivel de
interfaz (botones, formularios, layout base) como de lógica (interacción
con el backend y manejo de estados).

Posteriormente, estos componentes se integran en un componente principal
llamado **CrudButtons**, que actúa como un **contenedor dinámico**
encargado de mostrar u ocultar cada acción según la selección del
usuario.

El uso de este enfoque promueve buenas prácticas de desarrollo como

-   Reducción de la duplicación de código.

-   Facilidad para aplicar cambios o mejoras de diseño de forma global.

-   Mayor mantenibilidad y consistencia visual en toda la interfaz.

### Componentes creados

Los principales componentes desarrollados fueron:

  -------------------------------------------------------------------------------
  **Componente**          **Funcionalidad**   **Descripción**
  ----------------------- ------------------- -----------------------------------
  **CreateForm.tsx**      Crear               Permite registrar una nueva
                                              categoría o producto, mostrando
                                              formularios dinámicos según el
                                              tipo.

  **ListSection.tsx**     Consultar           Muestra todos los registros
                                              disponibles mediante una tabla o
                                              lista.

  **EditSection.tsx**     Modificar           Permite seleccionar y editar la
                                              información de un elemento
                                              existente.

  **DeleteSection.tsx**   Eliminar            Facilita la eliminación de
                                              registros con confirmación visual.

  **CrudButtons.tsx**     Contenedor          Centraliza los botones de acción y
                                              muestra el componente
                                              correspondiente según la acción
                                              seleccionada.
  -------------------------------------------------------------------------------

Cada componente fue diseñado para ser **independiente**, pero a la vez
**compatible** con el contenedor principal CrudButtons, que administra
la visibilidad y el flujo entre ellos.

**Componentes de botones reutilizables en la interfaz (Ionic React)**\
![](imagenes/image9.png){width="2.5694444444444446in"
height="2.2083333333333335in"}

![](imagenes/image10.png){width="2.8450962379702536in"
height="5.129377734033246in"}
![](imagenes/image11.png){width="2.8585444006999126in"
height="5.1737029746281715in"}

### **Ejemplo de código del componente (Ionic React)**

### Ejemplo: Componente "CreateForm"

El componente CreateForm permite registrar tanto **categorías** como
**productos**, adaptándose dinámicamente según el tipo recibido por
props (type: \"category\" \| \"product\").\
Su funcionamiento incluye:

-   Captura de datos mediante inputs controlados con useState.

-   Validación de campos y manejo de errores.

-   Conexión con el backend a través de los servicios categoriesService
    y productsService.

-   Notificaciones de éxito o error mediante IonToast.

📄 **Fragmento de código del componente CreateForm:**\
![](imagenes/image12.png){width="6.1375in" height="6.159027777777778in"}

![](imagenes/image13.png){width="6.1375in" height="6.941666666666666in"}

![](imagenes/image14.png){width="6.1375in" height="6.80625in"}

📷 **Figura 6. Vista del formulario en ejecución (Crear Categoría /
Crear Producto)**

![](imagenes/image15.png){width="6.1375in" height="3.6659722222222224in"}

![](imagenes/image16.png){width="6.1375in" height="3.664563648293963in"}

![](imagenes/image17.png){width="6.1375in" height="3.678472222222222in"}

![](imagenes/image18.png){width="6.1375in" height="3.6552187226596677in"}

### **Integración en las pantallas funcionales**

Los botones reutilizables creados en el componente CrudButtons se
integran directamente en las pantallas principales del sistema, las
cuales representan las entidades **Categorías** y **Productos**.

El componente CrudButtons centraliza todas las acciones del CRUD (Crear,
Consultar, Editar y Eliminar), mostrando los formularios o secciones
correspondientes según la acción seleccionada por el usuario. Este
enfoque permite mantener el código más limpio y ordenado, evitando la
repetición de lógica en cada pantalla.

Además, cada una de las pantallas está construida sobre el componente
**BaseLayout**, un diseño reutilizable que actúa como plantilla visual
de la aplicación. Este layout contiene la estructura principal del
dispositivo móvil (simulando el contorno del celular), un encabezado con
título y una barra de navegación inferior que permite alternar entre las
secciones de **Categorías** y **Productos** sin recargar la aplicación.

De esta manera, la integración combina funcionalidad (a través de los
botones CRUD) y consistencia visual (mediante el BaseLayout), logrando
un diseño modular y reutilizable.

📄 **Código 1. Ejemplo de integración en la pantalla de gestión de
categorías**

![](imagenes/image19.png){width="6.1375in" height="5.145833333333333in"}

![](imagenes/image10.png){width="2.8450962379702536in"
height="5.129377734033246in"}![](imagenes/image20.png){width="2.8959087926509186in"
height="5.158771872265967in"}

![](imagenes/image21.png){width="2.7053904199475065in"
height="4.944676290463692in"}
![](imagenes/image22.png){width="2.7066447944006997in"
height="4.941410761154856in"}

![](imagenes/image23.png){width="3.0645964566929136in"
height="5.5543657042869645in"}

### **Conexión entre Frontend y Backend**

La comunicación entre el **frontend desarrollado en Ionic React** y el
**backend construido con Spring Boot** se realizó mediante peticiones
**HTTP** gestionadas con la librería **Axios**.

Para mantener una estructura ordenada y reutilizable, se creó una
carpeta llamada services dentro del proyecto del frontend. En ella se
centralizaron todas las funciones de conexión con el backend, separadas
por entidad (categoriesService.ts y productsService.ts), además de un
archivo base (api.ts) que configura la instancia principal de Axios.

![](imagenes/image24.png){width="3.125in" height="1.2638888888888888in"}

📄 **Código 1. Configuración del cliente Axios**

![](imagenes/image25.png){width="6.1375in" height="3.79375in"}

A partir de esta configuración, cada entidad define sus propias
funciones CRUD utilizando la misma instancia de Axios, lo que permite
mantener el código más limpio y coherente.

📄 **Código 2. Ejemplo de servicios para Categorías**

![](imagenes/image26.png){width="6.1375in" height="1.7763888888888888in"}

📄 **Código 3. Ejemplo de servicios para Productos**

![](imagenes/image27.png){width="6.1375in" height="1.9868055555555555in"}

En el **backend**, para permitir que el frontend pueda comunicarse sin
restricciones de origen, se utilizó la anotación \@CrossOrigin. Esta
configuración habilita las peticiones desde los puertos usados por el
frontend (4200 y 8100), evitando errores de tipo *CORS Policy*.

📄 **Código 4. Configuración CORS en el controlador**

![](imagenes/image28.png){width="6.1375in" height="2.38125in"}

Gracias a esta configuración, la aplicación logra una conexión fluida
entre ambas capas, garantizando que las operaciones de creación,
consulta, edición y eliminación se reflejen correctamente desde la
interfaz hacia la base de datos a través del backend.

## 🚀 **Creación y ejecución del proyecto**

### **🔧** Backend (Java - Spring Boot)

Para crear el backend del proyecto se utilizó **Spring Boot**, un
framework que permite desarrollar aplicaciones Java de forma rápida y
estructurada.\
Los pasos realizados fueron los siguientes:

1.  Ingresar a la página oficial de <https://start.spring.io/>

2.  Configurar el proyecto con las siguientes opciones:

    -   Project: **Maven Project**

    -   Language: **Java**

    -   Spring Boot: versión estable más reciente

    -   Packaging: **Jar**

    -   Java: **17 o superior**

3.  Agregar las dependencias necesarias:

    -   **Spring Web**

    -   **Spring Data JPA**

    -   **MySQL Driver**

    -   **Spring Boot DevTools** (opcional)

4.  Descargar el proyecto en formato .zip, descomprimirlo y abrirlo con
    **VS Code** o **IntelliJ IDEA**.

5.  Ejecutar el backend con el siguiente comando (desde la raíz del
    proyecto):

mvn spring-boot:run

O directamente desde el archivo principal de la aplicación
(Application.java) haciendo clic en **Run**.

📂 *Repositorio del Backend:*\
<https://github.com/MarianaPereira04/task-movil-api>

### 💻 Frontend con Ionic React

Para el desarrollo del frontend con **Ionic React**, se utilizó el CLI
oficial de Ionic, que facilita la creación de aplicaciones móviles y web
con React.

Pasos realizados:

\# Instalar el CLI de Ionic (si no se tiene)

npm install -g \@ionic/cli

\# Crear el proyecto con React

ionic start frontend-react blank \--type=react

\# Entrar en el directorio del proyecto

cd frontend-react

\# Ejecutar la aplicación

ionic serve

📂 *Repositorio del Frontend Ionic React:*\
<https://github.com/MarianaPereira04/task-movil-app-react>

### 🌐 Frontend con Ionic Vue

En el caso de **Ionic Vue**, el proceso es muy similar, solo cambia el
tipo de proyecto.

\# Crear el proyecto con Vue

ionic start frontend-vue blank \--type=vue

\# Entrar en el proyecto

cd frontend-vue

\# Ejecutar la aplicación

ionic serve

📂 *Repositorio del Frontend Ionic Vue:*\
<https://github.com/Nagi-Ayanokoji/task-movil-app-vue/tree/master>

### 🅰️ Frontend con Ionic Angular

Para la versión desarrollada con **Ionic Angular**, también se empleó el
CLI de Ionic:

\# Crear el proyecto con Angular

ionic start frontend-angular blank \--type=angular

\# Entrar en el proyecto

cd frontend-angular

\# Ejecutar la aplicación

ionic serve

📂 *Repositorio del Frontend Ionic Angular:*\
<https://github.com/MarianaPereira04/task-movil-app-angular>
