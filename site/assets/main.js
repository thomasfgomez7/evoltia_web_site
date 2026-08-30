/* =========================================================================
   Evoltia — comportamiento de la landing.
   Sin dependencias. Todo degrada correctamente si el JS no carga.
   ========================================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Analítica (stub) ------------------------------------------
     Reemplazar por gtag/plausible una vez definido el proveedor.
     Los nombres de evento siguen docs/09-analitica-y-conversion.md          */
  function track(name, params) {
    if (window.dataLayer) window.dataLayer.push(Object.assign({ event: name }, params || {}));
    if (window.__EVOLTIA_DEBUG__) console.log("[track]", name, params || {});
  }

  /* ---------- Nav: estado sólido al hacer scroll ---------- */
  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var solid = false;
    var onScroll = function () {
      var should = window.scrollY > 24;
      if (should !== solid) {
        solid = should;
        nav.classList.toggle("nav--solida", solid);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menú móvil con foco atrapado ---------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.getElementById("menu-movil");
  var closeBtn = document.querySelector("[data-menu-close]");

  if (toggle && panel) {
    var lastFocused = null;

    var focusables = function () {
      return panel.querySelectorAll('a[href], button:not([disabled])');
    };

    var openMenu = function () {
      lastFocused = document.activeElement;
      panel.hidden = false;
      // Doble rAF para que la transición se aplique tras salir de hidden
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { panel.classList.add("abierto"); });
      });
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var f = focusables();
      if (f.length) f[0].focus();
    };

    var closeMenu = function () {
      panel.classList.remove("abierto");
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    };

    toggle.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (panel.hidden) return;
      if (e.key === "Escape") { closeMenu(); return; }
      if (e.key !== "Tab") return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------- Logos de cliente: reserva si falta el archivo ----------
     Evita el ícono de imagen rota mientras el cliente no entregó el activo.
     Cuando el archivo existe, esto no se ejecuta nunca. */
  document.querySelectorAll(".confianza__marca img").forEach(function (img) {
    var fallback = function () {
      var li = img.closest(".confianza__marca");
      if (!li) return;
      li.className = "confianza__slot";
      li.textContent = img.alt || "Logo cliente";
    };
    if (img.complete && img.naturalWidth === 0) fallback();
    img.addEventListener("error", fallback);
  });

  /* ---------- Acordeón del FAQ ---------- */
  document.querySelectorAll("[data-accordion] .faq__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var target = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (target) target.hidden = expanded;
      if (!expanded) track("faq_open", { question: btn.textContent.trim() });
    });
  });

  /* ---------- Validación del formulario ---------- */
  var form = document.querySelector("[data-form]");
  if (form) {
    var MSG = {
      required: "Este campo es obligatorio.",
      email: "Ingresá un email válido, por ejemplo nombre@empresa.com.",
      consent: "Necesitamos tu consentimiento para poder responderte."
    };

    var errorBox = document.getElementById("form-error");
    var errorText = document.getElementById("form-error-text");
    var okBox = document.getElementById("form-ok");
    var submitBtn = form.querySelector("[data-submit]");
    var started = false;

    // El contenedor de error de un campo es el id de aria-describedby que empieza con "e-".
    var fieldError = function (input) {
      var ids = (input.getAttribute("aria-describedby") || "").split(/\s+/);
      var id = ids.filter(function (x) { return x.indexOf("e-") === 0; })[0];
      return id ? document.getElementById(id) : null;
    };

    var validate = function (input) {
      var msg = "";
      if (input.type === "checkbox") {
        if (input.required && !input.checked) msg = MSG.consent;
      } else if (input.required && !input.value.trim()) {
        msg = MSG.required;
      } else if (input.type === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value)) {
        msg = MSG.email;
      }

      var box = fieldError(input);
      if (msg) {
        input.setAttribute("aria-invalid", "true");
        if (box) { box.textContent = msg; box.classList.add("visible"); }
        return false;
      }
      input.removeAttribute("aria-invalid");
      if (box) { box.textContent = ""; box.classList.remove("visible"); }
      return true;
    };

    var controls = form.querySelectorAll("input[required], textarea[required]");

    controls.forEach(function (input) {
      // La validación ocurre al salir del campo, nunca en cada tecla.
      input.addEventListener("blur", function () { validate(input); });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") validate(input);
        if (!started) { started = true; track("form_start", { form_id: form.id }); }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot: si está completo, es un bot. Se simula éxito y no se envía.
      var hp = form.querySelector('input[name="sitio_web"]');
      if (hp && hp.value) return;

      var invalid = [];
      controls.forEach(function (input) { if (!validate(input)) invalid.push(input); });

      okBox.classList.remove("visible");

      if (invalid.length) {
        errorText.textContent = invalid.length === 1
          ? "Falta completar un campo."
          : "Faltan completar " + invalid.length + " campos.";
        errorBox.classList.add("visible");
        errorBox.focus();
        invalid.forEach(function (i) { track("form_field_error", { form_id: form.id, field_name: i.name }); });
        // El foco va al primer campo con error para no obligar a buscarlo.
        invalid[0].focus();
        return;
      }

      errorBox.classList.remove("visible");
      submitBtn.setAttribute("aria-disabled", "true");
      submitBtn.setAttribute("aria-busy", "true");
      var label = submitBtn.textContent;
      submitBtn.textContent = "Enviando…";

      track("form_submit", { form_id: form.id });

      /* Prototipo: sin backend. En producción, POST al route handler
         y redirección a /gracias, donde se dispara generate_lead. */
      window.setTimeout(function () {
        submitBtn.removeAttribute("aria-disabled");
        submitBtn.removeAttribute("aria-busy");
        submitBtn.textContent = label;
        form.reset();
        okBox.classList.add("visible");
        okBox.focus();
        track("generate_lead", { form_id: form.id });
      }, 700);
    });
  }

  /* ---------- CTA flotante en móvil ---------- */
  var sticky = document.querySelector("[data-sticky-cta]");
  var hero = document.querySelector(".hero");
  var contacto = document.getElementById("contacto");

  if (sticky && hero && "IntersectionObserver" in window) {
    var pastHero = false, atForm = false;
    var sync = function () { sticky.classList.toggle("visible", pastHero && !atForm); };

    new IntersectionObserver(function (entries) {
      pastHero = !entries[0].isIntersecting;
      sync();
    }, { rootMargin: "-80px 0px 0px 0px" }).observe(hero);

    if (contacto) {
      new IntersectionObserver(function (entries) {
        atForm = entries[0].isIntersecting;
        sync();
      }, { threshold: 0.15 }).observe(contacto);
    }
  }

  /* ---------- Revelado al hacer scroll + section_view ---------- */
  if ("IntersectionObserver" in window) {
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("dentro");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(function (el) {
      if (reduceMotion) { el.classList.add("dentro"); return; }
      io.observe(el);
    });

    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || seen[entry.target.id]) return;
        seen[entry.target.id] = true;
        track("section_view", { section_id: entry.target.id });
      });
    }, { threshold: 0.5 });

    document.querySelectorAll("section[id]").forEach(function (s) { vio.observe(s); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("dentro"); });
  }

  /* ---------- Eventos de CTA ---------- */
  document.querySelectorAll("[data-cta]").forEach(function (el) {
    el.addEventListener("click", function () {
      track("cta_click", { cta_label: el.textContent.trim(), cta_location: el.getAttribute("data-cta") });
    });
  });

  document.querySelectorAll("[data-service]").forEach(function (el) {
    el.addEventListener("click", function () {
      track("service_card_click", { service_slug: el.getAttribute("data-service") });
    });
  });

  /* ---------- Profundidad de scroll ---------- */
  (function () {
    var marks = [25, 50, 75, 90], hit = {};
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      var pct = (h.scrollTop / max) * 100;
      marks.forEach(function (m) {
        if (pct >= m && !hit[m]) { hit[m] = true; track("scroll_depth", { percent: m }); }
      });
    }, { passive: true });
  })();

  /* ---------- Consentimiento de cookies ----------
     Ninguna cookie ni script de terceros se ejecuta antes de la elección.
     "Aceptar" y "Rechazar" tienen idéntico peso visual: es requisito de
     validez del consentimiento, no una preferencia de diseño.             */
  var cookies = document.getElementById("cookies");
  if (cookies) {
    var KEY = "evoltia.consent.v1";

    var read = function () {
      try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
    };
    var write = function (value) {
      try {
        localStorage.setItem(KEY, JSON.stringify({
          analytics: value, marketing: false,
          ts: new Date().toISOString(), policyVersion: "1.0"
        }));
      } catch (e) { /* almacenamiento no disponible: se vuelve a preguntar */ }
    };

    var show = function () {
      cookies.hidden = false;
      var first = cookies.querySelector("button");
      if (first) first.focus();
    };

    var decide = function (accepted) {
      write(accepted);
      cookies.hidden = true;
      track("consent_update", { analytics: accepted, marketing: false });
      // Aquí iría gtag('consent','update',{...}) cuando se defina el proveedor.
    };

    if (!read()) window.setTimeout(show, 800);

    cookies.querySelectorAll("[data-cookies]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        decide(btn.getAttribute("data-cookies") === "accept");
      });
    });

    document.querySelectorAll("[data-cookies-reopen]").forEach(function (link) {
      link.addEventListener("click", function (e) { e.preventDefault(); show(); });
    });
  }

  /* ---------- 404: registrar la ruta pedida ----------
     Activar sólo en la plantilla de 404.
     track('page_not_found', { requested_path: location.pathname, referrer: document.referrer }); */
})();
