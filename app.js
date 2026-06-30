/* ============================================================
   LAS AVENTURAS DEL AGENTE JUAN MARTÍN — app.js v3
   Aventura por destinos · Apuesta familiar Mundial · localStorage
   ============================================================ */

// ==================== DATOS ====================

const PLAYER_DEFAULTS = {
  mama:       { name: 'Mamá',         emoji: '👩' },
  papa:       { name: 'Papá',         emoji: '👨' },
  juanmartin: { name: 'Juan Martín',  emoji: '🧒🏻' },
  peluche:    { name: 'Peluche',      emoji: '🧸' },
};

const DESTINATIONS = [
  {
    id: 'avion',
    name: 'Avión',
    icon: '✈️',
    badge: '🛫',
    badgeName: 'Viajero del Aire',
    color: '#1E90FF',
    cardBg: 'linear-gradient(135deg, #4FC3F7 0%, #1E90FF 100%)',
    story: 'Agente Juan Martín, la aventura empieza en el cielo. Antes de llegar a Florida, debes convertirte en un verdadero viajero del aire.',
    missions: [
      { id: 'av_ventana',  icon: '🪟', name: 'Mirar por la ventana y describir qué ves', pts: 10 },
      { id: 'av_nube',     icon: '☁️', name: 'Dibujar una nube rara',                     pts:  5 },
      { id: 'av_asiento',  icon: '🔢', name: 'Encontrar tu asiento y escribir el número', pts:  5 },
      { id: 'av_pelicula', icon: '🎬', name: 'Ver una película o jugar algo tranquilo',   pts:  5 },
      { id: 'av_comida',   icon: '🍪', name: 'Comer algo en el avión',                    pts:  5 },
      { id: 'av_mapa',     icon: '🧭', name: 'Marcar en el mapa hacia dónde vamos',        pts: 10 },
    ]
  },
  {
    id: 'mundial',
    name: 'Mundial 2026',
    icon: '⚽',
    badge: '⚽',
    badgeName: 'Crack del Fútbol',
    type: 'familybet',
    color: '#1a5c3a',
    cardBg: 'linear-gradient(135deg, #1a7a3a 0%, #4CAF50 100%)',
    story: 'Antes de cada partido, todos hacen su apuesta. Juan Martín, mamá, papá y hasta el peluche pueden adivinar el marcador. ¡Que gane el mejor profeta!',
  },
  {
    id: 'florida',
    name: 'Florida',
    icon: '🌴',
    badge: '🦅',
    badgeName: 'Explorador de Florida',
    color: '#063B63',
    cardBg: 'linear-gradient(135deg, #0EA5A3 0%, #0CC5C2 100%)',
    story: 'Agente Juan Martín, bienvenido a Florida — la tierra de las palmeras gigantes, los flamencos y las pizzas enormes. En Florida también está Nana, la abuela, una guía especial de esta aventura. Escúchala, abrázala y guarda un recuerdo bonito con ella.',
    missions: [
      { id: 'fl_ingles',  icon: '⭐', name: 'Hablar con alguien en inglés',        pts: 10 },
      { id: 'fl_foto',    icon: '📸', name: 'Tomarse una foto familiar perfecta',  pts:  5 },
      { id: 'fl_palmera', icon: '🌴', name: 'Encontrar una palmera gigante',       pts:  5 },
      { id: 'fl_pizza',   icon: '🍕', name: 'Probar una pizza americana gigante',  pts:  5 },
      { id: 'fl_pajaros', icon: '🐦', name: 'Identificar 3 pájaros diferentes',    pts: 10 },
      { id: 'fl_dulce',   icon: '🍬', name: 'Probar un dulce nuevo',               pts:  5 },
      { id: 'fl_nana_abrazo',   icon: '🤗', name: 'Darle un abrazo gigante a Nana',                          pts: 10, nana: true },
      { id: 'fl_nana_lugar',    icon: '💬', name: 'Preguntarle a Nana cuál es su lugar favorito de Florida', pts: 10, nana: true },
      { id: 'fl_nana_foto',     icon: '📷', name: 'Tomarse una foto especial con Nana',                      pts: 10, nana: true },
      { id: 'fl_nana_historia', icon: '📖', name: 'Pedirle a Nana que cuente una historia de la familia',    pts: 10, nana: true },
      { id: 'fl_nana_divertido',icon: '🎈', name: 'Hacer algo divertido con Nana',                           pts: 10, nana: true },
    ]
  },
  {
    id: 'crucero',
    name: 'Crucero MSC',
    icon: '🛳️',
    badge: '⚓',
    badgeName: 'Capitán del Crucero',
    color: '#1a4a7a',
    cardBg: 'linear-gradient(135deg, #1a4a7a 0%, #0A5C9B 100%)',
    story: 'Agente Juan Martín, has subido a uno de los barcos más grandes del mundo. Tu misión: explorar cada rincón del crucero y descubrir sus secretos. ¡Zarpa, capitán!',
    missions: [
      { id: 'cr_explorar',   icon: '🛳️', name: 'Explorar el crucero de popa a proa', pts: 10 },
      { id: 'cr_piscina',    icon: '🏊', name: 'Encontrar la piscina más grande',     pts:  5 },
      { id: 'cr_ascensores', icon: '🛗', name: 'Contar cuántos ascensores hay',       pts:  5 },
      { id: 'cr_musica',     icon: '🎵', name: 'Ver música en vivo o bailar',         pts: 10 },
      { id: 'cr_mapa',       icon: '🗺️', name: 'Dibujar un mapa del barco',           pts: 10 },
      { id: 'cr_banderas',   icon: '🚩', name: 'Encontrar 3 banderas diferentes',     pts:  5 },
    ]
  },
  {
    id: 'caribe',
    name: 'Caribe',
    icon: '🌺',
    badge: '🤿',
    badgeName: 'Explorador del Caribe',
    color: '#0a6e8a',
    cardBg: 'linear-gradient(135deg, #0a6e8a 0%, #0DCFE0 100%)',
    story: 'Agente Juan Martín, el Caribe te llama con sus aguas azules y sus peces de colores. Esta isla guarda los secretos más bellos del mundo. ¡Sumérgete en la aventura!',
    missions: [
      { id: 'ca_pez',      icon: '🐠', name: 'Ver un pez tropical de colores',          pts: 10 },
      { id: 'ca_snorkel',  icon: '🤿', name: 'Hacer snorkel o ver peces bajo el agua',  pts: 15 },
      { id: 'ca_olas',     icon: '🌊', name: 'Saltar olas en el Caribe',                pts:  5 },
      { id: 'ca_azul',     icon: '💙', name: 'Encontrar agua azul clarita',             pts:  5 },
      { id: 'ca_dibujo',   icon: '🎨', name: 'Dibujar lo que más te sorprendió',        pts: 10 },
      { id: 'ca_favorito', icon: '🌺', name: 'Escoger tu lugar favorito del Caribe',    pts:  5 },
    ]
  },
  {
    id: 'busch',
    name: 'Busch Gardens',
    icon: '🦁',
    badge: '🎢',
    badgeName: 'Domador de Fieras',
    color: '#CC5B1A',
    cardBg: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)',
    story: 'Agente Juan Martín, Busch Gardens es territorio salvaje. Aquí conviven animales increíbles y atracciones que ponen a prueba tu valentía. ¿Estás listo, explorador?',
    missions: [
      { id: 'bu_animal',    icon: '🦒', name: 'Ver un animal salvaje grande',        pts: 10 },
      { id: 'bu_grande',    icon: '🦁', name: 'Ver un león, tigre o jirafa',         pts: 10 },
      { id: 'bu_atraccion', icon: '🎢', name: 'Montar la atracción más emocionante', pts: 15 },
      { id: 'bu_favorita',  icon: '🎡', name: 'Escoger tu montaña rusa favorita',    pts:  5 },
      { id: 'bu_miedo',     icon: '😱', name: 'Decir cuál te dio más miedo',         pts:  5 },
      { id: 'bu_safari',    icon: '🦓', name: 'Completar el safari de animales',     pts: 15 },
    ]
  },
  {
    id: 'recuerdos',
    name: 'Recuerdos Finales',
    icon: '📚',
    badge: '📚',
    badgeName: 'Cronista del Viaje',
    type: 'recuerdos',
    color: '#2d4a6e',
    cardBg: 'linear-gradient(135deg, #7B4FA6 0%, #B06FDC 100%)',
    story: '¡Felicidades, Agente Juan Martín! La Gran Expedición 2026 está llegando a su fin. Es hora de guardar los recuerdos más especiales para siempre.',
    fields: [
      { id: 'rc_dia',      label: 'Mi día favorito del viaje ☀️',                  placeholder: '¿Qué fue lo mejor de ese día?' },
      { id: 'rc_comida',   label: 'Mi comida favorita 🍽️',                         placeholder: '¿Qué comida no olvidarás?' },
      { id: 'rc_gracioso', label: 'Mi momento más gracioso 😂',                    placeholder: '¿Qué fue lo más chistoso?' },
      { id: 'rc_miedo',    label: 'Lo que me dio más miedo 😱',                    placeholder: '¿Qué te puso nervioso?' },
      { id: 'rc_otravez',  label: 'Lo que quiero hacer otra vez 🔁',              placeholder: '¿Qué repetirías?' },
      { id: 'rc_amigo',    label: 'Lo que le contaría a mi amigo del colegio 📢', placeholder: 'La historia más emocionante...' },
      { id: 'rc_futuro',   label: 'Mensaje para mi yo del futuro 💌',             placeholder: 'Hola yo del futuro...' },
      { id: 'rc_equipo',   label: 'Mi equipo de aventura 👨‍👩‍👦',                     placeholder: 'Ej: Mamá, Papá, Nana...' },
    ]
  }
];

const TOTAL_MISSION_PTS = DESTINATIONS
  .filter(d => d.missions)
  .flatMap(d => d.missions)
  .reduce((sum, m) => sum + m.pts, 0);

const TOTAL_PTS = TOTAL_MISSION_PTS + 20; // +10 mundial (apuesta), +10 recuerdos

// ==================== ESTADO (con migración segura) ====================

function defaultState() {
  return {
    done: {}, notes: {}, photos: {}, worldcup: {}, memories: {}, diploma: {},
    familyBet: {
      match: { teamA: '', teamB: '', date: '', time: '', place: '', realA: '', realB: '' },
      players: {
        mama:       { ...PLAYER_DEFAULTS.mama,       teamA: '', teamB: '', scoreA: '', scoreB: '', winner: '', comment: '', saved: false },
        papa:       { ...PLAYER_DEFAULTS.papa,       teamA: '', teamB: '', scoreA: '', scoreB: '', winner: '', comment: '', saved: false },
        juanmartin: { ...PLAYER_DEFAULTS.juanmartin, teamA: '', teamB: '', scoreA: '', scoreB: '', winner: '', comment: '', saved: false },
        peluche:    { ...PLAYER_DEFAULTS.peluche,    teamA: '', teamB: '', scoreA: '', scoreB: '', winner: '', comment: '', saved: false },
      },
      badges: { crack: false, adivino: false, campeon: false, peluche: false },
      bestJuanBet: null, // { pts, comment }
      lastRoundWinner: null,
    },
    familyRanking: { mama: 0, papa: 0, juanmartin: 0, peluche: 0 },
    flight: {},
    plushName: 'Peluche',
  };
}

function mergeDeep(base, saved) {
  if (!saved || typeof saved !== 'object') return base;
  const out = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(base).forEach(k => {
    if (saved[k] === undefined) return;
    if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) {
      out[k] = mergeDeep(base[k], saved[k]);
    } else {
      out[k] = saved[k];
    }
  });
  // conservar llaves extra ya guardadas que no rompan estructura
  Object.keys(saved).forEach(k => { if (out[k] === undefined) out[k] = saved[k]; });
  return out;
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem('jmAdventure2026');
    const saved = raw ? JSON.parse(raw) : null;
    return saved ? mergeDeep(defaultState(), saved) : defaultState();
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem('jmAdventure2026', JSON.stringify(state));
  } catch (e) {
    showToast('⚠️ Poco espacio disponible.', 't-error');
  }
}

// ==================== CÁLCULOS GENERALES ====================

function getScore() {
  let s = 0;
  DESTINATIONS.forEach(d => {
    if (d.missions) d.missions.forEach(m => { if (state.done[m.id]) s += m.pts; });
  });
  if (hasFamilyBetData()) s += 10;
  if (hasMemoriesData())  s += 10;
  return s;
}

function getDoneCount() {
  return DESTINATIONS.filter(d => d.missions).flatMap(d => d.missions).filter(m => state.done[m.id]).length;
}

function hasFamilyBetData() {
  return Object.values(state.familyBet.players).some(p => p.saved);
}
function hasMemoriesData() {
  return state.memories && Object.values(state.memories).some(v => v && v.trim());
}

function getDestProgress(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest || !dest.missions) return { done: 0, total: 0, pct: 0 };
  const total = dest.missions.length;
  const done  = dest.missions.filter(m => state.done[m.id]).length;
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}

function getDestStatus(dest) {
  if (dest.type === 'familybet')  return hasFamilyBetData() ? 'done' : 'progress';
  if (dest.type === 'recuerdos')  return hasMemoriesData()  ? 'done' : 'progress';
  const { done, total } = getDestProgress(dest.id);
  if (done === total && total > 0) return 'done';
  if (done === 0)                  return 'locked';
  return 'progress';
}

function getUnlockedBadges() {
  const out = new Set();
  DESTINATIONS.forEach(dest => {
    if (dest.missions) {
      if (dest.missions.every(m => state.done[m.id])) out.add(dest.id);
    } else if (dest.type === 'familybet' && hasFamilyBetData()) out.add('mundial');
    else if   (dest.type === 'recuerdos' && hasMemoriesData())  out.add('recuerdos');
  });
  return out;
}

function getRank(score) {
  if (score >= 150) return '🏆 Explorador Supremo';
  if (score >= 100) return '⭐⭐ Explorador Élite';
  if (score >=  50) return '⭐ Gran Explorador';
  return '🌟 Explorador Junior';
}

function getLevel(score) { return Math.max(1, Math.floor(score / 40) + 1); }

function getMissionPts(missionId) {
  for (const d of DESTINATIONS) {
    if (d.missions) {
      const m = d.missions.find(x => x.id === missionId);
      if (m) return m.pts;
    }
  }
  return 0;
}

function getEnergyLevel() {
  const pct = Math.min(100, Math.round(getScore() / TOTAL_PTS * 100));
  return Math.max(1, Math.min(5, Math.ceil(pct / 20)));
}

// ==================== NAVEGACIÓN ====================

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
}
function goIntro() { renderIntro(); showScreen('intro'); }
function goMap()   { renderMap();   showScreen('map'); }
function goDest(destId) { renderDestination(destId); showScreen('dest'); }
function goAlbum() { renderAlbum(); showScreen('album'); }

// ==================== PANTALLA INTRO ====================

function renderIntro() {
  const score    = getScore();
  const done     = getDoneCount();
  const unlocked = getUnlockedBadges();
  const total    = DESTINATIONS.filter(d => d.missions).flatMap(d => d.missions).length;
  const pct      = Math.min(100, Math.round(score / TOTAL_PTS * 100));

  document.getElementById('introStats').innerHTML = `
    <div class="stats-grid">
      <div class="stat-box"><span class="stat-num">${score}</span><span class="stat-lbl">puntos</span></div>
      <div class="stat-box"><span class="stat-num">${done}/${total}</span><span class="stat-lbl">misiones</span></div>
      <div class="stat-box"><span class="stat-num">${unlocked.size}</span><span class="stat-lbl">insignias</span></div>
    </div>
    <div class="rank-banner">${getRank(score)} · Nivel ${getLevel(score)}</div>
    <div class="total-bar-lbl">Progreso total de la expedición: ${pct}%</div>
    <div class="total-bar"><div class="total-bar-fill" style="width:${pct}%"></div></div>
  `;
}

// ==================== PANTALLA MAPA ====================

function renderMap() {
  const score    = getScore();
  const unlocked = getUnlockedBadges();
  const done     = getDoneCount();
  const total    = DESTINATIONS.filter(d => d.missions).flatMap(d => d.missions).length;
  const pct      = Math.min(100, Math.round(score / TOTAL_PTS * 100));

  document.getElementById('topRank').textContent   = getRank(score);
  document.getElementById('topLevel').textContent  = getLevel(score);
  document.getElementById('topPts').textContent    = score + ' pts';
  document.getElementById('topBadges').textContent = unlocked.size;
  document.getElementById('xpFill').style.width    = pct + '%';
  document.getElementById('mapSub').textContent    = `${done} de ${total} misiones · ${pct}% del viaje`;

  document.getElementById('destGrid').innerHTML = DESTINATIONS.map((dest, idx) => {
    const status  = getDestStatus(dest);
    const prog    = dest.missions ? getDestProgress(dest.id) : null;
    const sLabel  = status === 'done' ? '✅ Completado' : status === 'progress' ? '🔄 En progreso' : '🔒 No iniciado';
    const sClass  = status === 'done' ? 's-done' : status === 'progress' ? 's-progress' : 's-locked';
    const btnTxt  = status === 'done' ? '🏅 Ver destino' : status === 'progress' ? '▶️ Continuar misión' : '🌟 Entrar al destino';
    const btnCls  = status === 'done' ? 'dest-btn dest-btn-green' : 'dest-btn dest-btn-teal';
    const pBarPct = prog ? prog.pct : (status === 'done' ? 100 : 0);
    const cntTxt  = prog ? `${prog.done} / ${prog.total} misiones` : (status === 'done' ? 'Completado ✅' : 'Listo para explorar');

    return `
      <div class="dest-card ${status === 'done' ? 'done' : ''}">
        <div class="dest-card-top" style="background:${dest.cardBg || dest.color}">
          <div class="dest-lvl-badge">NIVEL ${idx + 1}</div>
          ${status === 'done' ? '<div class="dest-crown">👑</div>' : ''}
          <span class="dest-card-icon">${dest.icon}</span>
          <div class="dest-card-title">${dest.name}</div>
        </div>
        <div class="dest-card-body">
          <div class="dest-count">${cntTxt}</div>
          <div class="dest-pbar"><div class="dest-pbar-fill" style="width:${pBarPct}%"></div></div>
          <span class="dest-status ${sClass}">${sLabel}</span>
          <button class="${btnCls}" onclick="goDest('${dest.id}')">${btnTxt}</button>
        </div>
      </div>
    `;
  }).join('');

  // Energía de explorador
  const energy = getEnergyLevel();
  document.getElementById('energyBar').innerHTML = [1,2,3,4,5].map(i =>
    `<span class="${i <= energy ? 'on' : ''}">🔋</span>`
  ).join('');

  // Insignias (7 destinos + 4 del mundial)
  const mundialBadgeDefs = [
    { key: 'crack',   icon: '⚽', label: 'Crack del fútbol' },
    { key: 'adivino', icon: '🎯', label: 'Adivino de marcadores' },
    { key: 'campeon', icon: '🏆', label: 'Campeón familiar' },
    { key: 'peluche', icon: '🧸', label: 'Peluche profeta' },
  ];
  const destBadgesHTML = DESTINATIONS.map(dest => `
    <div class="badge-card ${unlocked.has(dest.id) ? 'unlocked' : ''}">
      <span class="badge-icon">${dest.badge}</span>${dest.badgeName}
    </div>
  `).join('');
  const mundialBadgesHTML = mundialBadgeDefs.map(b => `
    <div class="badge-card ${state.familyBet.badges[b.key] ? 'unlocked' : ''}">
      <span class="badge-icon">${b.icon}</span>${b.label}
    </div>
  `).join('');
  document.getElementById('badgesGrid').innerHTML = destBadgesHTML + mundialBadgesHTML;
}

// ==================== CENTRO DE MISIONES ====================

function doHoyToca() {
  let sugerido = null;
  const avionDone   = getDestStatus(DESTINATIONS.find(d => d.id === 'avion')) === 'done';
  const matchSaved  = !!state.familyBet.match.realA && !!state.familyBet.match.realB;
  const floridaProg = getDestProgress('florida').done > 0;

  if (!avionDone)            sugerido = 'avion';
  else if (matchSaved)       sugerido = 'mundial';
  else if (floridaProg)      sugerido = 'florida';
  else                       sugerido = 'recuerdos';

  const dest = DESTINATIONS.find(d => d.id === sugerido);
  showToast(`🎯 Hoy toca: ${dest.icon} ${dest.name}`, 't-success');
  setTimeout(() => goDest(sugerido), 900);
}

function doSorpresa() {
  const pendientes = DESTINATIONS
    .filter(d => d.missions)
    .flatMap(d => d.missions.map(m => ({ ...m, destId: d.id })))
    .filter(m => !state.done[m.id]);

  if (pendientes.length === 0) {
    showToast('🎉 ¡Ya completaste todas las misiones!', 't-badge');
    return;
  }
  const pick = pendientes[Math.floor(Math.random() * pendientes.length)];
  showToast(`🎲 Misión sorpresa: ${pick.icon} ${pick.name}`, 't-badge');
  setTimeout(() => goDest(pick.destId), 1000);
}

// ==================== PANTALLA DESTINO ====================

function renderDestination(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;
  if      (dest.type === 'familybet') renderFamilyBet(dest);
  else if (dest.type === 'recuerdos') renderRecuerdos(dest);
  else                                renderMissions(dest);
}

/* ----- Misiones normales (incluye Avión, Florida+Nana, Crucero, Caribe, Busch) ----- */
function renderMissions(dest) {
  const prog = getDestProgress(dest.id);

  const cardsHTML = dest.missions.map(m => {
    const done  = !!state.done[m.id];
    const note  = state.notes[m.id]  || '';
    const photo = state.photos[m.id] || '';
    const photoBlock = photo
      ? `<img class="photo-preview" src="${photo}" alt="foto misión">`
      : `<div class="photo-placeholder">📷 Aquí irá tu foto</div>`;

    return `
      <div class="mission-card ${done ? 'done' : ''} ${m.nana ? 'nana' : ''}" id="mc-${m.id}">
        <div class="mission-strip"></div>
        <div class="mission-body">
          ${m.nana ? '<span class="nana-tag">👵 Misión con Nana</span><br>' : ''}
          <div class="mission-top">
            <div class="mission-ico-wrap">${m.icon}</div>
            <div class="mission-info">
              <div class="mission-name">${m.name}</div>
              <div class="mission-pts">🌟 ${m.pts} puntos</div>
            </div>
            ${done ? '<div class="mission-check">✅</div>' : ''}
          </div>
          ${done
            ? `<button class="mission-btn done-state" disabled>✅ ¡Misión cumplida!</button>`
            : `<button class="mission-btn" onclick="toggleMission('${m.id}','${dest.id}')">🎯 ¡Lo logré!</button>`
          }
          <div class="mission-note-label">✍️ ¿Qué pasó? Cuéntame todo…</div>
          <textarea class="mission-note" placeholder="Escribe aquí tu aventura..." oninput="saveNote('${m.id}',this.value)">${note}</textarea>
          <div class="photo-area">
            ${photoBlock}
            <label class="btn-photo">
              📷 ${photo ? 'Cambiar foto' : 'Subir foto'}
              <input type="file" accept="image/*" class="file-inp" onchange="handlePhoto('${m.id}',this)">
            </label>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('destContent').innerHTML = `
    <div class="dest-view">
      <div class="dest-hdr" style="background: ${dest.color || 'var(--navy)'}">
        <button class="dest-hdr-back" onclick="goMap()">⬅️ Volver al mapa</button>
        <span class="dest-hdr-icon">${dest.icon}</span>
        <div class="dest-hdr-title">${dest.name}</div>
        <div class="dest-hdr-story">${dest.story}</div>
        <div class="dest-hdr-prog">
          <div class="dest-hdr-bar"><div class="dest-hdr-bar-fill" id="destBarFill" style="width:${prog.pct}%"></div></div>
          <div class="dest-hdr-pct" id="destPct">${prog.pct}%</div>
        </div>
        <div class="dest-badge-row">
          <div class="dest-badge-icon">${dest.badge}</div>
          <div class="dest-badge-label" id="destBadgeLabel">
            Insignia: <strong>${dest.badgeName}</strong><br>
            <span style="font-size:12px;opacity:.85">Completa todas las misiones para desbloquearla</span>
          </div>
        </div>
      </div>
      <div class="missions-wrap"><div class="missions-grid">${cardsHTML}</div></div>
      <div class="dest-footer"><button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button></div>
    </div>
  `;
}

/* ----- MUNDIAL — Apuesta familiar ----- */
function renderFamilyBet(dest) {
  const fb = state.familyBet;

  const playersHTML = Object.keys(PLAYER_DEFAULTS).map(key => {
    const p = fb.players[key];
    const isPlush = key === 'peluche';
    return `
      <div class="player-card ${p.saved ? 'saved' : ''}" id="pc-${key}">
        <div class="player-card-hdr">
          <span class="player-emoji">${p.emoji}</span>
          <input type="text" class="player-name-inp" value="${escHtml(p.name)}"
                 placeholder="${isPlush ? 'Nombre del peluche' : 'Nombre'}"
                 oninput="updatePlayerField('${key}','name',this.value)">
        </div>
        <div class="player-field">
          <label>Equipo A</label>
          <input type="text" value="${escHtml(p.teamA)}" placeholder="Ej: Colombia" oninput="updatePlayerField('${key}','teamA',this.value)">
        </div>
        <div class="player-field">
          <label>Equipo B</label>
          <input type="text" value="${escHtml(p.teamB)}" placeholder="Ej: Brasil" oninput="updatePlayerField('${key}','teamB',this.value)">
        </div>
        <div class="player-field">
          <label>Marcador apostado</label>
          <div class="player-score-row">
            <input type="number" min="0" value="${escHtml(p.scoreA)}" oninput="updatePlayerField('${key}','scoreA',this.value)">
            <span>—</span>
            <input type="number" min="0" value="${escHtml(p.scoreB)}" oninput="updatePlayerField('${key}','scoreB',this.value)">
          </div>
        </div>
        <div class="player-field">
          <label>Ganador elegido</label>
          <select onchange="updatePlayerField('${key}','winner',this.value)">
            <option value="">Elige...</option>
            <option value="A" ${p.winner==='A'?'selected':''}>Equipo A</option>
            <option value="B" ${p.winner==='B'?'selected':''}>Equipo B</option>
            <option value="empate" ${p.winner==='empate'?'selected':''}>Empate</option>
          </select>
        </div>
        <div class="player-field">
          <label>Comentario divertido</label>
          <input type="text" value="${escHtml(p.comment)}" placeholder="Ej: ¡Goleada total!" oninput="updatePlayerField('${key}','comment',this.value)">
        </div>
        <button class="btn-player-save" onclick="savePlayerBet('${key}')">💾 Guardar apuesta</button>
        ${p.saved ? '<div class="player-saved-tag">✅ Apuesta guardada</div>' : ''}
      </div>
    `;
  }).join('');

  const m = fb.match;
  const matchHTML = `
    <div class="match-card">
      <h3>🏟️ Partido del día</h3>
      <div class="match-grid">
        <div><label>Equipo A</label><input type="text" id="match_teamA" value="${escHtml(m.teamA)}" placeholder="Ej: Colombia" oninput="updateMatchField('teamA',this.value)"></div>
        <div><label>Equipo B</label><input type="text" id="match_teamB" value="${escHtml(m.teamB)}" placeholder="Ej: Brasil" oninput="updateMatchField('teamB',this.value)"></div>
        <div><label>Fecha</label><input type="date" id="match_date" value="${escHtml(m.date)}" oninput="updateMatchField('date',this.value)"></div>
        <div><label>Hora</label><input type="time" id="match_time" value="${escHtml(m.time)}" oninput="updateMatchField('time',this.value)"></div>
        <div class="full"><label>Lugar (opcional)</label><input type="text" id="match_place" value="${escHtml(m.place)}" placeholder="Ej: En el crucero" oninput="updateMatchField('place',this.value)"></div>
      </div>
      <h3 style="margin-top:14px">📊 Resultado real</h3>
      <div class="score-row">
        <input type="number" min="0" id="match_realA" value="${escHtml(m.realA)}" oninput="updateMatchField('realA',this.value)">
        <span class="score-vs">—</span>
        <input type="number" min="0" id="match_realB" value="${escHtml(m.realB)}" oninput="updateMatchField('realB',this.value)">
      </div>
      <button class="btn-save" onclick="saveMatchResult()">⚽ Guardar partido</button>
    </div>
  `;

  const ranking = Object.entries(state.familyRanking).sort((a,b) => b[1]-a[1]);
  const medals  = ['🥇','🥈','🥉','🎖️'];
  const rankingHTML = `
    <div class="ranking-wrap">
      <h3>🏆 Ranking familiar</h3>
      ${ranking[0] && ranking[0][0] === 'peluche' && ranking[0][1] > 0 ? '<div class="plush-banner">😂 ¡Hoy ganó el peluche!</div>' : ''}
      ${ranking.map(([key, pts], i) => {
        const p = fb.players[key];
        const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
        return `
          <div class="ranking-row ${cls}">
            <span class="ranking-medal">${medals[i] || '🔹'}</span>
            <span class="ranking-name">${p.emoji} ${escHtml(p.name)}</span>
            <span class="ranking-pts">${pts} pts</span>
          </div>
        `;
      }).join('')}
    </div>
  `;

  const badgeDefs = [
    { key: 'crack',   icon: '⚽', label: 'Crack del fútbol' },
    { key: 'adivino', icon: '🎯', label: 'Adivino de marcadores' },
    { key: 'campeon', icon: '🏆', label: 'Campeón familiar' },
    { key: 'peluche', icon: '🧸', label: 'Peluche profeta' },
  ];
  const badgesHTML = `
    <div class="mundial-badges">
      ${badgeDefs.map(b => `
        <div class="badge-card ${fb.badges[b.key] ? 'unlocked' : ''}">
          <span class="badge-icon">${b.icon}</span>${b.label}
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('destContent').innerHTML = `
    <div class="dest-view">
      <div class="dest-hdr" style="background: ${dest.color}">
        <button class="dest-hdr-back" onclick="goMap()">⬅️ Volver al mapa</button>
        <span class="dest-hdr-icon">${dest.icon}</span>
        <div class="dest-hdr-title">Mundial 2026 — Apuesta Familiar</div>
        <div class="dest-hdr-story">${dest.story}</div>
      </div>
      <div class="form-wrap">
        ${matchHTML}
        <h3 style="color:var(--navy);margin:18px 0 12px;">👨‍👩‍👦 Apuestas de la familia</h3>
        <div class="players-grid">${playersHTML}</div>
        ${rankingHTML}
        <h3 style="color:var(--navy);margin:18px 0 12px;">🏅 Insignias del Mundial</h3>
        ${badgesHTML}
      </div>
      <div class="dest-footer"><button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button></div>
    </div>
  `;
}

/* ----- Recuerdos finales ----- */
function renderRecuerdos(dest) {
  const score    = getScore();
  const unlocked = getUnlockedBadges().has('recuerdos');
  const showDiploma = score >= 150;

  const fieldsHTML = dest.fields.map(f => `
    <div class="form-field">
      <label>${f.label}</label>
      <textarea id="${f.id}" placeholder="${f.placeholder}" oninput="autosaveMemories()">${escHtml(state.memories[f.id] || '')}</textarea>
    </div>
  `).join('');

  const diplomaHTML = showDiploma ? `
    <div class="diploma">
      <span class="diploma-trophy">🏆</span>
      <div class="diploma-title">Diploma de Explorador Supremo</div>
      <p class="diploma-text">
        Por la presente se certifica que <strong>Juan Martín</strong> completó con valentía y alegría su Gran Expedición 2026.<br>
        <em>${getRank(score)} · ${score} puntos conquistados · Nivel ${getLevel(score)}</em>
      </p>
      <div class="diploma-fields">
        <div class="diploma-field"><label>Firma del Explorador</label>
          <input type="text" placeholder="Juan Martín" value="${escHtml(state.diploma.firma_explorador || '')}" oninput="saveDiploma('firma_explorador',this.value)"></div>
        <div class="diploma-field"><label>Firma de Mamá</label>
          <input type="text" placeholder="Mamá" value="${escHtml(state.diploma.firma_mama || '')}" oninput="saveDiploma('firma_mama',this.value)"></div>
      </div>
      <div class="diploma-stars">✨ 🌎 ✈️ 🦁 ⚽ 🛳️ ✨</div>
    </div>
  ` : `
    <div class="diploma-locked">
      <div style="font-size:52px">🔒</div>
      <p><strong>Diploma de Explorador Supremo</strong><br>
      Necesitas 150 puntos para desbloquearlo.<br>
      Te faltan <strong>${Math.max(0, 150 - score)}</strong> puntos más.</p>
    </div>
  `;

  document.getElementById('destContent').innerHTML = `
    <div class="dest-view">
      <div class="dest-hdr" style="background:${dest.color || '#2d4a6e'}">
        <button class="dest-hdr-back" onclick="goMap()">⬅️ Volver al mapa</button>
        <span class="dest-hdr-icon">${dest.icon}</span>
        <div class="dest-hdr-title">Recuerdos Finales</div>
        <div class="dest-hdr-story">${dest.story}</div>
        ${unlocked ? `<div style="background:rgba(255,255,255,.2);border-radius:12px;padding:10px;margin-top:8px;font-weight:800;">📚 ¡Insignia Cronista del Viaje desbloqueada!</div>` : ''}
      </div>
      <div class="form-wrap">
        ${fieldsHTML}
        <button class="btn-save" onclick="saveMemories()">💾 Guardar mis recuerdos</button>
        ${diplomaHTML}
      </div>
      <div class="dest-footer"><button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button></div>
    </div>
  `;
}

// ==================== ACCIONES DE MISIONES ====================

function toggleMission(missionId, destId) {
  if (state.done[missionId]) return;
  state.done[missionId] = true;
  saveState();

  const card = document.getElementById('mc-' + missionId);
  if (card) {
    card.classList.add('done');
    const strip = card.querySelector('.mission-strip');
    if (strip) strip.style.background = 'linear-gradient(90deg, var(--green), #A8EEC0)';
    const icoWrap = card.querySelector('.mission-ico-wrap');
    if (icoWrap) icoWrap.style.background = '#D4F5E0';
    const btn = card.querySelector('.mission-btn');
    if (btn) { btn.className = 'mission-btn done-state'; btn.disabled = true; btn.textContent = '✅ ¡Misión cumplida!'; }
    const top = card.querySelector('.mission-top');
    if (top && !top.querySelector('.mission-check')) {
      const chk = document.createElement('div');
      chk.className = 'mission-check'; chk.textContent = '✅';
      top.appendChild(chk);
    }
  }

  const prog = getDestProgress(destId);
  const bar  = document.getElementById('destBarFill');
  const pct  = document.getElementById('destPct');
  if (bar) bar.style.width = prog.pct + '%';
  if (pct) pct.textContent = prog.pct + '%';

  launchConfetti();
  showToast('🎉 ¡Misión cumplida! +' + getMissionPts(missionId) + ' puntos', 't-success');

  const dest = DESTINATIONS.find(d => d.id === destId);
  if (dest && dest.missions && dest.missions.every(m => state.done[m.id])) {
    setTimeout(() => {
      launchConfetti();
      showToast('🏅 ¡' + dest.badgeName + ' desbloqueada!', 't-badge');
      const bl = document.getElementById('destBadgeLabel');
      if (bl) bl.innerHTML = `<strong style="color:#FFD700;font-size:15px">🏅 ¡${dest.badgeName} desbloqueada!</strong>`;
    }, 2600);
  }
}

function saveNote(missionId, value) { state.notes[missionId] = value; saveState(); }

// ==================== FOTOS ====================

function handlePhoto(missionId, input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 8 * 1024 * 1024) { showToast('📷 Foto muy grande. Elige una más pequeña.', 't-error'); return; }
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const img    = new Image();
  const url    = URL.createObjectURL(file);

  img.onload = () => {
    const MAX  = 320;
    const ratio = Math.min(MAX / img.width, MAX / img.height, 1);
    canvas.width  = img.width  * ratio;
    canvas.height = img.height * ratio;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const b64 = canvas.toDataURL('image/jpeg', 0.72);
    state.photos[missionId] = b64;
    saveState();
    URL.revokeObjectURL(url);

    const area = input.closest('.photo-area');
    if (area) {
      let prev = area.querySelector('.photo-preview');
      if (!prev) {
        const ph = area.querySelector('.photo-placeholder');
        if (ph) ph.remove();
        prev = document.createElement('img');
        prev.className = 'photo-preview';
        area.insertBefore(prev, area.firstChild);
      }
      prev.src = b64;
    }
    showToast('📷 ¡Foto guardada!', 't-success');
  };
  img.onerror = () => showToast('📷 No se pudo cargar la foto.', 't-error');
  img.src = url;
}

// ==================== APUESTA FAMILIAR — MUNDIAL ====================

function updateMatchField(field, value) {
  state.familyBet.match[field] = value;
  saveState();
}

function updatePlayerField(key, field, value) {
  state.familyBet.players[key][field] = value;
  if (field === 'name' && key === 'peluche') state.plushName = value || 'Peluche';
  saveState();
}

function savePlayerBet(key) {
  const p = state.familyBet.players[key];
  if (p.scoreA === '' || p.scoreB === '' || !p.winner) {
    showToast('⚠️ Completa marcador y ganador antes de guardar', 't-error');
    return;
  }
  p.saved = true;
  saveState();

  // Insignia Crack del fútbol — al menos una apuesta guardada
  if (!state.familyBet.badges.crack) {
    state.familyBet.badges.crack = true;
    saveState();
  }

  const card = document.getElementById('pc-' + key);
  if (card) {
    card.classList.add('saved');
    if (!card.querySelector('.player-saved-tag')) {
      const tag = document.createElement('div');
      tag.className = 'player-saved-tag';
      tag.textContent = '✅ Apuesta guardada';
      card.appendChild(tag);
    }
  }
  showToast(`⚽ ¡Apuesta de ${p.name} guardada!`, 't-success');
}

function saveMatchResult() {
  const m = state.familyBet.match;
  if (m.realA === '' || m.realB === '') {
    showToast('⚠️ Escribe el resultado real para calcular', 't-error');
    return;
  }
  const realA = parseInt(m.realA, 10);
  const realB = parseInt(m.realB, 10);
  const realWinner = realA > realB ? 'A' : realA < realB ? 'B' : 'empate';

  let exactHit   = false;
  let roundWinnerKey = null;
  let roundWinnerPts = -1;
  let plushWonRound  = false;

  Object.keys(state.familyBet.players).forEach(key => {
    const p = state.familyBet.players[key];
    if (!p.saved) return;
    let pts = 0;
    const guessA = parseInt(p.scoreA, 10);
    const guessB = parseInt(p.scoreB, 10);
    if (guessA === realA && guessB === realB) { pts = 3; exactHit = true; }
    else if (p.winner === realWinner)         { pts = 1; }

    state.familyRanking[key] = (state.familyRanking[key] || 0) + pts;

    if (pts > roundWinnerPts) { roundWinnerPts = pts; roundWinnerKey = key; }

    if (key === 'juanmartin' && (!state.familyBet.bestJuanBet || pts > state.familyBet.bestJuanBet.pts)) {
      state.familyBet.bestJuanBet = { pts, comment: p.comment || '' };
    }
  });

  if (roundWinnerKey === 'peluche' && roundWinnerPts > 0) plushWonRound = true;

  // Insignias
  if (exactHit) state.familyBet.badges.adivino = true;
  if (Object.values(state.familyRanking).some(v => v > 0)) state.familyBet.badges.campeon = true;
  if (plushWonRound) state.familyBet.badges.peluche = true;

  state.familyBet.lastRoundWinner = roundWinnerKey;
  saveState();

  launchConfetti();
  showToast('⚽ ¡Apuesta calculada!', 't-success');
  setTimeout(() => {
    if (exactHit)            showToast('🎯 ¡Marcador exacto!', 't-badge');
    else if (roundWinnerKey === 'juanmartin') showToast('👦 ¡Juan Martín ganó la ronda!', 't-badge');
    else if (plushWonRound)  showToast('🧸 ¡El peluche sorprendió a todos!', 't-badge');
  }, 1400);

  setTimeout(() => goDest('mundial'), 1900);
}

// ==================== FORMULARIOS (Recuerdos) ====================

function autosaveMemories() {
  const dest = DESTINATIONS.find(d => d.id === 'recuerdos');
  const data = {};
  dest.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) data[f.id] = el.value;
  });
  state.memories = data;
  saveState();
}
function saveMemories() { autosaveMemories(); showToast('📚 ¡Recuerdos guardados!', 't-success'); }
function saveDiploma(field, value) { state.diploma[field] = value; saveState(); }

// ==================== ÁLBUM FINAL ====================

function renderAlbum() {
  const score = getScore();
  const avionStatus = getDestStatus(DESTINATIONS.find(d => d.id === 'avion'));
  const ranking = Object.entries(state.familyRanking).sort((a,b) => b[1]-a[1]);
  const fb = state.familyBet;

  const nanaMissions = DESTINATIONS.find(d => d.id === 'florida').missions.filter(m => m.nana);
  const nanaDone = nanaMissions.filter(m => state.done[m.id]);
  const nanaNote = nanaDone.map(m => state.notes[m.id]).find(n => n && n.trim());
  const nanaPhoto = nanaDone.map(m => state.photos[m.id]).find(p => p);

  document.getElementById('albumContent').innerHTML = `
    <div class="album-view">
      <div class="album-hdr">
        <button class="dest-hdr-back" onclick="goMap()">⬅️ Volver al mapa</button>
        <h1>📖 Álbum Final de la Expedición</h1>
        <p>${getRank(score)} · ${score} puntos · Nivel ${getLevel(score)}</p>
      </div>
      <div class="album-inner">

        <div class="album-section">
          <h3>✈️ Nivel 1 — Avión</h3>
          <div class="album-row"><span>Estado</span><b>${avionStatus === 'done' ? '✅ Completado' : '🔄 En progreso'}</b></div>
          <div class="album-row"><span>Progreso</span><b>${getDestProgress('avion').done}/${getDestProgress('avion').total} misiones</b></div>
        </div>

        <div class="album-section">
          <h3>⚽ Nivel 2 — Mundial 2026</h3>
          <div class="album-row"><span>Partido</span><b>${escHtml(fb.match.teamA || '—')} vs ${escHtml(fb.match.teamB || '—')}</b></div>
          <div class="album-row"><span>Resultado real</span><b>${fb.match.realA !== '' ? fb.match.realA + ' - ' + fb.match.realB : 'Sin jugar aún'}</b></div>
          <div class="album-row"><span>Nombre del peluche</span><b>🧸 ${escHtml(state.plushName)}</b></div>
          <div class="album-row"><span>Mejor apuesta de Juan</span><b>${fb.bestJuanBet ? fb.bestJuanBet.pts + ' pts — "' + escHtml(fb.bestJuanBet.comment || 'sin comentario') + '"' : 'Aún sin apuestas'}</b></div>
        </div>

        <div class="album-section">
          <h3>🏆 Ranking de la apuesta familiar</h3>
          ${ranking.map(([key, pts], i) => `
            <div class="album-row"><span>${['🥇','🥈','🥉','🎖️'][i] || ''} ${fb.players[key].emoji} ${escHtml(fb.players[key].name)}</span><b>${pts} pts</b></div>
          `).join('')}
        </div>

        <div class="album-section">
          <h3>👵 Recuerdo con Nana</h3>
          ${nanaPhoto ? `<img class="photo-preview" src="${nanaPhoto}" alt="Nana" style="margin-bottom:10px">` : ''}
          <div class="album-row"><span>Misiones con Nana completadas</span><b>${nanaDone.length}/${nanaMissions.length}</b></div>
          ${nanaNote ? `<p style="font-size:14px;color:var(--ink);margin-top:8px;">"${escHtml(nanaNote)}"</p>` : '<p style="font-size:13px;color:#7a99ab;">Aún no hay recuerdo escrito con Nana.</p>'}
        </div>

        <div class="album-section">
          <h3>🏅 Insignias totales</h3>
          <div class="album-row"><span>Insignias de destino</span><b>${getUnlockedBadges().size} / ${DESTINATIONS.length}</b></div>
          <div class="album-row"><span>Insignias del Mundial</span><b>${Object.values(fb.badges).filter(Boolean).length} / 4</b></div>
        </div>

        ${score >= 150 ? `
        <div class="diploma">
          <span class="diploma-trophy">🏆</span>
          <div class="diploma-title">Diploma de Explorador Supremo</div>
          <p class="diploma-text">Juan Martín completó con valentía y alegría su Gran Expedición 2026.<br>
          <em>${score} puntos · ${getRank(score)}</em></p>
          <div class="diploma-stars">✨ 🌎 ✈️ ⚽ 🛳️ 👵 ✨</div>
        </div>` : `
        <div class="diploma-locked">
          <div style="font-size:44px">🔒</div>
          <p>Diploma bloqueado — faltan ${Math.max(0,150-score)} puntos.</p>
        </div>`}

        <button class="btn-save" onclick="window.print()">🖨️ Imprimir álbum completo</button>
        <button class="btn-back-map" onclick="goMap()" style="margin-top:10px">⬅️ Volver al mapa</button>
      </div>
    </div>
  `;
}

// ==================== REINICIAR ====================

function resetAdventure() {
  if (confirm('¿Reiniciar toda la aventura? Se perderán puntos, misiones, notas, fotos y apuestas.')) {
    localStorage.removeItem('jmAdventure2026');
    state = defaultState();
    goIntro();
    showToast('🔄 Aventura reiniciada', '');
  }
}

// ==================== CONFETI ====================

function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const colors = ['#0EA5A3','#FF6B6B','#4CAF50','#FFD700','#FF69B4','#063B63','#FFA500','#00CED1'];
  for (let i = 0; i < 75; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const dur   = (0.9 + Math.random() * 1.3).toFixed(2);
    const delay = (Math.random() * 0.55).toFixed(2);
    const size  = 6 + Math.random() * 9;
    el.style.cssText = [
      `left:${Math.random() * 100}vw`,
      `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      `animation-duration:${dur}s`,
      `animation-delay:${delay}s`,
      `width:${size}px`,
      `height:${size}px`,
      `border-radius:${Math.random() > .5 ? '50%' : '3px'}`,
    ].join(';');
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 3800);
}

// ==================== TOAST ====================

let _toastTimer = null;
function showToast(msg, cls) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show ' + (cls || '');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.className = ''; }, 2600);
}

// ==================== UTILIDADES ====================

function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==================== INICIO ====================

renderIntro();
showScreen('intro');
