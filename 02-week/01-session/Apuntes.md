# 📌 Apuntes de Clase – Manejo de Ramas en Programación Móvil

---

## 🌳 Estructura de ramas

- **`main`** → Versión final y estable del proyecto (solo recibe cambios aprobados desde `qa`).
- **`qa`** → Rama de pruebas antes de pasar a `main`.
- **`develop`** → Integración de avances desde `project`.
- **`activity`** → Registro de clases semanales.  
  - Carpetas: `week1/`, `week2/` … `week16/`  
  - Dentro de cada semana:  
    - `01-session/`  
    - `02-optional-activity/`  
  - Contenido: apuntes (**Word/MD/TXT**), códigos, archivos de clase y recursos.
- **`project`** → Desarrollo del proyecto principal.

---

## ⚙️ Comandos básicos de Git

- Ver ramas locales:  
    git branch

- Cambiar de rama:  
    git switch <nombre-rama>

- Crear rama:
    git branch <nombre-rama>

- Crear y cambiarse a la vez:
    git switch -c <nombre-rama>

- Subir cambios a GitHub:
    git push origin <nombre-rama> (asegurate estar posicionado en la rama antes de subir)

