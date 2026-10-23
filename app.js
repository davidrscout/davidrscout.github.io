"use strict";

const translations = {
  es: {
    page_title: "David Rodríguez — Ingeniería y seguridad ofensiva",
    page_description: "David Rodríguez: ingeniería de software, IA aplicada y seguridad ofensiva. Proyectos, experiencia y contacto.",
    skip: "Saltar al contenido", nav_aria: "Navegación principal", mobile_nav_aria: "Navegación móvil",
    nav_projects: "Proyectos", nav_profile: "Perfil", nav_contact: "Contacto", menu_open: "Abrir menú", menu_close: "Cerrar menú",
    hero_eyebrow: "Ingeniería y seguridad ofensiva", hero_location: "Murcia, España",
    hero_line_1: "El sistema.", hero_line_2: "La grieta.", hero_line_3: "La evidencia.",
    hero_description: "Construyo software y estudio dónde falla. Del primer boceto a una prueba reproducible.",
    hero_cta: "Explorar proyectos", cv: "Descargar CV",
    principle_1_title: "Construir", principle_1_text: "Backend, cloud, datos e IA aplicada.",
    principle_2_title: "Cuestionar", principle_2_text: "Laboratorios, enumeración y análisis.",
    principle_3_title: "Demostrar", principle_3_text: "Hallazgos claros y reproducibles.", scroll: "Desliza para descubrir",
    story_aria: "Método de trabajo", story_eyebrow: "Una práctica, dos perspectivas",
    story_1_kicker: "Ingeniería", story_1_title: "Primero, ver el sistema completo.",
    story_1_text: "Datos, usuarios, servicios y confianza. Antes de escribir código o buscar un fallo, hay que entender cómo encaja cada pieza.",
    story_2_kicker: "Seguridad ofensiva", story_2_title: "Después, encontrar la grieta.",
    story_2_text: "Enumerar, formular una hipótesis y probar con control. La intuición abre la puerta; la evidencia decide.",
    story_3_kicker: "Resultado", story_3_title: "Convertirlo en algo reproducible.",
    story_3_text: "Un sistema útil se puede mantener. Un hallazgo útil se puede explicar, repetir y corregir.",
    projects_eyebrow: "Trabajo seleccionado", projects_title: "Ideas convertidas en sistemas.",
    projects_intro: "Producto, infraestructura y seguridad. Cada proyecto resuelve un problema concreto.",
    gemsy_description: "Plataforma de scouting que utiliza datos e IA para explorar, filtrar y comparar talento. Desarrollo de backend, arquitectura cloud y consultas semánticas.",
    visit_project: "Visitar proyecto", lab_description: "Entorno aislado para practicar enumeración, analizar configuraciones y documentar rutas de ataque y mitigaciones de forma controlada.",
    drscout_description: "Contenido y análisis de scouting con desarrollo técnico, optimización de rendimiento, SEO y automatización de procesos.", visit_site: "Visitar sitio",
    profile_eyebrow: "Perfil", profile_title: "La experiencia también se construye.", current: "Actualidad", present: "Presente",
    role_parra: "CTO", role_gemsy: "Fundador e ingeniería", role_drscout: "Desarrollo web", role_f10: "Scout de datos", role_mensajero: "Coordinador de scouting",
    cap_1_title: "Desarrollo", cap_1_text: "Diseño de backend, APIs REST, bases de datos, despliegue cloud e integración de IA en flujos útiles.",
    cap_2_title: "Seguridad", cap_2_text: "Enumeración de sistemas, análisis de superficie de ataque, explotación controlada y escalada de privilegios en laboratorio.",
    cap_3_title: "Práctica continua", cap_3_text: "Máquinas y laboratorios de Hack The Box para entrenar metodología, análisis y documentación técnica.", htb_profile: "Perfil de Hack The Box",
    education: "Formación", education_detail: "Ciberseguridad en la empresa · 2025", languages: "Idiomas", languages_detail: "Español nativo · Inglés avanzado · Francés intermedio · Catalán básico",
    contact_eyebrow: "Siguiente conversación", contact_title: "Hablemos de sistemas.", contact_intro: "Abierto a proyectos y oportunidades en seguridad ofensiva, desarrollo e IA aplicada.",
    footer: "Diseñado para leerse. Construido para explorarse.", back_top: "Volver arriba ↑", language_aria: "Cambiar a inglés"
  },
  en: {
    page_title: "David Rodríguez — Engineering & offensive security",
    page_description: "David Rodríguez: software engineering, applied AI and offensive security. Projects, experience and contact.",
    skip: "Skip to content", nav_aria: "Main navigation", mobile_nav_aria: "Mobile navigation",
    nav_projects: "Projects", nav_profile: "Profile", nav_contact: "Contact", menu_open: "Open menu", menu_close: "Close menu",
    hero_eyebrow: "Engineering & offensive security", hero_location: "Murcia, Spain",
    hero_line_1: "The system.", hero_line_2: "The breach.", hero_line_3: "The evidence.",
    hero_description: "I build software and study where it fails. From the first sketch to a reproducible proof.",
    hero_cta: "Explore projects", cv: "Download CV",
    principle_1_title: "Build", principle_1_text: "Backend, cloud, data and applied AI.",
    principle_2_title: "Question", principle_2_text: "Labs, enumeration and analysis.",
    principle_3_title: "Prove", principle_3_text: "Clear, reproducible findings.", scroll: "Scroll to discover",
    story_aria: "Working method", story_eyebrow: "One practice, two perspectives",
    story_1_kicker: "Engineering", story_1_title: "First, see the whole system.",
    story_1_text: "Data, users, services and trust. Before writing code or looking for a flaw, I need to understand how every piece fits together.",
    story_2_kicker: "Offensive security", story_2_title: "Then, find the breach.",
    story_2_text: "Enumerate, form a hypothesis and test with control. Intuition opens the door; evidence decides.",
    story_3_kicker: "Outcome", story_3_title: "Turn it into something reproducible.",
    story_3_text: "A useful system can be maintained. A useful finding can be explained, repeated and fixed.",
    projects_eyebrow: "Selected work", projects_title: "Ideas turned into systems.",
    projects_intro: "Product, infrastructure and security. Each project solves a specific problem.",
    gemsy_description: "A scouting platform that uses data and AI to explore, filter and compare talent. Backend development, cloud architecture and semantic queries.",
    visit_project: "Visit project", lab_description: "An isolated environment to practise enumeration, analyse configurations and document attack paths and mitigations in a controlled way.",
    drscout_description: "Scouting content and analysis backed by technical development, performance optimisation, SEO and process automation.", visit_site: "Visit site",
    profile_eyebrow: "Profile", profile_title: "Experience is built, too.", current: "Present", present: "Present",
    role_parra: "CTO", role_gemsy: "Founder & engineering", role_drscout: "Web development", role_f10: "Data scout", role_mensajero: "Scouting coordinator",
    cap_1_title: "Development", cap_1_text: "Backend design, REST APIs, databases, cloud deployment and AI integration into useful workflows.",
    cap_2_title: "Security", cap_2_text: "System enumeration, attack surface analysis, controlled exploitation and privilege escalation in lab environments.",
    cap_3_title: "Continuous practice", cap_3_text: "Hack The Box machines and labs to train methodology, analysis and technical documentation.", htb_profile: "Hack The Box profile",
    education: "Education", education_detail: "Enterprise Cybersecurity · 2025", languages: "Languages", languages_detail: "Native Spanish · Advanced English · Intermediate French · Basic Catalan",
    contact_eyebrow: "Next conversation", contact_title: "Let's talk systems.", contact_intro: "Open to projects and opportunities in offensive security, development and applied AI.",
    footer: "Designed to be read. Built to be explored.", back_top: "Back to top ↑", language_aria: "Switch to Spanish"
  }
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let language = document.documentElement.lang === "en" ? "en" : "es";
try {
  const saved = localStorage.getItem("portfolio-language");
  if (saved === "es" || saved === "en") language = saved;
} catch {}

function setLanguage(next) {
  language = next;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary.page_title;
  document.querySelector('meta[name="description"]').content = dictionary.page_description;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-cv]").forEach((link) => {
    link.href = `david-rodriguez-cyber-${language}.pdf`;
  });
  const toggle = document.querySelector("[data-language]");
  toggle.textContent = language === "es" ? "EN" : "ES";
  toggle.setAttribute("aria-label", dictionary.language_aria);
  const menuToggle = document.querySelector("[data-menu]");
  const menuOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.querySelector(".sr-only").textContent = dictionary[menuOpen ? "menu_close" : "menu_open"];
  try { localStorage.setItem("portfolio-language", language); } catch {}
}

document.querySelector("[data-language]").addEventListener("click", () => {
  setLanguage(language === "es" ? "en" : "es");
});
setLanguage(language);

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const menuButton = document.querySelector("[data-menu]");
const mobileMenu = document.querySelector("#mobile-menu");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = translations[language].menu_open;
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector(".sr-only").textContent = translations[language][open ? "menu_close" : "menu_open"];
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -6%" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".desktop-nav a").forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-30% 0px -60%" });
["proyectos", "perfil", "contacto"].forEach((id) => sectionObserver.observe(document.getElementById(id)));

const story = document.querySelector("[data-story]");
const storyCopies = [...document.querySelectorAll("[data-story-copy]")];
const scenes = [...document.querySelectorAll("[data-scene]")];
const storyDots = [...document.querySelectorAll(".story-dots span")];
const storyCurrent = document.querySelector("[data-story-current]");
const visualCaption = document.querySelector("[data-visual-caption]");
const captions = ["SYSTEM MAP", "ATTACK PATH", "REPRODUCIBLE PROOF"];
const header = document.querySelector("[data-header]");
const progressBar = document.querySelector(".scroll-progress span");
const heroGhost = document.querySelector("[data-hero-ghost]");
const projectScreen = document.querySelector("[data-parallax-screen]");
let targetScroll = window.scrollY;
let smoothScroll = targetScroll;
let frame = 0;
let activeStep = -1;

function setStoryStep(step) {
  if (step === activeStep) return;
  activeStep = step;
  storyCopies.forEach((copy, index) => copy.classList.toggle("is-active", index === step));
  scenes.forEach((scene, index) => scene.classList.toggle("is-active", index === step));
  storyDots.forEach((dot, index) => dot.classList.toggle("is-active", index === step));
  storyCurrent.textContent = String(step + 1).padStart(2, "0");
  visualCaption.textContent = captions[step];
}

function render(scrollPosition) {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${documentHeight > 0 ? Math.min(scrollPosition / documentHeight, 1) : 0})`;
  header.classList.toggle("is-scrolled", scrollPosition > 20);
  heroGhost.style.transform = `translate3d(0, ${Math.min(scrollPosition * .16, 170)}px, 0)`;

  if (!reducedMotion.matches) {
    const rect = story.getBoundingClientRect();
    const distance = story.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / distance));
    setStoryStep(Math.min(2, Math.floor(progress * 3)));
    scenes.forEach((scene, index) => {
      const local = Math.max(0, Math.min(1, progress * 3 - index));
      scene.style.setProperty("--draw", String(1 - local));
    });
    if (projectScreen) {
      const screenRect = projectScreen.getBoundingClientRect();
      const imageProgress = (window.innerHeight - screenRect.top) / (window.innerHeight + screenRect.height);
      projectScreen.style.setProperty("--image-shift", `${(Math.max(0, Math.min(1, imageProgress)) - .5) * -22}px`);
    }
  }
}

function animate() {
  smoothScroll += (targetScroll - smoothScroll) * .14;
  if (Math.abs(targetScroll - smoothScroll) < .05) smoothScroll = targetScroll;
  render(smoothScroll);
  if (smoothScroll !== targetScroll) frame = requestAnimationFrame(animate);
  else frame = 0;
}
function requestRender() {
  targetScroll = window.scrollY;
  if (!frame) frame = requestAnimationFrame(animate);
}
window.addEventListener("scroll", requestRender, { passive: true });
window.addEventListener("resize", requestRender, { passive: true });
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) {
    storyCopies.forEach((copy) => copy.classList.add("is-active"));
    heroGhost.style.transform = "";
  } else {
    activeStep = -1;
  }
  requestRender();
});
render(targetScroll);
