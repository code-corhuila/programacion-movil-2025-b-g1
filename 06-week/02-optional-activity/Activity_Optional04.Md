# Actividad práctica — Tema 4: Diseño de base de datos y mockups

---

## 1. Modelado de datos

Para que la aplicación funcione correctamente, necesitamos organizar la información en **entidades** (como tablas en una base de datos) y definir cómo se relacionan entre sí.  
La idea es que cada entidad represente algo real: usuarios, empresas, productos, etc., y que las relaciones reflejen cómo interactúan en la vida diaria.  
Además, incluimos **tablas de auditoría** para guardar un historial de cambios importantes.

---

### **Usuario**
El **usuario** es el centro del sistema. Puede ser **emprendedor**, **comprador** o **administrador**.  
Guarda los datos principales para iniciar sesión y usar la app.

**Atributos clave:** correo, contraseña, rol, estado de la cuenta.  

**Relaciones:**  
- Cada usuario tiene **un perfil** (1:1).  
- Si es emprendedor, puede tener **una empresa** (1:N).  
- Si es comprador, puede dejar varias **reseñas** sobre productos (1:N).  

---

### **Perfil**
El **perfil** es como la “cara visible” del usuario: incluye foto, descripción y datos de contacto.  
Esto permite que los demás lo conozcan mejor.

**Relación:** cada usuario tiene un único perfil (1:1).  

---

### **Empresa**
Cuando un estudiante decide emprender, crea una **empresa** dentro de la app.  
Ahí describe su negocio, muestra una foto, datos de contacto y en qué categoría encaja.

**Relaciones:**  
- Una empresa pertenece a **un emprendedor** (1:1 con Usuario).  
- Se clasifica en **una categoría** (N:1).  
- Puede tener varios **productos** (1:N).  

---

### **Producto**
Es el corazón del sistema, lo que los emprendedores venden.  
Cada producto tiene título, descripción, precio e imagen.

**Relaciones:**  
- Un producto pertenece a una **empresa** (N:1).  
- También está dentro de una **categoría** (N:1).  
- Puede recibir varias **reseñas** (1:N).  
- Puede tener una o más **promociones** activas (1:N).  

---

### **Categoría**
Las categorías ayudan a organizar mejor el catálogo.  
Por ejemplo: comidas, accesorios, servicios, tecnología.  

**Relaciones:**  
- Una categoría puede tener muchas **empresas** (1:N).  
- También puede tener muchos **productos** (1:N).  

---

### **Reseña**
Los compradores pueden dejar su opinión sobre un producto que hayan adquirido.  
Esto les da confianza a otros estudiantes y retroalimentación a los emprendedores.  

**Relaciones:**  
- Una reseña la escribe un **usuario comprador** (N:1).  
- Siempre se relaciona con **un producto** específico (N:1).  

---

### **Promoción**
Sirve para manejar descuentos y ofertas especiales.  
Por ejemplo: “10% de descuento hasta el viernes” o “Combo 2x1”.

**Relación:** cada promoción pertenece a **un producto** (N:1).  

---

### **Tablas de Auditoría**
Para mantener un historial de cambios importantes en la base de datos, se crean tablas de auditoría.  
Cada vez que se inserte, actualice o elimine un registro, se guarda en la tabla correspondiente.

#### **Auditoría_Usuario**
- Id_auditoria (PK)  
- Id_usuario (FK → Usuario)  
- Acción (INSERT, UPDATE, DELETE)  
- Datos_previos  
- Datos_nuevos  
- Fecha_hora  
- Usuario_responsable  

#### **Auditoría_Empresa**
- Id_auditoria (PK)  
- Id_empresa (FK → Empresa)  
- Acción  
- Datos_previos  
- Datos_nuevos  
- Fecha_hora  
- Usuario_responsable  

#### **Auditoría_Producto**
- Id_auditoria (PK)  
- Id_producto (FK → Producto)  
- Acción  
- Datos_previos  
- Datos_nuevos  
- Fecha_hora  
- Usuario_responsable  

#### **Auditoría_Reseña**
- Id_auditoria (PK)  
- Id_reseña (FK → Reseña)  
- Acción  
- Datos_previos  
- Datos_nuevos  
- Fecha_hora  
- Usuario_responsable  

#### **Auditoría_Promoción**
- Id_auditoria (PK)  
- Id_promoción (FK → Promoción)  
- Acción  
- Datos_previos  
- Datos_nuevos  
- Fecha_hora  
- Usuario_responsable  

---

## Resumen de relaciones
- **Usuario – Perfil:** 1:1 (cada usuario tiene su propio perfil).  
- **Usuario – Empresa:** 1:N (un emprendedor puede registrar su negocio).  
- **Usuario – Reseña:** 1:N (un comprador puede opinar sobre varios productos).  
- **Empresa – Producto:** 1:N (una empresa puede ofrecer varios productos).  
- **Producto – Reseña:** 1:N (un producto puede tener muchas opiniones).  
- **Producto – Promoción:** 1:N (un producto puede tener varias ofertas).  
- **Categoría – Empresa:** 1:N (una categoría puede agrupar muchas empresas).  
- **Categoría – Producto:** 1:N (una categoría puede contener muchos productos).  
- **Entidades – Auditoría:** 1:N (cada registro puede generar muchos movimientos de auditoría).  

---

Justificación: 
El modelo busca reflejar la vida universitaria de CORHUILA, donde estudiantes pueden ser compradores o emprendedores, tener sus empresas, mostrar productos, recibir reseñas y lanzar promociones.  
Las **tablas de auditoría** garantizan transparencia y trazabilidad, dejando un historial de cambios que ayuda a mejorar la seguridad y el control del sistema.  

---

## 2. Selección de Base de Datos

Para nuestra aplicación decidimos utilizar una **base de datos local en servidor**, específicamente **PostgreSQL** instalada en la máquina donde se ejecuta el backend.  

La elección se justifica por los siguientes puntos:

---

### Requerimientos de sincronización
Aunque la base de datos esté alojada de manera **local**, PostgreSQL permite que múltiples usuarios se conecten al servidor al mismo tiempo.  
Esto asegura que:  
- Los cambios (productos, reseñas, promociones) se gestionen de forma centralizada.  
- No exista duplicación ni pérdida de datos, ya que todos los clientes dependen de la misma instancia.  

---

### Acceso multiusuario
PostgreSQL está diseñado para manejar **conexiones concurrentes** con seguridad e integridad de datos.  
Esto es fundamental porque:  
- Emprendedores, compradores y administradores pueden interactuar simultáneamente.  
- Cada operación queda registrada en la base de datos centralizada (aunque esté en un servidor local).  

En comparación, soluciones embebidas como SQLite no serían suficientes, ya que están pensadas para un único usuario o aplicaciones sin concurrencia real.  

---

### Rendimiento y disponibilidad offline
- PostgreSQL ofrece **alto rendimiento** en consultas complejas (búsquedas por categoría, filtros, historial de reseñas, promociones activas).  
- Al estar en un servidor local, las consultas no dependen de internet externo, lo que mejora la **velocidad de respuesta** dentro de la red de trabajo.  
- Si la aplicación se usa desde varios dispositivos conectados a la misma red, podrán acceder sin problemas.  
- Para escenarios donde el usuario se quede totalmente sin conexión al servidor, se puede complementar con un **caché local ligero** (ej. SQLite en cliente) para mostrar datos temporales y sincronizar más tarde.  

---

En conclusión:  
- Usaremos **PostgreSQL en un servidor local** como base de datos principal, porque cumple con los requisitos de **multiusuario, rendimiento y control de sincronización**.  
- Como complemento, podría añadirse un mecanismo de **almacenamiento temporal en cliente** para mejorar la experiencia en caso de caídas de conexión.  

---

## 3. Creación de diagrama MER

[Modelado](./Modelado.png)

---

## 4. Diseño de mockups y prototipos

https://www.figma.com/proto/nbyajVF3jNafcHBNPk0RiM/Sin-t%C3%ADtulo?page-id=0%3A1&node-id=1-5&viewport=13%2C264%2C0.51&t=HGTF4lFt5HbqoS1D-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7%3A8

---

## 5. Integración entre diseño y backend

Para que el **frontend** y el **backend** se comuniquen de manera clara y consistente, definimos **contratos de datos** usando **JSON** como formato principal.  
Estos contratos especifican la **estructura de la información**, asegurando que ambos lados hablen el mismo “idioma”.

---

### Contratos de datos (JSON)

#### **Usuario**
{
  "id_usuario": 1,
  "correo": "ejemplo@correo.com",
  "nombre_usuario": "carlos123",
  "rol": "emprendedor",
  "estado": "activo",
  "created_at": "2025-09-12T10:30:00Z",
  "updated_at": "2025-09-12T11:00:00Z"
}

#### **Producto**
{
  "id_producto": 101,
  "empresa_id": 5,
  "categoria_id": 2,
  "titulo": "Hamburguesa artesanal",
  "descripcion": "Carne 100% de res, pan artesanal y vegetales frescos",
  "precio": 18000,
  "imagen_url": "https://misimagenes.com/hamburguesa.jpg",
  "created_at": "2025-09-12T10:45:00Z",
  "updated_at": "2025-09-12T11:10:00Z"
}

---

### Endpoints documentados

#### 1️. Registrar un nuevo producto
- **URL:** `/api/productos`  
- **Método:** `POST`  
- **Descripción:** Permite a un emprendedor crear un producto dentro de su empresa.  

**Parámetros de entrada (Body - JSON):**

{
  "empresa_id": 5,
  "categoria_id": 2,
  "titulo": "Hamburguesa artesanal",
  "descripcion": "Carne 100% de res, pan artesanal y vegetales frescos",
  "precio": 18000,
  "imagen_url": "https://misimagenes.com/hamburguesa.jpg"
}

**Respuesta de ejemplo (201 - Creado):**

{
  "success": true,
  "message": "Producto creado exitosamente",
  "producto": {
    "id_producto": 101,
    "empresa_id": 5,
    "categoria_id": 2,
    "titulo": "Hamburguesa artesanal",
    "descripcion": "Carne 100% de res, pan artesanal y vegetales frescos",
    "precio": 18000,
    "imagen_url": "https://misimagenes.com/hamburguesa.jpg",
    "created_at": "2025-09-12T10:45:00Z",
    "updated_at": "2025-09-12T10:45:00Z"
  }
}

---

#### 2️. Obtener productos por categoría
- **URL:** `/api/productos/categoria/:id_categoria`  
- **Método:** `GET`  
- **Descripción:** Lista todos los productos que pertenecen a una categoría específica.  

**Parámetros de entrada (URL):**
/api/productos/categoria/2

**Respuesta de ejemplo (200 - OK):**

{
  "success": true,
  "categoria_id": 2,
  "productos": [
    {
      "id_producto": 101,
      "empresa_id": 5,
      "titulo": "Hamburguesa artesanal",
      "precio": 18000,
      "imagen_url": "https://misimagenes.com/hamburguesa.jpg"
    },
    {
      "id_producto": 102,
      "empresa_id": 7,
      "titulo": "Pizza personal",
      "precio": 15000,
      "imagen_url": "https://misimagenes.com/pizza.jpg"
    }
  ]
}
