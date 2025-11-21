# Taller – API REST Gestión de Usuarios 👥

## 📌 Descripción
Este taller implementa una **API REST básica** para la gestión de usuarios, desarrollada en **Node.js con Express**.  
El objetivo es aplicar los principios de arquitectura cliente-servidor, manejo de rutas HTTP y pruebas con Postman.  

La API permite realizar operaciones CRUD:  
- Crear usuario (POST)  
- Listar usuarios (GET)  
- Consultar usuario por ID (GET)  
- Actualizar usuario (PUT)  
- Eliminar usuario (DELETE)  

---

## 📂 Estructura del proyecto
01-session/
│── api-usuarios/ # Código fuente de la API
│ ├── app.js
│ ├── package.json
│ ├── controllers/
│ │ └── usuarios.controller.js
│ ├── routes/
│ │ └── usuarios.routes.js
│ └── models/
│ └── usuario.model.js
│
│── docs/ # Documentación y evidencias
│ ├── Taller_API.docx
│ ├── Evidencias_Postman.pdf
│ └── Informe_reflexivo.docx
│
└── README.md

---

## 🔗
### 1. Crear Usuario
- **POST** → `/api/usuarios` 
- **Body JSON:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
2. Listar Usuarios

GET → /api/usuarios

3. Obtener Usuario por ID

GET → /api/usuarios/:id

4. Actualizar Usuario

PUT → /api/usuarios/:id

Body JSON:{
  "nombre": "Juan Actualizado"
}

5. Eliminar Usuario

DELETE → /api/usuarios/:id

🛠️ Tlogías usadas

Node.js

Express

Postman (para pruebas)

