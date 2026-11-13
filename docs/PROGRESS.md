# Progreso del LAB 09

## Pasos

- [x] Step 00 — AGENTS.md y registro — `3326c70` · 2026-11-12 21:33 -05
- [x] Step 01 — Scaffold Vite — `b42548d` · 2026-11-12 21:45 -05
- [x] Step 02 — Limpieza de plantilla — `d8a9b0c` · 2026-11-12 21:55 -05
- [x] Step 03 — Arquitectura CSS — `a5328bb` · 2026-11-12 22:00 -05
- [x] Step 04 — Datos y pósters — `0be5b05` · 2026-11-12 22:06 -05
- [x] Step 05 — Header — `a3859bc` · 2026-11-12 22:24 -05
- [x] Step 06 — Footer — `0ebd9ad` · 2026-11-12 22:44 -05
- [x] Step 07 — Hero con props — `c1a8209` · 2026-11-12 23:07 -05
- [x] Step 08 — MovieCard — `fb36d57` · 2026-11-12 23:13 -05
- [x] Step 09 — MovieList — `539f651` · 2026-11-12 23:19 -05
- [x] Step 10 — Composición de App — `5e34af1` · 2026-11-12 23:23 -05
- [x] Step 11 — Errores JSX — `6a88b40` · 2026-11-12 23:24 -05
- [x] Step 12 — README y cierre — verificado; commit registrado en el reporte final

## Decisiones

- Se parte desde cero en `cinema-app/`; Node.js `v24.19.0`, npm `11.17.0`, Vite `8.3.8`.
- Se conservarán commits separados por etapa y se hará un push general al finalizar, según la instrucción del alumno.
- No se incluyen capturas ni entregables del campus; esos los prepara el alumno.

## Hallazgos

- La guía confirma los 12 pasos, React con componentes PascalCase y una carpeta por componente; el brief pide películas ficticias y SVG originales.
- Paso 01: servidor Vite respondió HTTP 200; lint y build pasan.
- Paso 02: `lang="es"`, meta description, favicon original y pantalla mínima; lint y build pasan.
- Paso 03: tokens/base/layout/utilities en orden, Fraunces e Instrument Sans, fondo oscuro y anillo de foco ámbar.
- Paso 04: ocho películas con ids únicos, campos completos, rating 0–10 y una destacada; ocho SVG válidos y prueba de datos aprobada.
- Paso 05: Header sticky con tres anclas; manualmente visto en el navegador a ~599 px y navegación con Tab verificada. Las capturas Playwright exactas a 390 y 1440 px no se pudieron ejecutar: el control de aprobación rechazó la petición. No se guardaron capturas.
- Paso 06: Footer con contacto ficticio, horario, políticas, derechos y tira de película; landmarks y enlaces de contacto revisados. Lint, build y pruebas pasan.
- Paso 07: Hero recibe la película destacada por `movie`; prueba confirma que cambia el h1 al recibir una película distinta. Lint, build y pruebas pasan.
- Paso 08: MovieCard usa solo poster, title, rating y showtimes; la prueba aislada con props mínimos pasa. Chips horarios con muescas tipo ticket.
- Paso 09: MovieList recibe `movies`, dibuja una tarjeta por elemento con `key={movie.id}` y pasa la prueba de 3 elementos.
- Paso 10: App compone Header, Hero, MovieList y Footer; navegador muestra ocho tarjetas y la película destacada.
- Paso 11, errores reproducidos temporalmente y código restaurado:
  1. `class`: `Invalid DOM property \`class\`. Did you mean \`className\`?` Causa: JSX React debe usar `className`; corrección: cambiar el atributo.
  2. Dos raíces: `Adjacent JSX elements must be wrapped in an enclosing tag.` Causa: un componente retorna dos hermanos; corrección: envolver en elemento o fragmento `<>...</>`.
  3. `map` sin key: `Each child in a list should have a unique "key" prop.` Causa: elementos no identificados; corrección: `key={movie.id}`.
- Paso 12: README de instalación y ejecución, versiones React/Vite/Vitest, árbol final en AGENTS.md y dependencias declaradas en package.json.
- Verificación final: lint, build y 4/4 pruebas pasan. La página completa se revisó visualmente en navegador a ~599 px; el entorno no permitió tomar capturas Playwright exactas de 390/1440 px.
- Lint, build y 4 pruebas pasan en la implementación actual.
