# Anexo · Fuentes del proyecto

## Fuente autoritativa

**`manual-marca-evoltia/Manual-de-Identidad-Evoltia.pdf`** — 22 páginas, versión 1.0, Agosto 2026.

Nueve secciones: 01 La marca · 02 Logo · 03 Color · 04 Tipografía · 05 Grafismo · 06 Voz y tono · 07 Banco de frases · 08 Piezas · 09 Checklist.

Junto al PDF viene el kit de piezas, que también es fuente:

| Grupo | Archivos |
|---|---|
| Logo | `evoltia-principal` · `evoltia-negativo` · `evoltia-blanco` · `evoltia-tinta` |
| Isotipo | `isotipo-color` · `isotipo-blanco` · `isotipo-negativo` · `isotipo-tinta` |
| Fondos | `fondo-01-orbita-oscuro` · `fondo-02-papel-claro` · `fondo-03-claim` · `fondo-04-degrade-limpio` |
| Banners | **`web-hero-1920x720`** · `email-encabezado-1200x300` · `linkedin-perfil-1584x396` · `linkedin-empresa-1128x191` |
| Redes | `post-01-claim` · `post-02-frase` · **`post-03-metodo`** · `story-1080x1920` · `avatar-800x800` |
| Presentación | `slide-01-portada` · `slide-02-seccion` · `slide-03-contenido` · `slide-04-cierre` |
| Papelería | `tarjeta-frente` · `tarjeta-dorso` · `firma-email` |
| Grafismo | `grafismo-construccion` |

Copia completa en [`marca/`](../marca/).

### Dos piezas que decidieron el diseño

**`web-hero-1920x720.png`** es la maqueta oficial del hero del sitio. De ahí salen, sin interpretación: la disposición (etiqueta → claim en dos líneas → bajada → un solo CTA), el color del botón (fondo Señal, texto Núcleo), el color de la bajada (Lavanda, que el PDF no tabula), y el registro de la llamada a la acción — **«Agendá un diagnóstico»**, en voseo, que es lo que fija el registro de todo el sitio.

**`post-03-metodo.png`** entrega el método completo con sus nombres y bajadas exactas:

| | Etapa | Bajada |
|---|---|---|
| 01 | Diagnóstico | 4 semanas. Datos, no impresiones. |
| 02 | Priorización | Por impacto en el negocio. |
| 03 | Implementación | Con tu equipo adentro. |
| 04 | Adopción | Hasta que funciona solo. |

Y muestra la cadena de nodos usada como columna vertical del proceso, que es como está implementada la sección "Cómo trabajamos".

---

## Archivo anterior, descartado

Una primera versión del manual (`Desktop/Evoltia/Manual-de-Identidad-Evoltia.pdf`, 27 páginas) llegó con las páginas 2 a 26 vacías: solo tenía portada y contracubierta. Verificado a nivel de content stream — esas páginas contenían un único rectángulo de fondo de entre 137 y 276 bytes, sin fuentes ni imágenes. **No debe usarse.** El archivo correcto es el de `manual-marca-evoltia/`.

De aquel archivo sobrevive un solo dato útil que el manual definitivo no contradice: el degradé de portada, con paradas en `#0E0020` → `#230054` (55 %) → `#4E14A0`, usado en el fondo del hero.

---

## Documento de contexto, no autoritativo

**`Documento de caso de negocio y relevamiento organizacional.pdf`** — trabajo de la Facultad de Ciencias Económicas (UBA), Actuación Profesional del Licenciado en Sistemas de Información. Caso: **Aberturas Fisa**.

Es un **caso de cliente**, no una fuente de marca. Se leyó como contexto y **no se usó** para definir servicios, voz ni identidad: todo eso sale del manual. Su único uso posible en el sitio es como caso de estudio, y requiere autorización del sponsor (Gabriel Nicolás Fisicaro).

---

## Lagunas abiertas del manual

| # | Laguna | Impacto |
|---|---|---|
| 1 | **Lavanda** se nombra en las reglas rápidas del §03 pero no está en la tabla de paleta | Se usa `#CEC4E8`, muestreado del hero oficial. Confirmar |
| 2 | **No hay activos vectoriales** | El isotipo se muestra a 300 px y el PNG mide 297 px (1×). Hace falta SVG |
| 3 | Dos ratios de contraste del §03 difieren levemente del cálculo WCAG 2.1 | Sin impacto en decisiones; corregir en la próxima versión del manual |
| 4 | El manual **no define un catálogo de servicios** | Los seis servicios del sitio se derivaron del banco de frases y del método. Requieren validación |
| 5 | Sin escala de espaciado ni guía de movimiento | Derivados y marcados como tales en el design system |
