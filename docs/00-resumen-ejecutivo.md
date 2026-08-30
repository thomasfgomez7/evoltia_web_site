# 00 · Resumen ejecutivo

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

## Alcance del MVP

**Fase 1:** Home, Servicios, Cómo trabajamos, Nosotros, Contacto, Gracias, tres legales, 404.
**Fase 2:** Casos, detalle de servicio, Insights.
**Fase 3:** Trabajá con nosotros, versión EN.

La **Home** está implementada en [`site/index.html`](../site/index.html).

## Qué queda abierto

Cinco lagunas del manual y seis entregas del cliente. Listadas en [`ANEXO-fuentes.md`](ANEXO-fuentes.md) y en [`10-plan-de-lanzamiento.md`](10-plan-de-lanzamiento.md). La más urgente es el **SVG del logo**: es lo único que hoy bloquea calidad de producción.
