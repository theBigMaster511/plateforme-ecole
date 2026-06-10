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

  // Fetch les donnÃ©es
  const [elevesResponse, classesResponse] = await Promise.all([
    api.getEleves(),
    api.getClasses()
  ]);
  const eleves = Array.isArray(elevesResponse) ? elevesResponse : [];
  const classes = Array.isArray(classesResponse) ? classesResponse : [];

  // Injecte le HTML complet
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Tableau de bord</h1>
        <p>AnnÃ©e scolaire 2025â€“2026 Â· Semestre 1</p>
      </div>
      <button class="btn btn-primary" onclick="navigate('#/eleves')">
        <i class="ti ti-plus"></i> Nouvel Ã©lÃ¨ve
      </button>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">Total Ã©lÃ¨ves</span>
        <div class="stat-value">${eleves.length}</div>
      </div>
      <div class="stat-card">
        <span class="stat-label">Classes</span>
        <div class="stat-value">${classes.length}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Ã‰lÃ¨ves rÃ©cents</h3></div>
      <table class="notes-table">
        <thead><tr><th>Nom</th><th>Classe</th><th>Moyenne</th></tr></thead>
        <tbody>
          ${eleves.slice(0,5).map((e) => {
            const notes = Array.isArray(e?.notes) ? e.notes : [];
            const moyenne = notes.length
              ? (notes.reduce((sum, note) => sum + Number(note?.valeur ?? 0), 0) / notes.length).toFixed(1)
              : '—';

            return `
              <tr>
                <td>${e?.user?.name || [e?.user?.firstName, e?.user?.lastName].filter(Boolean).join(' ') || 'Élève'}</td>
                <td>${e?.classe?.nom || '—'}</td>
                <td>${moyenne}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}
