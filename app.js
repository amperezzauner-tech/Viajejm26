/* ============================================================
   LAS AVENTURAS DEL AGENTE JUAN MARTÍN — app.js
   Aventura por destinos · localStorage · sin frameworks
   ============================================================ */

// ==================== DATOS ====================

const DESTINATIONS = [
  {
    id: 'florida',
    name: 'Florida',
    icon: '🌴',
    badge: '🦅',
    badgeName: 'Explorador de Florida',
    color: '#063B63',
    story: 'Agente Juan Martín, bienvenido a Florida — la tierra de las palmeras gigantes, los flamencos y las pizzas enormes. Tu misión: conquistar este estado con valentía y curiosidad.',
    missions: [
      { id: 'fl_ingles',  icon: '⭐', name: 'Hablar con alguien en inglés',       pts: 10 },
      { id: 'fl_foto',    icon: '📸', name: 'Tomarse una foto familiar perfecta',  pts:  5 },
      { id: 'fl_palmera', icon: '🌴', name: 'Encontrar una palmera gigante',       pts:  5 },
      { id: 'fl_pizza',   icon: '🍕', name: 'Probar una pizza americana gigante',  pts:  5 },
      { id: 'fl_pajaros', icon: '🐦', name: 'Identificar 3 pájaros diferentes',   pts: 10 },
      { id: 'fl_dulce',   icon: '🍬', name: 'Probar un dulce nuevo',               pts:  5 },
    ]
  },
  {
    id: 'playa',
    name: 'Playa',
    icon: '🏖️',
    badge: '🌊',
    badgeName: 'Rey de la Playa',
    color: '#0EA5A3',
    story: 'Agente Juan Martín, la playa está llena de pistas secretas. Busca animales, olas y tesoros escondidos en la arena. ¡El mar te está esperando!',
    missions: [
      { id: 'pl_amanecer', icon: '🌅', name: 'Ver un amanecer o atardecer',     pts: 10 },
      { id: 'pl_castillo', icon: '🏰', name: 'Construir un castillo de arena',   pts: 10 },
      { id: 'pl_conchas',  icon: '🐚', name: 'Encontrar 3 conchas bonitas',      pts:  5 },
      { id: 'pl_olas',     icon: '🌊', name: 'Saltar 5 olas seguidas',           pts:  5 },
      { id: 'pl_pelicano', icon: '🦅', name: 'Ver un pelícano',                  pts:  5 },
      { id: 'pl_cangrejo', icon: '🦀', name: 'Ver un cangrejo corriendo',        pts: 10 },
    ]
  },
  {
    id: 'crucero',
    name: 'Crucero MSC',
    icon: '🛳️',
    badge: '⚓',
    badgeName: 'Capitán del Crucero',
    color: '#1a4a7a',
    story: 'Agente Juan Martín, has subido a uno de los barcos más grandes del mundo. Tu misión: explorar cada rincón del crucero y descubrir sus secretos. ¡Zarpa, capitán!',
    missions: [
      { id: 'cr_explorar',    icon: '🛳️', name: 'Explorar el crucero de popa a proa',  pts: 10 },
      { id: 'cr_piscina',     icon: '🏊', name: 'Encontrar la piscina más grande',      pts:  5 },
      { id: 'cr_ascensores',  icon: '🛗', name: 'Contar cuántos ascensores hay',        pts:  5 },
      { id: 'cr_musica',      icon: '🎵', name: 'Ver música en vivo o bailar',          pts: 10 },
      { id: 'cr_mapa',        icon: '🗺️', name: 'Dibujar un mapa del barco',            pts: 10 },
      { id: 'cr_banderas',    icon: '🚩', name: 'Encontrar 3 banderas diferentes',      pts:  5 },
    ]
  },
  {
    id: 'busch',
    name: 'Busch Gardens',
    icon: '🦁',
    badge: '🎢',
    badgeName: 'Domador de Fieras',
    color: '#2d5a1b',
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
    id: 'caribe',
    name: 'Caribe',
    icon: '🌺',
    badge: '🤿',
    badgeName: 'Explorador del Caribe',
    color: '#0a6e8a',
    story: 'Agente Juan Martín, el Caribe te llama con sus aguas azules y sus peces de colores. Esta isla guarda los secretos más bellos del mundo. ¡Sumérgete en la aventura!',
    missions: [
      { id: 'ca_pez',      icon: '🐠', name: 'Ver un pez tropical de colores',         pts: 10 },
      { id: 'ca_snorkel',  icon: '🤿', name: 'Hacer snorkel o ver peces bajo el agua', pts: 15 },
      { id: 'ca_olas',     icon: '🌊', name: 'Saltar olas en el Caribe',               pts:  5 },
      { id: 'ca_azul',     icon: '💙', name: 'Encontrar agua azul clarita',            pts:  5 },
      { id: 'ca_dibujo',   icon: '🎨', name: 'Dibujar lo que más te sorprendió',      pts: 10 },
      { id: 'ca_favorito', icon: '🌺', name: 'Escoger tu lugar favorito del Caribe',  pts:  5 },
    ]
  },
  {
    id: 'mundial',
    name: 'Mundial 2026',
    icon: '⚽',
    badge: '⚽',
    badgeName: 'Crack del Fútbol',
    type: 'mundial',
    color: '#1a5c3a',
    story: 'Como en el Mundial, cada país tiene una bandera y cada aventura tiene una misión. ¡Llena tu ficha de campeón, Agente Juan Martín!',
    fields: [
      { id: 'wc_equipo',   label: 'Mi equipo campeón 🏆',                             placeholder: 'Ej: Colombia' },
      { id: 'wc_goleador', label: 'Mi goleador favorito ⚽',                           placeholder: 'Nombre del jugador' },
      { id: 'wc_marcador', label: 'Mi marcador loco 📊',                               placeholder: 'Ej: 7-0' },
      { id: 'wc_camiseta', label: 'Mi camiseta favorita 👕',                           placeholder: 'Ej: Argentina amarilla' },
      { id: 'wc_pais',     label: 'Si mi viaje fuera una selección, ¿qué país sería? 🌍', placeholder: 'Ej: Brasil' },
      { id: 'wc_jugada',   label: 'Mi jugada favorita del viaje 🌟',                  placeholder: 'Descríbela aquí...' },
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
    story: '¡Felicidades, Agente Juan Martín! La Gran Expedición 2026 está llegando a su fin. Es hora de guardar los recuerdos más especiales para siempre.',
    fields: [
      { id: 'rc_dia',      label: 'Mi día favorito del viaje ☀️',                   placeholder: '¿Qué fue lo mejor de ese día?' },
      { id: 'rc_comida',   label: 'Mi comida favorita 🍽️',                          placeholder: '¿Qué comida no olvidarás?' },
      { id: 'rc_gracioso', label: 'Mi momento más gracioso 😂',                     placeholder: '¿Qué fue lo más chistoso?' },
      { id: 'rc_miedo',    label: 'Lo que me dio más miedo 😱',                     placeholder: '¿Qué te puso nervioso?' },
      { id: 'rc_otravez',  label: 'Lo que quiero hacer otra vez 🔁',               placeholder: '¿Qué repetirías?' },
      { id: 'rc_amigo',    label: 'Lo que le contaría a mi amigo del colegio 📢',  placeholder: 'La historia más emocionante...' },
      { id: 'rc_futuro',   label: 'Mensaje para mi yo del futuro 💌',              placeholder: 'Hola yo del futuro...' },
      { id: 'rc_equipo',   label: 'Mi equipo de aventura 👨‍👩‍👦',                      placeholder: 'Ej: Mamá, Papá, Abuela...' },
    ]
  }
];

// Calcular puntos totales de misiones
const TOTAL_MISSION_PTS = DESTINATIONS
  .filter(d => d.missions)
  .flatMap(d => d.missions)
  .reduce((sum, m) => sum + m.pts, 0);

const TOTAL_PTS = TOTAL_MISSION_PTS + 20; // +10 mundial, +10 recuerdos

// ==================== ESTADO ====================

function defaultState() {
  return { done: {}, notes: {}, photos: {}, worldcup: {}, memories: {}, diploma: {} };
}

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem('jmAdventure2026');
    return saved ? JSON.parse(saved) : defaultState();
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

// ==================== CÁLCULOS ====================

function getScore() {
  let s = 0;
  DESTINATIONS.forEach(d => {
    if (d.missions) d.missions.forEach(m => { if (state.done[m.id]) s += m.pts; });
  });
  if (hasWorldcupData())  s += 10;
  if (hasMemoriesData())  s += 10;
  return s;
}

function getDoneCount() {
  return DESTINATIONS
    .filter(d => d.missions)
    .flatMap(d => d.missions)
    .filter(m => state.done[m.id]).length;
}

function hasWorldcupData() {
  return state.worldcup && Object.values(state.worldcup).some(v => v && v.trim());
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
  if (dest.type === 'mundial')    return hasWorldcupData()  ? 'done' : 'progress';
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
    } else if (dest.type === 'mundial'   && hasWorldcupData())  out.add('mundial');
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

function getLevel(score) {
  return Math.max(1, Math.floor(score / 40) + 1);
}

function getMissionPts(missionId) {
  for (const d of DESTINATIONS) {
    if (d.missions) {
      const m = d.missions.find(x => x.id === missionId);
      if (m) return m.pts;
    }
  }
  return 0;
}

// ==================== NAVEGACIÓN ====================

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

function goIntro() {
  renderIntro();
  showScreen('intro');
}

function goMap() {
  renderMap();
  showScreen('map');
}

function goDest(destId) {
  renderDestination(destId);
  showScreen('dest');
}

// ==================== PANTALLA INTRO ====================

function renderIntro() {
  const score   = getScore();
  const done    = getDoneCount();
  const unlocked = getUnlockedBadges();
  const total   = DESTINATIONS.filter(d => d.missions).flatMap(d => d.missions).length;
  const pct     = Math.min(100, Math.round(score / TOTAL_PTS * 100));

  document.getElementById('introStats').innerHTML = `
    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-num">${score}</span>
        <span class="stat-lbl">puntos</span>
      </div>
      <div class="stat-box">
        <span class="stat-num">${done}/${total}</span>
        <span class="stat-lbl">misiones</span>
      </div>
      <div class="stat-box">
        <span class="stat-num">${unlocked.size}</span>
        <span class="stat-lbl">insignias</span>
      </div>
    </div>
    <div class="rank-banner">${getRank(score)} · Nivel ${getLevel(score)}</div>
    <div class="total-bar-lbl">Progreso total de la expedición: ${pct}%</div>
    <div class="total-bar">
      <div class="total-bar-fill" style="width:${pct}%"></div>
    </div>
  `;
}

// ==================== PANTALLA MAPA ====================

function renderMap() {
  const score   = getScore();
  const unlocked = getUnlockedBadges();
  const done    = getDoneCount();
  const total   = DESTINATIONS.filter(d => d.missions).flatMap(d => d.missions).length;
  const pct     = Math.min(100, Math.round(score / TOTAL_PTS * 100));

  // Cabecera
  document.getElementById('topRank').textContent   = getRank(score);
  document.getElementById('topLevel').textContent  = getLevel(score);
  document.getElementById('topPts').textContent    = score + ' pts';
  document.getElementById('topBadges').textContent = unlocked.size;
  document.getElementById('xpFill').style.width    = pct + '%';
  document.getElementById('mapSub').textContent    = `${done} de ${total} misiones · ${pct}% del viaje`;

  // Tarjetas de destino
  document.getElementById('destGrid').innerHTML = DESTINATIONS.map(dest => {
    const status  = getDestStatus(dest);
    const prog    = dest.missions ? getDestProgress(dest.id) : null;
    const sLabel  = status === 'done' ? '✅ Completado' : status === 'progress' ? '🔄 En progreso' : '🔒 No iniciado';
    const sClass  = status === 'done' ? 's-done'       : status === 'progress' ? 's-progress'     : 's-locked';
    const btnTxt  = status === 'done' ? '🏅 Ver destino' : status === 'progress' ? '▶️ Continuar misión' : '🌟 Entrar al destino';
    const pBarPct = prog ? prog.pct : (status === 'done' ? 100 : 0);
    const cntTxt  = prog ? `${prog.done} / ${prog.total} misiones` : (status === 'done' ? 'Completado ✅' : 'Listo para explorar');

    return `
      <div class="dest-card ${status === 'done' ? 'done' : ''}">
        <span class="dest-icon">${dest.icon}</span>
        <div class="dest-name">${dest.name}</div>
        <div class="dest-count">${cntTxt}</div>
        <div class="dest-pbar"><div class="dest-pbar-fill" style="width:${pBarPct}%"></div></div>
        <span class="dest-status ${sClass}">${sLabel}</span>
        <button class="dest-btn" onclick="goDest('${dest.id}')">${btnTxt}</button>
      </div>
    `;
  }).join('');

  // Insignias
  document.getElementById('badgesGrid').innerHTML = DESTINATIONS.map(dest => `
    <div class="badge-card ${unlocked.has(dest.id) ? 'unlocked' : ''}">
      <span class="badge-icon">${dest.badge}</span>
      ${dest.badgeName}
    </div>
  `).join('');
}

// ==================== PANTALLA DESTINO ====================

function renderDestination(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;
  if      (dest.type === 'mundial')   renderMundial(dest);
  else if (dest.type === 'recuerdos') renderRecuerdos(dest);
  else                                renderMissions(dest);
}

/* ----- Misiones normales ----- */
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
      <div class="mission-card ${done ? 'done' : ''}" id="mc-${m.id}">
        <div class="mission-top">
          <div class="mission-ico">${m.icon}</div>
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
        <textarea class="mission-note" placeholder="¿Qué pasó? Cuéntame todo..." oninput="saveNote('${m.id}',this.value)">${note}</textarea>
        <div class="photo-area">
          ${photoBlock}
          <label class="btn-photo">
            📷 ${photo ? 'Cambiar foto' : 'Subir foto'}
            <input type="file" accept="image/*" class="file-inp" onchange="handlePhoto('${m.id}',this)">
          </label>
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
          <div class="dest-hdr-bar">
            <div class="dest-hdr-bar-fill" id="destBarFill" style="width:${prog.pct}%"></div>
          </div>
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
      <div class="missions-wrap">
        <div class="missions-grid">${cardsHTML}</div>
      </div>
      <div class="dest-footer">
        <button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button>
      </div>
    </div>
  `;
}

/* ----- Mundial ----- */
function renderMundial(dest) {
  const unlocked = getUnlockedBadges().has('mundial');
  const fieldsHTML = dest.fields.map(f => `
    <div class="form-field">
      <label>${f.label}</label>
      <input type="text" id="${f.id}" placeholder="${f.placeholder}"
             value="${escHtml(state.worldcup[f.id] || '')}"
             oninput="autosaveWorldcup()">
    </div>
  `).join('');

  document.getElementById('destContent').innerHTML = `
    <div class="dest-view">
      <div class="dest-hdr" style="background:${dest.color || '#1a5c3a'}">
        <button class="dest-hdr-back" onclick="goMap()">⬅️ Volver al mapa</button>
        <span class="dest-hdr-icon">${dest.icon}</span>
        <div class="dest-hdr-title">Mi Mundial de Aventuras</div>
        <div class="dest-hdr-story">${dest.story}</div>
        ${unlocked ? `<div style="background:rgba(255,215,0,.3);border-radius:12px;padding:10px;margin-top:8px;font-weight:800;">⚽ ¡Insignia Crack del Fútbol desbloqueada!</div>` : ''}
      </div>
      <div class="form-wrap">
        ${fieldsHTML}
        <button class="btn-save" onclick="saveWorldcup()">⚽ Guardar mi Mundial</button>
        <div class="form-badge ${unlocked ? 'show' : ''}" id="mundialBadge">
          <div style="font-size:52px">⚽</div>
          <div style="font-size:20px;font-weight:900;color:#7A5C00;margin-top:6px;">¡Crack del Fútbol!</div>
          <div style="color:#7A5C00;font-weight:700;margin-top:4px;">Insignia desbloqueada 🏅</div>
        </div>
      </div>
      <div class="dest-footer">
        <button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button>
      </div>
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
      <textarea id="${f.id}" placeholder="${f.placeholder}"
                oninput="autosaveMemories()">${escHtml(state.memories[f.id] || '')}</textarea>
    </div>
  `).join('');

  const diplomaHTML = showDiploma ? `
    <div class="diploma">
      <span class="diploma-trophy">🏆</span>
      <div class="diploma-title">Diploma de Explorador Supremo</div>
      <p class="diploma-text">
        Por la presente se certifica que <strong>Juan Martín</strong> completó
        con valentía y alegría su Gran Expedición 2026.<br>
        <em>${getRank(score)} · ${score} puntos conquistados · Nivel ${getLevel(score)}</em>
      </p>
      <div class="diploma-fields">
        <div class="diploma-field">
          <label>Firma del Explorador</label>
          <input type="text" id="firma_explorador" placeholder="Juan Martín"
                 value="${escHtml(state.diploma.firma_explorador || '')}"
                 oninput="saveDiploma('firma_explorador',this.value)">
        </div>
        <div class="diploma-field">
          <label>Firma de Mamá</label>
          <input type="text" id="firma_mama" placeholder="Mamá"
                 value="${escHtml(state.diploma.firma_mama || '')}"
                 oninput="saveDiploma('firma_mama',this.value)">
        </div>
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
      <div class="dest-footer">
        <button class="btn-back-map" onclick="goMap()">⬅️ Volver al mapa de aventura</button>
      </div>
    </div>
  `;
}

// ==================== ACCIONES DE MISIONES ====================

function toggleMission(missionId, destId) {
  if (state.done[missionId]) return;
  state.done[missionId] = true;
  saveState();

  // Actualizar tarjeta sin re-render completo
  const card = document.getElementById('mc-' + missionId);
  if (card) {
    card.classList.add('done');
    const btn = card.querySelector('.mission-btn');
    if (btn) {
      btn.className = 'mission-btn done-state';
      btn.disabled  = true;
      btn.textContent = '✅ ¡Misión cumplida!';
    }
    const top = card.querySelector('.mission-top');
    if (top && !top.querySelector('.mission-check')) {
      const chk = document.createElement('div');
      chk.className = 'mission-check';
      chk.textContent = '✅';
      top.appendChild(chk);
    }
  }

  // Actualizar barra de progreso del header
  const prog = getDestProgress(destId);
  const bar  = document.getElementById('destBarFill');
  const pct  = document.getElementById('destPct');
  if (bar) bar.style.width   = prog.pct + '%';
  if (pct) pct.textContent   = prog.pct + '%';

  // Efectos
  launchConfetti();
  showToast('🎉 ¡Misión cumplida! +' + getMissionPts(missionId) + ' puntos', 't-success');

  // ¿Destino completo?
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

function saveNote(missionId, value) {
  state.notes[missionId] = value;
  saveState();
}

// ==================== FOTOS ====================

function handlePhoto(missionId, input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 8 * 1024 * 1024) {
    showToast('📷 Foto muy grande. Elige una más pequeña.', 't-error');
    return;
  }
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

    // Actualizar preview
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

// ==================== FORMULARIOS ====================

function autosaveWorldcup() {
  const dest = DESTINATIONS.find(d => d.id === 'mundial');
  const data = {};
  dest.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) data[f.id] = el.value;
  });
  state.worldcup = data;
  saveState();
}

function saveWorldcup() {
  autosaveWorldcup();
  const unlocked = hasWorldcupData();
  const badge    = document.getElementById('mundialBadge');
  if (unlocked) {
    if (badge) badge.classList.add('show');
    launchConfetti();
    showToast('⚽ ¡Crack del Fútbol desbloqueado!', 't-badge');
  } else {
    showToast('⚽ ¡Mundial guardado!', 't-success');
  }
}

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

function saveMemories() {
  autosaveMemories();
  showToast('📚 ¡Recuerdos guardados!', 't-success');
}

function saveDiploma(field, value) {
  state.diploma[field] = value;
  saveState();
}

// ==================== REINICIAR ====================

function resetAdventure() {
  if (confirm('¿Reiniciar toda la aventura? Se perderán puntos, misiones, notas y fotos.')) {
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
    const el  = document.createElement('div');
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
  t.className   = 'show ' + (cls || '');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.className = ''; }, 2600);
}

// ==================== UTILIDADES ====================

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==================== INICIO ====================

renderIntro();
showScreen('intro');
