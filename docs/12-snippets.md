# 12 · Snippets de referencia

## `ServiceCard` — React / TypeScript

Dos cosas lo hacen específico de Evoltia:

1. **No lleva ícono.** El §05 del manual establece que la cadena y la órbita alcanzan como sistema gráfico —*"no hace falta agregar íconos, texturas ni ilustraciones de stock"*—. El marcador de la tarjeta es un **nodo de la cadena**.
2. **Enlace envolvente por pseudo-elemento.** El `<a>` real está sobre el título y su `::after` cubre la tarjeta: el lector de pantalla anuncia un solo enlace con texto significativo y el mouse puede hacer clic en cualquier parte.

```tsx
// components/ServiceCard.tsx
import Link from "next/link";
import styles from "./ServiceCard.module.css";

export type ServiceCardProps = {
  /** Tamaño del nodo de la cadena, 1 a 4. No hay ícono: ver manual §05. */
  nodo?: 1 | 2 | 3 | 4;
  title: string;
  /** Máx. 140 caracteres. Se valida en el CMS. */
  description: string;
  href?: string;
  surface?: "light" | "dark";
};

export function ServiceCard({
  nodo = 1,
  title,
  description,
  href,
  surface = "light",
}: ServiceCardProps) {
  return (
    <li
      className={[
        styles.card,
        surface === "dark" && styles.dark,
        href && styles.link,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.nodo} data-nodo={nodo} aria-hidden />

      <h3 className={styles.title}>
        {href ? <Link href={href}>{title}</Link> : title}
      </h3>

      <p className={styles.body}>{description}</p>

      {href && (
        <span className={styles.foot}>
          Ver servicio
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth={2}
            strokeLinecap="round" strokeLinejoin="round" aria-hidden
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      )}
    </li>
  );
}
```

```css
/* components/ServiceCard.module.css */
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  padding: var(--sp-6);
  border-radius: var(--r-md);
  /* Blanco solo para superficies apoyadas sobre Papel (manual §03) */
  background: var(--blanco);
  border: 1px solid var(--borde-claro);
}

/* Nodo de la cadena. Sobre claro va en Órbita; sobre oscuro, en Señal. */
.nodo { border-radius: 50%; background: var(--orbita); margin-bottom: var(--sp-2); }
.nodo[data-nodo="1"] { width: 14px; height: 14px; }
.nodo[data-nodo="2"] { width: 18px; height: 18px; }
.nodo[data-nodo="3"] { width: 23px; height: 23px; }
.nodo[data-nodo="4"] { width: 29px; height: 29px; }

/* SUBTÍTULO 21 · Medium 500 · interlínea 1,3 (manual §04) */
.title { font-size: var(--fs-sub); font-weight: 500; line-height: 1.3; color: var(--nucleo); }
/* CUERPO 17 · Light 300 · interlínea 1,65 */
.body  { font-size: var(--fs-cuerpo); font-weight: 300; line-height: 1.65; color: var(--gris); }

.dark        { background: var(--superficie-oscura); border-color: var(--borde-oscuro); }
.dark .nodo  { background: var(--senal); }
.dark .title { color: var(--blanco); }
.dark .body  { color: var(--lavanda); }

.link { transition: border-color 150ms var(--ease); }
.link:hover { border-color: var(--senal); }

/* El enlace del título cubre la tarjeta entera. */
.link a { text-decoration: none; color: inherit; }
.link a::after { content: ""; position: absolute; inset: 0; border-radius: inherit; }
.link a:focus-visible { outline: none; }
.link:has(a:focus-visible) { outline: 2px solid var(--senal); outline-offset: 3px; }

/* ETIQUETA 12 · Medium · +22 % · mayúsculas. Es la firma de la marca. */
.foot {
  margin-top: auto;
  padding-top: var(--sp-4);
  display: inline-flex; align-items: center; gap: var(--sp-2);
  font-size: var(--fs-etiqueta); font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--senal);
}
.card:not(.dark) .foot { color: var(--orbita); }
.foot svg { transition: transform 150ms var(--ease); }
.link:hover .foot svg { transform: translateX(4px); }

@media (prefers-reduced-motion: reduce) {
  .link, .foot svg { transition: none; }
}
```

**Uso:**

```tsx
<ul className="grid grid--3">
  {services.map((s, i) => (
    <ServiceCard
      key={s.slug}
      nodo={((i % 4) + 1) as 1 | 2 | 3 | 4}
      title={s.title}
      description={s.summary}
      href={`/servicios/${s.slug}`}
      surface="dark"
    />
  ))}
</ul>
```

La versión HTML equivalente, ya funcionando, está en [`site/index.html`](../site/index.html), sección `#servicios`.

---

## `Cadena` — el grafismo del §05

Tres nodos crecientes a −46°, usados como separador entre bloques de texto.

```html
<div class="cadena" aria-hidden="true">
  <i></i><b></b><i></i><b></b><i></i>
</div>
```

```css
.cadena {
  display: flex; align-items: center; gap: 6px;
  transform: rotate(-46deg);        /* entre -46 y -50 grados, ascendente a la derecha */
  transform-origin: left center;
  width: max-content;
  margin-block: 56px var(--sp-8);   /* aire para lo que sube al rotar */
}
.cadena i { display: block; border-radius: 50%; background: var(--senal); }

/* Lo más chico es lo más oscuro; lo más grande, lo más brillante. */
.cadena i:nth-of-type(1) { width: 7px;  height: 7px; }
.cadena i:nth-of-type(2) { width: 10px; height: 10px; background: #b662fd; }
.cadena i:nth-of-type(3) { width: 13px; height: 13px; background: var(--pulso); }

/* Conector: 62 % del diámetro del nodo más chico. */
.cadena b { display: block; width: 10px; height: 4px; background: var(--senal); border-radius: 2px; }
```

---

## `Orbita` — arcos abiertos

Centro fuera del cuadro, un solo cuadrante, trazo de 2 a 3 px, opacidad entre 6 % y 24 %. Nunca centrada, nunca cerrada.

```html
<svg viewBox="0 0 1000 1000" fill="none" aria-hidden="true">
  <g stroke="#fff" stroke-linecap="round">
    <path d="M731.3 768.7 A380 380 0 0 1 731.3 231.3"   stroke-opacity=".24" stroke-width="2"/>
    <path d="M646.4 853.6 A500 500 0 0 1 646.4 146.4"   stroke-opacity=".18" stroke-width="2"/>
    <path d="M561.6 938.4 A620 620 0 0 1 561.6 61.6"    stroke-opacity=".13" stroke-width="2.5"/>
    <path d="M476.7 1023.3 A740 740 0 0 1 476.7 -23.3"  stroke-opacity=".09" stroke-width="2.5"/>
    <path d="M391.9 1108.1 A860 860 0 0 1 391.9 -108.1" stroke-opacity=".06" stroke-width="3"/>
  </g>
</svg>
```

El centro de todos los arcos está en (1000, 500) del `viewBox`, y el SVG se desplaza con `translate` para que ese punto quede fuera del viewport. Los cinco radios van de 380 a 860 y cada arco cubre 90°.

---

## Endpoint del formulario — Next.js route handler

Valida en servidor, respeta el honeypot y nunca depende de un tercero para responderle al usuario.

```ts
// app/api/contacto/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const Payload = z.object({
  nombre: z.string().min(2).max(120),
  email: z.string().email(),
  empresa: z.string().min(2).max(160),
  rol: z.string().max(120).optional(),
  telefono: z.string().max(40).optional(),
  mensaje: z.string().min(10).max(2000),
  origen: z.string().max(40).optional(),
  consentimiento: z.literal(true),
  sitio_web: z.string().max(0),          // honeypot: debe venir vacío
  utm: z.record(z.string()).optional(),
});

export async function POST(request: Request) {
  const parsed = Payload.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Revisá los datos del formulario." },
      { status: 400 }
    );
  }

  const lead = parsed.data;

  // 1. Aviso interno — es lo único que no puede fallar en silencio.
  await sendInternalEmail(lead);

  // 2. CRM. Si falla, el lead ya está a salvo en el correo interno.
  void pushToCrm(lead).catch((err) => console.error("CRM", err));

  return NextResponse.json({ ok: true });
}
```

El mensaje de error usa voseo, igual que el resto del sitio: *"Revisá los datos"*, no *"Revise los datos"*.
