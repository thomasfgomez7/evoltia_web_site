# 14 · Despliegue

**Contexto:** proyecto universitario, no productivo. Sin datos reales, sin necesidad de backend para el formulario y sin requisitos de seguridad. Eso cambia por completo qué plataforma conviene.

## Recomendación: GitHub Pages

| | GitHub Pages | Vercel | Cloudflare Pages |
|---|---|---|---|
| Costo para este caso | **Gratis** | Gratis (Hobby, uso no comercial — **acá sí aplica**) | Gratis |
| Cuentas necesarias | Solo GitHub | GitHub **+ Vercel** | GitHub **+ Cloudflare** |
| Servir desde `site/` | Action de 20 líneas (ya incluida) | Nativo por `vercel.json` | Config en el panel |
| Previsualización por rama | ❌ | ✅ | ✅ |
| Requiere repo público en plan gratuito | **Sí** | No | No |
| Permanencia | Vive con el repo | Proyecto aparte, puede pausarse por inactividad | Proyecto aparte |

### Por qué GitHub Pages, ahora

1. **El repositorio ya va a estar en GitHub.** Es un trabajo de equipo que se entrega y se comparte; el código vive ahí de todos modos. Pages es una opción dentro del mismo repositorio: no hay una segunda cuenta, ni un permiso OAuth para una empresa, ni un panel más que revisar.
2. **Menos piezas que se rompen.** El sitio se despliega solo con cada push a `main` y sigue existiendo mientras exista el repo. Un proyecto en Vercel es un objeto aparte que alguien tiene que mantener vinculado; para algo que se entrega y después se consulta cada tanto, es una dependencia de más.
3. **Las ventajas de Vercel no se usan.** Funciones serverless, cabeceras, ISR, previsualizaciones por PR: nada de eso interviene en una landing estática de una página que se entrega una vez.
4. **La URL se explica sola.** `usuario.github.io/evoltia-web-site` deja claro que es un trabajo académico, y el repositorio queda a la vista como parte del entregable.

### La condición que decide

**GitHub Pages en el plan gratuito solo funciona con repositorios públicos.** Con un repo privado hace falta GitHub Pro o Team.

- ¿El repo puede ser **público**? → **GitHub Pages.** Para un trabajo universitario suele ser preferible: es material de portafolio.
- ¿Tiene que ser **privado**? → **Vercel.** El plan Hobby permite repos privados y, al no ser uso comercial, es gratuito y legítimo. `vercel.json` ya está configurado.

Cloudflare Pages queda como tercera opción: es perfectamente válida, pero no aporta nada que las otras dos no resuelvan y suma una cuenta más.

---

## Sobre el formulario

Sigue simulando el envío: espera 700 ms y muestra el mensaje de éxito, sin backend. Para una demo académica está bien, y el código lo dice explícitamente:

```js
/* Prototipo: sin backend. En producción, POST al route handler
   y redirección a /gracias, donde se dispara generate_lead. */
```

Si en algún momento el sitio se muestra a alguien que podría intentar contactar de verdad, conviene reemplazar el botón por un `mailto:hola@evoltia.com`. Es un cambio de una línea.

---

## Pasos — GitHub Pages

### 1 · Repositorio

```bash
git init && git add . && git commit -m "Landing de Evoltia sobre el manual de identidad v1.0"
```

```bash
gh repo create evoltia-web-site --public --source=. --push
```

### 2 · Activar Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Eso es todo. El workflow ya está en [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) y publica únicamente la carpeta `site/`. El resto del repositorio —`docs/`, `marca/`, `inventario/`— queda versionado pero no servido.

### 3 · Verificar

El primer despliegue tarda uno o dos minutos. La URL aparece en la pestaña **Actions** y en Settings → Pages:

```
https://<usuario>.github.io/evoltia-web-site/
```

Comprobar que cargan el logo de Evoltia, el isotipo del hero y el logo de Aberturas FISA. Si alguno fallara, el sitio muestra una reserva con el nombre en lugar de una imagen rota, así que el error se ve pero no rompe la página.

### 4 · Cada cambio posterior

```bash
git add . && git commit -m "…" && git push
```

El sitio se actualiza solo.

### Nota sobre rutas

Los enlaces internos de la Home son anclas (`#servicios`, `#metodo`) y funcionan en un subdirectorio sin cambios. Los enlaces a páginas que todavía no existen (`/servicios/…`, `/nosotros`, `/legales/…`) van a dar 404 en Pages, igual que en cualquier hosting: esas páginas son fase 2. Si molesta durante la entrega, se pueden pasar a `#` temporalmente.

---

## Pasos — Vercel (si el repo tiene que ser privado)

1. `git init`, commit, y `gh repo create evoltia-web-site --private --source=. --push`.
2. Importar el repositorio en [vercel.com/new](https://vercel.com/new).
3. Framework Preset **Other**. El resto lo toma de [`vercel.json`](../vercel.json): `outputDirectory: site`, sin build command.

El `vercel.json` incluye además cabeceras de seguridad y reglas de caché. No hacen falta en este contexto, pero tampoco molestan y quedan listas si el proyecto alguna vez sale del ámbito académico.

---

## Qué queda descartado

**Cloudflare Pages** y **Netlify** funcionan bien y son gratuitas, pero para este caso solo agregan una cuenta más sin resolver nada que GitHub Pages no resuelva.
