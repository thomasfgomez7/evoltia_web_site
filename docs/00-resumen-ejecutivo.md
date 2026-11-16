# 00 · Resumen ejecutivo

> **Estado: noviembre de 2026.** Propósito, posicionamiento y audiencias siguen vigentes. El alcance y los pendientes de abajo se actualizaron; los KPIs son del plan original y hoy no se miden, porque no hay proveedor de analítica conectado y el formulario no tiene backend.

Fuente autoritativa: `Manual-de-Identidad-Evoltia.pdf` v1.0 (Agosto 2026) y su kit de piezas. Ver [`ANEXO-fuentes.md`](ANEXO-fuentes.md).

## Propósito del sitio

Evoltia es **consultoría y transformación digital para empresas medianas que ya crecieron más de lo que su operación aguanta** (§01). El sitio tiene que convertir esa frase en una conversación calificada.

No es un catálogo de tecnologías. Es la primera demostración del servicio: si la marca promete diagnóstico con datos y entregables concretos, el sitio tiene que ser concreto antes que impresionante.

## Posicionamiento

El isotipo es la tesis: una órbita cerrada y una cadena de nodos que la atraviesa y se va, creciendo a medida que se aleja. El manifiesto lo dice sin metáfora:

> Toda empresa está en órbita: repite un movimiento que alguna vez funcionó y que hoy solo la mantiene donde está. Evoltia existe para romper esa órbita. **Transformar no es comprar software: es cambiar de trayectoria.**

La palabra que hace el trabajo es **dirección**, y tiene dos sentidos ciertos a la vez: hacia dónde se va, y quién conduce.

## Audiencias

> **Dirección general, operaciones y finanzas. Gente que decide y firma, no que administra herramientas.** Por eso la marca evita la jerga tecnológica: el interlocutor mide en plazos, costos y riesgo, no en stacks. — §01

| # | Quién | Qué busca | Qué tiene que ver en el sitio |
|---|---|---|---|
| 1 | **Dirección general / CEO / socio gerente** | Crecer sin que se rompa la operación | Riesgo de crecer sin capacidad; cambio de trayectoria; plazos |
| 2 | **Operaciones / COO / gerente de operaciones** | Dejar de apagar incendios | Procesos documentados, doble carga eliminada, adopción real |
| 3 | **Finanzas / CFO** | Justificar la inversión | Cifras, plazos, indicadores, auditabilidad del resultado |

**Corrección importante respecto de un brief genérico de consultoría IT:** el público **no es el CIO ni el área de sistemas**. El manual es explícito. Todo argumento técnico se traduce a plazo, costo o riesgo antes de entrar en una página.

## Objetivos de negocio

1. **Generar solicitudes de diagnóstico calificadas** — la conversión primaria.
2. **Acreditar método, no promesas.** El §06 dice que la consultoría "promete mucho y define poco" y que la marca se distingue por lo contrario. El sitio es donde eso se demuestra.
3. **Reducir el costo de la primera reunión:** que el prospecto llegue habiendo entendido el enfoque.
4. **Sostener la marca** como activo reutilizable en propuestas y presentaciones.

## KPIs

| KPI | Definición | Meta inicial | Fuente |
|---|---|---|---|
| Solicitudes de diagnóstico / mes | Envíos válidos del formulario | `[PLACEHOLDER]` sugerido: 8 | Analítica + CRM |
| Conversión visita → lead | Leads / sesiones únicas | ≥ 2,5 % | Analítica |
| Leads que llegan a reunión | MQL → SQL | ≥ 40 % | CRM |
| Scroll hasta "Cómo trabajamos" | % de sesiones | ≥ 45 % | Evento `section_view` |
| INP | Núcleo Web Vital | < 200 ms | CrUX |
| Posición media, keyword primaria | Search Console | Top 20 a 6 meses | GSC |

> Las metas marcadas `[PLACEHOLDER]` necesitan línea base. Medir 60 días antes de fijarlas — es el mismo criterio que la marca le aplica a sus clientes: *si no se mide, no lo llamamos transformación*.

## Alcance

**Publicado:** El sitio publicado son tres páginas estáticas en HTML, CSS y JS sin framework, desplegadas en GitHub Pages: la home, `/nosotros` y la propuesta para Aberturas FISA en `/casos/aberturas-fisa/`. La home incluye servicios, método, preguntas frecuentes y contacto como secciones, no como páginas aparte.

**Del plan original no se construyó:** las páginas de servicios, cómo trabajamos, contacto, gracias, legales, 404, casos (índice), insights y la versión en inglés. Tampoco el sitio en Next.js con CMS ni el backend del formulario.

**Decisiones cerradas por el cliente:** los seis servicios están confirmados · Aberturas FISA autorizó la publicación y será el único caso · el formulario no tendrá backend · el dominio previsto es `evoltia.com`.

## Qué queda abierto

1. **Largo de la propuesta para Aberturas FISA:** las pestañas son extensas y conviene revisar si se pueden recortar.

No se va a agregar imagen para compartir en redes, y el sitio no publica precios.

Detalle en el [README](../README.md).
