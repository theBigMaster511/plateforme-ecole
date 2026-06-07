// Les routes avec # — fonctionnent sans serveur
const routes = {
  '#/login'        : () => renderLogin(),
  '#/admin-login'  : () => renderAdminLogin(),
  '#/admin-signup' : () => renderAdminSignup(),
  '#/dashboard'    : () => renderDashboard(),
  '#/eleves'       : () => renderEleves(),
  '#/notes'        : () => renderNotes(),
  '#/bulletins'    : () => renderBulletins(),
  '#/classes'      : () => renderClasses(),
};

function navigate(path) {
  window.location.hash = path;
}

function render() {
  const fullHash = window.location.hash || '#/login';
  const hashParts = fullHash.split('?');
  const hash = hashParts[0];
  const queryString = hashParts[1] || '';
  
  const route = routes[hash];

  if (!route) {
    navigate('#/login');
    return;
  }

  // Pages protégées
  if (hash !== '#/login' && hash !== '#/admin-login' && hash !== '#/admin-signup' && !auth.isLoggedIn()) {
    navigate('#/login');
    return;
  }

  // Vérification du token secret pour /admin-login
  if (hash === '#/admin-login') {
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    
    if (!auth.validateAdminToken(token)) {
      navigate('#/login');
      return;
    }
  }

  // Protection spéciale dashboard admin
  if (hash === '#/dashboard' && auth.getRole() === 'admin' && !auth.isAdminAuthenticated()) {
    navigate('#/admin-login');
    return;
  }

  // Sidebar
  const sidebar = document.getElementById('sidebar');
  if (hash === '#/login' || hash === '#/admin-login' || hash === '#/admin-signup') {
    sidebar.classList.add('hidden');
    document.getElementById('app').classList.remove('with-sidebar');
  } else {
    sidebar.classList.remove('hidden');
    sidebar.className = `sidebar role-${auth.getRole()}`;
    renderSidebar();
    document.getElementById('app').classList.add('with-sidebar');
  }

  route();
}

// Écoute les changements de hash
window.addEventListener('hashchange', render);

// Écoute les clics sur les liens internes
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-link]')) {
    e.preventDefault();
    const el = e.target.closest('[data-link]');
    navigate(el.getAttribute('href'));
  }
});
