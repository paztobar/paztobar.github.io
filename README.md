# Paz Tobar — Portfolio Web

Sitio web estático de portfolio para Paz Tobar, artista visual y diseñadora escénica.

## Desarrollo local

```bash
npm install
npm run dev        # Servidor de desarrollo en http://localhost:5173
npm run build      # Build estático en /build
npm run preview    # Preview del build
```

## Agregar contenido

### Agregar un proyecto al Portfolio

1. Abre el archivo `src/lib/data/portfolio.js`
2. Agrega un nuevo objeto al array `projects`:

```js
{
    slug: 'nombre-del-proyecto',          // URL amigable (sin espacios ni tildes)
    title: 'Nombre del Proyecto',
    category: 'escenografia',             // escenografia | instalacion | pintura | otro
    year: 2026,
    thumbnail: '/images/portfolio/mi-proyecto-thumb.jpg',
    images: [
        '/images/portfolio/mi-proyecto-01.jpg',
        '/images/portfolio/mi-proyecto-02.jpg'
    ],
    location: 'Lugar, Ciudad',
    collaborators: 'Director: Nombre',    // Dejar vacío '' si no aplica
    description: 'Descripción del proyecto...',
    featured: true                        // true para mostrar en la página principal
}
```

3. Sube las imágenes a `static/images/portfolio/`
4. Commit y push

### Agregar un post al Blog

1. Abre el archivo `src/lib/data/blog.js`
2. Agrega un nuevo objeto al array `posts`:

```js
{
    slug: 'titulo-del-post',
    title: 'Título del Post',
    date: '2026-04-01',
    excerpt: 'Breve resumen del post...',
    image: '/images/blog/mi-imagen.jpg',
    content: `
        <p>Contenido del post en HTML...</p>
        <p>Puedes usar párrafos, <strong>negritas</strong>, etc.</p>
    `
}
```

3. Sube las imágenes a `static/images/blog/`
4. Commit y push

### Actualizar redes sociales

Edita `src/lib/data/social.js` con tus URLs reales.

### Agregar una nueva categoría de Portfolio

Edita el array `categories` en `src/lib/data/portfolio.js`.

## Deploy en GitHub Pages

El sitio se despliega automáticamente con cada push a `main` mediante GitHub Actions.

### Configuración inicial:

1. Crear repositorio en GitHub
2. Ir a Settings > Pages > Source: **GitHub Actions**
3. Push a `main`

### Dominio personalizado:

1. Crear archivo `static/CNAME` con tu dominio (ej: `paztobar.cl`)
2. Configurar DNS del dominio apuntando a GitHub Pages

## Estructura del proyecto

```
src/
├── lib/
│   ├── components/    # Componentes Svelte reutilizables
│   ├── data/          # Datos del sitio (portfolio, blog, social, nav)
│   └── utils/         # Funciones auxiliares
├── routes/            # Páginas del sitio
│   ├── portfolio/     # Galería y detalle de proyectos
│   ├── blog/          # Listado y detalle de posts
│   ├── lab/           # Laboratorio web artístico
│   └── contacto/      # Página de contacto
└── app.css            # Estilos globales

static/
└── images/            # Imágenes del sitio
    ├── hero/
    ├── portfolio/
    └── blog/
```
