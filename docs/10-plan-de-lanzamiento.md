# 10 · Plan de lanzamiento y checklist de handoff

Duración total estimada del MVP: **7 semanas** desde el desbloqueo de los activos de marca.
La estimación asume una persona de diseño y una de desarrollo a dedicación parcial, más disponibilidad del cliente para validaciones.

## Fase 0 — Desbloqueo `[CAMINO CRÍTICO]`

**Duración: 1 semana. Depende enteramente del cliente.**

| Entregable | Responsable |
|---|---|
| Manual de marca reexportado y completo (páginas 2–26) | Cliente |
| Logo en SVG, 5 variantes | Cliente |
| Validación de los 6 servicios | Cliente |
| Respuestas a las 10 preguntas del brief | Cliente |
| Datos societarios para las páginas legales | Cliente |
| Decisión sobre el caso Aberturas Fisa | Cliente + sponsor |

> **Esta fase bloquea todo lo demás.** Sin el manual completo, el design system sigue siendo una reconstrucción y cualquier trabajo de diseño corre riesgo de rehacerse. Es el mismo argumento que Evoltia le hace a sus clientes: no se construye antes de relevar.

## Fase 1 — Fundaciones (semanas 1–2)

- Cerrar el design system contra el manual reexportado.
- Tokens de diseño en código (`tokens.css` / configuración de Tailwind).
- Biblioteca de componentes base: `Button`, `SectionHeader`, `Card`, `Input`, tipografía, grilla.
- Andamiaje del proyecto: Next.js, TypeScript, ESLint, CI, previsualizaciones.
- Esquemas de Sanity y Studio desplegado.
- **Hito: `Diseño aprobado`** — Home a alta fidelidad, desktop y mobile, validada.

## Fase 2 — Construcción (semanas 3–5)

- Home completa (semana 3) — es la página que sostiene la conversión, va primero.
- Servicios, Cómo trabajamos, Nosotros (semana 4).
- Contacto, Gracias, legales, 404 (semana 5).
- Endpoint del formulario, envío de correo, integración con CRM.
- Analítica y gestión de consentimiento.
- Datos estructurados, sitemap, robots, imágenes OG.
- **Hito: `Contenido cargado`** — todo el copy real en el CMS, sin lorem ipsum.

## Fase 3 — Calidad (semana 6)

- Auditoría de accesibilidad: automática y manual con teclado y lector de pantalla.
- Lighthouse en las 8 páginas, mobile y desktop.
- Pruebas en Chrome, Safari, Firefox y Edge; iOS Safari y Android Chrome.
- Revisión ortográfica y de estilo de todo el copy por una segunda persona.
- Prueba del formulario de punta a punta, incluidos los caminos de error.
- Revisión legal de las tres políticas.
- Enlaces rotos, redirecciones, 404.
- **Hito: `Listo para producción`**.

## Fase 4 — Lanzamiento (semana 7)

- DNS, certificado, cabeceras de seguridad.
- Search Console y Analytics verificados; sitemap enviado.
- Monitoreo de disponibilidad y alerta de errores.
- Prueba de humo en producción y verificación de la conversión real.
- **Hito: `En vivo`**.
- Ventana de hipercuidado: 72 h de monitoreo activo.

## Fase 5 — Post-lanzamiento (semanas 8–12)

- Semana 8: primer informe de línea base; ajuste de metas de KPI con datos reales.
- Semanas 9–10: grabaciones de sesión y 5 pruebas de usuario.
- Semana 11: casos de estudio (fase 2) si se aprobó la autorización.
- Semana 12: primeros 3 artículos de Insights y apertura de la sección.

## Ruta crítica

```
Manual reexportado ──► Design system ──► Componentes ──► Home ──► QA ──► Lanzamiento
                  └──► Logo SVG ────────┘
Datos societarios ─────────────► Legales ──────────────► QA
Autorización del caso ─────────────────────► Casos (fase 2)
```

Todo lo que está a la izquierda de la primera flecha depende del cliente. **El riesgo principal del proyecto no es técnico, es de disponibilidad de insumos.**

---

## Checklist de handoff diseño → desarrollo

### Del diseño

- [ ] Archivo Figma con páginas: `01 Fundaciones` · `02 Componentes` · `03 Páginas` · `04 Prototipo`
- [ ] Variables de Figma para color, tipografía, espaciado y radios — con **los mismos nombres que los tokens CSS**
- [ ] Componentes con todas las variantes y estados construidos, no dibujados como pantallas sueltas
- [ ] Cada página en desktop 1440, tablet 768 y mobile 375
- [ ] Estados especificados: vacío, cargando, error, éxito
- [ ] Anotaciones de accesibilidad: orden de tabulación, textos alternativos, etiquetas ARIA
- [ ] Especificación de movimiento: qué anima, cuánto dura, con qué curva
- [ ] Logo en SVG optimizado, 5 variantes
- [ ] Set de iconos en SVG, caja de 24, trazo 1,5
- [ ] Imágenes exportadas a 1× y 2×, con punto focal indicado
- [ ] Plantilla de imagen OG

### Del contenido

- [ ] Copy final aprobado, por página y por componente
- [ ] Meta title y meta description de cada página, dentro del límite de caracteres
- [ ] Texto alternativo de todas las imágenes
- [ ] Textos legales revisados por un profesional
- [ ] Lista de los `[PLACEHOLDER]` que siguen abiertos, con responsable y fecha

### Del desarrollo

- [ ] README con instrucciones de instalación, variables de entorno y despliegue
- [ ] Storybook o página de estilos con todos los componentes y sus estados
- [ ] Esquemas del CMS documentados
- [ ] CI en verde: tipos, lint, axe, Lighthouse
- [ ] Plan de medición implementado y verificado con GA4 DebugView
- [ ] Documentación de acceso: quién administra dominio, hosting, CMS, analítica y CRM

### Formatos de entrega

| Activo | Formato |
|---|---|
| Diseño | Figma (enlace con permiso de edición) + PDF de respaldo |
| Logo e iconos | SVG optimizado + PNG a 1×/2×/3× |
| Copy | Markdown en el repositorio (este entregable) |
| Modelos de contenido | JSON Schema (`content-models/`) |
| Inventario de contenido | CSV (`inventario/`) |
| Código | Repositorio Git con historial legible |
| Documentación | Markdown en `/docs` |
