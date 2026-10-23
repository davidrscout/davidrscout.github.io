"use strict";

const translations = {
  es: {
    page_title: "David Rodríguez — Offensive Security",
    page_description: "David Rodríguez — Seguridad ofensiva. Reconocimiento, explotación controlada, Active Directory, seguridad web y evidencia reproducible.",
    skip: "Saltar al contenido", nav_aria: "Navegación principal", mobile_nav_aria: "Navegación móvil",
    nav_labs: "Laboratorio", nav_skills: "Capacidades", nav_contact: "Contacto", menu_open: "Abrir menú", menu_close: "Cerrar menú",
    hero_eyebrow: "Una secuencia de investigación", hero_location: "Murcia, España",
    hero_line_1: "Ver el sistema.", hero_line_2: "Encontrar la grieta.",
    hero_description: "Seguridad ofensiva. Reconocimiento, explotación controlada y evidencia que se puede repetir.",
    hero_cta: "Entrar en la secuencia", cv: "Descargar CV", chapters_aria: "Capítulos",
    chapter_recon: "Reconocimiento", chapter_access: "Acceso", chapter_privesc: "Escalada", chapter_proof: "Evidencia", scroll: "Scroll para entrar",
    sequence_aria: "Secuencia de investigación", sequence_label: "MÉTODO / INVESTIGACIÓN",
    scene_1_title: "Todo empieza\nen la superficie.", scene_1_text: "Servicios, usuarios, rutas y relaciones. La enumeración convierte lo desconocido en un mapa que se puede estudiar.",
    scene_2_title: "Una hipótesis.\nUna prueba controlada.", scene_2_text: "Probar lo mínimo necesario para responder una pregunta. Sin asumir impacto, sin perder el control del entorno.",
    scene_3_title: "El contexto\ncambia la perspectiva.", scene_3_text: "Permisos, identidades y configuraciones. Comprender el camino importa más que coleccionar comandos.",
    scene_4_title: "Si no se puede repetir,\nla historia no termina.", scene_4_text: "Pasos claros, resultado observado y mitigación. La evidencia convierte una prueba en algo útil.",
    labs_eyebrow: "Notas de campo", labs_title_1: "Laboratorio.", labs_title_2: "Prueba. Repite.", labs_intro: "Entornos controlados para aprender cómo fallan los sistemas y documentar el proceso.",
    ad_description: "Laboratorio aislado para practicar enumeración LDAP y SMB, analizar vectores de ataque Kerberos y estudiar configuraciones incorrectas de ACL.",
    ad_outcome: "Cada ruta termina en documentación: precondiciones, pasos, errores y mitigación.",
    web_title: "Seguridad web", web_description: "Práctica controlada de enumeración y vulnerabilidades web: LFI, RCE, SQLi y técnicas de acceso inicial.",
    htb_description: "Máquinas tipo empresa para entrenar enumeración, explotación y escalada de privilegios con una metodología estructurada.", htb_profile: "Ver perfil de Hack The Box", machines_aria: "Máquinas practicadas",
    skills_eyebrow: "Superficie de trabajo", skills_title_1: "Método antes", skills_title_2: "que herramientas.",
    skill_1_title: "Enumeración", skill_1_text: "Windows y Linux. LDAP, SMB, descubrimiento de servicios y usuarios, análisis de superficie de ataque.",
    skill_2_title: "Explotación controlada", skill_2_text: "Vulnerabilidades web, servicios Windows, shells y técnicas de acceso inicial en entornos de práctica.",
    skill_3_title: "Escalada de privilegios", skill_3_text: "SUID, capacidades, cron, servicios, permisos, Kerberos, ACL, MSSQL y WinRM.",
    skill_4_title: "Evidencia", skill_4_text: "Reproducción, documentación de rutas de ataque, errores comunes y estrategias de mitigación.",
    toolkit: "Kit de trabajo", education: "Formación", education_detail: "Ciberseguridad en la empresa · 2025",
    contact_eyebrow: "Última escena / Nueva conversación", contact_title_1: "Hablemos de", contact_title_2: "seguridad.", contact_intro: "Abierto a oportunidades en seguridad ofensiva, análisis e investigación.",
    back_top: "Volver al inicio ↑", language_aria: "Cambiar a inglés"
  },
  en: {
    page_title: "David Rodríguez — Offensive Security",
    page_description: "David Rodríguez — Offensive security. Reconnaissance, controlled exploitation, Active Directory, web security and reproducible evidence.",
    skip: "Skip to content", nav_aria: "Main navigation", mobile_nav_aria: "Mobile navigation",
    nav_labs: "Labs", nav_skills: "Capabilities", nav_contact: "Contact", menu_open: "Open menu", menu_close: "Close menu",
    hero_eyebrow: "An investigation sequence", hero_location: "Murcia, Spain",
    hero_line_1: "See the system.", hero_line_2: "Find the breach.",
    hero_description: "Offensive security. Reconnaissance, controlled exploitation and evidence you can reproduce.",
    hero_cta: "Enter the sequence", cv: "Download CV", chapters_aria: "Chapters",
    chapter_recon: "Reconnaissance", chapter_access: "Access", chapter_privesc: "Privilege", chapter_proof: "Evidence", scroll: "Scroll to enter",
    sequence_aria: "Investigation sequence", sequence_label: "METHOD / INVESTIGATION",
    scene_1_title: "It all starts\nat the surface.", scene_1_text: "Services, users, paths and relationships. Enumeration turns the unknown into a map you can study.",
    scene_2_title: "One hypothesis.\nOne controlled test.", scene_2_text: "Test the minimum needed to answer a question. Without assuming impact or losing control of the environment.",
    scene_3_title: "Context\nchanges perspective.", scene_3_text: "Permissions, identities and configurations. Understanding the path matters more than collecting commands.",
    scene_4_title: "If you cannot repeat it,\nthe story is not over.", scene_4_text: "Clear steps, observed results and mitigation. Evidence turns a test into something useful.",
    labs_eyebrow: "Field notes", labs_title_1: "Laboratory.", labs_title_2: "Test. Repeat.", labs_intro: "Controlled environments to learn how systems fail and document the process.",
    ad_description: "An isolated lab to practise LDAP and SMB enumeration, analyse Kerberos attack vectors and study ACL misconfigurations.",
    ad_outcome: "Every path ends in documentation: preconditions, steps, mistakes and mitigation.",
    web_title: "Web security", web_description: "Controlled practice of web enumeration and vulnerabilities: LFI, RCE, SQLi and initial access techniques.",
    htb_description: "Enterprise-like machines to train enumeration, exploitation and privilege escalation with a structured methodology.", htb_profile: "View Hack The Box profile", machines_aria: "Machines practised",
    skills_eyebrow: "Working surface", skills_title_1: "Method before", skills_title_2: "tools.",
    skill_1_title: "Enumeration", skill_1_text: "Windows and Linux. LDAP, SMB, service and user discovery, attack surface analysis.",
    skill_2_title: "Controlled exploitation", skill_2_text: "Web vulnerabilities, Windows services, shells and initial access techniques in practice environments.",
    skill_3_title: "Privilege escalation", skill_3_text: "SUID, capabilities, cron, services, permissions, Kerberos, ACL, MSSQL and WinRM.",
    skill_4_title: "Evidence", skill_4_text: "Reproduction, attack path documentation, common mistakes and mitigation strategies.",
    toolkit: "Working kit", education: "Education", education_detail: "Enterprise Cybersecurity · 2025",
    contact_eyebrow: "Final scene / New conversation", contact_title_1: "Let's talk", contact_title_2: "security.", contact_intro: "Open to opportunities in offensive security, analysis and research.",
    back_top: "Back to top ↑", language_aria: "Switch to Spanish"
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
    if (value) {
      element.textContent = value;
      if (element.matches("h2")) element.style.whiteSpace = "pre-line";
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-cv]").forEach((link) => { link.href = `david-rodriguez-cyber-${language}.pdf`; });
  const toggle = document.querySelector("[data-language]");
  toggle.textContent = language === "es" ? "EN" : "ES";
  toggle.setAttribute("aria-label", dictionary.language_aria);
  const menuToggle = document.querySelector("[data-menu]");
  const menuOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.querySelector(".sr-only").textContent = dictionary[menuOpen ? "menu_close" : "menu_open"];
  try { localStorage.setItem("portfolio-language", language); } catch {}
}
document.querySelector("[data-language]").addEventListener("click", () => setLanguage(language === "es" ? "en" : "es"));
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
  if (event.key === "Escape" && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => { if (event.matches) closeMenu(); });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -6%" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".desktop-nav a").forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-30% 0px -60%" });
["laboratorios", "capacidades", "contacto"].forEach((id) => sectionObserver.observe(document.getElementById(id)));

const story = document.querySelector("[data-story]");
const storyCopies = [...document.querySelectorAll("[data-story-copy]")];
const scenes = [...document.querySelectorAll("[data-scene]")];
const storyDots = [...document.querySelectorAll(".scene-progress i")];
const storyCurrent = document.querySelector("[data-story-current]");
const timecode = document.querySelector("[data-timecode]");
const header = document.querySelector("[data-header]");
const progressBar = document.querySelector(".scroll-progress span");
const corridor = document.querySelector("[data-corridor]");
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
}
function render(scrollPosition) {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${documentHeight > 0 ? Math.min(scrollPosition / documentHeight, 1) : 0})`;
  header.classList.toggle("is-scrolled", scrollPosition > 20);
  if (!reducedMotion.matches) {
    const rect = story.getBoundingClientRect();
    const distance = story.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / distance));
    setStoryStep(Math.min(3, Math.floor(progress * 4)));
    scenes.forEach((scene, index) => scene.style.setProperty("--scene-progress", String(Math.max(0, Math.min(1, progress * 4 - index)))));
    const frames = Math.round(progress * 120);
    const seconds = Math.floor(frames / 24);
    timecode.textContent = `00:00:${String(seconds).padStart(2, "0")}:${String(frames % 24).padStart(2, "0")}`;
    corridor.style.opacity = String(Math.max(0, .65 - scrollPosition / window.innerHeight));
  }
}
function animate() {
  smoothScroll += (targetScroll - smoothScroll) * .12;
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
  if (reducedMotion.matches) storyCopies.forEach((copy) => copy.classList.add("is-active"));
  else activeStep = -1;
  requestRender();
});

if (!reducedMotion.matches) {
  document.querySelector("[data-hero]").addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - .5) * -16;
    const y = (event.clientY / window.innerHeight - .5) * -12;
    corridor.style.setProperty("--pointer-x", `${x}px`);
    corridor.style.setProperty("--pointer-y", `${y}px`);
  }, { passive: true });
}
render(targetScroll);
