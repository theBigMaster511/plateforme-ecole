const eleves = [
  { id:'001', nom:'Fatou Diallo' },
  { id:'002', nom:'Ibrahima Sow' },
  { id:'003', nom:'Aminata Ndiaye' },
  { id:'004', nom:'Oumar Mbaye' },
  { id:'005', nom:'Rokhaya Faye' },
  { id:'006', nom:'Cheikh Diop' },
  { id:'007', nom:'Mariama Ba' },
  { id:'008', nom:'Moussa Fall' },
  { id:'009', nom:'Aissatou Diallo' },
  { id:'010', nom:'Serigne Mbaye' },
  { id:'011', nom:'Ndèye Sarr' },
  { id:'012', nom:'Lamine Sène' }
];

const notes = {};

function getAppreciation(n) {
  if (n === '' || isNaN(n)) return '—';
  n = parseFloat(n);
  if (n < 8)  return 'Insuffisant';
  if (n < 10) return 'Passable';
  if (n < 12) return 'Assez bien';
  if (n < 14) return 'Bien';
  if (n < 16) return 'Très bien';
  return 'Excellent';
}

function getStatutPill(n) {
  if (n === '' || isNaN(n)) return '<span class="pill" style="background:#f3f4f6;color:#6b7280">—</span>';
  n = parseFloat(n);
  if (n < 10) return '<span class="pill pill-red">En échec</span>';
  if (n < 12) return '<span class="pill pill-amber">Passable</span>';
  return '<span class="pill pill-green">Admis</span>';
}

function renderTable() {
  const tbody = document.getElementById('notes-tbody');
  tbody.innerHTML = '';
  eleves.forEach((el, i) => {
    const val = notes[el.id] !== undefined ? notes[el.id] : '';
    const cls = val !== '' && !isNaN(val)
      ? (parseFloat(val) < 8 ? 'note-low' : parseFloat(val) >= 14 ? 'note-high' : '')
      : '';
    tbody.innerHTML += `
      <tr>
        <td style="color:#9ca3af;font-size:12px">${i+1}</td>
        <td>
          <div class="eleve-name">${el.nom}</div>
          <div class="eleve-num">N° ${el.id}</div>
        </td>
        <td style="text-align:center">
          <input
            class="note-input ${cls}"
            type="number"
            min="0" max="20" step="0.5"
            value="${val}"
            placeholder="—"
            data-id="${el.id}"
            onchange="updateNote(this)"
            oninput="updateNote(this)"
          />
        </td>
        <td style="text-align:center;color:#6b7280;font-size:13px">${getAppreciation(val)}</td>
        <td style="text-align:center">${getStatutPill(val)}</td>
      </tr>
    `;
  });
  updateStats();
}

function updateNote(input) {
  const id  = input.dataset.id;
  const val = input.value;

  if (val !== '' && (parseFloat(val) < 0 || parseFloat(val) > 20)) {
    input.value = '';
    return;
  }

  notes[id] = val;

  // Couleur dynamique
  input.className = 'note-input';
  if (val !== '' && !isNaN(val)) {
    if (parseFloat(val) < 8) input.classList.add('note-low');
    else if (parseFloat(val) >= 14) input.classList.add('note-high');
  }

  updateStats();
  updateSaisieInfo();
}

function updateStats() {
  const vals = Object.values(notes)
    .filter(v => v !== '' && !isNaN(v))
    .map(v => parseFloat(v));

  if (vals.length === 0) {
    document.getElementById('stat-moy').textContent = '—';
    document.getElementById('stat-max').textContent = '—';
    document.getElementById('stat-min').textContent = '—';
    return;
  }

  const moy = (vals.reduce((a,b)=>a+b,0) / vals.length).toFixed(1);
  const max = Math.max(...vals).toFixed(1);
  const min = Math.min(...vals).toFixed(1);

  document.getElementById('stat-moy').textContent = moy;
  document.getElementById('stat-max').textContent = max;
  document.getElementById('stat-min').textContent = min;
}

function updateSaisieInfo() {
  const saisies = Object.values(notes).filter(v => v !== '' && !isNaN(v)).length;
  document.getElementById('saisie-info').textContent = `${saisies} / ${eleves.length} notes saisies`;
}

function saveNotes() {
  // Optionnel : Intégration future d'API avec fetch()
  showToast('Notes enregistrées avec succès !');
  document.getElementById('saved-indicator').innerHTML =
    '<span class="saved-check"><i class="ti ti-check" style="font-size:14px"></i> Enregistré</span>';
}

function exportNotes() {
  showToast('Export en cours...');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function updateClasse() { renderTable(); }

function updateEval() {
  Object.keys(notes).forEach(k => delete notes[k]);
  document.getElementById('saved-indicator').innerHTML = '';
  renderTable();
}

// Initialisation au chargement de la page
renderTable();
updateSaisieInfo();
const matieres = [
  { nom: 'Mathématiques', moy: 16.0, max: 20, color: '#7F77DD' },
  { nom: 'Histoire-Géo',  moy: 16.0, max: 20, color: '#1D9E75' },
  { nom: 'EPS',           moy: 18.0, max: 20, color: '#3482ce' },
  { nom: 'SVT',           moy: 15.0, max: 20, color: '#5DCAA5' },
  { nom: 'Français',      moy: 13.0, max: 20, color: '#EF9F27' },
  { nom: 'Anglais',       moy: 13.0, max: 20, color: '#D4537E' },
  { nom: 'Physique-Ch.',  moy: 12.0, max: 20, color: '#888780' },
];

function renderProgression() {
  const list = document.getElementById('progression-list');
  if (!list) return;

  list.innerHTML = matieres.map(m => {
    const pct = Math.round((m.moy / m.max) * 100);
    const cls = m.moy >= 14 ? 'moy-high' : m.moy >= 10 ? 'moy-mid' : 'moy-low';
    return `
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #f5f5f5">
        <span style="font-size:13px;color:#374151;flex:1;white-space:nowrap">${m.nom}</span>
        <div style="flex:2">
          <div class="progress-bar" style="width:100%">
            <div class="progress-fill" style="width:${pct}%;background:${m.color}"></div>
          </div>
        </div>
        <span style="font-size:14px;font-weight:600;min-width:36px;text-align:right" class="${cls}">${m.moy.toFixed(1)}</span>
      </div>
    `;
  }).join('');
}

function toggleParent(el) {
  const toggle = document.getElementById('parent-toggle');
  const label  = document.getElementById('mode-label');
  
  if (!toggle || !label) return;

  toggle.classList.toggle('on');
  if (toggle.classList.contains('on')) {
    label.textContent = 'Vue parent';
  } else {
    label.textContent = 'Vue élève';
  }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  renderProgression();
});