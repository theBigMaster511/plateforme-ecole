function renderProfesseurs() {
  const role = auth.getRole();

  if (role === 'admin') {
    renderProfesseursAdmin();
  } else {
    renderProfesseursReadOnly();
  }
}

function renderProfesseursAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des professeurs</h1>
        <p>Créer et suivre les professeurs depuis le backend</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-primary" onclick="showAddProfesseurModal()">
          <i class="ti ti-plus"></i> Nouveau professeur
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Liste des professeurs</h3>
        <div class="search-box">
          <i class="ti ti-search"></i>
          <input type="text" id="search-professeurs" placeholder="Rechercher un professeur..." onkeyup="filterProfesseurs(this.value)" />
        </div>
      </div>

      <table class="notes-table">
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>Email</th>
            <th>Spécialité</th>
            <th>Matières</th>
            <th>Classes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="professeurs-tbody">
          <tr><td colspan="6" class="text-center">Chargement des professeurs...</td></tr>
        </tbody>
      </table>
    </div>

    <div id="add-professeur-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Ajouter un professeur</h2>
          <button class="close-btn" onclick="closeModal('add-professeur-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleAddProfesseur(event)">
          <div class="field">
            <label>Nom complet</label>
            <input type="text" id="prof-name" placeholder="Nom et prénom" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" id="prof-email" placeholder="prof@ecole.sn" required />
          </div>
          <div class="field">
            <label>Mot de passe</label>
            <input type="password" id="prof-password" placeholder="••••••••" required />
          </div>
          <div class="field">
            <label>Spécialité</label>
            <input type="text" id="prof-specialite" placeholder="Mathématiques" />
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-professeur-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Créer professeur</button>
          </div>
        </form>
      </div>
    </div>
  `;

  loadProfesseursData();
}

function renderProfesseursReadOnly() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Liste des professeurs</h1>
        <p>Consultation des professeurs de l’établissement</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p class="text-muted">Cette page est réservée à l'administration pour le moment.</p>
      </div>
    </div>
  `;
}

function showAddProfesseurModal() {
  document.getElementById('add-professeur-modal').classList.remove('hidden');
}

async function handleAddProfesseur(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('prof-name').value.trim(),
    email: document.getElementById('prof-email').value.trim(),
    password: document.getElementById('prof-password').value.trim(),
    specialite: document.getElementById('prof-specialite').value.trim(),
  };

  if (!data.name || !data.email || !data.password) {
    showToast('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  const result = await api.createProfesseur(data);
  if (result?.error) {
    showToast(result.error);
    return;
  }

  closeModal('add-professeur-modal');
  document.getElementById('prof-name').value = '';
  document.getElementById('prof-email').value = '';
  document.getElementById('prof-password').value = '';
  document.getElementById('prof-specialite').value = '';
  showToast('Professeur créé avec succès');
  loadProfesseursData();
}

async function loadProfesseursData() {
  const tbody = document.getElementById('professeurs-tbody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="6" class="text-center">Chargement des professeurs...</td></tr>';

  try {
    const professeurs = await api.getProfesseurs();
    const rows = Array.isArray(professeurs) ? professeurs : [];

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucun professeur trouvé</td></tr>';
      return;
    }

    window._professeursData = rows;

    tbody.innerHTML = rows.map((p) => {
      const name = p?.user?.name || 'Professeur';
      const email = p?.user?.email || '—';
      const specialite = p?.specialite || '—';
      const matieres = Array.isArray(p?.matieres) ? p.matieres.length : 0;
      const classes = Array.isArray(p?.matieres)
        ? new Set(p.matieres.map((m) => m?.matiere?.classe?.nom).filter(Boolean)).size
        : 0;

      return `
        <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${specialite}</td>
          <td>${matieres}</td>
          <td>${classes}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-icon" title="Voir" onclick="showProfesseurDetails('${p.id}')">
                <i class="ti ti-eye"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    console.error('Erreur chargement professeurs:', error);
    tbody.innerHTML = '<tr><td colspan="6" class="text-center">Impossible de charger les professeurs.</td></tr>';
    showToast('Impossible de charger les professeurs depuis le backend.');
  }
}

function filterProfesseurs(query) {
  const tbody = document.getElementById('professeurs-tbody');
  if (!tbody || !window._professeursData) return;

  const q = query.toLowerCase();
  const filtered = window._professeursData.filter((p) => {
    const name = (p?.user?.name || '').toLowerCase();
    const email = (p?.user?.email || '').toLowerCase();
    const specialite = (p?.specialite || '').toLowerCase();
    return name.includes(q) || email.includes(q) || specialite.includes(q);
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucun professeur correspondant</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map((p) => {
    const name = p?.user?.name || 'Professeur';
    const email = p?.user?.email || '—';
    const specialite = p?.specialite || '—';
    const matieres = Array.isArray(p?.matieres) ? p.matieres.length : 0;
    const classes = Array.isArray(p?.matieres)
      ? new Set(p.matieres.map((m) => m?.matiere?.classe?.nom).filter(Boolean)).size
      : 0;

    return `
      <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${specialite}</td>
        <td>${matieres}</td>
        <td>${classes}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon" title="Voir" onclick="showProfesseurDetails('${p.id}')">
              <i class="ti ti-eye"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function showProfesseurDetails(id) {
  const prof = (window._professeursData || []).find((item) => item.id === id);
  const name = prof?.user?.name || 'Professeur';
  showToast(`Détails de ${name}`);
}
