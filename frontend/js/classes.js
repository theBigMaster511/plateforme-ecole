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
        <p>GÃ©rer les classes et affectations d'Ã©lÃ¨ves</p>
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
            <span class="value">14</span>
          </div>
          <div class="stat-item">
            <span class="label">Total Ã©lÃ¨ves</span>
            <span class="value">342</span>
          </div>
          <div class="stat-item">
            <span class="label">Professeurs</span>
            <span class="value">28</span>
          </div>
          <div class="stat-item">
            <span class="label">Moyenne par classe</span>
            <span class="value">24.4</span>
          </div>
        </div>

        <div style="margin-top: 2rem;">
          <h4>Distribution par niveau</h4>
          <table class="mini-table">
            <tr>
              <td>6Ã¨me</td>
              <td>4 classes</td>
            </tr>
            <tr>
              <td>5Ã¨me</td>
              <td>4 classes</td>
            </tr>
            <tr>
              <td>4Ã¨me</td>
              <td>3 classes</td>
            </tr>
            <tr>
              <td>3Ã¨me</td>
              <td>3 classes</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Ajouter Classe -->
    <div id="add-class-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>CrÃ©er une nouvelle classe</h2>
          <button class="close-btn" onclick="closeModal('add-class-modal')">Ã—</button>
        </div>
        <form class="form-grid" onsubmit="handleAddClass(event)">
          <div class="field">
            <label>Nom de la classe</label>
            <input type="text" id="class-name" placeholder="ex: 6e A" required/>
          </div>

          <div class="field">
            <label>Niveau</label>
            <select id="class-level" required>
              <option>6Ã¨me</option>
              <option>5Ã¨me</option>
              <option>4Ã¨me</option>
              <option>3Ã¨me</option>
              <option>2nde</option>
              <option>1Ã¨re</option>
              <option>Terminale</option>
            </select>
          </div>

          <div class="field">
            <label>Professeur responsable</label>
            <select id="class-teacher" required>
              <option>SÃ©lectionner...</option>
              <option value="prof1">M. Diop</option>
              <option value="prof2">Mme Sall</option>
              <option value="prof3">M. Ba</option>
              <option value="prof4">Mme Gueye</option>
            </select>
          </div>

          <div class="field">
            <label>MatiÃ¨re principale</label>
            <input type="text" id="class-subject" placeholder="ex: FranÃ§ais" required/>
          </div>

          <div class="field">
            <label>CapacitÃ© max</label>
            <input type="number" id="class-capacity" value="30" min="1" max="50" required/>
          </div>

          <div class="field">
            <label>Salle</label>
            <input type="text" id="class-room" placeholder="ex: Salle 205" required/>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-class-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">CrÃ©er classe</button>
          </div>
        </form>
      </div>
    </div>
  `;

  loadClassesData();
}

function renderClassCard(name, students, subject, teacher) {
  return `
    <div class="class-card" onclick="showClassDetails('${name}')">
      <div class="class-card-header">
        <h3>${name}</h3>
        <div class="class-actions">
          <button class="btn-icon" title="Ã‰diter" onclick="editClass('${name}'); event.stopPropagation();">
            <i class="ti ti-edit"></i>
          </button>
        </div>
      </div>
      <div class="class-card-body">
        <p><i class="ti ti-users"></i> ${students} Ã©lÃ¨ves</p>
        <p><i class="ti ti-book"></i> ${subject}</p>
        <p><i class="ti ti-user"></i> ${teacher}</p>
      </div>
      <div class="class-card-footer">
        <button class="btn btn-sm btn-outline">Voir dÃ©tails</button>
      </div>
    </div>
  `;
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
          ${renderClassDetail('6e A', 'FranÃ§ais', 25, 'M. Diop', 'Salle 205')}
          ${renderClassDetail('5e B', 'FranÃ§ais', 28, 'M. Diop', 'Salle 206')}
        </div>
      </div>

      <div class="card">
        <div class="card-header"><h3>Emploi du temps (exemple)</h3></div>
        <table class="mini-table">
          <tr>
            <th>Jour</th>
            <th>Heure</th>
            <th>Classe</th>
          </tr>
          <tr>
            <td>Lundi</td>
            <td>08:00-09:00</td>
            <td>6e A</td>
          </tr>
          <tr>
            <td>Lundi</td>
            <td>09:15-10:15</td>
            <td>5e B</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>08:00-09:00</td>
            <td>5e B</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>10:30-11:30</td>
            <td>6e A</td>
          </tr>
        </table>
      </div>
    </div>
  `;
}

function renderClassDetail(name, subject, students, teacher, room) {
  return `
    <div class="class-detail-item">
      <div class="class-detail-header">
        <h4>${name}</h4>
        <button class="btn btn-sm btn-outline" onclick="manageClassEleves('${name}')">GÃ©rer Ã©lÃ¨ves</button>
      </div>
      <p class="text-muted">${subject} â€¢ ${students} Ã©lÃ¨ves â€¢ Salle ${room}</p>
      <div class="class-quick-stats">
        <span>Moyenne: 14.2</span>
        <span>Meilleur: 19</span>
        <span>Plus faible: 8</span>
      </div>
    </div>
  `;
}

function renderClassesEleve() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Ma classe</h1>
        <p>Informations sur ma classe et mes camarades</p>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header">
          <h3>Classe: 3e A</h3>
        </div>

        <div class="class-info">
          <div class="info-row">
            <label>Salle</label>
            <span>Salle 305</span>
          </div>
          <div class="info-row">
            <label>Professeur principal</label>
            <span>Mme Sall</span>
          </div>
          <div class="info-row">
            <label>Nombre d'Ã©lÃ¨ves</label>
            <span>24 Ã©lÃ¨ves</span>
          </div>
          <div class="info-row">
            <label>AnnÃ©e scolaire</label>
            <span>2025-2026</span>
          </div>
          <div class="info-row">
            <label>Moyenne gÃ©nÃ©rale</label>
            <span>13.8/20</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>Mes camarades</h3>
        </div>

        <div class="students-list">
          <div class="student-item">Abdoulaye Diallo</div>
          <div class="student-item">AÃ¯ssatou Diop</div>
          <div class="student-item">Fatou Sow</div>
          <div class="student-item">Moussa Ba</div>
          <div class="student-item">Saliou Gueye</div>
          <div class="student-item">+ 19 autres</div>
        </div>

        <button class="btn btn-outline btn-full" style="margin-top: 1.5rem;">
          Voir la liste complÃ¨te
        </button>
      </div>
    </div>

    <div class="card" style="margin-top: 2rem;">
      <div class="card-header">
        <h3>Emploi du temps</h3>
      </div>

      <table class="notes-table">
        <thead>
          <tr>
            <th>Heure</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>08:00</strong></td>
            <td>FranÃ§ais</td>
            <td>Maths</td>
            <td>Anglais</td>
            <td>SVT</td>
            <td>Hist-GÃ©o</td>
          </tr>
          <tr>
            <td><strong>09:15</strong></td>
            <td>Maths</td>
            <td>FranÃ§ais</td>
            <td>SVT</td>
            <td>Anglais</td>
            <td>EPS</td>
          </tr>
          <tr>
            <td><strong>10:30</strong></td>
            <td colspan="5" class="text-center text-muted">RÃ©crÃ©ation</td>
          </tr>
          <tr>
            <td><strong>10:45</strong></td>
            <td>Anglais</td>
            <td>SVT</td>
            <td>Maths</td>
            <td>FranÃ§ais</td>
            <td>Maths</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/* Fonctions utilitaires */

function showAddClassModal() {
  document.getElementById('add-class-modal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

function handleAddClass(event) {
  event.preventDefault();
  
  const data = {
    name: document.getElementById('class-name').value,
    level: document.getElementById('class-level').value,
    teacher: document.getElementById('class-teacher').value,
    subject: document.getElementById('class-subject').value,
    capacity: document.getElementById('class-capacity').value,
    room: document.getElementById('class-room').value,
  };

  console.log('Nouvelle classe:', data);
  closeModal('add-class-modal');
  
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = 'Classe crÃ©Ã©e avec succÃ¨s';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function showClassDetails(className) {
  console.log('Voir dÃ©tails de la classe:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `DÃ©tails de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function editClass(className) {
  console.log('Ã‰diter classe:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Ã‰dition de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function manageClassEleves(className) {
  console.log('GÃ©rer les Ã©lÃ¨ves de:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Gestion des Ã©lÃ¨ves de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

async function loadClassesData() {
  const grid = document.getElementById('classes-grid');
  if (!grid) return;

  const fallbackClasses = [
    { id: 'demo-1', nom: '6e A', niveau: '6ème', annee: '2025-2026', eleves: 25, matieres: 4 },
    { id: 'demo-2', nom: '6e B', niveau: '6ème', annee: '2025-2026', eleves: 28, matieres: 4 },
    { id: 'demo-3', nom: '5e A', niveau: '5ème', annee: '2025-2026', eleves: 26, matieres: 5 },
    { id: 'demo-4', nom: '5e B', niveau: '5ème', annee: '2025-2026', eleves: 29, matieres: 5 },
  ];

  try {
    const classes = await api.getClasses();
    const rows = Array.isArray(classes) ? classes : [];

    if (!rows.length) {
      grid.innerHTML = '<div class="text-center text-muted" style="grid-column:1/-1;padding:1rem 0;">Aucune classe trouvée</div>';
      return;
    }

    grid.innerHTML = rows.map((c) => {
      const title = c?.nom || c?.name || 'Classe';
      const level = c?.niveau || 'Niveau inconnu';
      const year = c?.annee || 'Année inconnue';
      const students = c?._count?.eleves ?? 0;
      const subjects = c?._count?.matieres ?? 0;
      const ratio = Math.min(100, Math.round((students / 35) * 100));

      return `
        <div class="class-card" onclick="showClassDetails('${title}')">
          <div class="class-card-header">
            <h3>${title}</h3>
            <div class="class-actions">
              <button class="btn-icon" title="Éditer" onclick="editClass('${title}'); event.stopPropagation();">
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
          <div class="class-card-footer">
            <button class="btn btn-sm btn-outline">Voir détails</button>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Erreur chargement classes:', error);
    grid.innerHTML = fallbackClasses.map((c) => `
      <div class="class-card" onclick="showClassDetails('${c.nom}')">
        <div class="class-card-header">
          <h3>${c.nom}</h3>
          <div class="class-actions">
            <button class="btn-icon" title="Éditer" onclick="editClass('${c.nom}'); event.stopPropagation();">
              <i class="ti ti-edit"></i>
            </button>
          </div>
        </div>
        <div class="class-card-body">
          <p><i class="ti ti-users"></i> ${c.eleves} élèves</p>
          <p><i class="ti ti-book"></i> ${c.niveau} · ${c.annee}</p>
          <p><i class="ti ti-list"></i> ${c.matieres} matières</p>
        </div>
        <div class="progress-bar" style="margin-bottom:12px">
          <div class="progress-fill" style="width:${Math.min(100, Math.round((c.eleves / 35) * 100))}%;"></div>
        </div>
        <div class="class-card-footer">
          <button class="btn btn-sm btn-outline">Voir détails</button>
        </div>
      </div>
    `).join('');

    const toast = document.getElementById('toast');
    if (toast) {
      const toastMsg = document.getElementById('toast-msg');
      if (toastMsg) {
        toastMsg.textContent = 'Les classes backend sont indisponibles, affichage de données de démonstration.';
      }
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  }
}
