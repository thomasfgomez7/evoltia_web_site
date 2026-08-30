# 07 · Notas técnicas e implementación

## Stack

| Capa | Recomendado | Alternativa |
|---|---|---|
| Framework | Next.js 15, App Router, React Server Components | Astro 5 |
| Lenguaje | TypeScript en modo estricto | — |
| Estilos | CSS Modules + custom properties, o Tailwind con los tokens del design system | — |
| CMS | Sanity | WordPress + ACF |
| Hosting | Vercel | Netlify / Cloudflare Pages |
| Formularios | Route handler propio + Resend | Formspree |
| Analítica | GA4 con consentimiento, o Plausible | — |
| Tipografía | `next/font` con Poppins autoalojada | — |

**Nota sobre la tipografía:** usar `next/font/google` con `display: 'swap'` y `subsets: ['latin','latin-ext']`. Next descarga y autoaloja los archivos en el build, lo que elimina la conexión a `fonts.gstatic.com` — mejor rendimiento y una preocupación menos en la política de cookies. `latin-ext` es necesario para acentos y la "ñ".

## Enfoque mobile-first

1. Escribir el CSS base para 320 px y ampliar con `min-width`. Nunca al revés.
2. Verificar a **320 px sin scroll horizontal** (WCAG 1.4.10) y a **400 % de zoom**.
3. Objetivos táctiles de 44×44 px con al menos 8 px de separación.
4. Nada de hover como única vía: todo estado de hover tiene equivalente en foco y en toque.
5. Respetar `env(safe-area-inset-*)` en elementos fijos.
6. `font-size` de inputs a 16 px como mínimo — por debajo, iOS hace zoom al enfocar.
7. Probar con conexión lenta simulada y en un dispositivo Android de gama media real, no sólo en el simulador.

## Objetivos de rendimiento

| Métrica | Objetivo | Límite |
|---|---|---|
| Lighthouse Rendimiento (mobile) | ≥ 95 | 90 |
| Lighthouse Accesibilidad | 100 | 100 |
| Lighthouse Mejores prácticas / SEO | 100 | 95 |
| LCP | < 1,8 s | 2,5 s |
| INP | < 150 ms | 200 ms |
| CLS | < 0,05 | 0,1 |
| JS de la Home (comprimido) | < 90 KB | 120 KB |
| Peso total de la Home | < 500 KB | 800 KB |

**Cómo se alcanza:** renderizado estático de todas las páginas del MVP · cero JS para navegación, acordeón y formulario hasta que se necesita (islas) · imágenes en AVIF/WebP con dimensiones explícitas · fuentes autoalojadas con `preload` sólo del peso 700 usado en el `h1` · sin librerías de animación · sin dependencias de terceros antes del consentimiento.

**Presupuesto de rendimiento en CI:** Lighthouse CI en cada pull request, con fallo del build si el rendimiento baja de 90 o la accesibilidad de 100.

## SEO técnico

- URLs en minúsculas, con guiones, sin barra final, en español y sin acentos en el slug.
- Un solo `h1` por página; jerarquía sin saltos.
- `<link rel="canonical">` autorreferencial en todas las páginas.
- `sitemap.xml` generado en el build; `robots.txt` con la referencia al sitemap.
- Migas de pan a partir del segundo nivel, con `BreadcrumbList`.
- `/gracias` y las páginas legales con `noindex`.
- Imágenes con `alt` descriptivo; las decorativas con `alt=""`.
- Enlazado interno explícito: cada servicio enlaza al método y a los casos relacionados.
- Preparar `hreflang` desde el inicio aunque la versión EN llegue en fase 3 — retrofitearlo es caro.

## Plantillas de metadatos

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://evoltia.com'),
  title: { default: 'Evoltia | Consultoría y transformación digital',
           template: '%s | Evoltia' },
  description: 'Ordenamos y documentamos tu operación antes de digitalizarla. Relevamiento, diagnóstico de madurez y hoja de ruta con plazos.',
  openGraph: {
    type: 'website', locale: 'es_AR', siteName: 'Evoltia',
    url: 'https://evoltia.com',
    images: [{ url: '/og/default.png', width: 1200, height: 630,
               alt: 'Evoltia — Evolución con dirección.' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}
```

**Imagen OG:** 1200×630, fondo con el gradiente de marca, logo blanco arriba a la izquierda, título en Poppins 700 a 64 px, tagline abajo. Generarla con `next/og` a partir del título de cada página, para que ninguna página quede sin OG propia.

## Datos estructurados (JSON-LD)

**En todas las páginas** — `Organization` + `WebSite`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://evoltia.com/#organization",
      "name": "Evoltia",
      "url": "https://evoltia.com",
      "logo": "https://evoltia.com/logo.png",
      "email": "hola@evoltia.com",
      "slogan": "Evolución con dirección.",
      "description": "Consultoría y transformación digital.",
      "sameAs": ["[PLACEHOLDER LinkedIn]"],
      "address": { "@type": "PostalAddress", "addressCountry": "AR" }
    },
    {
      "@type": "WebSite",
      "@id": "https://evoltia.com/#website",
      "url": "https://evoltia.com",
      "name": "Evoltia",
      "publisher": { "@id": "https://evoltia.com/#organization" },
      "inLanguage": "es-AR"
    }
  ]
}
```

**Por tipo de página:**

| Página | Tipo |
|---|---|
| Servicios (índice y detalle) | `Service` con `provider` apuntando a la Organization, `serviceType` y `areaServed` |
| Caso | `Article` con `about`; **no** usar `Review` ni `AggregateRating` sin reseñas verificables |
| Insight | `Article` con `author`, `datePublished`, `dateModified`, `image` |
| Cualquiera con FAQ | `FAQPage`, **sólo** con preguntas cuya respuesta esté confirmada |
| Interiores | `BreadcrumbList` |
| Contacto | `ContactPoint` dentro de la Organization |

**Advertencia:** no marcar como `FAQPage` las preguntas marcadas `[PLACEHOLDER]` en `docs/02`. Marcar datos que no se han confirmado es una penalización de Google esperando a ocurrir.

## Integraciones

| Función | Recomendación | Nota |
|---|---|---|
| Analítica | GA4 vía GTM con Consent Mode v2 | Sólo tras consentimiento. Alternativa sin cookies: Plausible |
| CRM | HubSpot Free · alternativa: Pipedrive | El formulario postea al backend propio y este reenvía al CRM: así el envío nunca depende de un tercero |
| Email transaccional | Resend | Aviso interno + acuse al remitente |
| Reserva de reuniones | Cal.com | Embebido sólo tras consentimiento; enlace directo como respaldo |
| Chat / WhatsApp | Enlace `wa.me` estático | **No** usar widget de chat: carga terceros, empeora INP y no aporta en un ciclo de venta consultivo |
| Píxeles publicitarios | Ninguno al lanzar | Añadir sólo si hay campañas pagas, y siempre bajo Consent Mode |
| SSO / IDP | No aplica | No hay área privada en el alcance |
| Búsqueda | No aplica en MVP | Con menos de 20 páginas, la navegación alcanza |

**Principio de integración:** ningún script de terceros se carga antes del consentimiento, y ninguno se carga en la ruta crítica de renderizado. Todos con `strategy="afterInteractive"` o posterior.

## Seguridad y cabeceras

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-...';
  img-src 'self' data: https://cdn.sanity.io; style-src 'self' 'unsafe-inline';
  font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

Más: limitación de tasa en el endpoint del formulario (5 envíos por IP y hora), validación en servidor con Zod, y las variables de entorno nunca expuestas con el prefijo `NEXT_PUBLIC_` salvo que sean realmente públicas.

## Repositorio y calidad

Monorepo simple: `/app`, `/components`, `/lib`, `/sanity`, `/public`.
CI en cada PR: TypeScript, ESLint, Prettier, `axe-core` sobre las rutas construidas, Lighthouse CI, y previsualización por rama en Vercel.
Convención de commits y una plantilla de PR con una lista de verificación de accesibilidad.
