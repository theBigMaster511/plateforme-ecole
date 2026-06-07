/* ══════════════════════════════════════
   ÉLÈVES - Gestion des élèves
══════════════════════════════════════ */

function renderEleves() {
  const role = auth.getRole();
  
  if (role === 'admin') {
    renderElevesAdmin();
  } else if (role === 'prof') {
    renderElevesProf();
  } else {
    renderElevesEleve();
  }
}

function renderElevesAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des élèves</h1>
        <p>Liste complète de tous les élèves du système</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-primary" onclick="showAddEleveModal()">
          <i class="ti ti-plus"></i> Nouvel élève
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Tous les élèves</h3>
        <div class="search-box">
          <i class="ti ti-search"></i>
          <input type="text" id="search-eleves" placeholder="Rechercher un élève..." 
                 onkeyup="filterTable('search-eleves', 'eleves-table')"/>
        </div>
      </div>

      <table class="notes-table" id="eleves-table">
        <thead>
          <tr>
            <th>Prénom et Nom</th>
            <th>Matricule</th>
            <th>Classe</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="eleves-tbody">
          <tr><td colspan="6" class="text-center">Chargement des élèves...</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Ajouter Élève -->
    <div id="add-eleve-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Ajouter un nouvel élève</h2>
          <button class="close-btn" onclick="closeModal('add-eleve-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleAddEleve(event)">
          <div class="field">
            <label>Prénom</label>
            <input type="text" id="eleve-prenom" required/>
          </div>
          <div class="field">
            <label>Nom</label>
            <input type="text" id="eleve-nom" required/>
          </div>
          <div class="field">
            <label>Matricule</label>
            <input type="text" id="eleve-matricule" required/>
          </div>
          <div class="field">
            <label>Classe</label>
            <select id="eleve-classe" required>
              <option>Sélectionner une classe...</option>
              <option>6e A</option>
              <option>6e B</option>
              <option>5e A</option>
              <option>4e A</option>
              <option>3e A</option>
              <option>2nde A</option>
              <option>1ère S</option>
              <option>Terminale S</option>
            </select>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" id="eleve-email" required/>
          </div>
          <div class="field">
            <label>Téléphone</label>
            <input type="tel" id="eleve-tel"/>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-eleve-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Ajouter élève</button>
          </div>
        </form>
      </div>
    </div>
  `;

  // Charge les données des élèves
  loadElevesData();
}

async function loadElevesData() {
  const tbody = document.getElementById('eleves-tbody');
  if (!tbody) return;

  tbody.innerHTML = `
    <tr><td colspan="6" class="text-center">Chargement des élèves...</td></tr>
  `;

  const fallbackEleves = [
    { id: 'demo-1', prenom: 'Abdoulaye', nom: 'Diallo', matricule: 'E001', classe: '6e A', email: 'abdoulaye.d@ecole.sn', tel: '+221770000001' },
    { id: 'demo-2', prenom: 'Fatou', nom: 'Sow', matricule: 'E002', classe: '6e A', email: 'fatou.sow@ecole.sn', tel: '+221770000002' },
    { id: 'demo-3', prenom: 'Moussa', nom: 'Ba', matricule: 'E003', classe: '6e B', email: 'moussa.ba@ecole.sn', tel: '+221770000003' },
    { id: 'demo-4', prenom: 'Aïssatou', nom: 'Diop', matricule: 'E004', classe: '5e A', email: 'aissatou.diop@ecole.sn', tel: '+221770000004' },
    { id: 'demo-5', prenom: 'Saliou', nom: 'Gueye', matricule: 'E005', classe: '4e A', email: 'saliou.gueye@ecole.sn', tel: '+221770000005' },
  ];

  try {
    const eleves = await api.getEleves();
    const rows = Array.isArray(eleves) ? eleves : [];

    if (!rows.length) {
      tbody.innerHTML = `
        <tr><td colspan="6" class="text-center">Aucun élève trouvé</td></tr>
      `;
      return;
    }

    tbody.innerHTML = rows.map((e) => {
      const displayName = e?.user?.name || [e?.prenom, e?.nom].filter(Boolean).join(' ') || 'Élève';
      const classeLabel = e?.classe?.nom || e?.classe?.niveau || e?.classe?.name || '—';
      const email = e?.user?.email || '—';
      const telephone = e?.telephone || e?.tel || '—';
      const id = e?.id || e?.matricule || '0';

      return `
        <tr>
          <td>${displayName}</td>
          <td>${e?.matricule || '—'}</td>
          <td>${classeLabel}</td>
          <td>${email}</td>
          <td>${telephone}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-icon" title="Éditer" onclick="editEleve('${id}')">
                <i class="ti ti-edit"></i>
              </button>
              <button class="btn-icon" title="Supprimer" onclick="deleteEleve('${id}')">
                <i class="ti ti-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    console.error('Erreur chargement élèves:', error);
    tbody.innerHTML = fallbackEleves.map(e => `
      <tr>
        <td>${e.prenom} ${e.nom}</td>
        <td>${e.matricule}</td>
        <td>${e.classe}</td>
        <td>${e.email}</td>
        <td>${e.tel}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon" title="Éditer" onclick="editEleve('${e.id}')">
              <i class="ti ti-edit"></i>
            </button>
            <button class="btn-icon" title="Supprimer" onclick="deleteEleve('${e.id}')">
              <i class="ti ti-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
    showToast('Les élèves backend sont indisponibles, affichage de données de démonstration.');
  }
}

function renderElevesProf() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mes élèves</h1>
        <p>Liste des élèves dans mes classes</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Mes classes et leurs élèves</h3>
      </div>

      <div class="classes-list">
        <div class="class-section">
          <h4>6e A - Français (25 élèves)</h4>
          <table class="notes-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Matricule</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abdoulaye Diallo</td>
                <td>E001</td>
                <td>abdoulaye.d@ecole.sn</td>
              </tr>
              <tr>
                <td>Fatou Sow</td>
                <td>E002</td>
                <td>fatou.sow@ecole.sn</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="class-section">
          <h4>5e B - Français (28 élèves)</h4>
          <table class="notes-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Matricule</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moussa Ba</td>
                <td>E003</td>
                <td>moussa.ba@ecole.sn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderElevesEleve() {
  const user = auth.getUser();
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mon profil</h1>
        <p>Mes informations personnelles</p>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header"><h3>Mes informations</h3></div>
        <div class="profile-info">
          <div class="profile-field">
            <label>Prénom et Nom</label>
            <p>Fatou Diallo</p>
          </div>
          <div class="profile-field">
            <label>Matricule</label>
            <p>E2024001</p>
          </div>
          <div class="profile-field">
            <label>Classe</label>
            <p>3e A</p>
          </div>
          <div class="profile-field">
            <label>Email</label>
            <p>fatou.diallo@ecole.sn</p>
          </div>
          <div class="profile-field">
            <label>Téléphone</label>
            <p>+221 77 000 0000</p>
          </div>
          <div class="profile-field">
            <label>Date d'inscription</label>
            <p>15 septembre 2024</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><h3>Tuteur / Parent</h3></div>
        <div class="profile-info">
          <div class="profile-field">
            <label>Nom</label>
            <p>Mamadou Diallo</p>
          </div>
          <div class="profile-field">
            <label>Relation</label>
            <p>Père</p>
          </div>
          <div class="profile-field">
            <label>Téléphone</label>
            <p>+221 77 111 1111</p>
          </div>
          <div class="profile-field">
            <label>Email</label>
            <p>mamadou.diallo@email.com</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* Fonctions utilitaires */

function showAddEleveModal() {
  document.getElementById('add-eleve-modal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

function handleAddEleve(event) {
  event.preventDefault();
  
  const data = {
    prenom: document.getElementById('eleve-prenom').value,
    nom: document.getElementById('eleve-nom').value,
    matricule: document.getElementById('eleve-matricule').value,
    classe: document.getElementById('eleve-classe').value,
    email: document.getElementById('eleve-email').value,
    tel: document.getElementById('eleve-tel').value,
  };

  console.log('Nouvel élève:', data);
  closeModal('add-eleve-modal');
  showToast('Élève ajouté avec succès');
  loadElevesData();
}

function editEleve(id) {
  console.log('Éditer élève:', id);
  showToast('Édition en cours...');
}

function deleteEleve(id) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cet élève ?')) {
    console.log('Supprimer élève:', id);
    showToast('Élève supprimé');
    loadElevesData();
  }
}

function filterTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  const filter = input.value.toLowerCase();
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const text = rows[i].textContent.toLowerCase();
    rows[i].style.display = text.includes(filter) ? '' : 'none';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function renderElevesAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des élèves</h1>
        <p>Créer et suivre les élèves depuis le backend</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-primary" onclick="showAddEleveModal()">
          <i class="ti ti-plus"></i> Nouvel élève
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Tous les élèves</h3>
        <div class="search-box">
          <i class="ti ti-search"></i>
          <input type="text" id="search-eleves" placeholder="Rechercher un élève..." onkeyup="filterTable('search-eleves', 'eleves-table')" />
        </div>
      </div>

      <table class="notes-table" id="eleves-table">
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>Matricule</th>
            <th>Classe</th>
            <th>Email</th>
            <th>Date de naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="eleves-tbody">
          <tr><td colspan="6" class="text-center">Chargement des élèves...</td></tr>
        </tbody>
      </table>
    </div>

    <div id="add-eleve-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Ajouter un nouvel élève</h2>
          <button class="close-btn" onclick="closeModal('add-eleve-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleAddEleve(event)">
          <div class="field">
            <label>Nom complet</label>
            <input type="text" id="eleve-name" placeholder="Nom et prénom" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" id="eleve-email" placeholder="eleve@ecole.sn" required />
          </div>
          <div class="field">
            <label>Mot de passe</label>
            <input type="password" id="eleve-password" placeholder="••••••••" required />
          </div>
          <div class="field">
            <label>Matricule</label>
            <input type="text" id="eleve-matricule" placeholder="E-001" required />
          </div>
          <div class="field">
            <label>Classe</label>
            <select id="eleve-classe" required>
              <option value="" selected disabled>Sélectionner une classe</option>
            </select>
          </div>
          <div class="field">
            <label>Date de naissance</label>
            <input type="date" id="eleve-date-naissance" />
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-eleve-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Ajouter élève</button>
          </div>
        </form>
      </div>
    </div>
  `;

  loadElevesData();
  loadEleveClassOptions();
}

async function loadEleveClassOptions() {
  const select = document.getElementById('eleve-classe');
  if (!select) return;

  try {
    const classes = await api.getClasses();
    const rows = Array.isArray(classes) ? classes : [];
    select.innerHTML = '<option value="" selected disabled>Sélectionner une classe</option>';

    if (!rows.length) {
      select.innerHTML += '<option value="" disabled>Aucune classe disponible</option>';
      return;
    }

    select.innerHTML += rows.map((classe) => `
      <option value="${classe.id}">${classe.nom} - ${classe.niveau}</option>
    `).join('');
  } catch (error) {
    console.error('Erreur chargement classes pour élèves:', error);
  }
}

async function handleAddEleve(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('eleve-name').value.trim(),
    email: document.getElementById('eleve-email').value.trim(),
    password: document.getElementById('eleve-password').value.trim(),
    matricule: document.getElementById('eleve-matricule').value.trim(),
    classeId: document.getElementById('eleve-classe').value,
    dateNaissance: document.getElementById('eleve-date-naissance').value || undefined,
  };

  if (!data.name || !data.email || !data.password || !data.matricule || !data.classeId) {
    showToast('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  const result = await api.createEleve(data);
  if (result?.error) {
    showToast(result.error);
    return;
  }

  closeModal('add-eleve-modal');
  document.getElementById('eleve-name').value = '';
  document.getElementById('eleve-email').value = '';
  document.getElementById('eleve-password').value = '';
  document.getElementById('eleve-matricule').value = '';
  document.getElementById('eleve-date-naissance').value = '';
  showToast('Élève créé avec succès');
  loadElevesData();
}

async function loadElevesData() {
  const tbody = document.getElementById('eleves-tbody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="6" class="text-center">Chargement des élèves...</td></tr>';

  try {
    const eleves = await api.getEleves();
    const rows = Array.isArray(eleves) ? eleves : [];

    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center">Aucun élève trouvé</td></tr>';
      return;
    }

    tbody.innerHTML = rows.map((e) => {
      const displayName = e?.user?.name || 'Élève';
      const classe = e?.classe?.nom ? `${e.classe.nom}` : '—';
      const email = e?.user?.email || '—';
      const naissance = e?.dateNaissance ? new Date(e.dateNaissance).toLocaleDateString('fr-FR') : '—';

      return `
        <tr>
          <td>${displayName}</td>
          <td>${e?.matricule || '—'}</td>
          <td>${classe}</td>
          <td>${email}</td>
          <td>${naissance}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-icon" title="Éditer" onclick="editEleve('${e.id}')">
                <i class="ti ti-edit"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    console.error('Erreur chargement élèves:', error);
    tbody.innerHTML = '<tr><td colspan="6" class="text-center">Impossible de charger les élèves.</td></tr>';
    showToast('Impossible de charger les élèves depuis le backend.');
  }
}
