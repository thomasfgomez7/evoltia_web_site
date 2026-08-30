# 09 · Analítica, medición y plan de conversión

## Jerarquía de conversiones

| Nivel | Acción | Peso | Dónde |
|---|---|---|---|
| **Macro** | Envío del formulario de diagnóstico | 100 | Home, Contacto, Servicios |
| **Macro** | Reserva de reunión (si se activa Cal.com) | 100 | Contacto |
| **Micro** | Clic en `mailto:hola@evoltia.com` | 40 | Footer, Contacto |
| **Micro** | Clic en WhatsApp | 40 | Contacto |
| **Micro** | Completar el árbol "¿Por dónde empiezo?" | 25 | Servicios |
| **Micro** | Ver un caso completo | 20 | Casos |
| **Micro** | Descargar un recurso | 20 | `[futuro]` |
| **Señal** | Alcanzar la sección "Cómo trabajamos" en Home | 10 | Home |
| **Señal** | Abrir 2 o más preguntas del FAQ | 10 | Home, Método |

Las micro-conversiones no son decorado: con 8 leads al mes, el volumen de la macro es demasiado bajo para tomar decisiones. **Las micro-conversiones son las que van a permitir optimizar durante los primeros seis meses.**

## Eventos a instrumentar (GA4)

| Evento | Parámetros | Disparo |
|---|---|---|
| `page_view` | `page_location`, `page_title` | Automático |
| `cta_click` | `cta_label`, `cta_location`, `cta_variant` | Cualquier botón de CTA |
| `form_start` | `form_id` | Primer foco en un campo |
| `form_field_error` | `form_id`, `field_name` | Validación fallida — **detecta dónde abandona la gente** |
| `form_submit` | `form_id` | Envío correcto |
| `generate_lead` | `form_id`, `value` | En `/gracias` — es la conversión oficial |
| `form_error` | `form_id`, `error_type` | Fallo de red o de servidor |
| `section_view` | `section_id` | IntersectionObserver, 50 % visible, una vez por sesión |
| `scroll_depth` | `percent` (25/50/75/90) | |
| `faq_open` | `question` | |
| `service_card_click` | `service_slug`, `position` | |
| `service_finder_complete` | `recommended_service` | Árbol de decisión |
| `outbound_click` | `link_url` | |
| `email_click` / `whatsapp_click` | `location` | |
| `page_not_found` | `referrer`, `requested_path` | Página 404 |
| `consent_update` | `analytics`, `marketing` | Banner de cookies |

**Convención:** `snake_case`, verbo en presente, siempre con parámetro de ubicación. Documentar el plan de medición en una hoja compartida antes de implementar, no después.

## Atribución y CRM

- Capturar `utm_*`, `gclid` y `referrer` en la primera visita y persistirlos en `sessionStorage` hasta el envío. Enviarlos como campos ocultos del formulario.
- El backend reenvía el lead al CRM con la fuente ya resuelta. Sin esto es imposible saber qué canal genera clientes, sólo qué canal genera visitas.
- Etiquetar el lead con la página de origen: un lead que llega desde `/servicios/documentacion-del-conocimiento` es cualitativamente distinto de uno que llega desde la Home.

## Tableros

### 1 · Comercial (semanal) — para el equipo
Leads del período · leads por página de origen · leads por canal (UTM) · tasa de conversión visita→lead · micro-conversiones · consultas por servicio solicitado.

### 2 · Adquisición (mensual)
Sesiones por canal · páginas de entrada más frecuentes · consultas de Search Console con impresiones, clics y posición · páginas con impresiones altas y CTR bajo (oportunidad de reescribir el title) · enlaces entrantes nuevos.

### 3 · Comportamiento y contenido (mensual)
Scroll depth en Home · sección donde más se abandona · tasa de apertura del FAQ y preguntas más abiertas (**alimenta directamente el copy de la Home**) · servicios más clicados frente a servicios más vendidos.

### 4 · Salud técnica (mensual)
Core Web Vitals desde CrUX · errores 404 con su referrer · errores de envío de formulario · disponibilidad.

## Cadencia de reporte

| Frecuencia | Quién | Qué se decide |
|---|---|---|
| **Semanal**, 15 min | Responsable comercial | Seguimiento de leads. Sin análisis: sólo que ninguno quede sin responder |
| **Mensual**, 1 h | Comercial + marketing | Revisión de tableros 1–3. Se define **un** cambio a probar |
| **Trimestral**, 2 h | Equipo completo | Revisión de KPIs contra meta, prioridades de contenido, decisión sobre fase 2 |
| **Semestral** | + asesoría | Auditoría de accesibilidad, rendimiento y privacidad |

## Programa de optimización

Primeros 90 días: **medir, no experimentar.** Con el volumen previsto, un test A/B necesitaría meses para alcanzar significancia. Lo que sí conviene hacer:

1. Grabaciones de sesión y mapas de calor con una herramienta respetuosa de la privacidad (Microsoft Clarity o Hotjar, siempre bajo consentimiento), durante 60 días.
2. Cinco pruebas de usuario moderadas con perfiles reales del público objetivo. Cinco sesiones detectan la mayoría de los problemas graves de usabilidad; es incomparablemente más barato y rápido que un test A/B a este volumen.
3. Revisión de las consultas de Search Console a los 90 días para ajustar el copy a cómo la gente realmente nombra el problema.

Recién con más de 1.000 sesiones mensuales y más de 30 conversiones al mes tiene sentido plantear tests A/B, y sólo sobre el hero y el CTA principal.
