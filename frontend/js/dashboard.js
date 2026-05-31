function renderDashboard() {
  const role = auth.getRole();
  const user = auth.getUser();

  // Chaque vue retourne du HTML qu'on injecte dans #app
  if (role === 'admin')      renderDashboardAdmin(user);
  else if (role === 'prof')  renderDashboardProf(user);
  else                       renderDashboardEleve(user);
}

async function renderDashboardAdmin(user) {
  // Affiche un loader pendant le fetch
  document.getElementById('app').innerHTML = `<div class="loader">Chargement...</div>`;

  // Fetch les données
  const [eleves, classes] = await Promise.all([
    api.getEleves(),
    api.getClasses()
  ]);

  // Injecte le HTML complet
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Tableau de bord</h1>
        <p>Année scolaire 2025–2026 · Semestre 1</p>
      </div>
      <button class="btn btn-primary" onclick="navigate('/eleves')">
        <i class="ti ti-plus"></i> Nouvel élève
      </button>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">Total élèves</span>
        <div class="stat-value">${eleves.length}</div>
      </div>
      <div class="stat-card">
        <span class="stat-label">Classes</span>
        <div class="stat-value">${classes.length}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Élèves récents</h3></div>
      <table class="notes-table">
        <thead><tr><th>Nom</th><th>Classe</th><th>Moyenne</th></tr></thead>
        <tbody>
          ${eleves.slice(0,5).map(e => `
            <tr>
              <td>${e.nom} ${e.prenom}</td>
              <td>${e.classe}</td>
              <td>${e.moyenne ?? '—'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}