/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   NOTES - Saisie et consultation des notes
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

function renderNotes() {
  const role = auth.getRole();
  
  if (role === 'admin') {
    renderNotesAdmin();
  } else if (role === 'prof') {
    renderNotesProf();
  } else {
    renderNotesEleve();
  }
}

function renderNotesAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Gestion des notes</h1>
        <p>Consulter et valider toutes les notes du systÃ¨me</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-outline"><i class="ti ti-download"></i> Exporter</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Sélectionner une classe et une évaluation</h3>
      </div>

      <div class="filter-group">
        <div class="field">
          <label>Classe</label>
          <select id="filter-classe" onchange="loadNotesForClass()">
            <option value="">Sélectionner une classe...</option>
            <option value="6e A">6e A</option>
            <option value="6e B">6e B</option>
            <option value="5e A">5e A</option>
            <option value="4e A">4e A</option>
            <option value="3e A">3e A</option>
          </select>
        </div>

        <div class="field">
          <label>Évaluation</label>
          <select id="filter-eval" onchange="loadNotesForClass()">
            <option value="">Sélectionner une évaluation...</option>
            <option value="DEVOIR">Devoir</option>
            <option value="INTERROGATION">Interrogation</option>
            <option value="EXAMEN">Examen</option>
            <option value="RATTRAPAGE">Rattrapage</option>
          </select>
        </div>
      </div>

      <table class="notes-table" id="notes-table" style="display:none;">
        <thead>
          <tr>
            <th>Élève</th>
            <th>Classe</th>
            <th>Matière</th>
            <th>Évaluation</th>
            <th>Note</th>
            <th>Appréciation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="notes-tbody"></tbody>
      </table>

      <div id="no-selection" class="text-center text-muted" style="padding:3rem;">
        Sélectionnez une classe et une évaluation pour afficher les notes
      </div>
    </div>
  `;
}

function renderNotesProf() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Saisie des notes</h1>
        <p>Entrez les notes pour vos Ã©lÃ¨ves</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Mes classes</h3>
      </div>

      <div class="tabs">
        <button class="tab-button active" onclick="switchNotesTab('class6a')">6e A (FranÃ§ais)</button>
        <button class="tab-button" onclick="switchNotesTab('class5b')">5e B (FranÃ§ais)</button>
      </div>

      <div id="class6a" class="tab-content">
        <table class="notes-table">
          <thead>
            <tr>
              <th>Ã‰lÃ¨ve</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Participation</th>
              <th>Moyenne</th>
              <th>ApprÃ©ciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abdoulaye Diallo</td>
              <td><input type="number" class="note-input" min="0" max="20" value="15" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="16" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="14" onchange="calculateMoyenne(this)"/></td>
              <td><span class="moyenne">15</span></td>
              <td><span class="appreciation">Bien</span></td>
            </tr>
            <tr>
              <td>Fatou Sow</td>
              <td><input type="number" class="note-input" min="0" max="20" value="18" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="17" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="19" onchange="calculateMoyenne(this)"/></td>
              <td><span class="moyenne">18</span></td>
              <td><span class="appreciation">TrÃ¨s bien</span></td>
            </tr>
          </tbody>
        </table>

        <div class="actions" style="margin-top:2rem;">
          <button class="btn btn-primary" onclick="saveNotes()">
            <i class="ti ti-check"></i> Enregistrer les notes
          </button>
          <span class="saved-indicator" id="saved-indicator"></span>
        </div>
      </div>

      <div id="class5b" class="tab-content" style="display:none;">
        <table class="notes-table">
          <thead>
            <tr>
              <th>Ã‰lÃ¨ve</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Participation</th>
              <th>Moyenne</th>
              <th>ApprÃ©ciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Moussa Ba</td>
              <td><input type="number" class="note-input" min="0" max="20" value="12" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="13" onchange="calculateMoyenne(this)"/></td>
              <td><input type="number" class="note-input" min="0" max="20" value="11" onchange="calculateMoyenne(this)"/></td>
              <td><span class="moyenne">12</span></td>
              <td><span class="appreciation">Passable</span></td>
            </tr>
          </tbody>
        </table>

        <div class="actions" style="margin-top:2rem;">
          <button class="btn btn-primary" onclick="saveNotes()">
            <i class="ti ti-check"></i> Enregistrer les notes
          </button>
          <span class="saved-indicator" id="saved-indicator-2"></span>
        </div>
      </div>
    </div>
  `;
}

function renderNotesEleve() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mes notes</h1>
        <p>Consultation de mes rÃ©sultats scolaires</p>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header">
          <h3>Mes notes par matiÃ¨re</h3>
          <select onchange="filterNotesBySubject()">
            <option value="">Toutes les matiÃ¨res</option>
            <option value="francais">FranÃ§ais</option>
            <option value="math">MathÃ©matiques</option>
            <option value="anglais">Anglais</option>
            <option value="svt">SVT</option>
            <option value="hist">Histoire-GÃ©ographie</option>
          </select>
        </div>

        <table class="notes-table">
          <thead>
            <tr>
              <th>MatiÃ¨re</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Examen</th>
              <th>Moyenne</th>
              <th>ApprÃ©ciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FranÃ§ais</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td><strong>15</strong></td>
              <td><span class="badge badge-success">Bien</span></td>
            </tr>
            <tr>
              <td>MathÃ©matiques</td>
              <td>12</td>
              <td>13</td>
              <td>11</td>
              <td><strong>12</strong></td>
              <td><span class="badge badge-warning">Passable</span></td>
            </tr>
            <tr>
              <td>Anglais</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td><strong>15</strong></td>
              <td><span class="badge badge-success">Bien</span></td>
            </tr>
            <tr>
              <td>SVT</td>
              <td>18</td>
              <td>17</td>
              <td>19</td>
              <td><strong>18</strong></td>
              <td><span class="badge badge-success">TrÃ¨s bien</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <div class="card-header"><h3>RÃ©sumÃ©</h3></div>
        <div class="stats-box">
          <div class="stat-item">
            <span class="label">Moyenne gÃ©nÃ©rale</span>
            <span class="value">15</span>
          </div>
          <div class="stat-item">
            <span class="label">Meilleure note</span>
            <span class="value">19</span>
          </div>
          <div class="stat-item">
            <span class="label">Plus faible note</span>
            <span class="value">11</span>
          </div>
          <div class="stat-item">
            <span class="label">Notes reÃ§ues</span>
            <span class="value">12</span>
          </div>
        </div>

        <div style="margin-top:2rem;">
          <h4>Ã‰volution</h4>
          <div class="mini-chart">
            <div class="bar" style="height:60%;"></div>
            <div class="bar" style="height:65%;"></div>
            <div class="bar" style="height:75%;"></div>
            <div class="bar" style="height:70%;"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* Fonctions utilitaires */

function loadNotesForClass() {
  const classe = document.getElementById('filter-classe').value;
  const eval_ = document.getElementById('filter-eval').value;

  if (classe && eval_) {
    const tbody = document.getElementById('notes-tbody');
    const table = document.getElementById('notes-table');
    const selection = document.getElementById('no-selection');

    if (selection) selection.style.display = 'none';
    if (table) table.style.display = 'table';
    if (tbody) tbody.innerHTML = '<tr><td colspan="7" class="text-center">Chargement des notes...</td></tr>';

    api.getAllNotes()
      .then((notes) => {
        const rows = Array.isArray(notes) ? notes : [];
        const filtered = rows.filter((note) => {
          const noteClass = note?.eleve?.classe?.nom || '';
          const noteEval = note?.evaluation?.type || '';
          return noteClass === classe && noteEval === eval_;
        });

        if (!filtered.length) {
          tbody.innerHTML = '<tr><td colspan="7" class="text-center">Aucune note trouvée pour ce filtre</td></tr>';
          return;
        }

        tbody.innerHTML = filtered.map((note) => {
          const studentName = note?.eleve?.user?.name || 'Élève';
          const classeName = note?.eleve?.classe?.nom || '—';
          const subject = note?.evaluation?.matiere?.nom || '—';
          const evaluation = note?.evaluation?.titre || note?.evaluation?.type || '—';
          const valeur = Number(note?.valeur ?? 0);
          const appreciation = note?.appreciation || getAppreciationFromValue(valeur);
          const statusClass = valeur >= 10 ? 'badge-success' : 'badge-danger';
          const statusLabel = valeur >= 10 ? 'Admis' : 'En échec';

          return `
            <tr>
              <td>${studentName}</td>
              <td>${classeName}</td>
              <td>${subject}</td>
              <td>${evaluation}</td>
              <td><strong>${valeur.toFixed(1)}</strong></td>
              <td>${appreciation}</td>
              <td><span class="badge ${statusClass}">${statusLabel}</span></td>
            </tr>
          `;
        }).join('');
      })
      .catch((error) => {
        console.error('Erreur chargement notes:', error);
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">Impossible de charger les notes depuis le backend</td></tr>';
      });
  } else {
    const selection = document.getElementById('no-selection');
    const table = document.getElementById('notes-table');
    if (selection) selection.style.display = 'block';
    if (table) table.style.display = 'none';
  }
}

function switchNotesTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
}

function calculateMoyenne(input) {
  const row = input.closest('tr');
  const inputs = row.querySelectorAll('.note-input');
  let sum = 0;
  let count = 0;

  inputs.forEach(inp => {
    if (inp.value) {
      sum += parseFloat(inp.value);
      count++;
    }
  });

  const moyenne = count > 0 ? (sum / count).toFixed(1) : 'â€”';
  row.querySelector('.moyenne').textContent = moyenne;

  const appreciations = {
    'Insuffisant': [0, 8],
    'Passable': [8, 10],
    'Assez bien': [10, 12],
    'Bien': [12, 14],
    'Très bien': [14, 16],
    'Excellent': [16, 20]
  };

  for (const [app, range] of Object.entries(appreciations)) {
    if (moyenne >= range[0] && moyenne < range[1]) {
      row.querySelector('.appreciation').textContent = app;
      break;
    }
  }
}

function saveNotes() {
  const savedIndicator = document.getElementById('saved-indicator');

  if (savedIndicator) {
    savedIndicator.innerHTML =
      '<span class="saved-check"><i class="ti ti-check" style="font-size:14px"></i> Enregistré</span>';
  }
  
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  if (toastMsg) {
    toastMsg.textContent = 'Notes enregistrées avec succès';
  }

  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function filterNotesBySubject() {
  console.log('Filtrer par matiÃ¨re');
}

function getAppreciationFromValue(value) {
  if (value < 8) return 'Insuffisant';
  if (value < 10) return 'Passable';
  if (value < 12) return 'Assez bien';
  if (value < 14) return 'Bien';
  if (value < 16) return 'Très bien';
  return 'Excellent';
}
