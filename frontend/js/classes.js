/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CLASSES - Gestion des classes
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function renderClasses() {
  const role = auth.getRole();
  
  if (role === 'admin') {
    renderClassesAdmin();
  } else if (role === 'prof') {
    renderClassesProf();
  } else {
    renderClassesEleve();
  }
}


function renderClassesAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des classes</h1>
        <p>Créer et suivre les classes depuis le backend</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-primary" onclick="showAddClassModal()">
          <i class="ti ti-plus"></i> Nouvelle classe
        </button>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header">
          <h3>Toutes les classes</h3>
        </div>

        <div class="classes-grid" id="classes-grid">
          <div class="text-center text-muted" style="grid-column:1/-1;padding:1rem 0;">Chargement des classes...</div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><h3>Statistiques</h3></div>
        <div class="stats-box">
          <div class="stat-item">
            <span class="label">Nombre de classes</span>
            <span class="value" id="classes-count">-</span>
          </div>
          <div class="stat-item">
            <span class="label">Total élèves</span>
            <span class="value" id="classes-students">-</span>
          </div>
          <div class="stat-item">
            <span class="label">Professeurs</span>
            <span class="value" id="classes-professeurs">-</span>
          </div>
          <div class="stat-item">
            <span class="label">Moyenne par classe</span>
            <span class="value">-</span>
          </div>
        </div>
      </div>
    </div>

    <div id="add-class-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Créer une nouvelle classe</h2>
          <button class="close-btn" onclick="closeModal('add-class-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleAddClass(event)">
          <div class="field">
            <label>Nom de la classe</label>
            <input type="text" id="class-name" placeholder="Ex: 6e A" required />
          </div>
          <div class="field">
            <label>Niveau</label>
            <select id="class-level" required>
              <option value="" selected disabled>Sélectionner un niveau</option>
              <option>6ème</option>
              <option>5ème</option>
              <option>4ème</option>
              <option>3ème</option>
              <option>2nde</option>
              <option>1ère</option>
              <option>Terminale</option>
            </select>
          </div>
          <div class="field">
            <label>Année scolaire</label>
            <input type="text" id="class-year" placeholder="2025-2026" required />
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-class-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Créer classe</button>
          </div>
        </form>
      </div>
    </div>
  `;

  loadClassesData();
}



function renderClassesProf() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mes classes</h1>
        <p>Classes que je dois enseigner</p>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header">
          <h3>Mes classes</h3>
        </div>

        <div class="classes-list">
          <div class="class-detail-item">
            <div class="class-detail-header">
              <h4>6e A</h4>
            </div>
            <p class="text-muted">25 élèves</p>
          </div>
          <div class="class-detail-item">
            <div class="class-detail-header">
              <h4>5e B</h4>
            </div>
            <p class="text-muted">28 élèves</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><h3>Emploi du temps</h3></div>
        <p class="text-muted">Emploi du temps à implémenter</p>
      </div>
    </div>
  `;
}


function renderClassesEleve() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Ma classe</h1>
        <p>Informations sur ma classe</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Mes informations de classe</h3></div>
      <p class="text-muted">Classe à implémenter</p>
    </div>
  `;
}

function showAddClassModal() {
  document.getElementById('add-class-modal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

async function handleAddClass(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('class-name').value.trim(),
    level: document.getElementById('class-level').value,
    years: document.getElementById('class-year').value.trim(),
  };

  if (!data.name || !data.level || !data.years) {
    showToast('Veuillez remplir tous les champs.');
    return;
  }

  const result = await api.createClasse(data);
  if (result?.error) {
    showToast(result.error);
    return;
  }

  closeModal('add-class-modal');
  document.getElementById('class-name').value = '';
  document.getElementById('class-level').value = '';
  document.getElementById('class-year').value = '';
  showToast('Classe créée avec succès');
  loadClassesData();
}

async function loadClassesData() {
  const grid = document.getElementById('classes-grid');
  if (!grid) return;

  try {
    const classes = await api.getClasses();
    const rows = Array.isArray(classes) ? classes : [];

    const totalStudents = rows.reduce((sum, classe) => sum + (classe?._count?.eleves ?? 0), 0);
    const totalProfesseurs = rows.reduce((sum, classe) => sum + (classe?._count?.matieres ?? 0), 0);

    const countEl = document.getElementById('classes-count');
    const studentsEl = document.getElementById('classes-students');
    const professeursEl = document.getElementById('classes-professeurs');
    if (countEl) countEl.textContent = rows.length;
    if (studentsEl) studentsEl.textContent = totalStudents;
    if (professeursEl) professeursEl.textContent = totalProfesseurs;

    if (!rows.length) {
      grid.innerHTML = '<div class="text-center text-muted" style="grid-column:1/-1;padding:1rem 0;">Aucune classe trouvée</div>';
      return;
    }

    grid.innerHTML = rows.map((classe) => {
      const title = classe?.nom || classe?.name || 'Classe';
      const level = classe?.niveau || classe?.level || 'Niveau inconnu';
      const year = classe?.annee || classe?.years || 'Année inconnue';
      const students = classe?._count?.eleves ?? 0;
      const subjects = classe?._count?.matieres ?? 0;
      const ratio = Math.min(100, Math.round((students / 35) * 100));

      return `
        <div class="class-card">
          <div class="class-card-header">
            <h3>${title}</h3>
            <div class="class-actions">
              <button class="btn-icon" title="Éditer" onclick="editClass('${title}')">
                <i class="ti ti-edit"></i>
              </button>
            </div>
          </div>
          <div class="class-card-body">
            <p><i class="ti ti-users"></i> ${students} élèves</p>
            <p><i class="ti ti-book"></i> ${level} · ${year}</p>
            <p><i class="ti ti-list"></i> ${subjects} matières</p>
          </div>
          <div class="progress-bar" style="margin-bottom:12px">
            <div class="progress-fill" style="width:${ratio}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Erreur chargement classes:', error);
    grid.innerHTML = '<div class="text-center text-muted" style="grid-column:1/-1;padding:1rem 0;">Impossible de charger les classes.</div>';
    showToast('Impossible de charger les classes depuis le backend.');
  }
}

function showClassDetails(className) {
  showToast(`Détails de ${className}`);
}

function editClass(className) {
  showToast(`Édition de ${className}`);
}

function manageClassEleves(className) {
  showToast(`Gestion des élèves de ${className}`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    const toastMsg = document.getElementById('toast-msg');
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}
