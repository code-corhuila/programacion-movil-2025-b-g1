# Apuntes de Clase – Manejo de Ramas en Programación Móvil

---

## Estructura de ramas en el proyecto

### **`main`**
- Versión final y estable del proyecto.
- Solo se fusionan cambios que pasaron revisión en `qa`.

### **`develop`**
- Rama de integración de avances antes de pruebas.
- Recibe contenido desde `activity` y `project`.

### **`activity`**
- Función en clase: rama especial para almacenar lo que vemos semana a semana en las clases teóricas/prácticas.
- Dentro de esta rama se crean carpetas:
week1/
week2/
week3/
hasta la
week16/
- Dentro de estas se crean carpetas numeradas con nombre descriptivo:
01-session/
02-optional-activity/
#### Cada carpeta contiene:
- Apuntes de la semana (**Word**, archivo de texto, **MD**).
- Códigos que se escriban en la clase.
- Archivos de esa clase.
- Recursos adicionales (Archivos, datos, etc.).

Todos los cambios de las semanas/sesiones van quedando en el historial de la rama.

### **`project`**
- Rama para el desarrollo del proyecto principal del curso.

### **`qa`**
- Rama de pruebas para validar que lo integrado en `develop` funciona correctamente antes de subirlo a `main`.

---

## También aprendimos algunos comandos de GitHub

# ejemplo:
# Ver las ramas que tengo locales
git branch
# La rama actual aparece con *.

# Para cambiar de rama
git switch y el nombre de la rama

# Crear una nueva rama
git branch y el nombre de la rama

# Para crear y cambiarse de una vez a la nueva rama directamente bajando también los archivos que habían en esa rama a mi carpeta local
git switch -c y el nombre de la rama

# Para subir algo a GitHub
git push origin y el nombre de la rama cabe aclarar que para subir algo en esa rama tengo que estar primero seguro de que estoy posicionado en esa rama

## El link del github donde toca hacer el fork
https://github.com/code-corhuila/programacion-movil-2025-b-g1.git




