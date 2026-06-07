function renderSidebar() {
  const role = auth.getRole();
  const user = auth.getUser();

  const navItems = {
    admin: [
      { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Tableau de bord' },
      { href: '/eleves',    icon: 'ti-users',            label: 'Élèves' },
      { href: '/classes',   icon: 'ti-building',         label: 'Classes' },
      { href: '/notes',     icon: 'ti-clipboard-list',   label: 'Notes' },
      { href: '/bulletins', icon: 'ti-file-analytics',   label: 'Bulletins' },
    ],
    prof: [
      { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Accueil' },
      { href: '/notes',     icon: 'ti-clipboard-list',   label: 'Saisie des notes' },
      { href: '/bulletins', icon: 'ti-file-analytics',   label: 'Bulletins' },
    ],
    eleve: [
      { href: '/dashboard', icon: 'ti-layout-dashboard', label: 'Mon espace' },
      { href: '/notes',     icon: 'ti-clipboard-list',   label: 'Mes notes' },
      { href: '/bulletins', icon: 'ti-file-analytics',   label: 'Mes bulletins' },
    ],
  };

  const items = navItems[role] || [];
  const current = (window.location.hash || '#/login').replace(/^#/, '');

  document.getElementById('sidebar').innerHTML = `
    <div class="sidebar-brand">
      <div class="icon"><i class="ti ti-school"></i></div>
      <div>
        <span>Gestion Scolaire</span>
        <small>${role === 'admin' ? 'Administrateur' : role === 'prof' ? 'Professeur' : 'Élève'}</small>
      </div>
    </div>

    <nav>
      ${items.map(item => `
        <a href="#${item.href}" data-link
           class="nav-item ${current === item.href ? 'active' : ''}">
          <i class="ti ${item.icon}"></i> ${item.label}
        </a>
      `).join('')}
    </nav>

    <div class="sidebar-footer">
      <div class="user-block">
        <div class="avatar">${user.initiales || 'U'}</div>
        <div class="user-info">
          <span>${user.nom || 'Utilisateur'}</span>
          <small>${user.email || ''}</small>
        </div>
        <button class="logout-btn" onclick="auth.logout()">
          <i class="ti ti-logout"></i>
        </button>
      </div>
    </div>
  `;
}

// Démarre l'application
document.addEventListener('DOMContentLoaded', async () => {
  await auth.restoreSession();

  // Si pas de hash, redirige selon l'état de connexion
  if (!window.location.hash || window.location.hash === '#') {
    navigate(auth.isLoggedIn() ? '#/dashboard' : '#/login');
  } else {
    render();
  }
});
