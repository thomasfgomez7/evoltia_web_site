# 08 · Accesibilidad, privacidad y requisitos legales

## Accesibilidad

**Objetivo: WCAG 2.2 nivel AA en todo el sitio**, con AAA en contraste de texto donde la paleta lo permite (la mayoría de los pares oscuros de la marca superan 15:1, así que AAA sale casi gratis).

### Criterios con riesgo específico en este diseño

| Criterio | Riesgo concreto | Mitigación |
|---|---|---|
| **1.4.3** Contraste mínimo | Los violetas claros (`#A96EFC`, `#C454FE`, `#A99BCB`) **fallan sobre el fondo hueso** `#F0F1EC` (2,25–3,06:1) | Sobre claro, el acento es `#4E14A0` (9,58:1). Regla documentada en el design system y verificable en CI |
| **1.4.11** Contraste no textual | Bordes de input y de tarjeta sobre fondo oscuro | Mínimo 3:1 contra su fondo. `rgba(255,255,255,.14)` **no alcanza** para bordes de input: usar `.45` |
| **1.4.1** Uso del color | Errores de formulario y estado activo de nav | Siempre color + texto o icono |
| **2.4.7** Foco visible | El diseño oscuro tiende a esconder el outline por defecto | Anillo de 2 px en `#C454FE` con offset de 3 px, nunca `outline: none` |
| **2.4.11** Foco no oscurecido | La nav sticky tapa el destino de los anclajes | `scroll-margin-top: 96px` en todos los destinos |
| **2.5.8** Tamaño del objetivo | Iconos sociales y hamburguesa | 44×44 px de área táctil aunque el icono mida 24 |
| **1.4.10** Reflow | Tablas de servicios y timeline horizontal | A 320 px todo se linealiza; ninguna tabla con scroll horizontal salvo dentro de un contenedor con `overflow-x:auto` y `tabindex="0"` |
| **1.4.12** Espaciado de texto | Tarjetas de altura fija | Ninguna altura fija; todo se adapta si el usuario fuerza interlínea 1,5 |
| **2.3.3** Animación | Entradas al hacer scroll | `prefers-reduced-motion` anula todo |
| **3.3.7** Entrada redundante | Formularios largos | Un solo formulario, sin pasos que repitan datos |
| **3.3.8** Autenticación accesible | — | No hay login. Y **no usar CAPTCHA** en el formulario |

### Proceso de verificación

1. **Automático en CI:** `axe-core` en todas las rutas. Falla el build ante cualquier violación seria o crítica.
2. **Manual, en cada página, antes de aprobar:**
   - Recorrer todo con teclado únicamente. El orden debe ser lógico y el foco siempre visible.
   - Navegar con lector de pantalla: NVDA en Windows y VoiceOver en macOS/iOS.
   - Zoom al 400 % sin pérdida de contenido.
   - Modo de alto contraste de Windows.
   - Desactivar CSS y comprobar que el contenido sigue en orden lógico.
3. **Declaración de accesibilidad** publicada en `/accesibilidad` con el nivel alcanzado, las limitaciones conocidas y un canal de contacto. Es un compromiso, no un trámite.

## Privacidad y cookies

### Marco aplicable

- **Argentina:** Ley 25.326 de Protección de Datos Personales y su reglamentación; Agencia de Acceso a la Información Pública. Registro de la base de datos si corresponde `[verificar con asesoría legal]`.
- **RGPD:** aplica si se captan datos de personas en la UE. Dado que el sitio es público y en español, **es prudente cumplir el estándar RGPD por defecto**: es el más exigente y evita rehacer todo si aparece un cliente europeo.

### Enfoque de consentimiento

**Opt-in previo, granular y simétrico.**

1. Ninguna cookie no esencial ni ningún script de terceros se ejecuta antes de la elección.
2. El banner ofrece **"Aceptar todas" y "Rechazar todas" con idéntico peso visual**, más "Preferencias".
3. Categorías: **Necesarias** (siempre activas) · **Analíticas** (opt-in) · **Marketing** (opt-in, desactivada al lanzar si no hay campañas).
4. Se registra la elección con fecha, hora y versión de la política.
5. Enlace permanente en el footer para revisar o revocar el consentimiento.
6. Google Consent Mode v2 configurado con todo denegado por defecto.

**Recomendación adicional:** si al lanzar sólo se necesita analítica agregada, usar **Plausible o Umami** (sin cookies, sin datos personales) y **eliminar el banner por completo**. Es más rápido, más privado y elimina el mayor punto de fricción de la página. Es la opción que recomiendo para el MVP.

### Contenido mínimo de la política de privacidad

Responsable del tratamiento (razón social, CUIT, domicilio) `[PLACEHOLDER]` · datos que se recogen y por qué canal · finalidad de cada tratamiento · base de legitimación · plazo de conservación (sugerido: 24 meses desde el último contacto) · destinatarios y encargados (hosting, CMS, CRM, email, analítica), con indicación de transferencias internacionales · derechos de acceso, rectificación, actualización y supresión, y cómo ejercerlos · mención de la Agencia de Acceso a la Información Pública como autoridad de control · medidas de seguridad · fecha de vigencia y versión.

**Requisito legal argentino específico:** la política debe incluir la leyenda sobre el derecho de acceso gratuito en intervalos no menores a seis meses (Ley 25.326, art. 14 inc. 3, y Disposición 10/2008). Verificar el texto exacto vigente con asesoría legal.

### Páginas legales imprescindibles

| Página | Obligatoriedad |
|---|---|
| Política de privacidad | **Obligatoria** — hay formulario que capta datos personales |
| Política de cookies | Obligatoria si se usan cookies no esenciales |
| Términos y condiciones de uso | Muy recomendable — titularidad, propiedad intelectual, limitación de responsabilidad |
| Declaración de accesibilidad | Recomendada — coherente con el compromiso AA |

### Minimización de datos en el formulario

Sólo se piden nombre, email, organización y consulta como obligatorios. Teléfono, rol y origen son opcionales. Cada campo obligatorio adicional reduce la conversión y aumenta la superficie de datos personales a custodiar; ambos motivos apuntan en la misma dirección.

**Descargo:** este documento enumera requisitos y campos. **No es asesoramiento legal.** Los textos definitivos deben ser redactados o revisados por un profesional habilitado antes de publicar.
