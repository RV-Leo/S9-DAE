# Progreso del LAB 09

## Pasos

- [ ] Step 01 — Crear el proyecto con Vite y levantarlo
- [ ] Step 02 — Limpiar el andamiaje de la plantilla
- [ ] Step 03 — Organizar `src/` y crear la arquitectura de CSS
- [ ] Step 04 — Archivo de datos de la cartelera y pósters
- [ ] Step 05 — Componente Header
- [ ] Step 06 — Componente Footer
- [ ] Step 07 — Componente Hero con props
- [ ] Step 08 — Componente MovieCard
- [ ] Step 09 — Componente MovieList
- [ ] Step 10 — Componer todo en App.jsx
- [ ] Step 11 — Registrar tres errores típicos de JSX
- [ ] Step 12 — Cierre: README y publicación

## Decisiones

- Se trabaja desde cero en `cinema-app/`, como indica el brief; no hay aplicación previa que reutilizar.
- Se respetará la petición del alumno: no ejecutar `git push` sin mostrar el avance y recibir confirmación.
- Las verificaciones locales se ejecutaron sin crear aún commits: el sandbox permite editar el proyecto, pero denegó escritura en `.git/index` al intentar el commit del paso 0. Los pasos se mantienen sin marcar hasta que tengan su hash.
- La revisión a 390 px y 1440 px queda pendiente: el navegador integrado no pudo alcanzar `127.0.0.1:5173` y la petición local desde PowerShell fue rechazada por permisos de socket.

## Hallazgos

- Node.js: `v24.19.0`; npm: `11.17.0`.
- Rama actual: `main`; remoto `origin` configurado como `https://github.com/RV-Leo/S9-DAE.git`.
- La guía del curso confirma los 12 pasos del brief, la cartelera Aurora Cinemas y los tres criterios técnicos (Vite, componentes, props). El documento también pide una evidencia para el campus; el brief delimita expresamente que esa evidencia la redacta el alumno.
- El repositorio estaba vacío salvo un README inicial; no se encontró una app que mantener.
- Paso 01 verificado localmente: Node.js `v24.19.0`; Vite `8.3.8`; `npm run dev` respondió HTTP 200 en `localhost:5173`; lint y build del scaffold sin errores.
- `npm run lint`: sin errores. `npm run build`: Vite 8.3.8 compiló correctamente. `npm test`: 2 archivos y 2 pruebas aprobados.
- `npm run dev`: Vite informó que inició en `http://127.0.0.1:5173/` en 199 ms; no se pudo validar la respuesta HTTP desde el navegador integrado o PowerShell por restricciones de acceso local.
- Errores JSX reproducidos y corregidos en una copia temporal; `src/App.jsx` quedó restaurado:
  1. `class` en JSX: `Invalid DOM property \`class\`. Did you mean \`className\`?` Causa: React usa `className` para clases; corrección: sustituir el atributo.
  2. Dos nodos JSX raíz: `Adjacent JSX elements must be wrapped in an enclosing tag.` Causa: el componente devuelve hermanos sin contenedor; corrección: envolverlos en un elemento o fragmento `<>...</>`.
  3. `map` sin clave: `Each child in a list should have a unique "key" prop.` Causa: React no puede identificar cada elemento de la lista; corrección: usar una clave estable como `key={movie.id}`.
