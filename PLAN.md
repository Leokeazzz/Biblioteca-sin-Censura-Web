# Plan: Biblioteca sin Censura - Página Web

## Estructura de Archivos a Crear

1. **index.html** - Página principal
2. **curso.html** - Página de detalles del curso
3. **bundle.html** - Página de detalles del bundle
4. **style.css** - Hoja de estilos
5. **app.js** - JavaScript principal
6. **database.js** - Conexión y consultas a SQLite
7. **init-db.js** - Inicialización de la base de datos with sample data

## Colores Principales (RGB)
- Azul principal: rgb(0, 51, 102)
- Blanco: rgb(255, 255, 255)
- Amarillo de acento: rgb(255, 204, 0)
- Gris suave: rgb(102, 102, 102)

## Estructura de la Base de Datos (SQLite)

### Tabla: cursos
- id (INTEGER, PRIMARY KEY)
- titulo (VARCHAR)
- resumen (VARCHAR)
- descripcion (TEXT)
- imagen_url (VARCHAR)
- precio (REAL)
- enlace_acceso (VARCHAR)
- slug (VARCHAR)
- activo (INTEGER/BOOLEAN)

### Tabla: bundles
- id (INTEGER, PRIMARY KEY)
- titulo (VARCHAR)
- descripcion (TEXT)
- precio (REAL)
- cursos_incluidos (TEXT - JSON array)
- imagen_url (VARCHAR)
- slug (VARCHAR)
- activo (INTEGER/BOOLEAN)

## Pasos de Implementación

1. Crear estructura HTML de las páginas
2. Crear hoja de estilos CSS
3. Crear base de datos SQLite con datos de ejemplo
4. Implementar JavaScript para cargar datos dinámicamente
5. Implementar navegación entre páginas

## Datos de Ejemplo a Insertar

### Cursos:
1. Ciberseguridad - "Domina la seguridad informática" - S/50
2. Excel Avanzado - "Hojas de cálculo profesionales" - S/40
3. Electrónica Básica - "Fundamentos de circuitos" - S/35
4. Programación Python - "Aprende desde cero" - S/45
5. Diseño Gráfico - "Photoshop e Illustrator" - S/55

### Bundles:
1. "Ciberseguridad + Pack de Juegos Android" - S/10
2. "Curso Completo de Ofimática + Excel" - S/25

## Detalles de Estilo

- Layout horizontal/landscape
- Diseño responsive (Flexbox/Grid)
- Tipografía sans-serif (Roboto, Open Sans)
- Cards horizontales para cursos
- Botones CTA amarillos destacados
- Header con navegación y botón WhatsApp
