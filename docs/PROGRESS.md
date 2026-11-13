# Progreso del LAB 09

## Pasos

- [x] Step 00 — AGENTS.md y registro — `3326c70` · 2026-11-12 21:33 -05
- [x] Step 01 — Scaffold Vite — `b42548d` · 2026-11-12 21:45 -05
- [x] Step 02 — Limpieza de plantilla — `d8a9b0c` · 2026-11-12 21:55 -05
- [x] Step 03 — Arquitectura CSS — `a5328bb` · 2026-11-12 22:00 -05
- [x] Step 04 — Datos y pósters — `0be5b05` · 2026-11-12 22:06 -05
- [x] Step 05 — Header — verificado; hash y hora se anotan en el siguiente paso
- [ ] Step 06 — Footer
- [ ] Step 07 — Hero con props
- [ ] Step 08 — MovieCard
- [ ] Step 09 — MovieList
- [ ] Step 10 — Composición de App
- [ ] Step 11 — Errores JSX
- [ ] Step 12 — README y cierre

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
- Lint, build y 4 pruebas pasan en la implementación actual.
