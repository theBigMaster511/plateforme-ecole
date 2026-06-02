/* ══════════════════════════════════════
   NOTES - Saisie et consultation des notes
══════════════════════════════════════ */

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
        <p>Consulter et valider toutes les notes du système</p>
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
            <option>Sélectionner une classe...</option>
            <option value="6A">6e A</option>
            <option value="6B">6e B</option>
            <option value="5A">5e A</option>
            <option value="4A">4e A</option>
            <option value="3A">3e A</option>
          </select>
        </div>

        <div class="field">
          <label>Évaluation</label>
          <select id="filter-eval" onchange="loadNotesForClass()">
            <option>Sélectionner une évaluation...</option>
            <option value="eval1">Évaluation 1 - Semaine 1</option>
            <option value="eval2">Évaluation 2 - Semaine 3</option>
            <option value="exam1">Examen blanc - Semaine 5</option>
          </select>
        </div>
      </div>

      <table class="notes-table" id="notes-table" style="display:none;">
        <thead>
          <tr>
            <th>Élève</th>
            <th>Français</th>
            <th>Mathématiques</th>
            <th>Anglais</th>
            <th>SVT</th>
            <th>Moyenne</th>
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
        <p>Entrez les notes pour vos élèves</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Mes classes</h3>
      </div>

      <div class="tabs">
        <button class="tab-button active" onclick="switchNotesTab('class6a')">6e A (Français)</button>
        <button class="tab-button" onclick="switchNotesTab('class5b')">5e B (Français)</button>
      </div>

      <div id="class6a" class="tab-content">
        <table class="notes-table">
          <thead>
            <tr>
              <th>Élève</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Participation</th>
              <th>Moyenne</th>
              <th>Appréciation</th>
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
              <td><span class="appreciation">Très bien</span></td>
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
              <th>Élève</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Participation</th>
              <th>Moyenne</th>
              <th>Appréciation</th>
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
        <p>Consultation de mes résultats scolaires</p>
      </div>
    </div>

    <div class="grid-2-1">
      <div class="card">
        <div class="card-header">
          <h3>Mes notes par matière</h3>
          <select onchange="filterNotesBySubject()">
            <option value="">Toutes les matières</option>
            <option value="francais">Français</option>
            <option value="math">Mathématiques</option>
            <option value="anglais">Anglais</option>
            <option value="svt">SVT</option>
            <option value="hist">Histoire-Géographie</option>
          </select>
        </div>

        <table class="notes-table">
          <thead>
            <tr>
              <th>Matière</th>
              <th>Devoir 1</th>
              <th>Devoir 2</th>
              <th>Examen</th>
              <th>Moyenne</th>
              <th>Appréciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Français</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td><strong>15</strong></td>
              <td><span class="badge badge-success">Bien</span></td>
            </tr>
            <tr>
              <td>Mathématiques</td>
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
              <td><span class="badge badge-success">Très bien</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <div class="card-header"><h3>Résumé</h3></div>
        <div class="stats-box">
          <div class="stat-item">
            <span class="label">Moyenne générale</span>
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
            <span class="label">Notes reçues</span>
            <span class="value">12</span>
          </div>
        </div>

        <div style="margin-top:2rem;">
          <h4>Évolution</h4>
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
    console.log('Charger notes pour:', classe, eval_);
    document.getElementById('no-selection').style.display = 'none';
    document.getElementById('notes-table').style.display = 'table';
    
    const tbody = document.getElementById('notes-tbody');
    tbody.innerHTML = `
      <tr>
        <td>Abdoulaye Diallo</td>
        <td>15</td>
        <td>16</td>
        <td>14</td>
        <td>15</td>
        <td><strong>15</strong></td>
        <td><span class="badge badge-success">Admis</span></td>
      </tr>
      <tr>
        <td>Fatou Sow</td>
        <td>18</td>
        <td>17</td>
        <td>19</td>
        <td>18</td>
        <td><strong>18</strong></td>
        <td><span class="badge badge-success">Admis</span></td>
      </tr>
      <tr>
        <td>Moussa Ba</td>
        <td>8</td>
        <td>7</td>
        <td>9</td>
        <td>10</td>
        <td><strong>8.5</strong></td>
        <td><span class="badge badge-danger">En échec</span></td>
      </tr>
    `;
  } else {
    document.getElementById('no-selection').style.display = 'block';
    document.getElementById('notes-table').style.display = 'none';
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

  const moyenne = count > 0 ? (sum / count).toFixed(1) : '—';
  row.querySelector('.moyenne').textContent = moyenne;

  // Calcul appréciation
  const appreciations = {
    'Insuffisant': [0, 8),
    'Passable': [8, 10),
    'Assez bien': [10, 12),
    'Bien': [12, 14),
    'Très bien': [14, 16),
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
  document.getElementById('saved-indicator').innerHTML =
    '<span class="saved-check"><i class="ti ti-check" style="font-size:14px"></i> Enregistré</span>';
  
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = 'Notes enregistrées avec succès';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function filterNotesBySubject() {
  console.log('Filtrer par matière');
}
