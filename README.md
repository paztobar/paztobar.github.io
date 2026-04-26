# Paz Tobar Portfolio

Sitio web de cartera artística de **Paz Tobar**, una artista multidisciplinaria. El sitio presenta sus obras, biografía y contacto en una experiencia web minimalista y elegante.

**Sitio en vivo:** [paztobar.github.io](https://paztobar.github.io)

---

## Descripción

Este es un sitio web estático y responsivo que funciona como galería digital de las obras de Paz Tobar. Incluye:

- **Galería de obras** organizadas por categorías (Dibujos y Pinturas, Cerámica, etc.)
- **Sección de biografía** con información sobre la artista
- **Página de contacto** para consultas
- **Diseño oscuro y sofisticado** con animaciones suaves y transiciones elegantes
- **GitHub Pages deployment** con actualización automática

---

## Estructura del Proyecto

```
paztobar.github.io/
├── index.html              # Página principal (HTML)
├── hifi.css               # Estilos principales
├── images/                # Activos visuales del sitio
│   ├── obras/            # Galerías de obras de arte
│   ├── biografia/        # Imágenes de la sección de biografía
│   ├── inicio/           # Recursos para la página de inicio
│   └── contacto/         # Elementos visuales de contacto
├── raw_content/          # Fuente de contenido estructurado
│   ├── OBRAS/            # Subcategorías de obras artísticas
│   ├── BIOGRAFIA/        # Contenido de la biografía
│   ├── INICIO/           # Contenido de inicio
│   └── CONTACTO/         # Información de contacto
└── .gitignore            # Archivos excluidos del versionamiento
```

### Carpetas Principales

- **`images/`** - Contiene todas las imágenes del sitio incluyendo fotografías de obras maestras
- **`raw_content/`** - Almacena el contenido fuente organizado por secciones

---

## Secciones del Sitio

### 1. **Inicio (Landing Page)**
- Presentación visual con imagen de portada
- Barra de navegación fija con enlaces a secciones
- Información de estado (live indicator)
- Marquee strip animado

### 2. **Obras (Portfolio)**
- Grid interactivo con galería de obras
- Categorías incluyen:
  - Dibujos y Pinturas
  - Cerámica
  - Otras técnicas artísticas
- Sidebar navegable con lista de obras
- Lightbox/Modal para ver obras en detalle

### 3. **Biografía**
- Información sobre la trayectoria artística
- Fotografías personales
- Contexto de la obra

### 4. **Contacto**
- Formulario de contacto
- Enlaces a redes sociales
- Información de ubicación

---

## Tecnología

- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsive con variables CSS personalizadas
  - Flexbox y CSS Grid
  - Animaciones y transiciones suaves
  - Backdrop filters para efectos modernos
- **Fuentes tipográficas**:
  - **Epilogue** - Tipografía principal
  - **JetBrains Mono** - Tipografía monoespaciada para detalles
- **Despliegue**: GitHub Pages

---

## Variables CSS Principales

El sitio utiliza variables CSS para un tema coherente:

```css
--bg           /* Color de fondo principal */
--bg-2         /* Fondo secundario */
--ink          /* Texto principal */
--ink-dim      /* Texto reducido */
--ink-mute     /* Texto muy reducido */
--accent       /* Color de acento */
--line         /* Color de bordes */
--line-2       /* Bordes secundarios */
```

---

## Características de Diseño

### Interfaz
- Navegación fija con blur background dinámico
- Tema oscuro (dark mode) como predeterminado
- Diseño minimalista sin distracciones

### Animaciones
- Transiciones suaves en navegación
- Marquee animado en strip de información
- Pulse animation en indicadores de estado
- Slide dots interactivos para navegar contenido

### Responsividad
- Diseño mobile-friendly
- Viewport adaptativo (base: 1280px)
- Layout grid flexible

---

## Instalación Local

### Requisitos
- Navegador web moderno
- Servidor HTTP local (opcional)

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/paztobar/paztobar.github.io.git
   cd paztobar.github.io
   ```

2. **Servir localmente** (opcional pero recomendado)
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Python 2
   python -m SimpleHTTPServer 8000
   
   # Con Node.js
   npx http-server
   ```

3. **Abrir en navegador**
   - Local: `http://localhost:8000`
   - En vivo: `https://paztobar.github.io`

---

## Desarrollo y Mantenimiento

### Agregar Nuevas Obras

1. Guardar imágenes en carpetas correspondientes dentro de `raw_content/OBRAS/`
2. Actualizar la estructura del HTML con referencias a las nuevas obras
3. Commit y push a la rama `main`
4. GitHub Pages se actualiza automáticamente

### Modificar Contenido

- **Inicio**: Editar sección de hero en `index.html`
- **Biografía**: Actualizar contenido en `raw_content/BIOGRAFIA/`
- **Contacto**: Modificar sección de contacto en `index.html`

### Cambios de Diseño

Los estilos principales se encuentran en `hifi.css` y en el `<style>` del `index.html`.

---

## Consideraciones de Rendimiento

- Imágenes optimizadas pero de alta calidad para obras de arte
- Lazy loading recomendado para galerías grandes
- CSS Grid y Flexbox para layouts eficientes
- Animaciones GPU-aceleradas (transform, opacity)

---

## Navegador Compatible

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Notas Técnicas

- El sitio es completamente estático (no requiere backend)
- Hospedado gratuitamente en GitHub Pages
- Actualizaciones automáticas con cada push a `main`
- No requiere build process ni dependencies externas

---

## Contacto y Créditos

- **Artista**: Paz Tobar
- **Sitio web**: [paztobar.github.io](https://paztobar.github.io)
- **Repositorio**: [github.com/paztobar/paztobar.github.io](https://github.com/paztobar/paztobar.github.io)

---

## Licencia

El contenido artístico (imágenes, obras) es propiedad intelectual de Paz Tobar.  
El código del sitio web es de uso educativo y personal.

---

*Última actualización: Abril 2026*
