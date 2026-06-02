const auth = {
  login: async (identifiant, password, role) => {
    // TODO : remplace par ton vrai fetch quand le backend est prêt
    // Simulation : accepte n'importe quel identifiant/mot de passe
    const fakeUser = {
      token: 'fake-token-123',
      role: role,
      user: {
        nom: role === 'admin' ? 'Moussa Admin' : role === 'prof' ? 'M. Diop' : 'Fatou Diallo',
        email: identifiant,
        initiales: role === 'admin' ? 'MA' : role === 'prof' ? 'MD' : 'FD'
      }
    };
    localStorage.setItem('token', fakeUser.token);
    localStorage.setItem('role', fakeUser.role);
    localStorage.setItem('user', JSON.stringify(fakeUser.user));
    return fakeUser;
  },

  logout: () => {
    localStorage.clear();
    navigate('#/login');
  },

  isLoggedIn: () => !!localStorage.getItem('token'),
  getRole:    () => localStorage.getItem('role'),
  getUser:    () => JSON.parse(localStorage.getItem('user') || '{}'),
  getToken:   () => localStorage.getItem('token'),
};

// ── Fonctions login (appelées depuis views.js) ──
let _currentRole = 'admin';

function setLoginRole(el, role) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  _currentRole = role;
  const labels = { admin:'Admin', prof:'Professeur', eleve:'Élève / Parent' };
  const placeholders = { admin:'admin@ecole.sn', prof:'prof.nom@ecole.sn', eleve:'Matricule ou identifiant' };
  document.getElementById('login-id').placeholder = placeholders[role];
  document.getElementById('btn-login-text').textContent = 'Se connecter en tant que ' + labels[role];
}

async function handleLogin() {
  const id  = document.getElementById('login-id').value.trim();
  const mdp = document.getElementById('login-mdp').value.trim();
  const err = document.getElementById('error-msg');

  if (!id || !mdp) {
    err.style.display = 'block';
    err.textContent = '⚠ Veuillez remplir tous les champs.';
    return;
  }

  err.style.display = 'none';
  const data = await auth.login(id, mdp, _currentRole);

  if (data.token) {
    navigate('#/dashboard');
  } else {
    err.style.display = 'block';
  }
}

// ── Fonctions notes (appelées depuis views.js) ──
function onNoteInput(input) {
  const val = parseFloat(input.value);
  const i   = input.dataset.index;

  if (input.value !== '' && (val < 0 || val > 20)) { input.value = ''; return; }

  input.className = 'note-input';
  if (input.value !== '' && !isNaN(val)) {
    if (val < 8)       input.classList.add('note-low');
    else if (val >= 14) input.classList.add('note-high');
  }

  const appreciations = ['Insuffisant','Insuffisant','Passable','Passable','Assez bien',
                          'Assez bien','Bien','Bien','Très bien','Très bien','Excellent','Excellent',
                          'Excellent','Excellent','Excellent','Excellent','Excellent','Excellent',
                          'Excellent','Excellent','Excellent'];
  const app = document.getElementById('app-' + i);
  const statut = document.getElementById('statut-' + i);
  if (app) app.textContent = input.value !== '' ? (appreciations[Math.floor(val)] || '—') : '—';
  if (statut) statut.innerHTML = input.value === '' ? '<span class="pill pill-gray">—</span>'
    : val < 10 ? '<span class="pill pill-red">En échec</span>'
    : '<span class="pill pill-green">Admis</span>';

  if (!window._notes) window._notes = {};
  window._notes[i] = input.value;

  const vals = Object.values(window._notes).filter(v => v !== '' && !isNaN(v)).map(Number);
  document.getElementById('stat-moy').textContent = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : '—';
  document.getElementById('stat-max').textContent = vals.length ? Math.max(...vals) : '—';
  document.getElementById('stat-min').textContent = vals.length ? Math.min(...vals) : '—';

  const total = document.querySelectorAll('.note-input').length;
  document.getElementById('saisie-info').textContent = `${vals.length} / ${total} notes saisies`;
}

function saveNotes() {
  const toast = document.getElementById('toast');
  document.getElementById('saved-indicator').innerHTML =
    '<span class="saved-check"><i class="ti ti-check" style="font-size:14px"></i> Enregistré</span>';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}