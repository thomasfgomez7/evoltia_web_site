# 06 · CMS y modelos de contenido

## Recomendación

### Opción recomendada — **Next.js 15 (App Router) + Sanity**

**Por qué encaja con Evoltia específicamente:**

1. **El sitio es un argumento de rigor técnico.** Una consultoría de transformación digital cuyo propio sitio carga en 4 segundos sobre WordPress con seis plugins tiene un problema de credibilidad. El sitio es la primera demostración del servicio.
2. **Volumen de contenido bajo, estructura alta.** Seis servicios, casos, artículos: pocos documentos, muy estructurados. Es exactamente donde un CMS estructurado gana y donde un editor de bloques libre produce inconsistencia.
3. **Sanity Studio se versiona con el código**, así que el modelo de contenido evoluciona en el mismo repo y en la misma revisión. Coherente con el discurso de documentar el conocimiento.
4. **Plan gratuito suficiente** para este volumen (3 usuarios, 10k documentos) — relevante si el presupuesto es acotado.
5. **ISR + revalidación por webhook:** páginas estáticas con actualización inmediata al publicar. Lighthouse 95+ sin trabajo extra.

**Costo real:** Vercel Hobby/Pro + Sanity Free ≈ **USD 0–20 / mes**.

### Alternativa — **Astro + Content Collections (contenido en Markdown en el repo)**

Si nadie fuera del equipo técnico va a editar, es la opción más simple y rápida: cero costo, cero dependencia externa, HTML estático puro. **Se convierte en un problema el día que un comercial quiera cambiar un título.**

### Alternativa — **WordPress**

Sólo si se confirma que el mantenimiento queda en manos no técnicas y que no hay presupuesto de desarrollo continuo. Implica aceptar peor rendimiento, mantenimiento de seguridad permanente y un tema que habrá que disciplinar para que respete el design system. Si se toma este camino: WordPress + ACF Pro + un tema a medida, **nunca** un tema comprado con constructor visual.

### Descartado

- **Webflow:** buen rendimiento y buen editor, pero el costo mensual por sitio y el bloqueo de exportación no se justifican para un sitio de 8 páginas.
- **Framer:** excelente para landing rápida, insuficiente para blog y casos con estructura.

## Decisión sugerida

**Next.js + Sanity**, salvo que la respuesta a la pregunta 7 del brief indique que no hay capacidad de desarrollo post-lanzamiento. En ese caso, WordPress con tema a medida.

---

## Modelos de contenido

Nueve tipos. Los esquemas formales están en `content-models/evoltia.content-models.json` (JSON Schema draft 2020-12).

### `siteSettings` (singleton)
`siteName` · `logoLight` · `logoDark` · `defaultOgImage` · `contactEmail` · `phone` · `socialLinks[]` · `legalEntity{name, taxId, address}` · `analyticsIds{ga4, gtm}` · `navigation{primary[], footer[]}`

### `page`
`title` · `slug` · `seo` · `hero{eyebrow, title, subtitle, ctas[], variant}` · `sections[]` (contenido modular) · `updatedAt`

Las secciones son un array polimórfico: `heroBlock`, `featureGrid`, `serviceGrid`, `processTimeline`, `caseHighlight`, `testimonialBlock`, `logoBar`, `faqBlock`, `ctaBlock`, `richTextBlock`, `teamGrid`. Este es el modelo que permite armar landings nuevas sin tocar código.

### `service`
`title` · `slug` · `icon` (ref al set de iconos) · `summary` (máx. 140) · `body` (rich text) · `deliverables[]` · `idealFor[]` · `relatedServices[]` · `order` · `seo`

### `caseStudy`
`client` · `slug` · `sector` · `logo` · `challenge` · `approach` (rich text) · `outcome` · `metrics[{value, label, note}]` (máx. 3) · `services[]` (refs) · `quote{text, author, role}` · `coverImage` · **`consentApproved` (boolean, obligatorio, por defecto `false`)** · `consentDocument` (archivo) · `publishedAt` · `seo`

> El campo `consentApproved` es una salvaguarda deliberada del modelo: ningún caso se renderiza sin él, y el documento de autorización queda adjunto en el CMS.

### `post`
`title` · `slug` · `excerpt` · `body` (portable text) · `author` (ref) · `category` (ref) · `tags[]` · `coverImage` · `publishedAt` · `readingTime` (calculado) · `seo`

### `teamMember`
`name` · `role` · `photo` · `bio` · `linkedin` · `order` · `active`

### `testimonial`
`quote` · `authorName` · `authorRole` · `company` · `avatar` · `caseStudy` (ref) · `consentApproved` (boolean)

### `faq`
`question` · `answer` (rich text) · `category` · `order` · `showInSchema` (boolean — controla si entra en el JSON-LD `FAQPage`)

### `legalDocument`
`title` · `slug` · `body` · `version` · `effectiveDate`

El versionado de las políticas no es opcional: hay que poder demostrar qué texto aceptó cada usuario y cuándo.

### Objeto compartido `seo`
`metaTitle` (máx. 60, validado) · `metaDescription` (máx. 155, validado) · `ogImage` · `noIndex` (boolean) · `canonicalUrl`

**Los límites de caracteres se validan en el CMS, no se sugieren.** Es la única forma de que se respeten a los seis meses.

---

## Migración de contenido

No hay sitio previo que migrar. La carga inicial es:

| Origen | Destino | Responsable |
|---|---|---|
| Copy de `docs/02` y `docs/02b` | `page`, `service`, `faq` | Evoltia + este entregable |
| Logo en SVG (5 variantes) | `siteSettings` | **Cliente** `[BLOQUEO]` |
| Bios y fotos del equipo | `teamMember` | **Cliente** |
| Caso Aberturas Fisa | `caseStudy` | **Cliente** — requiere autorización firmada |
| Logos de clientes | `siteSettings` | **Cliente** — requiere autorización |
| Datos societarios | `siteSettings.legalEntity` | **Cliente** |
| Textos legales revisados | `legalDocument` | **Cliente** + asesoría legal |

Seis de las siete filas dependen del cliente. Ese es el camino crítico del proyecto, no el desarrollo.
