/* ══════════════════════════════════════
   BULLETINS - Génération et consultation des bulletins
══════════════════════════════════════ */

function renderBulletins() {
  const role = auth.getRole();
  
  if (role === 'admin') {
    renderBulletinsAdmin();
  } else if (role === 'prof') {
    renderBulletinsProf();
  } else {
    renderBulletinsEleve();
  }
}

function renderBulletinsAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des bulletins</h1>
        <p>Générer et consulter les bulletins scolaires</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-primary" onclick="showGenerateBulletinModal()">
          <i class="ti ti-plus"></i> Générer bulletins
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Bulletins par classe et semestre</h3>
      </div>

      <div class="filter-group">
        <div class="field">
          <label>Classe</label>
          <select onchange="loadBulletins()">
            <option>Sélectionner une classe...</option>
            <option value="6A">6e A</option>
            <option value="6B">6e B</option>
            <option value="5A">5e A</option>
          </select>
        </div>

        <div class="field">
          <label>Semestre</label>
          <select onchange="loadBulletins()">
            <option value="s1">Semestre 1</option>
            <option value="s2">Semestre 2</option>
            <option value="annuel">Bulletin annuel</option>
          </select>
        </div>
      </div>

      <table class="notes-table">
        <thead>
          <tr>
            <th>Élève</th>
            <th>Moyenne</th>
            <th>Rang</th>
            <th>Remarque</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abdoulaye Diallo</td>
            <td>15.5</td>
            <td>2/25</td>
            <td>Bon travail</td>
            <td><span class="badge badge-success">Validé</span></td>
            <td>
              <button class="btn-icon" onclick="viewBulletin('E001')"><i class="ti ti-eye"></i></button>
              <button class="btn-icon" onclick="downloadBulletin('E001')"><i class="ti ti-download"></i></button>
            </td>
          </tr>
          <tr>
            <td>Fatou Sow</td>
            <td>18.2</td>
            <td>1/25</td>
            <td>Excellent</td>
            <td><span class="badge badge-success">Validé</span></td>
            <td>
              <button class="btn-icon" onclick="viewBulletin('E002')"><i class="ti ti-eye"></i></button>
              <button class="btn-icon" onclick="downloadBulletin('E002')"><i class="ti ti-download"></i></button>
            </td>
          </tr>
          <tr>
            <td>Moussa Ba</td>
            <td>8.5</td>
            <td>24/25</td>
            <td>À redoubler</td>
            <td><span class="badge badge-warning">En attente</span></td>
            <td>
              <button class="btn-icon" onclick="viewBulletin('E003')"><i class="ti ti-eye"></i></button>
              <button class="btn-icon" onclick="downloadBulletin('E003')"><i class="ti ti-download"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Générer Bulletins -->
    <div id="generate-bulletin-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Générer les bulletins</h2>
          <button class="close-btn" onclick="closeModal('generate-bulletin-modal')">×</button>
        </div>
        <form class="form-grid" onsubmit="handleGenerateBulletins(event)">
          <div class="field">
            <label>Classe</label>
            <select id="gen-classe" required>
              <option>Sélectionner...</option>
              <option value="6A">6e A</option>
              <option value="6B">6e B</option>
              <option value="5A">5e A</option>
            </select>
          </div>

          <div class="field">
            <label>Semestre</label>
            <select id="gen-semestre" required>
              <option value="s1">Semestre 1</option>
              <option value="s2">Semestre 2</option>
              <option value="annuel">Bulletin annuel</option>
            </select>
          </div>

          <div class="field" style="grid-column: 1/-1;">
            <label>
              <input type="checkbox" id="gen-send-email"/>
              Envoyer par email aux parents
            </label>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-outline" onclick="closeModal('generate-bulletin-modal')">Annuler</button>
            <button type="submit" class="btn btn-primary">Générer</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderBulletinsProf() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Bulletins de mes élèves</h1>
        <p>Consulter et télécharger les bulletins</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Classes et bulletins disponibles</h3>
      </div>

      <div class="classes-list">
        <div class="class-bulletin">
          <div class="class-header">
            <h4>6e A - Français</h4>
            <button class="btn btn-sm btn-outline" onclick="downloadClassBulletins('6A')">
              <i class="ti ti-download"></i> Télécharger tous
            </button>
          </div>

          <table class="notes-table">
            <thead>
              <tr>
                <th>Élève</th>
                <th>Moyenne</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abdoulaye Diallo</td>
                <td>15.5</td>
                <td><span class="badge badge-success">Validé</span></td>
                <td><button class="btn-icon" onclick="viewBulletin('E001')"><i class="ti ti-eye"></i></button></td>
              </tr>
              <tr>
                <td>Fatou Sow</td>
                <td>18.2</td>
                <td><span class="badge badge-success">Validé</span></td>
                <td><button class="btn-icon" onclick="viewBulletin('E002')"><i class="ti ti-eye"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="class-bulletin">
          <div class="class-header">
            <h4>5e B - Français</h4>
            <button class="btn btn-sm btn-outline" onclick="downloadClassBulletins('5B')">
              <i class="ti ti-download"></i> Télécharger tous
            </button>
          </div>

          <table class="notes-table">
            <thead>
              <tr>
                <th>Élève</th>
                <th>Moyenne</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moussa Ba</td>
                <td>8.5</td>
                <td><span class="badge badge-warning">En attente</span></td>
                <td><button class="btn-icon" onclick="viewBulletin('E003')"><i class="ti ti-eye"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderBulletinsEleve() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mes bulletins</h1>
        <p>Consultation de mes bulletins scolaires</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Bulletins disponibles</h3>
      </div>

      <div class="bulletins-list">
        <div class="bulletin-item">
          <div class="bulletin-info">
            <h4>Bulletin Semestre 1 - 2025/2026</h4>
            <p class="text-muted">Généré le 15 janvier 2026</p>
            <div class="bulletin-meta">
              <span class="badge badge-success">Validé</span>
              <span style="margin-left: 1rem;">Moyenne: 15.5/20</span>
            </div>
          </div>
          <button class="btn btn-primary" onclick="downloadBulletin('bulletin-s1')">
            <i class="ti ti-download"></i> Télécharger
          </button>
        </div>

        <div class="bulletin-item">
          <div class="bulletin-info">
            <h4>Bulletin Semestre 2 - 2024/2025</h4>
            <p class="text-muted">Généré le 15 juin 2025</p>
            <div class="bulletin-meta">
              <span class="badge badge-success">Validé</span>
              <span style="margin-left: 1rem;">Moyenne: 14.2/20</span>
            </div>
          </div>
          <button class="btn btn-primary" onclick="downloadBulletin('bulletin-s2')">
            <i class="ti ti-download"></i> Télécharger
          </button>
        </div>

        <div class="bulletin-item">
          <div class="bulletin-info">
            <h4>Bulletin Annuel - 2024/2025</h4>
            <p class="text-muted">Généré le 20 juillet 2025</p>
            <div class="bulletin-meta">
              <span class="badge badge-success">Validé</span>
              <span style="margin-left: 1rem;">Moyenne: 14.85/20</span>
            </div>
          </div>
          <button class="btn btn-primary" onclick="downloadBulletin('bulletin-annuel')">
            <i class="ti ti-download"></i> Télécharger
          </button>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 2rem;">
      <div class="card-header">
        <h3>Résumé scolaire</h3>
      </div>

      <div class="grid-2-1">
        <div class="resume-section">
          <h4>Moyennes par semestre</h4>
          <table class="mini-table">
            <tr>
              <td>Semestre 1 2025/2026</td>
              <td><strong>15.5</strong></td>
            </tr>
            <tr>
              <td>Semestre 2 2024/2025</td>
              <td><strong>14.2</strong></td>
            </tr>
            <tr>
              <td>Année 2024/2025</td>
              <td><strong>14.85</strong></td>
            </tr>
          </table>
        </div>

        <div class="resume-section">
          <h4>Observations</h4>
          <p>Élève travailleur avec une bonne progression. Recommandé pour passer à la classe supérieure.</p>
          <p style="margin-top: 1rem;"><strong>Signature du directeur:</strong></p>
          <p style="margin-top: 3rem;">________________________</p>
        </div>
      </div>
    </div>
  `;
}

/* Fonctions utilitaires */

function showGenerateBulletinModal() {
  document.getElementById('generate-bulletin-modal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

function handleGenerateBulletins(event) {
  event.preventDefault();
  
  const data = {
    classe: document.getElementById('gen-classe').value,
    semestre: document.getElementById('gen-semestre').value,
    sendEmail: document.getElementById('gen-send-email').checked,
  };

  console.log('Générer bulletins:', data);
  closeModal('generate-bulletin-modal');
  
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = 'Bulletins générés avec succès';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function loadBulletins() {
  console.log('Charger bulletins...');
}

function viewBulletin(bulletinId) {
  console.log('Afficher bulletin:', bulletinId);
  // Ici on pourrait ouvrir une modal avec le détail du bulletin
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = 'Ouverture du bulletin...';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function downloadBulletin(bulletinId) {
  console.log('Télécharger bulletin:', bulletinId);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Bulletin ${bulletinId} téléchargé`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function downloadClassBulletins(classId) {
  console.log('Télécharger bulletins de la classe:', classId);
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = `Bulletins de la classe ${classId} téléchargés`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
