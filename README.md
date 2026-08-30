# Evoltia — sitio web

Estrategia, contenido, design system y landing page de **Evoltia · Consultoría & Transformación Digital**.

**Fuente autoritativa:** `Manual-de-Identidad-Evoltia.pdf` v1.0 (Agosto 2026) y su kit de piezas. Detalle en [`docs/ANEXO-fuentes.md`](docs/ANEXO-fuentes.md).

> **Evolución con dirección.**

---

## La landing page

```
site/
├── index.html                     Home completa, semántica y accesible
├── evoltia-landing.artifact.html  Versión autocontenida (generada)
└── assets/
    ├── styles.css                 Tokens del manual y componentes
    ├── main.js                    Nav, acordeón, validación, consentimiento, analítica
    └── img/                       Logos e isotipos del kit + versiones optimizadas

marca/                             Copia íntegra del kit de piezas del manual
.github/workflows/pages.yml        Despliegue automático a GitHub Pages desde site/
vercel.json                        Config alternativa para Vercel
```

### Desplegar

Proyecto universitario, no productivo: la recomendación es **GitHub Pages**. Con el repositorio público, alcanza con activar **Settings → Pages → Source: GitHub Actions**; el workflow ya está incluido. Si el repositorio tiene que ser privado, la opción es **Vercel** y `vercel.json` ya está configurado. Detalle en [`docs/14-despliegue.md`](docs/14-despliegue.md).

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
| **§03** Sobre oscuro, cuerpo en Blanco o Lavanda | Bajadas en `--lavanda`; Señal reservado a etiquetas y detalles |
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

- Sin desbordes horizontales a ningún ancho; probado a 320, 375 y 1280 px.
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

## Lo que bloquea la producción

1. **Logo de Evoltia en SVG**, cuatro versiones y cuatro isotipos. El kit entrega PNG; el isotipo se muestra a 300 px y el archivo mide 297 px, o sea 1×.
2. **Validación de los nombres y el alcance de los seis servicios.** El manual no define un catálogo; los del sitio se derivaron del método y del banco de frases. La bajada de la sección ya está confirmada.
3. **HEX oficial de Lavanda.** Se nombra en el §03 pero no está tabulado. Se usa `#CEC4E8`, muestreado del hero oficial.
4. **Bios, fotos y roles del equipo**, y la historia de origen para `/nosotros`.
5. **Definir** política de precios y si Evoltia implementa con equipo propio o integra proveedores. Son las dos respuestas del FAQ que siguen abiertas.
6. **Autorización del caso de cliente**, si en algún momento se publica. La salvaguarda `consentApproved` está en el modelo de contenido.

> **Alcance:** proyecto universitario, no productivo. El formulario simula el envío y no hay backend; los datos societarios y las páginas legales quedan fuera de alcance por el mismo motivo.

### Confirmado por el cliente

- Microcopy del hero: *«Primera conversación sin costo. Respondemos en 48 horas hábiles.»*
- Rótulo de la barra de confianza: *«Empresas que ya cambiaron de trayectoria»*, con Aberturas FISA como único logo — **archivo instalado** en `site/assets/img/clientes/aberturas-fisa.png`.
- Bajada de servicios: *«Seis frentes de trabajo. Se contratan por separado o como programa completo, pero todos empiezan en el mismo lugar: el diagnóstico.»*
