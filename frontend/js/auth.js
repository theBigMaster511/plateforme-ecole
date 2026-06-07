const roleFromBackend = {
  ADMIN: 'admin',
  PROFESSEUR: 'prof',
  ELEVE: 'eleve',
  PARENT: 'parent',
};

const auth = {
  currentUser: null,
  currentRole: null,
  sessionToken: null,
  isRestoring: false,

  applySession(session, fallbackRole = null) {
    const payload = session?.user ? session.user : session;

    if (!payload || session?.error) {
      this.clearSession();
      return null;
    }

    this.currentUser = payload;
    this.currentRole = fallbackRole || roleFromBackend[payload.role] || this.currentRole || 'eleve';
    this.sessionToken = session?.token || this.sessionToken || null;

    return payload;
  },

  async login(email, password, role) {
    try {
      const endpoints = {
        admin: '/auth/sign-in/school',
        prof: '/auth/sign-in/teacher',
        eleve: '/auth/sign-in/student',
        parent: '/auth/sign-in/parent',
      };

      const endpoint = endpoints[role];
      if (!endpoint) {
        return { error: 'Role inconnu' };
      }

      const result = await api.post(endpoint, { email, password });
      if (!result || result.error) {
        return { error: result?.error || 'Identifiants invalides' };
      }

      this.applySession(result, role);
      return result;
    } catch (error) {
      console.error('Login error:', error);
      return { error: 'Erreur lors de la connexion' };
    }
  },

  async signupAdmin(name, email, password) {
    try {
      const result = await api.post('/auth/sign-up/school', {
        name,
        email,
        password,
      });

      if (!result || result.error) {
        return { error: result?.error || "Erreur lors de l'inscription" };
      }

      this.applySession(result, 'admin');
      return result;
    } catch (error) {
      console.error('Admin signup error:', error);
      return { error: "Erreur lors de l'inscription" };
    }
  },

  async restoreSession() {
    if (this.isRestoring) return this.isLoggedIn();
    this.isRestoring = true;

    try {
      const result = await api.getMe();
      if (result && !result.error) {
        this.applySession(result);
      } else {
        this.clearSession();
      }

      return this.isLoggedIn();
    } catch (error) {
      console.error('Error restoring session:', error);
      this.clearSession();
      return false;
    } finally {
      this.isRestoring = false;
    }
  },

  async getProfile() {
    const restored = await this.restoreSession();
    return restored ? { user: this.currentUser } : null;
  },

  clearSession() {
    this.currentUser = null;
    this.currentRole = null;
    this.sessionToken = null;
  },

  async logout() {
    try {
      await api.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearSession();
      navigate('#/login');
    }
  },

  isLoggedIn() {
    return !!this.currentUser;
  },

  getRole() {
    return this.currentRole || roleFromBackend[this.currentUser?.role] || null;
  },

  getUser() {
    return this.currentUser || {};
  },

  getToken() {
    return this.sessionToken;
  },

  validateAdminToken() {
    return true;
  },

  isAdminAuthenticated() {
    return this.getRole() === 'admin' && this.isLoggedIn();
  },
};

let _currentRole = 'prof';

function setLoginRole(el, role) {
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
  el.classList.add('active');
  _currentRole = role;

  const labels = {
    admin: 'Admin',
    prof: 'Professeur',
    eleve: 'Élève / Parent',
    parent: 'Parent',
  };

  const placeholders = {
    admin: 'admin@ecole.sn',
    prof: 'prof.nom@ecole.sn',
    eleve: 'eleve@ecole.sn',
    parent: 'parent@ecole.sn',
  };

  const loginId = document.getElementById('login-id');
  const btn = document.getElementById('btn-login-text');

  if (loginId) loginId.placeholder = placeholders[role] || placeholders.prof;
  if (btn) btn.textContent = `Se connecter en tant que ${labels[role] || labels.prof}`;
}

async function handleLogin() {
  const id = document.getElementById('login-id').value.trim();
  const mdp = document.getElementById('login-mdp').value.trim();
  const err = document.getElementById('error-msg');

  if (!id || !mdp) {
    if (err) {
      err.style.display = 'block';
      err.textContent = 'Veuillez remplir tous les champs.';
    }
    return;
  }

  if (err) err.style.display = 'none';
  const data = await auth.login(id, mdp, _currentRole);

  if (data?.user && auth.isLoggedIn()) {
    navigate('#/dashboard');
  } else if (err) {
    err.style.display = 'block';
    err.textContent = data?.error || 'Identifiants invalides.';
  }
}

async function handleAdminLogin() {
  const id = document.getElementById('login-id-admin').value.trim();
  const mdp = document.getElementById('login-mdp-admin').value.trim();
  const err = document.getElementById('error-msg-admin');

  if (!id || !mdp) {
    if (err) {
      err.style.display = 'block';
      err.textContent = 'Veuillez remplir tous les champs.';
    }
    return;
  }

  if (err) err.style.display = 'none';
  const data = await auth.login(id, mdp, 'admin');

  if (data?.user && auth.isLoggedIn()) {
    navigate('#/dashboard');
  } else if (err) {
    err.style.display = 'block';
    err.textContent = data?.error || 'Identifiants invalides.';
  }
}

async function handleAdminSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
  const err = document.getElementById('error-msg-signup');

  if (!name || !email || !password || !confirmPassword) {
    if (err) {
      err.style.display = 'block';
      err.textContent = 'Veuillez remplir tous les champs.';
    }
    return;
  }

  if (password !== confirmPassword) {
    if (err) {
      err.style.display = 'block';
      err.textContent = 'Les mots de passe ne correspondent pas.';
    }
    return;
  }

  if (err) err.style.display = 'none';
  const data = await auth.signupAdmin(name, email, password);

  if (data?.user && auth.isLoggedIn()) {
    navigate('#/dashboard');
  } else if (err) {
    err.style.display = 'block';
    err.textContent = data?.error || 'Impossible de créer le compte administrateur.';
  }
}

function onNoteInput(input) {
  const val = parseFloat(input.value);
  const i = input.dataset.index;

  if (input.value !== '' && (val < 0 || val > 20)) {
    input.value = '';
    return;
  }

  input.className = 'note-input';
  if (input.value !== '' && !isNaN(val)) {
    if (val < 8) input.classList.add('note-low');
    else if (val >= 14) input.classList.add('note-high');
  }

  const appreciations = [
    'Insuffisant',
    'Insuffisant',
    'Passable',
    'Passable',
    'Assez bien',
    'Assez bien',
    'Bien',
    'Bien',
    'Très bien',
    'Très bien',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
    'Excellent',
  ];
  const app = document.getElementById(`app-${i}`);
  const statut = document.getElementById(`statut-${i}`);

  if (app) app.textContent = input.value !== '' ? (appreciations[Math.floor(val)] || '-') : '-';
  if (statut) {
    statut.innerHTML =
      input.value === ''
        ? '<span class="pill pill-gray">-</span>'
        : val < 10
          ? '<span class="pill pill-red">En échec</span>'
          : '<span class="pill pill-green">Admis</span>';
  }

  if (!window._notes) window._notes = {};
  window._notes[i] = input.value;

  const vals = Object.values(window._notes)
    .filter((v) => v !== '' && !isNaN(v))
    .map(Number);
  const moy = document.getElementById('stat-moy');
  const max = document.getElementById('stat-max');
  const min = document.getElementById('stat-min');
  if (moy) moy.textContent = vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '-';
  if (max) max.textContent = vals.length ? Math.max(...vals) : '-';
  if (min) min.textContent = vals.length ? Math.min(...vals) : '-';

  const total = document.querySelectorAll('.note-input').length;
  const saisie = document.getElementById('saisie-info');
  if (saisie) saisie.textContent = `${vals.length} / ${total} notes saisies`;
}

function saveNotes() {
  const toast = document.getElementById('toast');
  const savedIndicator = document.getElementById('saved-indicator');
  if (savedIndicator) {
    savedIndicator.innerHTML =
      '<span class="saved-check"><i class="ti ti-check" style="font-size:14px"></i> Enregistré</span>';
  }

  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}
