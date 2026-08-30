# 05 · Inventario de componentes

> Derivado del manual v1.0. Nota transversal: **el sistema no lleva set de iconos.** El §05 es explícito —«con esto alcanza: no hace falta agregar íconos, texturas ni ilustraciones de stock»— así que donde normalmente iría un ícono va un nodo de la cadena.

Convención de props en TypeScript. Todos los componentes son server components salvo los marcados **`client`**.

---

## `Navigation` **client**

**Propósito:** navegación primaria persistente y acceso permanente al CTA de conversión.

| Prop | Tipo | Notas |
|---|---|---|
| `items` | `{label, href, children?}[]` | Máx. 5 de primer nivel |
| `cta` | `{label, href}` | "Agendá un diagnóstico" |
| `variant` | `'overlay' \| 'solid'` | `overlay` sobre el hero |

**Estados:** transparente → sólido (`#230054` + blur + borde inferior) al pasar 24 px de scroll · ítem activo con subrayado de 2 px en `--senal` · hover con opacidad 100 % · menú mobile abierto/cerrado.

**Accesibilidad:** `<nav aria-label="Principal">` · hamburguesa con `aria-expanded` y `aria-controls` · foco atrapado dentro del menú abierto y devuelto al botón al cerrar · `Esc` cierra · `scroll-margin-top` en los destinos de ancla para que la nav sticky no tape el foco (WCAG 2.4.11) · skip link como primer elemento tabulable.

---

## `Hero`

**Propósito:** enunciar la promesa y ofrecer la acción principal en el primer viewport.

| Prop | Tipo | Notas |
|---|---|---|
| `eyebrow` | `string?` | Mayúsculas con tracking amplio |
| `title` | `string` | Renderiza `h1` |
| `subtitle` | `string` | Máx. 180 caracteres |
| `primaryCta` / `secondaryCta` | `{label, href}` / opcional | |
| `microcopy` | `string?` | Debajo de los botones |
| `variant` | `'gradient' \| 'compact' \| 'flat'` | `gradient` sólo en Home |

**Accesibilidad:** el fondo decorativo va en `aria-hidden` · el `h1` es el único de la página · contraste verificado contra el punto más claro del gradiente (`#4E14A0`, 10,87:1 con blanco).

---

## `Button`

| Prop | Tipo |
|---|---|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` |
| `surface` | `'dark' \| 'light'` |
| `size` | `'md' \| 'lg'` |
| `href` / `onClick` | uno u otro |
| `loading` / `disabled` | `boolean` |
| `iconRight` | `ReactNode?` |

**Estados:** default · hover · active · focus-visible · disabled · loading. Especificados en `04-design-system.md §8`.

**Accesibilidad:** con `href` renderiza `<a>`, sin él `<button type>` — nunca un `div` con `onClick` · alto mínimo 48 px · el estado de carga anuncia por `aria-live="polite"` · si el rótulo es sólo icono, `aria-label` obligatorio.

---

## `ServiceCard`

**Propósito:** una unidad de oferta, escaneable en menos de 3 segundos.

| Prop | Tipo |
|---|---|
| `nodo` | `1 \| 2 \| 3 \| 4` — tamaño del nodo de la cadena. **No lleva ícono**: el §05 del manual establece que con la cadena y la órbita alcanza |
| `title` | `string` — renderiza `h3` |
| `description` | `string` — máx. 140 caracteres |
| `href` | `string?` — si falta, la tarjeta no es interactiva |
| `surface` | `'dark' \| 'light'` |

**Estados:** default · hover (borde a Violeta Señal, la flecha se desplaza 4 px) · focus-visible (anillo sobre toda la tarjeta) · sin enlace (estático).

**Accesibilidad:** patrón de **enlace envolvente por pseudo-elemento** — el `<a>` está sobre el título y se expande con `::after` para cubrir la tarjeta. Así el lector de pantalla anuncia un solo enlace con texto significativo, y el área clicable sigue siendo toda la tarjeta. Nunca `role="link"` sobre el contenedor.

---

## `FeatureCard` / `FeatureList`

**Propósito:** enunciar problemas (variante `problem`) o diferenciales (variante `value`).

| Prop | Tipo |
|---|---|
| `items` | `{title, body}[]` — el marcador visual es un nodo, no un ícono |
| `columns` | `2 \| 3 \| 4` |
| `variant` | `'problem' \| 'value'` |
| `surface` | `'dark' \| 'light'` |

**Accesibilidad:** se marca como `<ul>`/`<li>` — es una lista, y el lector anuncia la cantidad de ítems, lo que ayuda a la orientación. Los nodos decorativos van `aria-hidden`.

---

## `ProcessTimeline` / `ProcessStep`

**Propósito:** hacer visible el método. Es la cadena del §05 usada como columna del proceso, tal como en la pieza `post-03-metodo`.

| Prop | Tipo |
|---|---|
| `steps` | `{number, title, body, deliverable, duration?}[]` — cuatro etapas fijas: Diagnóstico, Priorización, Implementación, Adopción |
| `orientation` | `'horizontal' \| 'vertical'` — auto por breakpoint |
| `activeStep` | `number?` — para la variante sticky |

**Estados:** paso por defecto · activo (nodo en Magenta Pulso, título al 100 %) · completado.

**Regla de marca:** los nodos crecen 14 → 18 → 23 → 29 px y van de Púrpura Órbita a Magenta Pulso; el conector mide 9 px, que es el 62 % del nodo menor. Estos valores no son decisiones de diseño: son la especificación del §05.

**Accesibilidad:** `<ol>` semántico — el orden importa · la línea conectora es CSS decorativo, no contenido · la numeración "01…04" es texto real, no una imagen · en la variante sticky, el paso activo se anuncia con `aria-current="step"`.

---

## `CaseHighlight` / `CaseCard`

| Prop | Tipo |
|---|---|
| `client` | `string` |
| `sector` / `challenge` / `outcome` | `string` |
| `metrics` | `{value, label}[]` — **máx. 3** |
| `image` | `ImageRef?` |
| `href` | `string` |
| `consentApproved` | `boolean` |

**Regla dura:** si `consentApproved` es `false`, el componente **no renderiza**. Publicar un caso de cliente sin autorización expresa es un riesgo legal y reputacional; el propio componente lo impide.

**Accesibilidad:** las métricas grandes llevan el número y su etiqueta en el mismo elemento accesible, para que no se anuncie "40" suelto.

---

## `Testimonial` / `TestimonialCarousel` **client**

| Prop | Tipo |
|---|---|
| `quote` | `string` |
| `author` | `{name, role, company, avatar?}` |
| `autoplay` | `boolean` — **por defecto `false`** |

**Accesibilidad:** `<blockquote>` con `<cite>` · si hay carrusel: controles anterior/siguiente reales, navegable con flechas, `aria-roledescription="carrusel"`, cada slide con `aria-label="N de M"`, sin autoplay (y si lo hubiera, con botón de pausa y detención bajo `prefers-reduced-motion`).

---

## `TeamCard`

| Prop | Tipo |
|---|---|
| `name` / `role` | `string` |
| `photo` | `ImageRef?` |
| `bio` | `string?` |
| `linkedin` | `string?` |

**Estados:** con foto / sin foto (iniciales sobre `--nucleo`) · hover (la foto pasa de desaturada a color).

**Accesibilidad:** el `alt` de la foto es el nombre de la persona, no "foto de perfil" · el enlace a LinkedIn lleva `aria-label` con el nombre incluido ("LinkedIn de …"), porque un icono repetido seis veces es indistinguible en la lista de enlaces.

---

## `ContactForm` **client**

**Propósito:** la conversión primaria del sitio.

| Prop | Tipo |
|---|---|
| `fields` | `FieldDef[]` |
| `endpoint` | `string` |
| `successUrl` | `string` — `/gracias` |
| `consentText` | `RichText` |

**Estados:** vacío · en foco · válido · inválido · enviando · éxito · error de red.

**Accesibilidad — el componente más exigente del sistema:**
- `<label>` real y visible por campo. Nunca placeholder como etiqueta.
- Los obligatorios se marcan con la palabra "(obligatorio)" además del asterisco, y con `required` + `aria-required`.
- La validación ocurre en `blur`, no en cada tecla. El error se asocia con `aria-describedby` y `aria-invalid="true"`.
- Al fallar el envío, el foco va al **primer campo con error**, y un resumen en `role="alert"` encabeza el formulario.
- El error nunca se comunica sólo con color: siempre texto e icono.
- `autocomplete`: `name`, `email`, `organization`, `organization-title`, `tel`.
- `inputmode="email"` / `"tel"` para teclados móviles.
- Anti-spam con **honeypot + timestamp**, no con CAPTCHA. Un CAPTCHA es una barrera de accesibilidad y no debe usarse en el único camino de conversión.
- Consentimiento como checkbox **no premarcado**, con enlace a la política de privacidad (RGPD art. 7 y buena práctica bajo Ley 25.326).

---

## `Accordion` **client**

| Prop | Tipo |
|---|---|
| `items` | `{question, answer}[]` |
| `allowMultiple` | `boolean` — por defecto `true` |

**Accesibilidad:** `<button aria-expanded aria-controls>` dentro de un encabezado del nivel correcto · el panel es un `<div role="region" aria-labelledby>` · funciona con Enter y Espacio · el contenido oculto usa `hidden`, no `height:0` (para que la búsqueda del navegador y los lectores lo omitan correctamente).

---

## `LogoBar`

| Prop | Tipo |
|---|---|
| `logos` | `{src, alt, href?}[]` |
| `heading` | `string?` |

**Accesibilidad:** el `alt` es el nombre de la organización · en el carrusel mobile, scroll-snap nativo, sin JS y sin autoplay.

---

## `InsightCard`

| Prop | Tipo |
|---|---|
| `title` / `excerpt` / `href` | `string` |
| `category` / `readingTime` / `publishedAt` | |
| `cover` | `ImageRef?` |

**Accesibilidad:** fecha en `<time datetime>` · mismo patrón de enlace envolvente que `ServiceCard`.

---

## `Footer`

| Prop | Tipo |
|---|---|
| `columns` | `{title, links[]}[]` |
| `legal` | `{companyName, taxId?, address?}` |
| `social` | `{platform, href}[]` |

**Accesibilidad:** `<footer>` con `<nav aria-label="Pie de página">` · en mobile, columnas colapsables con el mismo patrón que `Accordion` · el email es un `mailto:` con el texto visible completo.

---

## `CookieBanner` **client**

| Prop | Tipo |
|---|---|
| `categories` | `{id, label, description, required}[]` |
| `policyHref` | `string` |

**Estados:** oculto (con consentimiento guardado) · visible · panel de preferencias abierto.

**Reglas:** los botones "Aceptar todas" y **"Rechazar todas" tienen exactamente el mismo peso visual** — mismo tamaño, mismo contraste. Un "rechazar" degradado invalida el consentimiento. Ninguna cookie no esencial se escribe antes de la elección. El consentimiento se registra con marca de tiempo y versión de la política.

**Accesibilidad:** `role="dialog"` con `aria-modal="false"` (no bloquea la página) · foco movido al banner al aparecer · no debe tapar el contenido en 320 px de ancho · reabrible desde un enlace permanente en el footer.

---

## `SectionHeader`

| Prop | Tipo |
|---|---|
| `eyebrow` / `title` / `intro` | `string` |
| `align` | `'left' \| 'center'` |
| `level` | `2 \| 3` |

Es el componente que garantiza que la jerarquía de encabezados nunca se rompa: el nivel es una prop, no una decisión de maquetado.


---

## `Cadena` (grafismo, §05)

**Propósito:** el único recurso gráfico del sistema junto con la órbita. Reemplaza a la iconografía.

| Prop | Tipo |
|---|---|
| `nodos` | `3 \| 4` |
| `orientacion` | `'diagonal' \| 'vertical' \| 'horizontal'` |
| `angulo` | `-46 … -50` — solo en `diagonal` |

**Reglas fijas:** conector = 62 % del diámetro del nodo menor · siempre ascendente hacia la derecha · color de Señal a Pulso, lo más chico es lo más oscuro · en versión de tres nodos funciona como separador entre bloques de texto.

**Accesibilidad:** puramente decorativo, siempre `aria-hidden="true"`.

---

## `Orbita` (grafismo, §05)

**Propósito:** fondo de las superficies de marca.

| Prop | Tipo |
|---|---|
| `arcos` | `3 … 5` |
| `cuadrante` | `'ne' \| 'nw' \| 'se' \| 'sw'` |

**Reglas fijas:** trazo de 2 a 3 px · opacidad entre 6 % y 24 % · **centro siempre fuera del cuadro** · **un solo cuadrante** · nunca centrada en la pieza · nunca el círculo cerrado.

**Accesibilidad:** decorativo, `aria-hidden="true"`, y nunca reduce el contraste del texto por debajo del mínimo del §03.
