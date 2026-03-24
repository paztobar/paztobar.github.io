# Guía para agregar contenido al sitio

No necesitas saber programación. Todo se hace desde el navegador en github.com.

Cada vez que guardes un cambio, el sitio se actualiza automáticamente en unos 2 minutos.

---

## Antes de empezar

1. Ve a [github.com](https://github.com) e inicia sesión con tu cuenta
2. Abre el repositorio: **github.com/paztobar/paztobar.github.io**

---

## Agregar un proyecto al Portfolio

### Paso 1 — Subir las imágenes

1. En el repositorio, navega a la carpeta: `static` → `images` → `portfolio`
2. Haz clic en **"Add file"** → **"Upload files"**
3. Arrastra tus imágenes o haz clic para seleccionarlas
4. Al final de la página, haz clic en **"Commit changes"**

> Nombres de archivo recomendados: sin espacios, sin tildes, en minúsculas.
> Ejemplo: `mi-proyecto-2025.jpg`

### Paso 2 — Crear el archivo del proyecto

1. Navega a la carpeta: `src` → `content` → `portfolio`
2. Haz clic en **"Add file"** → **"Create new file"**
3. En el campo del nombre, escribe: `nombre-del-proyecto.md`
   (usa guiones en lugar de espacios, sin tildes)
4. Copia y pega la plantilla de abajo, luego completa los datos
5. Al final de la página, haz clic en **"Commit changes"**

### Plantilla para proyectos

```
---
title: Título del Proyecto
category: escenografia
year: 2025
thumbnail: /images/portfolio/nombre-imagen-principal.jpg
images:
  - /images/portfolio/nombre-imagen-1.jpg
  - /images/portfolio/nombre-imagen-2.jpg
location: Teatro Municipal, Santiago
collaborators: Director: Nombre Apellido
featured: true
---

Descripción del proyecto. Escribe uno o varios párrafos aquí,
separados por una línea en blanco.

Puedes escribir tan largo como quieras.
```

### Valores posibles para `category`

| Valor | Lo que muestra en el sitio |
|-------|---------------------------|
| `escenografia` | Escenografía |
| `instalacion` | Instalación |
| `pintura` | Pintura |
| `otro` | Otro |

### Notas importantes

- **`featured: true`** → el proyecto aparece destacado en la página de inicio
- **`featured: false`** → solo aparece en el portfolio, no en inicio
- Si tienes varias imágenes, agrégalas todas bajo `images:`, una por línea comenzando con `  - `
- El orden en el sitio es automático: del proyecto más reciente al más antiguo

---

## Agregar una entrada al Blog

### Paso 1 — Subir la imagen (opcional)

1. Navega a: `static` → `images` → `blog`
2. Haz clic en **"Add file"** → **"Upload files"**
3. Sube tu imagen y confirma con **"Commit changes"**

### Paso 2 — Crear el archivo del post

1. Navega a: `src` → `content` → `blog`
2. Haz clic en **"Add file"** → **"Create new file"**
3. Nombre del archivo: `titulo-del-post.md`
4. Copia la plantilla, completa los datos y confirma

### Plantilla para posts

```
---
title: Título del Post
date: 2025-06-01
excerpt: Una frase corta que resume el post. Aparece en la lista del blog.
image: /images/blog/nombre-imagen.jpg
---

Primer párrafo del post. Escribe con normalidad, como si fuera un documento de texto.

Segundo párrafo. Deja siempre una línea en blanco entre párrafos.

Tercer párrafo. Puedes escribir tan largo como necesites.
```

### Formato de texto disponible

| Escribes | Resultado |
|----------|-----------|
| `**texto**` | **negrita** |
| `*texto*` | *cursiva* |
| `## Título de sección` | Subtítulo grande |

### Notas importantes

- La **fecha** debe estar en formato `AAAA-MM-DD` (año-mes-día). Ejemplo: `2025-06-01`
- El **excerpt** es el resumen corto que aparece en la lista. Mantenlo en 1–2 oraciones
- Si no tienes imagen, deja el campo `image:` vacío o bórralo
- Los posts se ordenan automáticamente del más reciente al más antiguo

---

## Editar contenido existente

1. Navega hasta el archivo que quieres modificar (en `src/content/portfolio/` o `src/content/blog/`)
2. Haz clic en el nombre del archivo
3. Haz clic en el ícono del lápiz ✏️ (arriba a la derecha del contenido)
4. Edita lo que necesites
5. Haz clic en **"Commit changes"**

---

## Eliminar un proyecto o post

1. Abre el archivo
2. Haz clic en el ícono de los tres puntos `···` (arriba a la derecha)
3. Selecciona **"Delete file"**
4. Confirma con **"Commit changes"**

---

## ¿Cuánto tarda en verse el cambio?

Aproximadamente **2 minutos** después de hacer commit, el sitio se actualiza.

Puedes ver el progreso en la pestaña **"Actions"** del repositorio.

---

## ¿Algo salió mal?

Si el sitio muestra un error después de tu cambio, probablemente hay un error de formato en el archivo `.md`. Las causas más comunes:

- Olvidaste los `---` al inicio y al final del bloque de datos
- Un campo tiene espacios de más o de menos
- Usaste tildes en el nombre del archivo

Para deshacer el cambio: ve al archivo, haz clic en **"History"**, abre el último commit y haz clic en **"Revert"**.
