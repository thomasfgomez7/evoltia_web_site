# 04 · Design system

Derivado de `Manual-de-Identidad-Evoltia.pdf` v1.0 · Agosto 2026, más el kit de piezas que lo acompaña.
Las referencias `§` remiten a las secciones del manual. Lo poco que no sale del manual está marcado `[DERIVADO]`.

---

## 1 · Color (§03)

La paleta se leyó del logo original. Va del violeta más profundo, que sostiene, al magenta más brillante, que señala.

| Nombre del manual | Token CSS | HEX | RGB | CMYK | Rol |
|---|---|---|---|---|---|
| **Violeta Núcleo** | `--nucleo` | `#230054` | 35 · 0 · 84 | 58 · 100 · 0 · 67 | Principal. Fondos, titulares, texto |
| **Púrpura Órbita** | `--orbita` | `#7E3ED0` | 126 · 62 · 208 | 39 · 70 · 0 · 18 | Secundario. Enlaces, íconos, etiquetas |
| **Violeta Señal** | `--senal` | `#A96EFC` | 169 · 110 · 252 | 33 · 56 · 0 · 1 | Sobre oscuro: bajadas, botones, detalles |
| **Magenta Pulso** | `--pulso` | `#C454FE` | 196 · 84 · 254 | 23 · 67 · 0 · 0 | Acento. **Un solo uso por pieza** |
| **Tinta** | `--tinta` | `#0E0020` | 14 · 0 · 32 | 56 · 100 · 0 · 87 | Fondo más profundo que el Núcleo |
| **Papel** | `--papel` | `#F0F1EC` | 240 · 241 · 236 | 0 · 0 · 2 · 6 | Fondo claro por defecto |
| **Blanco** | `--blanco` | `#FFFFFF` | 255 · 255 · 255 | 0 · 0 · 0 · 0 | Tarjetas sobre Papel |
| **Gris Nodo** | `--gris` | `#6B6480` | 107 · 100 · 128 | 16 · 22 · 0 · 50 | Texto secundario y epígrafes |

### La única laguna: Lavanda

Las reglas rápidas del §03 dicen: *"Sobre fondo oscuro, el texto de cuerpo va en Blanco o **Lavanda**"*. **Lavanda no está en la tabla de paleta.** Muestreamos la bajada del hero oficial (`web-hero-1920x720.png`) y da `#CEC4E8`, que es el valor que usa la implementación como `--lavanda`.

`[PENDIENTE CLIENTE]` — confirmar el HEX oficial de Lavanda e incorporarlo a la tabla del manual.

### Proporción de uso (§03)

**60 · Papel — 25 · Núcleo — 10 · Órbita — 5 · Pulso**

> *"Si una pieza se ve «demasiado violeta», casi siempre es porque el acento invadió el lugar del fondo."*

### Reglas rápidas (§03, literales)

1. Los fondos grandes en claro van en **Papel**, no en Blanco puro. El Blanco queda para tarjetas y superficies apoyadas sobre Papel.
2. Sobre fondo oscuro, el texto de cuerpo va en **Blanco o Lavanda**; el Violeta Señal se reserva para etiquetas y detalles.
3. El **Magenta Pulso nunca se usa para texto de cuerpo**, en ningún fondo.

### Cómo se cumple "un solo Pulso por pieza" en una página larga

El manual piensa en piezas gráficas cerradas (un post, un banner). Una landing tiene varias. La interpretación aplicada, y que conviene fijar como norma web:

> **Cada sección de la página es una pieza.** El Pulso aparece como máximo una vez por sección.

En la implementación aparece exactamente en tres lugares: el **punto final del claim** en el hero, el **nodo terminal de la cadena** en el método —que el §05 exige que sea el más brillante— y el degradé del conector de esa misma cadena. Ninguna otra sección lo usa.

---

## 2 · Contraste

### Tabla del manual (§03) · WCAG 2.1 AA

| Combinación | Manual | Verificado | Nivel |
|---|---|---|---|
| Blanco sobre Núcleo | 17,5:1 | 17,51 | AAA |
| Núcleo sobre Papel | 15,4:1 | 15,42 | AAA |
| Órbita sobre Blanco | 6,0:1 | 6,02 | AA |
| Señal sobre Núcleo | 5,5:1 | **5,27** | AA |
| Pulso sobre Núcleo | 5,0:1 | 5,04 | AA |
| Señal sobre Blanco | 3,2:1 | **3,32** | Solo texto grande |

> Dos valores del manual difieren levemente del cálculo por luminancia relativa de WCAG 2.1 (Señal/Núcleo y Señal/Blanco). Las diferencias no cambian ninguna decisión —los niveles AA y "solo texto grande" se mantienen— pero conviene corregirlas en la próxima versión del manual.

### Combinaciones que el manual no tabula y que la web necesita

| Combinación | Ratio | Nivel | Uso |
|---|---|---|---|
| Blanco sobre Tinta | 20,20 | AAA | Titulares del método y del contacto |
| Papel sobre Tinta | 17,79 | AAA | Cuerpo sobre Tinta |
| Tinta sobre Papel | 17,79 | AAA | Cuerpo del sitio |
| Lavanda sobre Tinta | 12,20 | AAA | Bajadas sobre Tinta |
| Lavanda sobre Núcleo | 10,58 | AAA | Bajadas sobre Núcleo |
| **Órbita sobre Papel** | **5,30** | **AA** | **Enlaces y etiquetas sobre claro** |
| Gris Nodo sobre Papel | 4,92 | AA | Texto secundario |
| Gris Nodo sobre Blanco | 5,59 | AA | Texto secundario en tarjetas |
| Señal sobre Tinta | 6,08 | AA | Etiquetas sobre Tinta |
| Núcleo sobre Señal | 5,27 | AA | Texto del botón primario |

### Prohibidas

| Combinación | Ratio | Motivo |
|---|---|---|
| **Órbita sobre Núcleo** | **2,91** | Falla. Órbita es un color de fondo claro; sobre oscuro no se lee |
| **Señal sobre Papel** | **2,93** | Falla. Coherente con el §03: Señal es "sobre oscuro" |
| Pulso sobre Papel | 3,06 | Solo decorativo, nunca texto |

**Regla operativa:** sobre claro el acento es **Órbita**; sobre oscuro es **Señal**. No son intercambiables.

### Nivel objetivo

**WCAG 2.2 AA**, con AAA en el cuerpo donde el par lo permite. Ver `08-accesibilidad-privacidad-legal.md` para los criterios con riesgo específico.

---

## 3 · Tipografía (§04)

**Poppins, y nada más.** Es la familia con la que ya está dibujado el logo. Una sola familia en cuatro pesos, y esa restricción es parte de la identidad.

**Alternativas si Poppins no está disponible:** Montserrat, después Century Gothic. **Nunca Arial, Calibri ni Times.**

```css
--fuente: "Poppins", "Montserrat", "Century Gothic", system-ui, sans-serif;
```

### Escala

**96 / 72 / 48 / 32 / 21 / 17 / 12 pt.** *Saltar niveles está bien; inventar tamaños intermedios, no.*

En web se mapean 1:1 a px. La implementación no usa ningún otro tamaño: 15 px, 13 px o 20 px están fuera del sistema.

| Nivel | Tamaño | Peso | Tracking | Interlínea | Token |
|---|---|---|---|---|---|
| **DISPLAY** | 96 | Bold 700 | −3 % | 1,05 | `--fs-display` |
| **TITULAR grande** | 72 | Bold 700 | −2 % | 1,15 | `--fs-h1` |
| **TITULAR** | 48 | Bold 700 | −2 % | 1,15 | `--fs-h2` |
| **SUBTÍTULO grande** | 32 | Medium 500 | 0 | 1,3 | `--fs-h3` |
| **SUBTÍTULO** | 21 | Medium 500 | 0 | 1,3 | `--fs-sub` |
| **CUERPO** | 17 | **Light 300** | 0 | 1,65 | `--fs-cuerpo` |
| **ETIQUETA** | 12 | Medium 500 | **+22 %**, MAYÚSCULAS | 1,2 | `--fs-etiqueta` |

**El cuerpo va en Light 300.** Es contraintuitivo para web y hay que sostenerlo: con Poppins a 17 px y una interlínea de 1,65 sobre los fondos de la paleta, el peso Light se lee bien y es lo que le da el aire característico a las piezas.

**Pesos a cargar:** 300, 400, 500, 700. Subconjuntos `latin` y `latin-ext` (necesario para acentos y ñ).

### La etiqueta es la firma

> *"El tracking amplio en mayúsculas viene de la bajada del logo. Es el detalle que hace reconocible una pieza aunque no se vea el isotipo."*

Por eso la etiqueta de 12 px con +0,22em aparece en todas las aperturas de sección, en los rótulos de las tarjetas, en los números del método y en los títulos de columna del footer. No es decoración: es identificación de marca.

### Fluidez

```css
--fs-display: clamp(2.5rem, 1.4rem + 5vw, 6rem);
--fs-h2:      clamp(1.75rem, 1.35rem + 2vw, 3rem);
```

Los extremos del `clamp` son valores de la escala; los intermedios son interpolación de viewport, no tamaños inventados.

---

## 4 · Logo (§02)

**Cuatro versiones, una sola forma.** La versión principal manda; las otras tres resuelven fondos donde la principal pierde contraste.

| Versión | Archivo | Cuándo |
|---|---|---|
| **Principal** | `evoltia-principal.png` | Sobre Papel y Blanco |
| **Negativo** | `evoltia-negativo.png` | Fondos oscuros y degradés |
| **Blanco** | `evoltia-blanco.png` | Una tinta sobre color pleno |
| **Tinta** | `evoltia-tinta.png` | Una tinta, impresión monocromo |

**Isotipo suelto** (`isotipo-color` · `-blanco` · `-negativo` · `-tinta`): avatares, favicon, sellos, íconos de app y marca de agua. **Nunca reemplaza al logo completo en una portada ni en la primera aparición de la marca.**

### Construcción

**X = el diámetro del nodo más grande del isotipo.** Toda la construcción se mide en X.

- **Zona de resguardo:** ningún elemento entra a menos de **1X** de cualquier borde del logo. Como la medida sale del isotipo, el aire escala con el logo.

### Tamaños mínimos

| | Mínimo |
|---|---|
| Logo completo · pantalla | **140 px** de ancho |
| Logo completo · impresión | **30 mm** de ancho |
| Isotipo · pantalla | **32 px** |
| Isotipo · impresión | **8 mm** |

Por debajo de esos valores la bajada deja de leerse: en ese caso se usa el **isotipo solo**, nunca el logo completo reducido.

### Usos incorrectos (§02) — seis

Deformar o cambiar la proporción · rotar o inclinar · cambiar los colores de marca · aplicar sombras, brillos o biselados · fondo sin contraste suficiente · encerrarlo en una caja de color.

### Deuda de activos

`[PENDIENTE CLIENTE]` El kit entrega **PNG**. Para producción web hace falta **SVG** de las cuatro versiones y de los cuatro isotipos: el isotipo se muestra a 300 px y el PNG disponible mide 297 px, o sea 1× — se ve blando en pantallas de alta densidad. Es la única deuda técnica de marca que queda abierta.

La implementación usa versiones optimizadas (`-web.png`, cuantizadas): el logo pasó de 171 KB a 38 KB y el isotipo de 77 KB a 21 KB, sin pérdida visible.

---

## 5 · Grafismo (§05)

Dos recursos, sacados directo del isotipo, que se repiten en todas las piezas. **Con esto alcanza: no hace falta agregar íconos, texturas ni ilustraciones de stock.**

> Esta regla es la que más cambia una landing respecto de lo habitual: **el sitio no lleva set de iconos**. Donde normalmente iría un ícono, va un nodo de la cadena.

### La cadena

- **Tres o cuatro nodos** que crecen en la dirección del movimiento.
- **Conector = 62 % del diámetro del nodo más chico.** En la implementación: nodos de 14 / 18 / 23 / 29 px, conector de 9 px.
- **Ángulo entre −46° y −50°**, siempre ascendente hacia la derecha.
- **Color de Señal a Pulso:** lo más chico es lo más oscuro, lo más grande es lo más brillante. La jerarquía invertida rompe la idea de aceleración.
- **En versión reducida de tres nodos funciona como separador entre bloques de texto.** Así se usa en la sección "El punto de partida".
- Como **columna del proceso** (pieza `post-03-metodo`) se dispone vertical: es la forma que toma el método de cuatro etapas.

### La órbita

- **Arcos concéntricos de 2 a 3 px**, entre **6 % y 24 % de opacidad**.
- **Centro siempre fuera del cuadro** y dibujados en **un solo cuadrante**.
- **Nunca se centra la órbita en la pieza ni se cierra el círculo completo.**
- La cadena atraviesa los arcos: *"ese cruce es el momento en que la trayectoria se escapa de la órbita, y es el gesto que le da sentido a todo el sistema."*

En el hero, los cinco arcos tienen radios de 380 a 860, centro a la derecha fuera del viewport, y opacidades de 0,24 / 0,18 / 0,13 / 0,09 / 0,06 — el rango exacto del manual.

---

## 6 · Espaciado y forma `[DERIVADO]`

El manual no fija escala de espaciado. Se usa base 4:

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`

Padding vertical de sección: 120 px desktop / 80 px mobile. Espacio entre tarjetas: 24 px. Padding interno de tarjeta: 32 px.

**Radios:** 8 px (inputs), 14 px (tarjetas), 24 px (bloques), píldora (botones y etiquetas). La píldora dialoga con las formas circulares del isotipo.

**Elevación:** sobre Papel, una sombra discreta. Sobre fondo oscuro no se usan sombras: se usa borde de 1 px.

---

## 7 · Botones `[DERIVADO del hero oficial]`

Los valores salen de `web-hero-1920x720.png`: fondo Señal, texto Núcleo, píldora.

| Variante | Fondo | Texto | Contraste |
|---|---|---|---|
| **Primario sobre oscuro** | `--senal` | `--nucleo` | 5,27:1 |
| **Primario sobre claro** | `--nucleo` | `--blanco` | 17,51:1 |
| **Secundario sobre oscuro** | transparente | `--papel`, borde blanco 45 % | 15,42:1 |
| **Secundario sobre claro** | transparente | `--nucleo`, borde Núcleo | 15,42:1 |
| **Enlace** | — | `--orbita` claro · `--senal` oscuro | 5,30 / 6,08 |

**Estados obligatorios:** hover (aclara el fondo, sin desplazamiento) · active (escala 0,98) · **focus-visible** (anillo de 2 px con offset de 3: Órbita sobre claro, Señal sobre oscuro — nunca `outline: none`) · disabled (45 % de opacidad y `aria-disabled`) · cargando ("Enviando…" con `aria-busy`, sin cambio de ancho).

**Geometría:** alto mínimo 48 px, padding 14/30, píldora, peso Medium 500, texto a 17 px.

**Un CTA primario por vista.** Dos primarios compitiendo contradicen el propio argumento de la marca sobre la dirección.

---

## 8 · Movimiento `[DERIVADO]`

El manual no habla de movimiento. Criterio aplicado: 150 ms para microinteracciones, 250 ms para entradas, curva única `cubic-bezier(.2,.7,.3,1)`; solo se animan `opacity` y `transform`; `prefers-reduced-motion` anula todo.

Si en algún momento se anima la marca, lo que debe animarse es **la cadena cruzando los arcos** — es el gesto que el propio manual identifica como el que da sentido al sistema.

---

## 9 · Modo oscuro

**No implementar toggle.** La identidad ya alterna claro y oscuro por sección según la proporción 60/25/10/5. Un tema alternativo duplicaría el QA de contraste y rompería esa proporción, que es una regla de marca, no una preferencia de interfaz.
