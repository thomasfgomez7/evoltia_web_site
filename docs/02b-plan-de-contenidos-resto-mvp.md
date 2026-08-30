# 02b · Plan de contenidos — resto del MVP

Mismo formato que la Home. Copy en voz de marca; los huecos del cliente van marcados.

---

## SERVICIOS (índice)

- **Slug:** `/servicios`
- **Meta title (41):** `Servicios | Evoltia consultoría digital`
- **Meta description (151):** `Relevamiento, diagnóstico de madurez, digitalización de procesos, documentación del conocimiento y gestión del cambio. Seis frentes de trabajo.`
- **Keyword primaria:** servicios de consultoría en transformación digital
- **Secundarias:** digitalización de procesos PyME · consultoría de procesos · relevamiento de procesos

**H1:** Seis frentes de trabajo, un solo criterio: primero entender.

**Hero sub:** Cada servicio se contrata por separado. La mayoría de los proyectos empiezan por el primero, porque sin relevamiento el resto es intuición.

**Secciones**
1. Hero (variante `compact`, fondo `#230054` plano)
2. Grilla de 6 `ServiceCard` con enlace al detalle
3. Bloque "¿Por dónde empiezo?" — árbol de decisión de 3 preguntas que orienta al servicio adecuado. Es el módulo que más califica leads: registrar la elección como evento de analítica.
4. Banda de método (resumen de las 4 etapas) con enlace a `/como-trabajamos`
5. CTA final

**Visual:** iconografía lineal por servicio, sin fotografía.

---

## CÓMO TRABAJAMOS

- **Slug:** `/como-trabajamos`
- **Meta title (38):** `Cómo trabajamos | Método Evoltia`
- **Meta description (149):** `Relevamos, diagnosticamos, trazamos la hoja de ruta e implementamos. Cuatro etapas con entregables concretos y objetivos con indicador y plazo.`
- **Keyword primaria:** metodología de transformación digital
- **Secundarias:** diagnóstico de madurez CMM · hoja de ruta digital · relevamiento organizacional

**H1:** No empezamos por la herramienta. Empezamos por entender.

**Hero sub:** Un método de cuatro etapas, con un entregable al final de cada una.

**Secciones**
1. Hero `compact`
2. Las 4 etapas en detalle: qué hacemos, con quién hablamos, qué recibís, cuánto dura `[PLACEHOLDER: duraciones]`
3. **Qué recibís** — lista de entregables tangibles (informe de relevamiento, diagnóstico de madurez, matriz de priorización, hoja de ruta con indicadores, backlog priorizado, procedimientos documentados)
4. **Principios de trabajo** — 4 ítems: hablamos con quien ejecuta · todo objetivo lleva indicador, meta y plazo · priorizamos junto al cliente · dejamos capacidad instalada
5. **Qué no hacemos** — sección de honestidad, muy eficaz en consultoría: no vendemos licencias, no recomendamos herramientas antes del diagnóstico, no dejamos el proyecto sin documentación
6. FAQ del método
7. CTA final

**Módulo destacado:** diagrama del método. Reutilizar la cadena de nodos ascendentes del isotipo como sistema visual del proceso — es el punto donde marca y contenido coinciden exactamente.

---

## NOSOTROS

- **Slug:** `/nosotros`
- **Meta title (36):** `Nosotros | Evoltia`
- **Meta description (144):** `Quiénes somos y por qué creemos que la transformación digital empieza por ordenar la operación, no por comprar software.`
- **Keyword primaria:** consultora de transformación digital Argentina
- **Secundarias:** equipo consultoría IT · consultoría digital PyME

**H1:** Evolución con dirección.

**Hero sub:** `[PLACEHOLDER — historia de origen de Evoltia. 2 o 3 frases: por qué se formó el equipo y qué lo distingue.]`

**Secciones**
1. Hero `compact`
2. **Qué nos mueve** — desarrollo del posicionamiento: la evolución sin dirección es ruido
3. **Cómo pensamos** — 3 o 4 creencias del equipo `[PLACEHOLDER parcial]`
4. **El equipo** — grilla de `TeamCard`. `[PLACEHOLDER: nombres, roles, fotos, LinkedIn]`
5. **La marca** — bloque breve sobre el significado del isotipo (órbita y nodos ascendentes = progresión con dirección). Sólo publicar una vez recuperado el manual completo.
6. CTA final

**Nota de contenido:** en una consultoría chica, `/nosotros` suele ser la segunda página más visitada después de la Home. No la traten como relleno.

---

## CONTACTO

- **Slug:** `/contacto`
- **Meta title (34):** `Contacto | Evoltia`
- **Meta description (139):** `Contanos qué querés resolver. Primera conversación sin costo y respuesta en 48 horas hábiles. hola@evoltia.com`
- **Keyword primaria:** contacto consultoría transformación digital
- **`robots`:** `index, follow` (la página de gracias va `noindex`)

**H1:** Empecemos por entender cómo trabajás hoy.

**Sub:** Dos líneas alcanzan. Si podemos ayudar, lo decimos; si no, te decimos quién puede.

**Layout de 2 columnas (desktop):**
- Izquierda: formulario (campos definidos en el plan de la Home)
- Derecha: canales alternativos — `hola@evoltia.com`, LinkedIn `[PLACEHOLDER]`, teléfono / WhatsApp `[PLACEHOLDER]`, zona de trabajo `[PLACEHOLDER]`; más un bloque **"Qué pasa después de que enviás el formulario"** con 3 pasos. Reduce la fricción de envío de forma medible.

**Sin mapa embebido** salvo que exista oficina con atención al público: carga terceros y cookies sin beneficio.

---

## GRACIAS

- **Slug:** `/gracias` · `noindex, nofollow`
- **H1:** Recibimos tu consulta.
- **Copy:** Te vamos a responder dentro de las próximas 48 horas hábiles. Mientras tanto, podés ver cómo trabajamos.
- CTA secundario a `/como-trabajamos` y a `/insights`.
- Es el punto de disparo de la conversión en GA4 y del webhook al CRM.

---

## LEGALES

Tres páginas, `noindex` opcional pero enlazadas desde el footer. Todas requieren datos del cliente.

| Página | Slug | Contenido mínimo |
|---|---|---|
| Política de privacidad | `/legales/politica-de-privacidad` | Responsable de la base (razón social, domicilio, CUIT) `[PLACEHOLDER]`; datos recolectados; finalidad; base legal; plazo de conservación; encargados de tratamiento (hosting, CRM, analítica); derechos de acceso, rectificación y supresión (Ley 25.326, art. 14 y 16); contacto del responsable; mención de la Agencia de Acceso a la Información Pública |
| Política de cookies | `/legales/politica-de-cookies` | Tabla de cookies por categoría, finalidad, proveedor y duración; cómo revocar el consentimiento |
| Términos y condiciones | `/legales/terminos-y-condiciones` | Titularidad del sitio, propiedad intelectual de marca y contenidos, limitación de responsabilidad, ley aplicable y jurisdicción |

**Advertencia:** el contenido legal debe ser revisado por un profesional. Lo anterior es una lista de campos, no asesoramiento legal.

---

## 404

- **H1:** Esta página no está donde debería.
- **Sub:** Nos dedicamos a ordenar procesos, así que la ironía no se nos escapa. Probá desde el inicio.
- Enlaces a Home, Servicios y Contacto. Registrar `page_not_found` con la URL de origen.
