# 03 · Wireframes a nivel de secciones

Layouts descritos como listas ordenadas de secciones. Grilla base: **12 columnas, gutter 24 px, ancho máximo de contenido 1200 px, márgenes laterales 24 px (mobile) / 48 px (≥1024 px)**.

Breakpoints: `sm 480` · `md 768` · `lg 1024` · `xl 1280`.

---

## HOME — desktop (≥1024 px)

| # | Sección | Grilla | Alto | Notas |
|---|---|---|---|---|
| 0 | **Skip link** | — | — | Visible sólo con foco de teclado |
| 1 | **Nav sticky** | 12 col, logo izq. / menú centro-der. / CTA der. | 72 px | Fondo transparente sobre el hero; al hacer scroll pasa a `#230054` con blur y borde inferior |
| 2 | **Hero** | Texto en col. 1–7; espacio visual 8–12 | ~78 vh | Degradé de marca + arcos de órbita abiertos a la derecha, centro fuera del cuadro. Claim a 96 px en dos líneas. Dos botones en línea. Microcopy debajo |
| 3 | **Barra de confianza** | 12 col, logos distribuidos | 96 px | Sobre `#F0F1EC` |
| 4 | **El problema** | Encabezado 1–8; 3 tarjetas de 4 col c/u | auto | Fondo claro. Tarjetas de igual altura |
| 5 | **Servicios** | Encabezado 1–8; grilla 3×2 de 4 col | auto | Fondo `#230054`. Tarjetas con borde `1px rgba(255,255,255,.12)` |
| 6 | **Método** | Encabezado centrado; 4 pasos en fila | auto | La cadena del §05 en horizontal: nodos de 14 a 29 px, conector de 9 px |
| 7 | **Caso destacado / Por qué Evoltia** | 2×2 en 6+6 col | auto | Fondo claro |
| 8 | **Insights** | 3 tarjetas de 4 col | auto | Oculto en MVP |
| 9 | **FAQ** | Acordeón en col. 3–10 | auto | Una sola columna centrada, mejor para lectura |
| 10 | **CTA final + formulario** | Texto 1–5; formulario 7–12 | auto | Fondo `#0E0020`. El formulario en tarjeta clara para máximo contraste |
| 11 | **Footer** | 4 columnas | auto | `#0E0020` |
| 12 | **Banner de cookies** | Fijo abajo, ancho completo | auto | Aparece a los 800 ms si no hay consentimiento |

### Prioridad above-the-fold (desktop)
1. Logo (en la nav) → 2. Etiqueta → 3. Claim "Evolución con dirección." → 4. Bajada → 5. CTA primario → 6. CTA secundario. Todo lo demás puede quedar debajo del pliegue.

El orden y el contenido salen de la pieza oficial `web-hero-1920x720`. El logo del hero se omite porque ya está en la barra de navegación.

---

## HOME — mobile (<768 px)

Una sola columna. Orden idéntico, con estos cambios:

1. **Nav** colapsa a logo + botón hamburguesa (44×44 px mínimo). El menú abierto es un panel a pantalla completa con el CTA como último ítem, a ancho completo.
2. **Hero**: claim a 40 px, siempre en dos líneas. Los dos botones se apilan; el primario ocupa el 100 % del ancho. Los arcos de órbita se corren a la derecha, fuera del área de texto.
3. **Barra de confianza**: carrusel horizontal con scroll-snap, sin autoplay.
4. **Problema / Servicios**: tarjetas apiladas. Servicios muestra 4 y agrega "Ver los 6 servicios".
5. **Método**: timeline **vertical**, con la línea conectora a la izquierda y los nodos alineados sobre ella. Es la orientación natural del recorrido en mobile.
6. **FAQ**: acordeón a ancho completo, todos cerrados por defecto.
7. **Formulario**: una columna, campos a ancho completo, `inputmode` y `autocomplete` correctos, alto mínimo de 48 px por campo.
8. **CTA flotante**: barra inferior fija con "Agendá un diagnóstico" que aparece tras superar el hero y se oculta al llegar al formulario. Con `padding-bottom: env(safe-area-inset-bottom)`.
9. **Footer**: columnas apiladas, con las secciones de enlaces colapsables.

---

## SERVICIOS — desktop

1. Nav
2. Hero `compact` (col. 1–8, ~40 vh, fondo `#230054` plano)
3. Grilla 3×2 de tarjetas de servicio
4. "¿Por dónde empiezo?" — 3 preguntas, una debajo de otra, con resultado dinámico a la derecha (col. 7–12)
5. Banda de método (4 pasos comprimidos, horizontal)
6. CTA final
7. Footer

**Mobile:** el árbol de decisión pasa a pantallas secuenciales de una pregunta cada una, con indicador de progreso.

---

## CÓMO TRABAJAMOS — desktop

1. Nav
2. Hero `compact`
3. **Diagrama del método** a ancho completo (borde a borde), sticky en el scroll mientras se recorren las etapas
4. Etapa 01 — texto 1–6 / entregable 8–12
5. Etapa 02 — invertido: entregable 1–5 / texto 7–12
6. Etapa 03 — como 01
7. Etapa 04 — como 02
8. "Qué recibís" — lista de entregables en 3 columnas
9. "Principios" — 4 ítems en 2×2
10. "Qué no hacemos" — banda oscura, texto centrado
11. FAQ
12. CTA final
13. Footer

**Mobile:** el diagrama sticky se sustituye por un indicador de paso fijo y compacto ("Etapa 2 de 4"). La alternancia izquierda/derecha se linealiza.

---

## NOSOTROS — desktop

1. Nav
2. Hero `compact`
3. "Qué nos mueve" — texto en col. 3–10, medida de línea 65–75 caracteres
4. "Cómo pensamos" — 3 columnas
5. **Equipo** — grilla de 3 columnas de `TeamCard`
6. "La marca" — 2 columnas: isotipo grande a la izquierda, explicación a la derecha
7. CTA final
8. Footer

**Mobile:** equipo en 2 columnas (las tarjetas de una sola columna hacen la página interminable).

---

## CONTACTO — desktop

1. Nav
2. Encabezado compacto (sin hero grande: reduce el camino al formulario)
3. Dos columnas: **formulario** (col. 1–7) / **canales + "qué pasa después"** (col. 8–12)
4. Footer

**Mobile:** formulario primero, canales después. Nunca al revés — el objetivo de la página es el envío.

---

## Reglas transversales

- **Ritmo vertical:** secciones alternando `120 px` / `96 px` de padding vertical en desktop; `72 px` / `56 px` en mobile.
- **Alternancia de fondo:** responde a la proporción 60 Papel · 25 Núcleo · 10 Órbita · 5 Pulso del §03, no a un criterio estético. En la Home: hero (degradé) → Papel → Papel → Núcleo → Tinta → Papel → Blanco → Tinta → Tinta.
- **Anchos de línea:** los párrafos nunca superan 75 caracteres, sin importar la columna.
- **Foco:** anillo de 2 px con 3 px de separación. Púrpura Órbita sobre claro, Violeta Señal sobre oscuro.
- **Movimiento:** las animaciones de entrada se limitan a opacidad y a 12 px de desplazamiento, y se anulan bajo `prefers-reduced-motion`.
