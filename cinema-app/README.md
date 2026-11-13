# Aurora Cinemas

Cartelera estática construida con React y Vite para el laboratorio 09. Presenta películas ficticias, pósters SVG originales y componentes funcionales que reciben sus datos mediante props.

## Requisitos

- Node.js 20.19+ (desarrollo: `v24.19.0`)
- npm 11.17.0
- React y React DOM 19.3.1
- Vite 8.3.8
- Vitest 5.1.0

## Instalación y ejecución

```powershell
cd cinema-app
npm install
npm run dev
```

Abre la URL local que imprime Vite. Para verificar el proyecto:

```powershell
npm run lint
npm run build
npm test
```

## Estructura

- `src/data/movies.js`: datos de las ocho películas y selección de la destacada.
- `src/components/`: `Header`, `Hero`, `MovieList`, `MovieCard` y `Footer`; cada uno tiene carpeta, JSX y CSS BEM.
- `src/styles/`: tokens, base, layout y utilidades globales, importados en ese orden desde `main.jsx`.
- `public/posters/`: ocho ilustraciones SVG creadas para esta cartelera.

`App` obtiene la película destacada y pasa `movie` a `Hero`; entrega `movies` a `MovieList`. El listado recorre esos datos y pasa cada película como prop a `MovieCard` con una `key` estable.

La interfaz utiliza Fraunces e Instrument Sans, diseño mobile-first, landmarks accesibles, anillo de foco ámbar y respeto por la preferencia de movimiento reducido.

Autora del proyecto: Leonardo Ronda.
