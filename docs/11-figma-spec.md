# 11 · Especificación del archivo Figma

Estructura de páginas, frames y componentes a crear. Los nombres de variables coinciden exactamente con los tokens CSS de `site/assets/styles.css`, para que el traspaso a código sea mecánico.

## Página `01 · Fundaciones`

**Frame `Color`** — muestras con nombre de variable, hex y ratio de contraste anotado.
Colecciones de variables:

```
color/base          #230054
color/ink           #0E0020
color/deep          #4E14A0
color/accent        #A96EFC
color/vivid         #C454FE
color/lav           #CBC0E8
color/mut           #A99BCB
color/mut-2         #8E80B4
color/bone          #F0F1EC
color/surface       #FFFFFF
color/border        #DCDCD4
color/border-dark   rgba(255,255,255,.14)
```

**Frame `Tipografía`** — estilos de texto nombrados `display`, `h1`, `h2`, `h3`, `h4`, `body-l`, `body`, `body-s`, `eyebrow`, `button`. Dos modos de variable: `desktop` y `mobile`, con los tamaños de la tabla del design system. Así una sola conmutación reajusta todos los frames móviles.

**Frame `Espaciado y grilla`** — la escala `sp-1…sp-13` como variables numéricas; grilla de 12 columnas a 1440 (gutter 24, margen 48), 8 columnas a 768, 4 columnas a 375.

**Frame `Elevación y radios`** — `r-sm`, `r-md`, `r-lg`, `r-pill`; sombra única.

**Frame `Iconografía`** — set base en caja de 24, trazo 1,5, como componentes.

**Frame `Logo`** — las 5 variantes con área de resguardo marcada y tamaño mínimo anotado.

## Página `02 · Componentes`

Un frame por componente, con **todas** las variantes y estados dispuestos en matriz.

| Frame | Propiedades de componente |
|---|---|
| `Button` | `variant` (primary/secondary/tertiary) × `surface` (dark/light) × `size` (md/lg) × `state` (default/hover/active/focus/disabled/loading) |
| `ServiceCard` | `surface` × `state` (default/hover/focus) × `hasLink` |
| `FeatureCard` | `variant` (problem/value) × `surface` |
| `ProcessStep` | `orientation` × `state` (default/active/complete) |
| `CaseCard` | `hasImage` × `metricsCount` (0–3) |
| `TeamCard` | `hasPhoto` × `state` |
| `Input` | `type` (text/email/tel/textarea/checkbox/select) × `state` (empty/focus/filled/error/disabled) |
| `Accordion` | `state` (closed/open/focus) |
| `Nav` | `variant` (overlay/solid) × `breakpoint` (desktop/mobile-closed/mobile-open) |
| `Footer` | `breakpoint` |
| `CookieBanner` | `state` (collapsed/preferences) |
| `SectionHeader` | `align` × `level` |
| `LogoBar` | `count` (4/5/6) |
| `InsightCard` | `hasCover` |
| `Testimonial` | `hasAvatar` |

**Regla:** cada estado se construye como variante real del componente, no como una copia suelta. Es la única forma de que el desarrollo sepa qué cambia exactamente entre estados.

## Página `03 · Páginas`

Por cada página del MVP, tres frames: `Desktop 1440`, `Tablet 768`, `Mobile 375`.

```
Home              — Desktop / Tablet / Mobile
Servicios         — Desktop / Tablet / Mobile
Cómo trabajamos   — Desktop / Tablet / Mobile
Nosotros          — Desktop / Tablet / Mobile
Contacto          — Desktop / Mobile
Gracias           — Desktop / Mobile
Legal (plantilla) — Desktop / Mobile
404               — Desktop / Mobile
```

Frames adicionales de estado: `Home — sin logos de cliente`, `Home — sin caso aprobado`, `Contacto — formulario con errores`, `Contacto — enviando`, `Contacto — error de red`. **Los estados vacíos y de error se diseñan; no se improvisan en desarrollo.**

## Página `04 · Prototipo`

Flujo principal: Home → CTA → Contacto → envío → Gracias.
Flujo secundario: Home → Servicios → detalle → Contacto.
Navegación mobile abierta y cerrada. Acordeón del FAQ.
Sin animaciones elaboradas: el prototipo sirve para validar recorrido, no para lucirse.

## Página `05 · Anotaciones`

Capa de anotaciones sobre la Home de escritorio y móvil con: orden de tabulación numerado, textos alternativos propuestos, etiquetas ARIA de los elementos ambiguos, y los ratios de contraste de cada par texto/fondo usado.

## Convenciones

- Auto-layout en todo. Ningún elemento posicionado en absoluto salvo decoraciones del hero.
- Nombres en español, coherentes con el copy y con el CMS.
- Los textos de los frames son el **copy real**, nunca lorem ipsum: los problemas de longitud se descubren en diseño o se descubren en producción.
- Ancho máximo de contenido 1200 px como constraint explícito, no como coincidencia.
