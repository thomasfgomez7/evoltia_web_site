# Evoltia — sitio web

Sitio de **Evoltia · Consultoría & Transformación Digital**, con su estrategia, contenido y design system.

**Publicado en** https://thomasfgomez7.github.io/evoltia_web_site/ · dominio previsto: `evoltia.com`.

**Fuente autoritativa:** `Manual-de-Identidad-Evoltia.pdf` v1.0 (Agosto 2026) y su kit de piezas. Detalle en [`docs/ANEXO-fuentes.md`](docs/ANEXO-fuentes.md).

> **Evolución con dirección.**

---

## El sitio

Tres páginas estáticas, en HTML, CSS y JS sin framework ni paso de build.

```
site/
├── index.html                     Home: hero, caso, misión y valores, servicios, método, preguntas, contacto
├── nosotros/index.html            Historia y propósito, manifiesto, equipo
├── casos/aberturas-fisa/          Propuesta para Aberturas FISA, en cinco pestañas
└── assets/
    ├── styles.css                 Tokens del manual y componentes
    ├── main.js                    Nav, acordeón, pestañas, validación, consentimiento, analítica
    └── img/                       Logos e isotipos en SVG, PNG del kit, logo del cliente y fotos del equipo

marca/                             Kit de piezas del manual y los SVG originales
docs/                              Estrategia, contenido y design system
content-models/  inventario/       Modelos de contenido e inventario
.github/workflows/pages.yml        Despliegue automático a GitHub Pages desde site/
```

### Cómo se trabaja

- Los cambios van a `develop` y llegan a `main` por pull request. `main` está protegida y exige una aprobación.
- Al mergear a `main`, el workflow publica `site/` y sella `styles.css` y `main.js` con el hash de su contenido (el `?v=` del HTML), para que el navegador no mezcle versiones.

### Desplegar

El sitio se publica en **GitHub Pages**. Con el repositorio público, alcanza con activar **Settings → Pages → Source: GitHub Actions**; el workflow ya está incluido. Si el repositorio tuviera que ser privado, la alternativa es **Vercel**. Detalle en [`docs/14-despliegue.md`](docs/14-despliegue.md).

### Verla en local

```bash
python -m http.server 4321 --directory site
```

Después, abrir `http://localhost:4321`.

### Cómo cumple el manual

| Regla del manual | Cómo se aplica |
|---|---|
| **§03** Paleta de 8 colores con nombres | Tokens `--nucleo` `--orbita` `--senal` `--pulso` `--tinta` `--papel` `--blanco` `--gris` |
| **§03** Proporción 60 Papel · 25 Núcleo · 10 Órbita · 5 Pulso | Gobierna la alternancia de fondos de las secciones |
| **§03** Pulso una sola vez por pieza | Punto del claim, nodo terminal de la cadena y su conector. Nada más |
| **§03** Fondos grandes en Papel, Blanco solo para superficies apoyadas | `body` en Papel; Blanco solo en tarjetas y en el formulario |
| **§03** Sobre oscuro, cuerpo en Blanco o Lavanda | Bajadas en Blanco al 80 % (`--blanco-suave`), porque el manual no da HEX para Lavanda; Señal reservado a etiquetas y detalles |
| **§03** Solo la paleta del manual | Ningún HEX fuera de los ocho, salvo el rojo de error: bordes y superficies se obtienen con transparencia o mezcla |
| **§04** Escala 96/72/48/32/21/17/12 | **Ningún** tamaño fuera de esa lista en toda la hoja de estilos |
| **§04** Cuerpo en Light 300 | `body { font-weight: 300 }` |
| **§04** Etiqueta en mayúsculas con +22 % de tracking | Aperturas de sección, pies de tarjeta, números del método, footer |
| **§04** Fallbacks Montserrat, Century Gothic; nunca Arial ni Times | Stack de `--fuente` |
| **§02** Logo mínimo 140 px en pantalla | Nav a 148 px, footer a 168 px |
| **§05** La cadena: conector = 62 % del nodo menor | Nodos 14/18/23/29 px, conector 9 px |
| **§05** La órbita: 2–3 px, 6–24 % de opacidad, centro fuera del cuadro, un cuadrante | Cinco arcos en el hero, radios 380–860, opacidades 0,24 → 0,06 |
| **§05** Sin íconos, texturas ni ilustraciones de stock | **El sitio no tiene set de iconos.** Donde iría un ícono, va un nodo |
| **§06** Registro consistente | Voseo en todo el sitio, fijado por la pieza `web-hero` |
| **§06** El protagonista es el cliente | "tu operación", "tu equipo". Evoltia en los verbos |
| **§07** El claim no se edita | Dos líneas, punto final en Pulso, sin otra frase en la sección |
| **§07** Una sola frase por pieza | Una frase del banco por sección. Reparto en `docs/02` |

### Estado verificado

- Sin desbordes horizontales en las tres páginas ni en las cinco pestañas de la propuesta; probado a 320, 375, 768 y 1280 px (noviembre de 2026, en Chromium).
- Auditoría de accesibilidad automática en las tres páginas: un `h1` por página, sin saltos de nivel de título, sin imágenes sin texto alternativo, sin controles ni campos sin nombre, sin referencias ARIA rotas. Pestañas de la propuesta operables con flechas, Inicio y Fin.
- **Sin probar:** Safari, Firefox y lectores de pantalla reales. Se agregó `-webkit-backdrop-filter` para Safari anterior a la versión 18.
- Métricas tipográficas medidas en el DOM: display 86,4 px / −0,03em / 1,05 · titular 47,2 px / −0,02em / 1,15 · etiqueta 12 px / +0,22em · cuerpo Light 300 / 1,65.
- Nodos del método verificados en 14 / 18 / 23 / 29 px con conector de 9 px y colores Órbita → Pulso.
- Nav fija con estado sólido al hacer scroll; menú móvil con foco atrapado y cierre con `Esc`.
- Acordeón del FAQ con `aria-expanded` y `hidden` sincronizados.
- Formulario: validación en `blur`, mensajes por campo con `aria-describedby`, resumen en `role="alert"`, foco al primer campo con error, honeypot activo, sin CAPTCHA.
- Banner de cookies con "Aceptar" y "Rechazar" de idéntico peso visual.
- `prefers-reduced-motion` anula todas las animaciones.
- Todos los pares de color en uso superan WCAG AA; los que no, están documentados como prohibidos.

---

## Documentación

| Documento | Contenido |
|---|---|
| [`docs/00-resumen-ejecutivo.md`](docs/00-resumen-ejecutivo.md) | Propósito, posicionamiento, audiencias, objetivos y KPIs |
| [`docs/01-sitemap-y-prioridades.md`](docs/01-sitemap-y-prioridades.md) | Árbol de páginas y alcance del MVP |
| [`docs/02-plan-de-contenidos-home.md`](docs/02-plan-de-contenidos-home.md) | Copy completo de la Home, con la fuente de cada frase |
| [`docs/02b-plan-de-contenidos-resto-mvp.md`](docs/02b-plan-de-contenidos-resto-mvp.md) | Resto de las páginas del MVP |
| [`docs/03-wireframes.md`](docs/03-wireframes.md) | Layouts por secciones, desktop y mobile |
| [`docs/04-design-system.md`](docs/04-design-system.md) | Color, tipografía, logo, grafismo, botones, contrastes verificados |
| [`docs/05-inventario-de-componentes.md`](docs/05-inventario-de-componentes.md) | 18 componentes con props, estados y notas de accesibilidad |
| [`docs/06-cms-y-modelos-de-contenido.md`](docs/06-cms-y-modelos-de-contenido.md) | Recomendación de CMS y modelos de contenido |
| [`docs/07-notas-tecnicas.md`](docs/07-notas-tecnicas.md) | Stack, rendimiento, SEO, JSON-LD, integraciones, seguridad |
| [`docs/08-accesibilidad-privacidad-legal.md`](docs/08-accesibilidad-privacidad-legal.md) | WCAG 2.2 AA, consentimiento, Ley 25.326, páginas legales |
| [`docs/09-analitica-y-conversion.md`](docs/09-analitica-y-conversion.md) | Conversiones, eventos, tableros y cadencia |
| [`docs/10-plan-de-lanzamiento.md`](docs/10-plan-de-lanzamiento.md) | Fases, hitos y checklist de handoff |
| [`docs/11-figma-spec.md`](docs/11-figma-spec.md) | Estructura de páginas, frames y componentes del archivo Figma |
| [`docs/12-snippets.md`](docs/12-snippets.md) | `ServiceCard`, la cadena, la órbita y el endpoint del formulario |
| **[`docs/13-voz-y-tono.md`](docs/13-voz-y-tono.md)** | **Voz, registro, palabras vetadas y banco de frases completo** |
| **[`docs/14-despliegue.md`](docs/14-despliegue.md)** | **GitHub Pages vs Vercel y pasos de despliegue** |
| [`docs/ANEXO-fuentes.md`](docs/ANEXO-fuentes.md) | Qué archivo manda, qué piezas se usaron y qué lagunas quedan |
| [`content-models/`](content-models/evoltia.content-models.json) | JSON Schema de los 9 modelos de contenido |
| [`inventario/`](inventario/content-inventory.csv) | Inventario de contenido con estado, fuente y responsable |

---

## Pendientes

1. **Largo de la propuesta.** Las pestañas miden entre 4.800 y 12.200 px a 768 de ancho; conviene revisar si se puede recortar.
2. **Pruebas en Safari, Firefox y con lector de pantalla**, que no se pudieron hacer.

### Decisiones cerradas

- **El formulario no tiene backend ni lo tendrá.** Valida y muestra el mensaje de éxito, pero no envía la consulta. El contacto real es `hola@evoltia.com`.
- **Aberturas FISA autorizó la publicación** y es el único caso: no habrá carrusel ni índice de casos.
- **Los seis servicios están confirmados.**
- **Colores: solo los del manual de marca.** Se dejó de usar Lavanda (`#CEC4E8`), que el manual nombra pero no tabula. Única excepción aprobada: el rojo de error del formulario (`#B3261E`).
- **El sitio no publica precios:** se descartó la pregunta «¿Cuánto cuesta?».
- No se agrega imagen para compartir en redes ni se cambia el mensaje del formulario.
- **Misión, visión y valores se quedan en la home.**
- **`main` sigue protegida**: cada cambio entra por pull request con aprobación.
- No hay proveedor de analítica conectado: `main.js` emite los eventos, pero ninguna página crea `dataLayer`.
- Datos societarios, páginas legales, LinkedIn y el resto de las páginas del plan original quedan fuera de alcance.

### Confirmado por el cliente

- Microcopy del hero: *«Primera conversación sin costo. Respondemos en 48 horas hábiles.»*
- Logo de Aberturas FISA — **instalado** en `site/assets/img/clientes/aberturas-fisa.png`.
- Texto de la tarjeta del caso y frases de los cuatro valores de la home.
- Logo de Evoltia en SVG, cuatro versiones y cuatro isotipos — **instalados** en `site/assets/img/` y, sin tocar, en `marca/`.
- Bajada de servicios: *«Contamos con seis frentes de trabajo que se contratan por separado o como programa completo, pero todos empiezan en el mismo lugar: el discovery.»*
- Evoltia no desarrolla software: trabaja con proveedores, elige la herramienta con el cliente, la integra y la deja funcionando. Respondido en el FAQ.
- Redacción del hero: *«… y nos quedamos hasta que el proceso camine solo.»* y *«Nos quedamos hasta que funcione solo.»*, en subjuntivo, también donde el manual usa el indicativo.
