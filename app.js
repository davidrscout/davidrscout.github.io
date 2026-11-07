/* natu: idioma, menú activo y la columna de tensegridad (camino de ataque del laboratorio). */
(() => {
  "use strict";

  /* ---------------- idioma ---------------- */

  const ES = {
    skip: "Saltar al contenido",
    n_file: "ficha", n_lab: "laboratorio", n_log: "registro", n_method: "método",
    n_machines: "máquinas", n_defense: "defensa", n_ai: "ia",
    active: "activo",
    rule: "sin PoC no hay reporte.",
    line: "investigación de seguridad · divulgación coordinada",
    k_alias: "alias", k_name: "nombre", k_loc: "ubicación", k_focus: "foco",
    v_focus: "active directory · web · open source · ia",
    k_offense: "ofensiva",
    v_offense: "kerberos · escalada de privilegios · pivoting · explotación manual, sin frameworks",
    k_build: "construye",
    v_build: "python · apis · cloud · bastionado de vps",
    k_status: "estado",
    t_lab: "laboratorio",
    d_lab: "active directory aislado · configuraciones erróneas reales · sin atajos de ctf",
    col_title: "Camino de ataque del laboratorio, dibujado como una columna de tensegridad",
    col_desc: "Seis nodos, de Kali fuera del dominio a Domain Admin en DC01. Cada paso tensa su cable y la columna se estira.",
    k_mode: "modo", k_step: "paso", k_now: "ahora", pause: "pausa",
    s1_l: "Kali, fuera del dominio",
    s2_l: "Enumeración sin credenciales",
    s3_l: "Descubrimiento de usuarios por Kerberos",
    s4_l: "AS-REP roasting sobre una cuenta sin preautenticación",
    s5_l: "Abuso de ACL con GenericAll",
    s6_l: "Domain Admin en DC01",
    outside: "fuera del dominio",
    writeup: "write-up",
    t_log: "registro",
    d_log: "los nombres esperan a que salga el parche",
    g_cvd: "divulgación coordinada",
    e1: "asistente de ia en hoja de cálculo · autorización",
    e2: "librería open source · rust",
    e3: "librería open source · go",
    e4: "librería · python · c",
    e5: "blockchain l1",
    e6: "distribución linux",
    e7: "núcleo de cms",
    e8: "editor de bloques",
    e9: "cartera de identidad digital ue",
    e10: "sdk de verificación biométrica",
    e11: "plataforma de reservas de viajes",
    st_mit: "mitigación observada", st_adv: "advisory enviado",
    st_aud_f: "auditada", st_aud_m: "auditado",
    st_val: "en validación", st_dup: "duplicado",
    lg_taut: "reportado", lg_load: "en revisión", lg_cut: "duplicado", lg_slack: "auditado, sin reporte",
    t_mach: "máquinas",
    d_mach: "hack the box · write-ups solo de máquinas retiradas",
    profile: "perfil",
    t_def: "defensa",
    d_def: "sistemas propios en producción · sin nombres",
    v_d1: "estático y en vivo · críticos y medios corregidos",
    k_authz: "autorización", v_d2: "límites del plan aplicados en el servidor",
    v_d3: "solo con clave · marcha atrás automática",
    v_d4: "alertas y reinicio automático",
    k_reviews: "revisiones", v_d5: "multiagente · verificación adversarial",
    k_disc: "divulgación", v_d6: "security.txt publicado",
    t_ai: "ia", d_ai: "aplicada a la seguridad · foco actual",
    k_recon: "recon", v_a1: "triaje asistido por llm",
    k_agents: "agentes", v_a2: "razonan sobre el estado del entorno",
    k_reports: "informes", v_a3: "generados a partir de notas de trabajo",
    k_scans: "escaneos", v_a4: "análisis semántico de resultados",
    v_a5: "pipeline ofensivo propio · privado",
    v_a6: "herramienta gráfica en python · en construcción",
    t_method: "método", d_method: "del objetivo a la divulgación",
    m1: "objetivo", m1s: "dentro de alcance",
    m2: "superficie", m2s: "mapeada",
    m3: "hipótesis", m3s: "priorizadas",
    m4s: "contra el código real",
    m5: "verificar", m5s: "100 % o no hay reporte", m5x: "sin reporte",
    m6: "divulgar", m6s: "primero el parche",
    foot: "natu · los nombres esperan al parche"
  };
  const ES_ARIA = { nav: "Secciones", lang: "Idioma", redacted: "oculto", refs: "Referencias" };
  const ES_TIP = { withheld: "oculto" };

  const STEPS = {
    en: [
      ["KALI", "outside the domain"],
      ["ENUMERATION", "no credentials"],
      ["USERS", "kerberos discovery"],
      ["AS-REP ROASTING", "pre-auth disabled"],
      ["ACL ABUSE", "GenericAll"],
      ["DOMAIN ADMIN", "DC01"]
    ],
    es: [
      ["KALI", "fuera del dominio"],
      ["ENUMERACIÓN", "sin credenciales"],
      ["USUARIOS", "descubrimiento kerberos"],
      ["AS-REP ROASTING", "sin preautenticación"],
      ["ABUSO DE ACL", "GenericAll"],
      ["DOMAIN ADMIN", "DC01"]
    ]
  };
  const MODES = {
    en: { inhale: "inhale", hold: "hold", exhale: "exhale", rest: "rest" },
    es: { inhale: "inspira", hold: "mantiene", exhale: "espira", rest: "reposo" }
  };

  const root = document.documentElement;
  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const ariaNodes = Array.from(document.querySelectorAll("[data-i18n-aria]"));
  const tipNodes = Array.from(document.querySelectorAll("[data-i18n-tip]"));
  const EN = {};
  const EN_ARIA = {};
  const EN_TIP = {};
  textNodes.forEach((n) => { EN[n.dataset.i18n] = n.textContent; });
  ariaNodes.forEach((n) => { EN_ARIA[n.dataset.i18nAria] = n.getAttribute("aria-label"); });
  tipNodes.forEach((n) => { EN_TIP[n.dataset.i18nTip] = n.dataset.tip; });

  let lang = "en";
  try {
    const saved = localStorage.getItem("natu.lang");
    if (saved === "en" || saved === "es") lang = saved;
  } catch (e) { /* almacenamiento bloqueado: se queda en inglés */ }

  const onLang = [];
  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    const es = lang === "es";
    textNodes.forEach((n) => {
      const v = es ? ES[n.dataset.i18n] : EN[n.dataset.i18n];
      if (v != null && n.textContent !== v) n.textContent = v;
    });
    ariaNodes.forEach((n) => {
      const v = es ? ES_ARIA[n.dataset.i18nAria] : EN_ARIA[n.dataset.i18nAria];
      if (v != null) n.setAttribute("aria-label", v);
    });
    tipNodes.forEach((n) => {
      const v = es ? ES_TIP[n.dataset.i18nTip] : EN_TIP[n.dataset.i18nTip];
      if (v != null) n.dataset.tip = v;
    });
    root.lang = lang;
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("natu.lang", lang); } catch (e) { /* sin persistencia */ }
    onLang.forEach((fn) => fn());
  }
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  /* ---------------- menú activo ---------------- */

  const links = Array.from(document.querySelectorAll(".nav a"));
  const zones = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const seen = new Map();
  let hovered = null;

  function paintNav() {
    let id = hovered;
    if (!id) {
      let best = 0;
      zones.forEach((z) => {
        const h = seen.get(z.id) || 0;
        if (h > best + 0.5) { best = h; id = z.id; }
      });
    }
    links.forEach((a) => {
      if (id && a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    const steps = Array.from({ length: 21 }, (_, i) => i / 20);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => seen.set(en.target.id, en.isIntersecting ? en.intersectionRect.height : 0));
      paintNav();
    }, { threshold: steps, rootMargin: "-56px 0px 0px 0px" });
    zones.forEach((z) => io.observe(z));
  }
  zones.forEach((z) => {
    z.addEventListener("pointerenter", () => { hovered = z.id; paintNav(); });
  });
  const sheet = document.querySelector(".sheet");
  if (sheet) sheet.addEventListener("pointerleave", () => { hovered = null; paintNav(); });
  links.forEach((a) => a.addEventListener("click", () => {
    hovered = a.getAttribute("href").slice(1);
    paintNav();
  }));

  /* ---------------- columna de tensegridad ---------------- */

  const fig = document.querySelector("[data-column]");
  if (fig) column(fig);

  function column(figure) {
    const svg = figure.querySelector(".col-svg");
    const NS = "http://www.w3.org/2000/svg";
    const make = (name, attrs, parent) => {
      const n = document.createElementNS(NS, name);
      if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(n);
      return n;
    };
    const liveMode = document.querySelector('[data-live="mode"]');
    const liveStep = document.querySelector('[data-live="step"]');
    const liveNow = document.querySelector('[data-live="now"]');

    /* modelo: seis varillas en zigzag alterno, una por paso del ataque */
    const N = 6;
    const R = 0.6;
    const ROD_H = 1.0;
    const S0 = 0.5;
    const TWIST = 150 * Math.PI / 180;
    const TURN = Math.PI + 0.24;
    const PSI0 = -16 * Math.PI / 180;
    const PSI1 = 8 * Math.PI / 180;
    const SPAN = 4.24;

    // puntos: B0..B5 = 0..5 (pie de cada varilla), T0..T5 = 6..11 (cabeza), G0 = 12, G1 = 13 (anclajes)
    const cords = [];
    for (let k = 0; k < N - 1; k++) {
      cords.push({ a: k, b: k + 1, step: k + 1 });
      cords.push({ a: 6 + k, b: 7 + k, step: k + 1 });
      cords.push({ a: k + 1, b: 6 + k, step: k + 1 });
    }
    for (let k = 0; k < N - 2; k++) cords.push({ a: 6 + k, b: k + 2, step: k + 2 });
    cords.push({ a: 12, b: 0, step: 0 }, { a: 13, b: 1, step: 0 }, { a: 13, b: 0, step: 0 });

    const P = Array.from({ length: 14 }, () => [0, 0, 0]);
    const Q = Array.from({ length: 14 }, () => [0, 0, 0]);

    function geometry(e) {
      const S = S0 * (1 + 0.16 * e);
      const extra = 0.06 * e;
      for (let k = 0; k < N; k++) {
        const a = k * (TURN + extra);
        P[k][0] = R * Math.cos(a); P[k][1] = k * S; P[k][2] = R * Math.sin(a);
        P[6 + k][0] = R * Math.cos(a + TWIST); P[6 + k][1] = k * S + ROD_H; P[6 + k][2] = R * Math.sin(a + TWIST);
      }
      P[12][0] = R * 1.3 * Math.cos(2.6); P[12][1] = -0.18; P[12][2] = R * 1.3 * Math.sin(2.6);
      P[13][0] = R * 1.3 * Math.cos(0.5); P[13][1] = -0.18; P[13][2] = R * 1.3 * Math.sin(0.5);
    }

    /* capas del dibujo */
    const gAxis = make("g", { class: "c-axis" }, svg);
    const gGround = make("g", { class: "c-ground" }, svg);
    const gLead = make("g", { class: "c-lead" }, svg);
    const gBack = make("g", { class: "c-rods" }, svg);
    const gCord = make("g", { class: "c-cords" }, svg);
    const gFront = make("g", { class: "c-rods" }, svg);
    const gFit = make("g", { class: "c-fits" }, svg);
    const gLabels = make("g", { class: "c-labels" }, svg);

    const axisLine = make("line", { class: "axis" }, gAxis);
    const axisTop = make("path", { class: "axis-tip" }, gAxis);
    const axisBot = make("path", { class: "axis-tip" }, gAxis);
    const groundLine = make("line", { class: "ground" }, gGround);
    const groundHatch = make("path", { class: "hatch" }, gGround);

    const rods = [];
    for (let k = 0; k < N; k++) {
      const g = make("g", null, gFront);
      rods.push({
        g,
        body: make("line", { class: "rod-body" }, g),
        shade: make("line", { class: "rod-shade" }, g),
        light: make("line", { class: "rod-light" }, g),
        capA: make("circle", { class: "cap" }, gFit),
        capB: make("circle", { class: "cap" }, gFit),
        dotA: make("circle", { class: "dot" }, gFit),
        dotB: make("circle", { class: "dot" }, gFit),
        ring: make("circle", { class: "ring" }, gFit),
        back: false
      });
    }
    const cordEls = cords.map(() => make("path", { class: "cord" }, gCord));
    const anchorEls = [12, 13].map(() => make("rect", { class: "anchor" }, gGround));

    const labels = [];
    for (let k = 0; k < N; k++) {
      const g = make("g", { class: "lb" }, gLabels);
      labels.push({
        g,
        lead: make("path", { class: "lead" }, gLead),
        id: make("text", { class: "lb-id" }, g),
        name: make("text", { class: "lb-name" }, g),
        sub: make("text", { class: "lb-sub" }, g),
        y: 0
      });
    }

    /* medidas */
    let W = 0, Ht = 0, sc = 1, cx = 0, by = 0, labX = 0, labEnd = 0, compact = false, rodW = 8, lineGap = 16;

    function layout() {
      const box = svg.getBoundingClientRect();
      W = Math.max(260, Math.round(box.width));
      Ht = Math.max(340, Math.round(box.height));
      svg.setAttribute("viewBox", `0 0 ${W} ${Ht}`);
      compact = W < 600;
      const top = compact ? 22 : 30;
      const bottom = compact ? 18 : 26;
      sc = (Ht - top - bottom) / SPAN;
      sc = Math.min(sc, (W * (compact ? 0.42 : 0.46)) / (2.4 * R));
      by = Ht - bottom - 0.2 * sc;
      cx = Math.round(W - R * sc * 1.35 - (compact ? 8 : 18));
      labX = 0;
      labEnd = Math.round(cx - R * sc * 1.35 - (compact ? 12 : 36));
      rodW = Math.max(6, Math.min(20, 0.095 * sc));
      lineGap = compact ? 13 : 17;
      svg.style.setProperty("--lb-id", compact ? "9.5px" : "11px");
      svg.style.setProperty("--lb-name", compact ? "11.5px" : "14.5px");
      svg.style.setProperty("--lb-sub", compact ? "10px" : "12px");
      labels.forEach((lb) => {
        lb.id.setAttribute("x", labX);
        lb.name.setAttribute("x", labX);
        lb.sub.setAttribute("x", labX);
        lb.y = NaN;
      });

      // eje y suelo
      const yTop = by - (SPAN - 0.02) * sc;
      const yBot = by + 0.16 * sc;
      axisLine.setAttribute("x1", cx); axisLine.setAttribute("x2", cx);
      axisLine.setAttribute("y1", yTop); axisLine.setAttribute("y2", yBot);
      axisTop.setAttribute("d", `M${cx - 4} ${yTop - 7}L${cx + 4} ${yTop - 7}L${cx} ${yTop}Z`);
      axisBot.setAttribute("d", `M${cx - 4} ${yBot + 7}L${cx + 4} ${yBot + 7}L${cx} ${yBot}Z`);
      const gy = by + 0.18 * sc;
      const gx0 = cx - R * sc * 1.55;
      const gx1 = cx + R * sc * 1.55;
      groundLine.setAttribute("x1", gx0); groundLine.setAttribute("x2", gx1);
      groundLine.setAttribute("y1", gy); groundLine.setAttribute("y2", gy);
      let h = "";
      for (let x = gx0 + 6; x < gx1; x += 9) h += `M${x} ${gy}l-6 7`;
      groundHatch.setAttribute("d", h);
      writeLabels();
      measureIds();
    }

    function writeLabels() {
      const names = STEPS[lang];
      labels.forEach((lb, k) => {
        lb.id.textContent = "NODE_0" + (k + 1);
        lb.name.textContent = names[k][0];
        lb.sub.textContent = names[k][1];
      });
    }

    // la línea guía nace justo detrás de «NODE_0x»: etiqueta y nodo quedan unidos
    function measureIds() {
      labels.forEach((lb) => {
        let w = 0;
        try { w = lb.id.getComputedTextLength(); } catch (e) { w = 0; }
        lb.lx = labX + (w > 0 ? w : 62) + 10;
      });
    }

    function project(src, dst, psi) {
      const c = Math.cos(psi), s = Math.sin(psi);
      const x = src[0] * c - src[2] * s;
      const z = src[0] * s + src[2] * c;
      const k = 1 / (1 - z * 0.16);
      dst[0] = cx + x * sc * k;
      dst[1] = by - src[1] * sc;
      dst[2] = z / R;
    }

    const lerpGray = (a, b, t) => {
      const v = Math.round(a + (b - a) * t);
      return `rgb(${v},${v},${v})`;
    };
    const fx = (n) => Math.round(n * 10) / 10;

    /* línea de tiempo: inspira (sube el camino), mantiene, espira, reposa */
    const STEP_MS = 950;
    const TIGHT_MS = 460;
    const INHALE = N * STEP_MS;
    const HOLD = 2600;
    const EXHALE = 1500;
    const REST = 800;
    const CYCLE = INHALE + HOLD + EXHALE + REST;
    const tens = new Float32Array(N);
    const easeOut = (x) => 1 - Math.pow(1 - x, 3);
    const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
    const state = { e: 0, cur: -1, mode: "rest" };

    function timeline(u) {
      if (u < INHALE) {
        state.cur = -1;
        for (let s = 0; s < N; s++) {
          tens[s] = easeOut(clamp01((u - s * STEP_MS) / TIGHT_MS));
          if (tens[s] > 0.5) state.cur = s;
        }
        state.e = easeInOut(u / INHALE);
        state.mode = "inhale";
      } else if (u < INHALE + HOLD) {
        tens.fill(1); state.cur = N - 1; state.e = 1; state.mode = "hold";
      } else if (u < INHALE + HOLD + EXHALE) {
        const k = easeInOut((u - INHALE - HOLD) / EXHALE);
        tens.fill(1 - k); state.cur = -1; state.e = 1 - k; state.mode = "exhale";
      } else {
        tens.fill(0); state.cur = -1; state.e = 0; state.mode = "rest";
      }
      return state;
    }

    let shownMode = "", shownStep = "", shownNow = "";
    function writeLive(st) {
      const mode = MODES[lang][st.mode];
      const step = st.cur >= 0 ? `0${st.cur + 1} / 06` : "— / 06";
      const now = st.cur >= 0 ? STEPS[lang][st.cur][0] : "—";
      if (mode !== shownMode) { liveMode.textContent = mode; shownMode = mode; }
      if (step !== shownStep) { liveStep.textContent = step; shownStep = step; }
      if (now !== shownNow) { liveNow.textContent = now; shownNow = now; }
    }

    function render(st) {
      geometry(st.e);
      const psi = PSI0 + PSI1 * st.e;
      for (let i = 0; i < 14; i++) project(P[i], Q[i], psi);

      // varillas
      for (let k = 0; k < N; k++) {
        const r = rods[k];
        const a = Q[k], b = Q[6 + k];
        const zMid = (a[2] + b[2]) / 2;
        const back = zMid < 0;
        if (back !== r.back) { (back ? gBack : gFront).appendChild(r.g); r.back = back; }
        const lit = tens[k] > 0.5;
        const w = rodW * (1 + 0.14 * zMid);
        let nx = -(b[1] - a[1]), ny = b[0] - a[0];
        const len = Math.hypot(nx, ny) || 1;
        nx /= len; ny /= len;
        if (ny > 0) { nx = -nx; ny = -ny; }
        const set = (el, ox, oy, width, color) => {
          el.setAttribute("x1", fx(a[0] + ox)); el.setAttribute("y1", fx(a[1] + oy));
          el.setAttribute("x2", fx(b[0] + ox)); el.setAttribute("y2", fx(b[1] + oy));
          el.setAttribute("stroke-width", fx(width));
          if (color) el.setAttribute("stroke", color);
        };
        const t = tens[k];
        set(r.body, 0, 0, w, lerpGray(40, 56, t));
        set(r.shade, -nx * w * 0.2, -ny * w * 0.2, w * 0.36, lerpGray(12, 18, t));
        set(r.light, nx * w * 0.24, ny * w * 0.24, Math.max(1.3, w * 0.16), lerpGray(104, 252, t));
        r.g.setAttribute("opacity", fx(0.78 + 0.22 * (zMid + 1) / 2));

        const capR = w * 0.62;
        const capColor = lerpGray(130, 236, t);
        [[r.capA, r.dotA, a], [r.capB, r.dotB, b]].forEach(([cap, dot, p]) => {
          cap.setAttribute("cx", fx(p[0])); cap.setAttribute("cy", fx(p[1]));
          cap.setAttribute("r", fx(capR)); cap.setAttribute("stroke", capColor);
          dot.setAttribute("cx", fx(p[0])); dot.setAttribute("cy", fx(p[1]));
          dot.setAttribute("r", fx(capR * 0.34)); dot.setAttribute("fill", capColor);
        });
        r.ring.setAttribute("cx", fx(b[0])); r.ring.setAttribute("cy", fx(b[1]));
        r.ring.setAttribute("r", fx(capR * 2.1));
        r.ring.setAttribute("opacity", k === st.cur ? "1" : "0");
      }

      // cables: combados si están flojos, rectos si están tensos
      for (let i = 0; i < cords.length; i++) {
        const c = cords[i];
        const a = Q[c.a], b = Q[c.b];
        const t = tens[c.step];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const sag = (1 - t) * Math.min(22, len * 0.17);
        const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + sag;
        const el = cordEls[i];
        el.setAttribute("d", `M${fx(a[0])} ${fx(a[1])}Q${fx(mx)} ${fx(my)} ${fx(b[0])} ${fx(b[1])}`);
        el.setAttribute("stroke", lerpGray(66, 240, t));
        el.setAttribute("stroke-width", fx(0.9 + 0.5 * t));
      }

      // anclajes en el suelo
      [12, 13].forEach((id, i) => {
        const p = Q[id];
        const el = anchorEls[i];
        el.setAttribute("x", fx(p[0] - 3.5)); el.setAttribute("y", fx(by + 0.18 * sc - 3.5));
        el.setAttribute("width", 7); el.setAttribute("height", 7);
      });

      // etiquetas clavadas a cada cabeza: suben con la columna
      for (let k = 0; k < N; k++) {
        const lb = labels[k];
        const node = Q[6 + k];
        const y = Math.round(node[1]);
        if (y !== lb.y) {
          lb.y = y;
          lb.id.setAttribute("y", y - 3);
          lb.name.setAttribute("y", y + lineGap - 1);
          lb.sub.setAttribute("y", y + lineGap * 2 - 1);
        }
        const start = lb.lx || labEnd;
        const elbow = Math.max(start + 12, node[0] - R * sc * 0.55);
        lb.lead.setAttribute("d", `M${fx(start)} ${fx(y - 7)}H${fx(elbow)}L${fx(node[0])} ${fx(node[1])}`);
        const on = tens[k] > 0.5;
        lb.g.setAttribute("class", "lb" + (on ? " on" : "") + (k === st.cur ? " cur" : ""));
        lb.lead.setAttribute("class", "lead" + (on ? " on" : "") + (k === st.cur ? " cur" : ""));
      }

      writeLive(st);
    }

    /* reproducción */
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pauseBtn = document.querySelector("[data-pause]");
    let raf = 0;
    let running = false;
    let visible = false;
    let held = false;
    let origin = 0;
    let offset = 0;

    function staticPose() {
      tens.fill(1);
      state.e = 1; state.cur = N - 1; state.mode = "hold";
      render(state);
    }
    function frame(now) {
      raf = requestAnimationFrame(frame);
      offset = (now - origin) % CYCLE;
      render(timeline(offset));
    }
    function play() {
      if (running || held || reduce.matches || !visible || document.hidden) return;
      running = true;
      origin = performance.now() - offset;
      raf = requestAnimationFrame(frame);
    }
    function pause() {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    }
    function redraw() {
      if (reduce.matches) staticPose();
      else render(timeline(offset));
    }

    layout();
    redraw();

    if ("ResizeObserver" in window) {
      let pending = 0;
      new ResizeObserver(() => {
        cancelAnimationFrame(pending);
        pending = requestAnimationFrame(() => { layout(); redraw(); });
      }).observe(svg);
    } else {
      window.addEventListener("resize", () => { layout(); redraw(); });
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) play(); else pause();
      }, { threshold: 0.15 }).observe(figure);
    } else {
      visible = true;
      play();
    }
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pause(); else play();
    });
    // pausa manual (WCAG 2.2.2): congela la pose actual
    const paintPause = () => {
      if (!pauseBtn) return;
      pauseBtn.hidden = reduce.matches;
      pauseBtn.setAttribute("aria-pressed", String(held));
    };
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        held = !held;
        if (held) pause(); else play();
        paintPause();
      });
    }
    paintPause();

    const onReduce = () => {
      paintPause();
      if (reduce.matches) { pause(); staticPose(); } else play();
    };
    if (reduce.addEventListener) reduce.addEventListener("change", onReduce);
    else if (reduce.addListener) reduce.addListener(onReduce);

    onLang.push(() => {
      writeLabels();
      shownMode = ""; shownStep = ""; shownNow = "";
      if (!running) redraw();
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layout(); redraw(); });
  }

  setLang(lang);
  paintNav();
})();
