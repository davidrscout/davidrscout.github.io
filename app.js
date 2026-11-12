/* natu — language switch (EN in the HTML, ES here) and the lab's step tracker. No dependencies. */
(function () {
  'use strict';

  var ES = {
    'meta.title': 'natu — investigador de seguridad',
    'meta.desc': 'Investigación de vulnerabilidades y divulgación coordinada. No PoC, no report.',
    'skip': 'Saltar al contenido',
    'nav.label': 'Secciones',
    'lang.label': 'Idioma',
    'nav.method': 'Método',
    'nav.reports': 'Informes',
    'nav.lab': 'Laboratorio',
    'nav.htb': 'Práctica',
    'nav.defense': 'Defensa',
    'nav.ai': 'IA',

    'hero.eyebrow': 'Investigador de seguridad',
    'hero.lead': 'Investigación de vulnerabilidades y divulgación coordinada.',
    'hero.note': 'Fallos notificados en privado a quien mantiene el software; nombres ocultos hasta que hay parche.',
    'card.label': 'Ficha',
    'card.alias': 'Alias',
    'card.name': 'Nombre real',
    'card.place': 'Ubicación',
    'card.unpub': 'no publicado',
    'card.unpub2': 'no publicada',
    'card.status': 'Estado',
    'card.status.v': 'activo',

    'rule.label': 'Criterio de notificación',
    'rule.text': 'Ningún informe sale sin una prueba de concepto que funcione contra el código real.',

    'ground.tag': 'Terreno',
    'ground.h': 'Áreas de trabajo',
    'ground.a.h': 'Foco',
    'ground.a.4': 'IA',
    'ground.b.h': 'Ofensiva',
    'ground.b.2': 'Escalada de privilegios',
    'ground.b.4': 'Explotación manual, sin frameworks',
    'ground.c.h': 'Desarrollo',
    'ground.c.1': 'Herramientas en Python',
    'ground.c.4': 'Hardening de VPS',

    'method.tag': 'Método',
    'method.h': 'De objetivo a divulgación',
    'method.lead': 'Seis fases por auditoría; la verificación decide si hay informe.',
    'method.1.h': 'Objetivo',
    'method.1.p': 'Dentro del alcance autorizado por el propietario.',
    'method.2.h': 'Superficie',
    'method.2.p': 'Inventario de puntos de entrada expuestos.',
    'method.3.h': 'Hipótesis',
    'method.3.p': 'Puntos de fallo probables, priorizados.',
    'method.4.p': 'Escrita contra el código real.',
    'method.5.h': 'Verificación',
    'method.5.p': 'PoC funcional al 100&nbsp;%.',
    'method.5.stop': 'Verificación fallida: sin informe.',
    'method.6.h': 'Divulgación',
    'method.6.p': 'Notificación privada al mantenedor. Parche antes que publicación.',

    'rep.tag': 'Auditorías e informes',
    'rep.h': 'Auditorías y resultado',
    'rep.lead': 'Nombres ocultos hasta que se publique el parche.',
    'rep.col.name': 'Nombre',
    'rep.col.what': 'Objetivo',
    'rep.col.state': 'Estado',
    'rep.withheld': 'Nombre oculto.',
    'rep.a.h': 'Divulgación coordinada con mantenedores',
    'rep.a.1': 'Asistente de IA integrado en una hoja de cálculo',
    'rep.a.1s': 'Fallo de autorización',
    'rep.a.2': 'Librería open source en Rust',
    'rep.a.3': 'Librería open source en Go',
    'rep.a.4': 'Librería en Python y C',
    'rep.s.mitigated': 'Notificado · mitigación observada',
    'rep.s.pending': 'Advisory enviado · parche pendiente',
    'rep.b.h': 'Programas de bug bounty',
    'rep.b.1': 'Blockchain de capa 1',
    'rep.b.2': 'Distribución Linux',
    'rep.b.3': 'Núcleo de un CMS',
    'rep.b.4': 'Editor de bloques',
    'rep.b.5': 'Cartera de identidad digital de la UE',
    'rep.b.6': 'SDK de verificación biométrica',
    'rep.b.7': 'Plataforma de reservas de viajes',
    'rep.s.validation': 'Notificado · en validación',
    'rep.s.dup': 'Notificado · duplicado',
    'rep.s.none': 'Auditado · sin informe',

    'lab.tag': 'Laboratorio · acme.local',
    'lab.h': 'Dominio Active Directory aislado: de cero a Domain Admin',
    'lab.lead': 'Laboratorio de montaje propio. Errores de configuración reales, sin atajos de CTF.',
    'lab.net.cap': 'Topología de tres equipos',
    'lab.kali': 'Atacante. Fuera del dominio.',
    'lab.domain': 'Dominio acme.local',
    'lab.ws': 'Windows 10. Puesto de trabajo.',
    'lab.dc': 'Windows Server 2022. Controlador de dominio.',
    'lab.meter': 'Acceso del atacante',
    'lab.path.h': 'Ruta de ataque en seis pasos',
    'lab.has': 'Resultado',
    'lab.1.h': 'Punto de partida',
    'lab.1.t': 'Kali, fuera del dominio',
    'lab.1.p': 'Sin cuenta en el dominio.',
    'lab.1.has': 'sin acceso',
    'lab.2.h': 'Reconocimiento',
    'lab.2.t': 'Enumeración sin autenticar',
    'lab.2.p': 'Información expuesta a equipos sin autenticar.',
    'lab.2.has': 'mapa inicial de la red',
    'lab.3.h': 'Usuarios válidos',
    'lab.3.t': 'Enumeración de usuarios por Kerberos',
    'lab.3.p': 'Respuestas de Kerberos distintas para nombres existentes e inexistentes.',
    'lab.3.has': 'lista de usuarios válidos',
    'lab.4.h': 'Primera cuenta',
    'lab.4.p': 'Cuenta con la preautenticación Kerberos desactivada; contraseña descifrada sin conexión.',
    'lab.4.has': 'credenciales de una cuenta',
    'lab.5.h': 'Escalada de privilegios',
    'lab.5.t': 'Abuso de ACL · GenericAll',
    'lab.5.p': 'Permiso GenericAll (control total sobre otro objeto) concedido de más en una ACL.',
    'lab.5.has': 'privilegios elevados en el dominio',
    'lab.6.h': 'Compromiso del dominio',
    'lab.6.t': 'Domain Admin en DC01',
    'lab.6.p': 'Control total de todas las cuentas y equipos.',
    'lab.6.has': 'el dominio completo',
    'lab.cta': 'Write-up completo en GitHub',

    'htb.tag': 'Práctica',
    'htb.lead': 'Máquinas resueltas en Windows, Linux, Active Directory y web.',
    'htb.list': 'Máquinas resueltas',
    'htb.wu': 'Solo de máquinas retiradas.',
    'htb.cta': 'Perfil en Hack The Box',

    'def.tag': 'Defensa',
    'def.h': 'Defensa de sistemas propios en producción',
    'def.lead': 'Sistemas sin identificar; controles en vigor.',
    'def.1.h': 'Pentest completo',
    'def.1.p': 'Estático y en vivo. Hallazgos críticos y medios corregidos.',
    'def.2.h': 'Autorización en el servidor',
    'def.2.p': 'Límites de plan aplicados fuera del alcance del cliente.',
    'def.3.h': 'SSH solo con clave',
    'def.3.p': 'Sin acceso por contraseña. Rollback automático de cambios.',
    'def.4.p': 'Supervisión de procesos con alerta y reinicio automático.',
    'def.5.h': 'Revisión multiagente',
    'def.5.p': 'Verificación adversarial; cada hallazgo debe resistir un intento de refutación.',
    'def.6.p': 'Publicado. Canal de notificación para otros investigadores.',

    'ai.tag': 'Foco actual',
    'ai.h': 'IA aplicada a seguridad',
    'ai.lead': 'LLM en el flujo de auditoría, bajo el mismo criterio de notificación.',
    'ai.1.h': 'Reconocimiento con triaje asistido por LLM',
    'ai.1.p': 'Priorización asistida de la superficie expuesta.',
    'ai.2.h': 'Agentes conscientes del entorno',
    'ai.2.p': 'Siguiente paso decidido según el estado observado del entorno.',
    'ai.3.h': 'Generación de informes',
    'ai.3.p': 'A partir de las notas de auditoría.',
    'ai.4.h': 'Análisis semántico de escaneos',
    'ai.4.p': 'Interpretación de resultados, no búsqueda por palabras clave.',
    'ai.5.h': 'Pipeline ofensivo',
    'ai.5.p': 'Cadena privada de herramientas enlazadas.',
    'ai.6.p': 'Toolkit en Python con interfaz gráfica. En desarrollo.',
    'ai.6.cta': 'NatuScan en GitHub',

    'foot.q1': 'Los nombres',
    'foot.q2': 'esperan al parche.',
    'foot.l1': 'Write-up de acme.local en GitHub',
    'foot.l2': 'Toolkit en desarrollo, en GitHub',
    'foot.l3': 'Perfil y máquinas resueltas',
    'foot.end': 'Investigación de seguridad y divulgación coordinada'
  };

  var doc = document;
  var root = doc.documentElement;
  var textEls = [].slice.call(doc.querySelectorAll('[data-i18n]'));
  var attrEls = [].slice.call(doc.querySelectorAll('[data-i18n-attr]'));
  var EN = {};

  // English lives in the HTML: read it once so switching back needs no second copy.
  textEls.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });
  attrEls.forEach(function (el) {
    pairs(el).forEach(function (p) { EN[p[1]] = el.getAttribute(p[0]); });
  });

  function pairs(el) {
    return el.getAttribute('data-i18n-attr').split(';').map(function (s) { return s.split(':'); });
  }

  function setLang(lang, remember) {
    var dict = lang === 'es' ? ES : EN;
    textEls.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    attrEls.forEach(function (el) {
      pairs(el).forEach(function (p) {
        var v = dict[p[1]];
        if (v != null) el.setAttribute(p[0], v.replace(/&nbsp;/g, ' '));
      });
    });
    root.lang = lang;
    [].forEach.call(doc.querySelectorAll('.lang button'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    if (remember) {
      try { localStorage.setItem('natu-lang', lang); } catch (e) { /* private mode: fine */ }
      try {
        var url = new URL(location.href);
        if (lang === 'es') url.searchParams.set('lang', 'es'); else url.searchParams.delete('lang');
        history.replaceState(null, '', url);
      } catch (e) { /* file:// or old browser: fine */ }
    }
  }

  var initial = 'en';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('natu-lang');
    if (q === 'es' || q === 'en') initial = q; else if (saved === 'es') initial = 'es';
  } catch (e) { /* default stays English */ }
  if (initial !== 'en') setLang(initial, false);

  [].forEach.call(doc.querySelectorAll('.lang button'), function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
  });

  // Lab: the diagram follows the step being read, so the attacker's access grows as you scroll.
  var net = doc.getElementById('net');
  var list = doc.getElementById('steps');
  var meterN = doc.getElementById('meter-n');
  if (net && list) {
    var steps = [].slice.call(list.children);
    var ticking = false;
    list.classList.add('is-live');

    var update = function () {
      ticking = false;
      var line = window.innerHeight * 0.6;
      var n = 1;
      steps.forEach(function (s, i) { if (s.getBoundingClientRect().top < line) n = i + 1; });
      if (net.getAttribute('data-step') !== String(n)) {
        net.setAttribute('data-step', n);
        meterN.textContent = n + ' / ' + steps.length;
      }
      steps.forEach(function (s, i) { s.classList.toggle('is-reached', i < n); });
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }
})();
