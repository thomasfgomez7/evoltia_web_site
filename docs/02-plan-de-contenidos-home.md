# 02 · Plan de contenidos y copy — HOME

Todo el copy respeta el §06 (voz y tono) y el §07 (banco de frases) del manual. Ver [`13-voz-y-tono.md`](13-voz-y-tono.md).
**Registro: voseo**, fijado por la pieza oficial `web-hero-1920x720`.

**Slug:** `/`
**Meta title (44):** `Evoltia | Consultoría y transformación digital`
**Meta description (149):** `Diagnosticamos con datos, priorizamos por impacto en el negocio y nos quedamos hasta que el proceso camina solo. Consultoría y transformación digital.`

**Keyword primaria:** consultoría de transformación digital
**Secundarias:** automatización de procesos · diagnóstico digital para empresas · datos e indicadores de gestión

**Frase de sección (§07):** una por sección, nunca dos. Reparto al final de este documento.

---

## 1 · Hero

Estructura calcada de `web-hero-1920x720.png`.

**Etiqueta:** CONSULTORÍA & TRANSFORMACIÓN DIGITAL

**H1 (claim, no se edita):**
> Evolución
> con dirección**.**

Dos líneas. Punto final en Magenta Pulso. Sin ninguna otra frase en la sección.

**Bajada** (literal de la pieza oficial):
> Diagnosticamos con datos, priorizamos con criterio de negocio y nos quedamos hasta que el proceso camina solo.

**CTA primario:** Agendá un diagnóstico → `/contacto`
**CTA secundario:** Cómo trabajamos → `/como-trabajamos`

**Microcopy:** Primera conversación sin costo. Respondemos en 48 horas hábiles.
Confirmado por el cliente.

**Visual:** degradé de marca, arcos de órbita abiertos a la derecha con el centro fuera del cuadro, isotipo en negativo. Sin fotografía ni ilustración.

> **Desvío documentado:** la pieza oficial incluye el logo dentro del hero porque es un banner suelto. En el sitio el logo ya está en la barra de navegación, así que en el hero se omite para no duplicarlo.

---

## 2 · Casos de éxito

**Posición:** inmediatamente después del hero. Es el bloque al que se le da más peso en la página, por pedido del cliente.

**Etiqueta:** CASOS DE ÉXITO
**H2 (frase §07-B):** Nos quedamos hasta que funciona solo.

**Un solo caso: Aberturas FISA.** Tarjeta a dos columnas —logo a la izquierda, contenido a la derecha— que se linealiza en móvil.

| Campo | Contenido |
|---|---|
| Sector | Fabricación de aberturas de aluminio · Villa Bosch, Buenos Aires |
| Título | De la planilla impresa al proceso digital |
| Texto | `[EJEMPLO]` A reemplazar por el cliente |
| Enlace | `casos/aberturas-fisa/` |

**Tratamiento del logo:** 340 px de ancho sobre la tarjeta Blanca, que es el uso que el §03 le da al Blanco sobre Papel. El panel del logo **no** lleva fondo Papel: el archivo del cliente trae fondo blanco y sobre cualquier otro color se recortaría como un rectángulo. Los dos paneles se separan con un filete.

**Interacción:** toda la tarjeta es clicable a través del enlace del título, expandido con `::after`. El lector de pantalla anuncia **un solo enlace** con texto significativo.

**Navegación:** se sumó «Casos» al menú principal, que queda en cinco ítems. Los enlaces se fijaron con `white-space: nowrap` y el menú de escritorio pasa a mostrarse recién a partir de 1100 px; por debajo, cinco ítems más el CTA no entran en una línea.

---

## 3 · El problema

**Etiqueta:** EL PUNTO DE PARTIDA
**H2 (frase §07-A):** Toda empresa está en órbita.

**Separador:** cadena reducida de tres nodos, a −46°. Es el uso que el §05 le da explícitamente.

**Bajada** (del manifiesto):
> Repite un movimiento que alguna vez funcionó y que hoy solo la mantiene donde está. El software no rompe esa órbita: la hace más cara.

**Tres tarjetas.** Las dos primeras son casi literales de los ejemplos de "así sí" del §06 — el manual mismo eligió esos ejemplos porque son la forma correcta de nombrar el problema.

| Título | Copy |
|---|---|
| **La información no coincide** | La información vive en seis planillas y nadie confía en ninguna. Cada reunión empieza discutiendo cuál número es el bueno. |
| **Tu equipo carga los mismos datos tres veces** | Lo que entra por un lado se vuelve a tipear en otro. Eso se arregla, y no hace falta cambiar todos los sistemas para lograrlo. |
| **Crecieron más rápido que la operación** | La demanda subió y el proceso quedó donde estaba. Sin capacidad, una buena campaña no es una oportunidad: es un problema de plazos. |

**Visual:** un nodo de la cadena por tarjeta. **Sin íconos** — el §05 es explícito: con la cadena y la órbita alcanza.

---

## 4 · Servicios

**Etiqueta:** QUÉ HACEMOS
**H2 (frase §07-A):** Primero el negocio. Después el software.

**Bajada:** Seis frentes de trabajo. Se contratan por separado o como programa completo, pero todos empiezan en el mismo lugar: el diagnóstico. — Confirmada por el cliente.

`[A VALIDAR: nombres y alcance de los seis]` El manual **no define un catálogo de servicios**. Estos seis se derivaron del método (§01), del banco de frases (§07-B, C y D) y del territorio que el manual nombra —consultoría, transformación digital, analítica, automatización e IA—. Cada bajada incorpora una frase del banco.

| Servicio | Copy | Frase que incorpora | Slug |
|---|---|---|---|
| **Diagnóstico y hoja de ruta** | Cuatro semanas. Entrevistas, datos y una lista de iniciativas ordenada por impacto en el negocio, con plazo y responsable. | §07-B "Diagnóstico en 4 semanas" | `/servicios/diagnostico-y-hoja-de-ruta` |
| **Automatización de procesos** | Automatizá lo repetitivo, decidí lo importante. Sacamos de encima la carga manual que hoy consume las horas de tu mejor gente. | §07-B literal | `/servicios/automatizacion-de-procesos` |
| **Datos e indicadores** | Del dato al indicador. Del indicador a la decisión. Un tablero corto que se mira todas las semanas, no un informe que nadie abre. | §07-C literal | `/servicios/datos-e-indicadores` |
| **Inteligencia artificial aplicada** | La IA no reemplaza criterio: lo escala. La usamos donde mueve un número del negocio, no donde queda bien en una demo. | §07-C literal | `/servicios/inteligencia-artificial-aplicada` |
| **Implementación** | Acá se implementa, no se sugiere. Trabajamos adentro, con la gente que va a usar el sistema todos los días. | §07-D literal | `/servicios/implementacion` |
| **Adopción y gestión del cambio** | Cambiar duele menos cuando hay método. Acompañamos hasta que el equipo usa el proceso porque le sirve, no porque se lo pidieron. | §07-D literal | `/servicios/adopcion-y-gestion-del-cambio` |

**Fondo:** Violeta Núcleo. Tarjetas con borde, no con sombra.

---

## 5 · Cómo trabajamos

**Etiqueta:** CÓMO TRABAJAMOS
**H2:** Cuatro etapas, y ninguna empieza por la herramienta.

Las cuatro etapas y sus bajadas son **literales de la pieza `post-03-metodo`**. No se reescriben.

| # | Etapa | Bajada (literal) | Entregable `[a validar]` |
|---|---|---|---|
| 01 | **Diagnóstico** | 4 semanas. Datos, no impresiones. | Informe y mapa de procesos |
| 02 | **Priorización** | Por impacto en el negocio. | Hoja de ruta con plazos e indicadores |
| 03 | **Implementación** | Con tu equipo adentro. | Procesos funcionando y documentados |
| 04 | **Adopción** | Hasta que funciona solo. | Equipo capacitado y capacidad instalada |

**Frase de cierre (§07-B):** Si no se mide, no lo llamamos transformación.

**Visual:** la cadena como columna del proceso. Nodos de 14 / 18 / 23 / 29 px, conector de 9 px (62 % del nodo menor), color de Órbita a Pulso. Vertical en mobile, horizontal en desktop.

**Fondo:** Tinta.

---

## 6 · Página del caso — `casos/aberturas-fisa/`

Publicada con **contenido de ejemplo**, marcado como tal en la propia página. Estructura: migas de pan · cabecera con el título del caso · ficha (logo, sector, alcance, duración) · punto de partida · qué hicimos · resultados con tres huecos de métrica · cita del cliente · CTA.

`[PENDIENTE CLIENTE]` Texto real, métricas con su línea base, duración y cita con nombre y cargo.

El componente no se renderiza sin `consentApproved`. Estructura cuando se libere: contexto → problema → qué hicimos → resultado con cifra → cita del cliente. **Sin métricas inventadas:** el §06 exige cifras reales ("Reducimos 40 % el tiempo de cierre contable en cuatro meses"), y una cifra inventada rompe exactamente la promesa de credibilidad sobre la que está construida la marca.

---

## 7 · Por qué Evoltia

**Etiqueta:** POR QUÉ EVOLTIA
**H2 (frase §07-A):** No vendemos tecnología: diseñamos decisiones.

Los cuatro diferenciales desarrollan la personalidad del §01 — directos, concretos, cercanos, expertos — sin nombrarla.

| Título | Copy |
|---|---|
| **Empezamos por la decisión, no por la herramienta** | Antes de elegir un sistema definimos qué decisión tiene que mejorar. Sin eso, cualquier compra es una apuesta cara. |
| **Cifras, plazos y entregables antes que adjetivos** | Cada recomendación viene con un número y una fecha. Se puede auditar si funcionó, y lo hacemos. |
| **Trabajamos con tu equipo adentro** | El proceso lo van a operar ellos. Si lo diseñamos sin ellos, vuelve al día siguiente de que nos vamos. |
| **Nos quedamos hasta que funciona solo** | Te dejamos el proceso funcionando y documentado. El objetivo del proyecto es que no nos necesites. |

---

## 8 · Preguntas frecuentes

**H2:** Lo que nos preguntan antes de empezar

| Pregunta | Respuesta | Estado |
|---|---|---|
| ¿Cuánto dura el diagnóstico? | Cuatro semanas. Entrevistas con quienes ejecutan, revisión de datos y una hoja de ruta priorizada. Al final tenés un documento que se puede leer en una reunión de directorio. | Confirmado por el manual |
| ¿Con qué tamaño de empresa trabajan? | Empresas medianas que ya crecieron más de lo que su operación aguanta. Hablamos con dirección general, operaciones y finanzas: gente que decide y firma. | Literal del §01 |
| ¿Hace falta tener sistemas antes de empezar? | No. En muchos casos el punto de partida son planillas y mensajería. Eso no es un obstáculo: es información sobre cómo funciona hoy tu operación. | Derivado |
| ¿Desarrollan el software o traen proveedores? | — | `[PENDIENTE CLIENTE]` |
| ¿Cuánto cuesta? | — | `[PENDIENTE CLIENTE]` |

JSON-LD `FAQPage` solo con las tres primeras, hasta que las otras estén confirmadas.

---

## 9 · Contacto

**Etiqueta:** CONTACTO
**H2:** Contanos cómo trabaja tu operación hoy.
**Bajada:** Dos líneas alcanzan. Si podemos ayudar, te lo decimos; si no, también.

Ese "si no, también" es la traducción directa de la personalidad *directa* del §01: decimos qué pasa, sin solemnidad.

**Qué pasa después** — tres pasos: leemos y respondemos en 48 h · llamada de 30 minutos · propuesta de diagnóstico si tiene sentido avanzar.

**Campos:** Nombre y apellido · Email corporativo · Empresa · Rol (opc.) · Teléfono (opc.) · ¿Qué querés resolver? · ¿Cómo nos conociste? (opc.) · consentimiento · honeypot oculto.

**Botón:** Enviar consulta → `/gracias`.
**Fondo:** Tinta. Formulario en Blanco, que es su uso correcto según el §03: superficie apoyada.

---

## 10 · Footer

Logo en negativo · descripción de la empresa (literal del §01) · columnas Servicios / Compañía / Legales · `hola@evoltia.com` · `[PENDIENTE]` LinkedIn y datos societarios.

---

## Reparto de frases del banco

Una por sección. Ninguna se repite.

| Sección | Frase | Grupo |
|---|---|---|
| Hero | Evolución con dirección. | Claim |
| Casos de éxito | Nos quedamos hasta que funciona solo. | B |
| El problema | Toda empresa está en órbita. | A |
| Servicios | Primero el negocio. Después el software. | A |
| Método | Si no se mide, no lo llamamos transformación. | B |
| Por qué Evoltia | No vendemos tecnología: diseñamos decisiones. | A |

Quedan sin usar y disponibles para otras páginas: *El cambio se planifica. La ventaja se construye.* · *Trazamos la trayectoria. Ustedes la recorren.* · *Menos PowerPoint. Más producción.*

*Tu operación, sin fricción.* se usa como cierre de la página del caso.
