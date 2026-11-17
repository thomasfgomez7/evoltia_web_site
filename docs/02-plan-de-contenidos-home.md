# 02 · Contenidos y copy — HOME

> **Estado: noviembre de 2026.** Este documento describe la home **tal como está publicada**. Cada sección indica de dónde sale su texto. Los cambios respecto del plan original están al final, en «Historial de decisiones».

Todo el copy respeta el §06 (voz y tono) y el §07 (banco de frases) del manual. Ver [`13-voz-y-tono.md`](13-voz-y-tono.md).
**Registro: voseo**, fijado por la pieza oficial `web-hero-1920x720`.

**Slug:** `/`
**Meta title:** `Evoltia | Consultoría y transformación digital`
**Meta description:** `Diagnosticamos con datos, priorizamos con criterio de negocio y nos quedamos hasta que el proceso camine solo. Consultoría y transformación digital.`

**Orden de secciones:** Hero → Caso → Misión, visión y valores → Qué hacemos → Cómo trabajamos → Preguntas frecuentes → Contacto → Footer.

**Navegación:** Servicios · Cómo trabajamos · Casos · Equipo · Preguntas, más el botón **Contactanos**. El menú de escritorio se muestra a partir de 1100 px.

---

## 1 · Hero

Estructura calcada de `web-hero-1920x720.png`.

**Etiqueta:** CONSULTORÍA & TRANSFORMACIÓN DIGITAL

**H1 (claim, no se edita):**
> Evolución
> con dirección**.**

Dos líneas. Punto final en Magenta Pulso. Sin ninguna otra frase en la sección.

**Bajada:**
> Diagnosticamos con datos, priorizamos con criterio de negocio y nos quedamos hasta que el proceso camine solo.

El cliente pidió «camine», en subjuntivo; la pieza oficial dice «camina».

**CTA primario:** Contactanos → `#contacto`
**CTA secundario:** Cómo trabajamos → `#metodo`

**Microcopy:** Primera conversación sin costo. Respondemos en 48 horas hábiles. — Confirmado por el cliente.

**Visual:** degradé de marca, arcos de órbita abiertos a la derecha con el centro fuera del cuadro, isotipo en negativo (SVG, visible desde 1100 px). Sin fotografía ni ilustración.

> **Desvío documentado:** la pieza oficial incluye el logo dentro del hero porque es un banner suelto. En el sitio el logo ya está en la barra de navegación, así que en el hero se omite para no duplicarlo.

---

## 2 · Caso

**Posición:** inmediatamente después del hero. Es el bloque al que se le da más peso en la página, por pedido del cliente.

**Etiqueta:** EN QUÉ ESTAMOS
**H2 (frase §07-B):** Nos quedamos hasta que funcione solo. — El cliente pidió el subjuntivo; el manual lo escribe en indicativo.

**Un solo caso: Aberturas FISA.** Está decidido que no habrá otros, así que no hay carrusel. Tarjeta a dos columnas —logo a la izquierda, contenido a la derecha— que se linealiza en móvil.

| Campo | Contenido |
|---|---|
| Sector | Fabricación de aberturas de aluminio · Villa Bosch, Buenos Aires |
| Distintivo | Propuesta en evaluación |
| Título | Ordenar la operación antes de escalar la venta |
| Texto | La necesidad era vender más, pero el análisis demostró otra prioridad: ordenar primero. Actualmente las órdenes de fabricación impresas se trasladan del local a la fábrica, el stock se controla a ojo y el conocimiento se concentra en una sola persona. Proponemos: un sistema en la nube, ordenar la operación y, cuando la fábrica pueda acompañarla, abrir la venta online. — Texto del cliente |
| Enlace | Ver la propuesta → `casos/aberturas-fisa/` |

**Autorización:** el cliente autorizó la publicación con su nombre.

**Tratamiento del logo:** sobre la tarjeta Blanca, que es el uso que el §03 le da al Blanco sobre Papel. El panel del logo **no** lleva fondo Papel: el archivo del cliente trae fondo blanco y sobre cualquier otro color se recortaría como un rectángulo.

**Interacción:** toda la tarjeta es clicable a través del enlace del título, expandido con `::after`. El lector de pantalla anuncia **un solo enlace** con texto significativo.

---

## 3 · Misión, visión y valores

Se queda en la home por decisión del cliente (se evaluó moverla a `/nosotros` para acortar la página).

**Etiqueta:** MISIÓN, VISIÓN Y VALORES
**H2:** Hacia dónde vamos y cómo llegamos.

El titular sale de la glosa que el manual hace del claim (§07): «Dirección tiene dos sentidos: hacia dónde se va, y quién conduce».

**Misión:** Ordenar y digitalizar la operación de empresas que crecieron más rápido que sus procesos. Diagnosticamos con datos, priorizamos por impacto en el negocio e implementamos junto al equipo de cada empresa.

**Visión:** Que transformar deje de significar comprar software. Que cada empresa con la que trabajamos cambie de trayectoria y sostenga el cambio sin nosotros.

**Nuestros valores.** Los cuatro nombres son la personalidad del §01. Las frases se reescribieron para que sean simples y hablen de lo que recibe el cliente:

| Valor | Frase |
|---|---|
| **Directos** | Te decimos con claridad lo que vemos y lo que conviene hacer. |
| **Concretos** | Cada propuesta llega con números, plazos y resultados que se pueden medir. |
| **Cercanos** | Trabajamos junto a tu equipo, de principio a fin. |
| **Expertos** | Conocemos los procesos y la tecnología, y los ponemos al servicio de tu negocio. |

**CTA:** Conocé al equipo → `nosotros/`

---

## 4 · Qué hacemos

**Etiqueta:** QUÉ HACEMOS
**H2 (frase §07-A):** Primero el negocio. Después el software.

**Bajada:** Contamos con seis frentes de trabajo que se contratan por separado o como programa completo, pero todos empiezan en el mismo lugar: el discovery. — Texto del cliente.

**Los seis servicios están confirmados por el cliente.** Nombran frentes de trabajo, no etapas del método: como todos «empiezan en el mismo lugar: el discovery», el discovery, la implementación y la adopción son etapas que recorre cualquiera de ellos, no servicios.

| # | Servicio | Copy (una sola frase) | Identificador |
|---|---|---|---|
| 01 | **Rediseño de procesos** | Documentamos cómo se trabaja hoy y dejamos un circuito que no depende de una sola persona. | `rediseno-de-procesos` |
| 02 | **Automatización de procesos** | Eliminamos las tareas manuales que hoy se llevan las horas de tu mejor gente. | `automatizacion-de-procesos` |
| 03 | **Datos e indicadores** | Un tablero simple que se mira todas las semanas, no un informe que nadie abre. | `datos-e-indicadores` |
| 04 | **Inteligencia artificial aplicada** | La usamos donde mejora un número del negocio, no donde solo luce en una demo. | `inteligencia-artificial-aplicada` |
| 05 | **Selección e integración de sistemas** | Comparamos opciones según lo que necesita tu negocio y dejamos la elegida funcionando. | `seleccion-e-integracion-de-sistemas` |
| 06 | **Gestión del cambio y capacitación** | Acompañamos al equipo hasta que use el proceso porque le sirve, no porque se lo pidieron. | `gestion-del-cambio-y-capacitacion` |

Cada tarjeta enlaza a `#contacto`; no hay páginas de detalle por servicio. Para la analítica, cada una lleva además un `service_id` fijo (`servicio-01` a `servicio-06`) que no cambia si el servicio se renombra. Ver [`09-analitica-y-conversion.md`](09-analitica-y-conversion.md).

**Fondo:** Violeta Núcleo. Tarjetas con borde, no con sombra.

---

## 5 · Cómo trabajamos

**Etiqueta:** CÓMO TRABAJAMOS
**H2:** Cuatro etapas. Ninguna empieza por la herramienta.
**Bajada:** Antes de elegir un sistema definimos qué decisión tiene que mejorar. Sin eso, cualquier compra es una apuesta cara.

La bajada es el diferencial que se conservó de la sección «Por qué Evoltia», que se integró acá.

Las cuatro etapas vienen de la pieza `post-03-metodo`, con dos cambios pedidos por el cliente: «Diagnóstico» pasó a «Discovery», con duración de 4 a 6 semanas, y «funciona solo» pasó a subjuntivo.

| # | Etapa | Bajada | Entregable |
|---|---|---|---|
| 01 | **Discovery** | 4 a 6 semanas. Datos, no impresiones. | Informe y mapa de procesos |
| 02 | **Priorización** | Por impacto en el negocio. | Hoja de ruta con plazos e indicadores |
| 03 | **Implementación** | Con tu equipo adentro. | Procesos funcionando y documentados |
| 04 | **Adopción** | Hasta que funcione solo. | Equipo capacitado y capacidad instalada |

**Visual:** la cadena como columna del proceso. Nodos de 14 / 18 / 23 / 29 px, conector de 9 px (62 % del nodo menor), color de Órbita a Pulso. Vertical en mobile, horizontal en desktop.

**Fondo:** Tinta.

---

## 6 · Preguntas frecuentes

**Etiqueta:** PREGUNTAS FRECUENTES
**H2:** Lo que nos preguntan antes de empezar

| Pregunta | Respuesta | Estado |
|---|---|---|
| ¿Cuánto dura el discovery? | Depende del caso: entre cuatro y seis semanas. Incluye entrevistas con quienes hacen el trabajo, revisión de datos y una hoja de ruta priorizada. Al final tenés un documento listo para presentar en el directorio. | Confirmado por el cliente |
| ¿Con qué tamaño de empresa trabajan? | Empresas medianas que ya crecieron más de lo que su operación aguanta. Trabajamos con dirección general, operaciones y finanzas: quienes toman las decisiones. | Derivado del §01 |
| ¿Hace falta tener sistemas antes de empezar? | No. En muchos casos el punto de partida son planillas y mensajería. Eso no es un obstáculo: nos muestra cómo funciona hoy tu operación. | Derivado |

El sitio no publica precios: la pregunta «¿Cuánto cuesta?» del plan original se descartó. También se quitó «¿Desarrollan software propio?»: no hace falta aclararlo.

No se publica el JSON-LD `FAQPage`.

---

## 7 · Contacto

**Etiqueta:** CONTACTO
**H2:** Contanos cómo funciona hoy tu operación.
**Bajada:** Dos líneas alcanzan. Si podemos ayudar, te lo decimos; si no, también.

Ese «si no, también» es la traducción directa de la personalidad *directa* del §01.

**Qué pasa después** (una línea): Respondemos en 48 horas hábiles y, si tiene sentido avanzar, coordinamos una llamada de 30 minutos para entender el contexto.

**Campos:** Nombre y apellido · Email corporativo · Empresa · Rol (opcional) · ¿Qué querés resolver? · consentimiento · honeypot oculto. Se quitaron «Teléfono» y «¿Cómo nos conociste?» para acortar la sección.

**Botón:** Enviar consulta.

**El formulario no tiene backend, y está decidido que no lo tendrá.** Valida los campos, espera 700 ms y muestra el mensaje de éxito, pero la consulta no se envía a ningún lado. El canal que sí funciona es el enlace a `hola@evoltia.com` de la misma sección.

**Fondo:** Tinta. Formulario en Blanco, que es su uso correcto según el §03: superficie apoyada.

---

## 8 · Footer

Logo en negativo (SVG) · «Empresas que crecieron más rápido que sus procesos. Nosotros los ordenamos.» · tres columnas:

- **Servicios:** los cuatro primeros, con enlace a `#servicios`.
- **Compañía:** Nosotros · Cómo trabajamos · Casos · Contacto.
- **Contacto:** Preguntas frecuentes · `hola@evoltia.com` · Preferencias de cookies (solo en la home, que es la única página con banner de cookies).

Sin LinkedIn ni datos societarios: quedaron fuera de alcance.

---

## Reparto de frases del banco

Una por sección. Ninguna se repite.

| Sección | Frase | Grupo |
|---|---|---|
| Hero | Evolución con dirección. | Claim |
| Caso | Nos quedamos hasta que funcione solo. | B |
| Qué hacemos | Primero el negocio. Después el software. | A |

Las tarjetas de servicios ya no llevan frases del banco: quedaron en una sola frase descriptiva cada una. *Tu operación, sin fricción.* se usa como cierre de `/nosotros`.

Disponibles: *El cambio se planifica. La ventaja se construye.* · *Trazamos la trayectoria. Ustedes la recorren.* · *Menos PowerPoint. Más producción.* · *Si no se mide, no lo llamamos transformación.* · *No vendemos tecnología: diseñamos decisiones.* · *Toda empresa está en órbita.* (esta última está en el manifiesto de `/nosotros`).

---

## Historial de decisiones

| Cuándo | Decisión |
|---|---|
| Sep 2026 | La sección «El problema» («Toda empresa está en órbita», tres tarjetas) se reemplazó por misión, visión y valores. |
| Sep 2026 | Salieron del método y de «Por qué Evoltia» las frases «Si no se mide, no lo llamamos transformación» y «No vendemos tecnología: diseñamos decisiones». |
| Sep 2026 | «Diagnóstico» pasó a «Discovery», de 4 a 6 semanas. El CTA «Agendá un diagnóstico» pasó a «Contactanos». |
| Oct 2026 | El caso de FISA dejó de presentarse como caso de éxito: es una propuesta en evaluación. |
| Oct 2026 | Tres servicios se renombraron para no repetir etapas del método (antes: Discovery y hoja de ruta, Implementación, Adopción y gestión del cambio). |
| Oct 2026 | Revisión de redacción pedida por el cliente: tono más natural, «camine solo» y «funcione solo». |
| Oct 2026 | «Por qué Evoltia» se integró a «Cómo trabajamos»: tres de sus cuatro diferenciales repetían otras secciones. |
| Oct 2026 | Evoltia no desarrolla software: trabaja con proveedores. Cambió la pregunta del FAQ. |
| Nov 2026 | Servicios confirmados; autorización de FISA cerrada; sin segundo caso; formulario sin backend; el contacto perdió dos campos opcionales. |
