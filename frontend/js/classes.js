/* ══════════════════════════════════════
   CLASSES - Gestion des classes
══════════════════════════════════════ */

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
        <p>Gérer les classes et affectations d'élèves</p>
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

        <div class="classes-grid">
          ${renderClassCard('6e A', 25, 'Français', 'M. Diop')}
          ${renderClassCard('6e B', 28, 'Mathématiques', 'Mme Sall')}
          ${renderClassCard('5e A', 26, 'SVT', 'M. Ba')}
          ${renderClassCard('5e B', 29, 'Anglais', 'Mme Gueye')}
          ${renderClassCard('4e A', 27, 'Français', 'M. Diop')}
          ${renderClassCard('3e A', 24, 'Mathématiques', 'Mme Sall')}
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
            <span class="label">Total élèves</span>
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
              <td>6ème</td>
              <td>4 classes</td>
            </tr>
            <tr>
              <td>5ème</td>
              <td>4 classes</td>
            </tr>
            <tr>
              <td>4ème</td>
              <td>3 classes</td>
            </tr>
            <tr>
              <td>3ème</td>
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
          <h2>Créer une nouvelle classe</h2>
          <button class="close-btn" onclick="closeModal('add-class-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleAddClass(event)">
          <div class="field">
            <label>Nom de la classe</label>
            <input type="text" id="class-name" placeholder="ex: 6e A" required/>
          </div>

          <div class="field">
            <label>Niveau</label>
            <select id="class-level" required>
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
            <label>Professeur responsable</label>
            <select id="class-teacher" required>
              <option>Sélectionner...</option>
              <option value="prof1">M. Diop</option>
              <option value="prof2">Mme Sall</option>
              <option value="prof3">M. Ba</option>
              <option value="prof4">Mme Gueye</option>
            </select>
          </div>

          <div class="field">
            <label>Matière principale</label>
            <input type="text" id="class-subject" placeholder="ex: Français" required/>
          </div>

          <div class="field">
            <label>Capacité max</label>
            <input type="number" id="class-capacity" value="30" min="1" max="50" required/>
          </div>

          <div class="field">
            <label>Salle</label>
            <input type="text" id="class-room" placeholder="ex: Salle 205" required/>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('add-class-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Créer classe</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderClassCard(name, students, subject, teacher) {
  return `
    <div class="class-card" onclick="showClassDetails('${name}')">
      <div class="class-card-header">
        <h3>${name}</h3>
        <div class="class-actions">
          <button class="btn-icon" title="Éditer" onclick="editClass('${name}'); event.stopPropagation();">
            <i class="ti ti-edit"></i>
          </button>
        </div>
      </div>
      <div class="class-card-body">
        <p><i class="ti ti-users"></i> ${students} élèves</p>
        <p><i class="ti ti-book"></i> ${subject}</p>
        <p><i class="ti ti-user"></i> ${teacher}</p>
      </div>
      <div class="class-card-footer">
        <button class="btn btn-sm btn-outline">Voir détails</button>
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
          ${renderClassDetail('6e A', 'Français', 25, 'M. Diop', 'Salle 205')}
          ${renderClassDetail('5e B', 'Français', 28, 'M. Diop', 'Salle 206')}
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
        <button class="btn btn-sm btn-outline" onclick="manageClassEleves('${name}')">Gérer élèves</button>
      </div>
      <p class="text-muted">${subject} • ${students} élèves • Salle ${room}</p>
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
            <label>Nombre d'élèves</label>
            <span>24 élèves</span>
          </div>
          <div class="info-row">
            <label>Année scolaire</label>
            <span>2025-2026</span>
          </div>
          <div class="info-row">
            <label>Moyenne générale</label>
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
          <div class="student-item">Aïssatou Diop</div>
          <div class="student-item">Fatou Sow</div>
          <div class="student-item">Moussa Ba</div>
          <div class="student-item">Saliou Gueye</div>
          <div class="student-item">+ 19 autres</div>
        </div>

        <button class="btn btn-outline btn-full" style="margin-top: 1.5rem;">
          Voir la liste complète
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
            <td>Français</td>
            <td>Maths</td>
            <td>Anglais</td>
            <td>SVT</td>
            <td>Hist-Géo</td>
          </tr>
          <tr>
            <td><strong>09:15</strong></td>
            <td>Maths</td>
            <td>Français</td>
            <td>SVT</td>
            <td>Anglais</td>
            <td>EPS</td>
          </tr>
          <tr>
            <td><strong>10:30</strong></td>
            <td colspan="5" class="text-center text-muted">Récréation</td>
          </tr>
          <tr>
            <td><strong>10:45</strong></td>
            <td>Anglais</td>
            <td>SVT</td>
            <td>Maths</td>
            <td>Français</td>
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
  document.getElementById('toast-msg').textContent = 'Classe créée avec succès';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function showClassDetails(className) {
  console.log('Voir détails de la classe:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Détails de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function editClass(className) {
  console.log('Éditer classe:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Édition de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function manageClassEleves(className) {
  console.log('Gérer les élèves de:', className);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Gestion des élèves de ${className}...`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
