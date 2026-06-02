// Les routes avec # — fonctionnent sans serveur
const routes = {
  '#/login'     : () => renderLogin(),
  '#/dashboard' : () => renderDashboard(),
  '#/eleves'    : () => renderEleves(),
  '#/notes'     : () => renderNotes(),
  '#/bulletins' : () => renderBulletins(),
  '#/classes'   : () => renderClasses(),
};

function navigate(path) {
  window.location.hash = path;
}

function render() {
  const hash = window.location.hash || '#/login';
  const route = routes[hash];

  if (!route) {
    navigate('#/login');
    return;
  }

  // Pages protégées
  if (hash !== '#/login' && !auth.isLoggedIn()) {
    navigate('#/login');
    return;
  }

  // Sidebar
  const sidebar = document.getElementById('sidebar');
  if (hash === '#/login') {
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