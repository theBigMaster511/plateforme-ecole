// js/views.js
// Contient toutes les fonctions renderXxx() appelées par le router

/* ══════════════════════════════════════
   LOGIN
══════════════════════════════════════ */
function renderLogin() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f0f4f8;padding:2rem;">
      <div class="login-page">

        <!-- Panneau gauche -->
        <div class="login-left">
          <div class="login-brand">
            <div class="login-brand-icon"><i class="ti ti-school"></i></div>
            <h1>Système de Gestion Scolaire</h1>
            <p>Plateforme unifiée pour administrer, enseigner et suivre la progression des élèves.</p>
          </div>
          <div class="login-features">
            <div class="feat"><div class="feat-dot"><i class="ti ti-clipboard-list"></i></div><span>Saisie et consultation des notes en temps réel</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-users"></i></div><span>Gestion des classes, matières et emplois du temps</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-file-analytics"></i></div><span>Bulletins scolaires générés automatiquement</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-shield-lock"></i></div><span>Accès sécurisé selon votre rôle</span></div>
          </div>
          <div class="login-year">Année scolaire 2025 — 2026</div>
        </div>

        <!-- Panneau droit -->
        <div class="login-right">
          <div class="login-header">
            <h2>Bienvenue 👋</h2>
            <p>Connectez-vous à votre espace personnel</p>
          </div>

          <div class="role-tabs">
            <button class="tab active" onclick="setLoginRole(this,'prof')">
              <i class="ti ti-chalkboard"></i> Professeur
            </button>
            <button class="tab" onclick="setLoginRole(this,'eleve')">
              <i class="ti ti-user-circle"></i> Élève / Parent
            </button>
          </div>

          <div class="error-msg" id="error-msg">
            <i class="ti ti-alert-circle"></i> Identifiant ou mot de passe incorrect.
          </div>

          <div class="field">
            <label>Identifiant</label>
            <input type="text" id="login-id" placeholder="prof.nom@ecole.sn" autocomplete="username"/>
          </div>

          <div class="field">
            <div class="field-row">
              <label>Mot de passe</label>
              <a class="forgot" href="#">Mot de passe oublié ?</a>
            </div>
            <input type="password" id="login-mdp" placeholder="••••••••" autocomplete="current-password"/>
          </div>

          <button class="btn btn-primary btn-full" onclick="handleLogin()">
            <i class="ti ti-login"></i>
            <span id="btn-login-text">Se connecter en tant que Professeur</span>
          </button>

          <div class="divider"><hr/><span>ou</span><hr/></div>
          <div class="text-center text-muted">
            <div style="margin-bottom:8px;">Admin ? <a href="#/admin-login" data-link style="color:var(--color-info)">Accès administrateur</a></div>
            Problème ? <a href="#" style="color:var(--color-info)">Contacter l'administration</a>
          </div>
        </div>

      </div>
    </div>
  `;

  // Connexion au clavier
  document.addEventListener('keydown', function onEnter(e) {
    if (e.key === 'Enter') {
      handleLogin();
      document.removeEventListener('keydown', onEnter);
    }
  });
}

/* ══════════════════════════════════════
   ADMIN LOGIN (Page sécurisée)
══════════════════════════════════════ */
function renderAdminLogin() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1a1a2e;padding:2rem;">
      <div class="login-page" style="box-shadow: 0 10px 40px rgba(0,0,0,0.3);">

        <!-- Panneau gauche -->
        <div class="login-left" style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div class="login-brand" style="color:white;">
            <div class="login-brand-icon" style="font-size:3rem;color:#ffd700;"><i class="ti ti-shield-lock"></i></div>
            <h1>Portail Administrateur</h1>
            <p>Accès réservé aux administrateurs système</p>
          </div>
          <div class="login-features" style="color:rgba(255,255,255,0.9);">
            <div class="feat"><div class="feat-dot"><i class="ti ti-lock"></i></div><span>Authentification à deux niveaux</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-shield"></i></div><span>Accès complètement sécurisé</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-key"></i></div><span>Connexion dédiée et isolée</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-alert-triangle"></i></div><span>Tentatives non autorisées enregistrées</span></div>
          </div>
          <div class="login-year" style="color:rgba(255,255,255,0.8);">Zone Sécurisée — Admin Only</div>
        </div>

        <!-- Panneau droit -->
        <div class="login-right">
          <div class="login-header">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
              <i class="ti ti-shield-lock" style="color:#667eea;font-size:1.5rem;"></i>
              <h2 style="margin:0;color:#667eea;">Connexion Admin</h2>
            </div>
            <p>Authentification requise pour accéder à l'interface d'administration</p>
          </div>

          <div class="error-msg" id="error-msg-admin">
            <i class="ti ti-alert-circle"></i> Identifiant ou mot de passe incorrect.
          </div>

          <div class="field">
            <label>Identifiant Admin</label>
            <input type="text" id="login-id-admin" placeholder="admin@ecole.sn" autocomplete="username" style="border-left:3px solid #667eea;"/>
          </div>

          <div class="field">
            <div class="field-row">
              <label>Mot de passe</label>
              <a class="forgot" href="#">Codes de secours</a>
            </div>
            <input type="password" id="login-mdp-admin" placeholder="••••••••" autocomplete="current-password" style="border-left:3px solid #667eea;"/>
          </div>

          <button class="btn btn-primary btn-full" onclick="handleAdminLogin()" style="background:#667eea;border:none;">
            <i class="ti ti-login"></i>
            <span>Se connecter en tant qu'Admin</span>
          </button>

          <div class="divider"><hr/><span>ou</span><hr/></div>
          <div class="text-center text-muted" style="display:flex;flex-direction:column;gap:8px;">
            <a href="#/admin-signup" data-link style="color:#667eea;text-decoration:none;font-weight:500;">Créer un nouveau compte admin</a>
            <a href="#/login" data-link style="color:#667eea;text-decoration:none;">← Retour au login principal</a>
          </div>
        </div>

      </div>
    </div>
  `;

  // Connexion au clavier
  document.addEventListener('keydown', function onEnter(e) {
    if (e.key === 'Enter') {
      handleAdminLogin();
      document.removeEventListener('keydown', onEnter);
    }
  });
}

function renderAdminSignup() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#eef3f8 0%,#e8eef5 100%);padding:2rem;">
      <div class="login-page admin-signup-page">

        <div class="login-left" style="background:linear-gradient(160deg,#0f2d4a 0%,#163f67 100%);">
          <div class="login-brand" style="color:white;">
            <div class="login-brand-icon" style="font-size:3rem;color:#9bd3ff;"><i class="ti ti-user-plus"></i></div>
            <h1>Créer un compte administrateur</h1>
            <p>Ajoutez plusieurs administrateurs sans modifier le flux de connexion existant.</p>
          </div>
          <div class="login-features" style="color:rgba(255,255,255,0.9);">
            <div class="feat"><div class="feat-dot"><i class="ti ti-shield-check"></i></div><span>Compte admin rattaché au même système d’authentification</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-users"></i></div><span>Vous pouvez créer plusieurs administrateurs</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-lock"></i></div><span>Aucune modification des autres rôles</span></div>
            <div class="feat"><div class="feat-dot"><i class="ti ti-sparkles"></i></div><span>Une inscription simple, rapide et réutilisable</span></div>
          </div>
          <div class="login-year" style="color:rgba(255,255,255,0.75);">Zone Sécurisée · Administration</div>
        </div>

        <div class="login-right">
          <div class="login-header">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
              <i class="ti ti-user-plus" style="color:#0f2d4a;font-size:1.5rem;"></i>
              <h2 style="margin:0;color:#0f2d4a;">Inscription Admin</h2>
            </div>
            <p>Créez un nouveau compte administrateur avec un accès complet au tableau de bord.</p>
          </div>

          <div class="error-msg" id="error-msg-signup">
            <i class="ti ti-alert-circle"></i> Une erreur est survenue lors de l'inscription.
          </div>

          <div class="field">
            <label>Nom complet</label>
            <input type="text" id="signup-name" placeholder="Nom et prénom" autocomplete="name" />
          </div>

          <div class="field">
            <label>Email admin</label>
            <input type="email" id="signup-email" placeholder="admin@ecole.sn" autocomplete="email" />
          </div>

          <div class="field">
            <label>Mot de passe</label>
            <input type="password" id="signup-password" placeholder="••••••••" autocomplete="new-password" />
          </div>

          <div class="field">
            <label>Confirmer le mot de passe</label>
            <input type="password" id="signup-confirm-password" placeholder="••••••••" autocomplete="new-password" />
          </div>

          <button class="btn btn-primary btn-full" onclick="handleAdminSignup()" style="background:#0f2d4a;border:none;">
            <i class="ti ti-user-plus"></i>
            <span>Créer le compte administrateur</span>
          </button>

          <div class="divider"><hr/><span>ou</span><hr/></div>
          <div class="text-center text-muted" style="display:flex;flex-direction:column;gap:8px;">
            <a href="#/admin-login" data-link style="color:#0f2d4a;text-decoration:none;font-weight:500;">← Retour à la connexion admin</a>
            <a href="#/login" data-link style="color:var(--color-info);text-decoration:none;">← Retour au login principal</a>
          </div>
        </div>

      </div>
    </div>
  `;

  document.addEventListener('keydown', function onEnter(e) {
    if (e.key === 'Enter') {
      handleAdminSignup();
      document.removeEventListener('keydown', onEnter);
    }
  });
}
function renderDashboard() {
  const role = auth.getRole();
  if (role === 'admin')     renderDashboardAdmin();
  else if (role === 'prof') renderDashboardProf();
  else                      renderDashboardEleve();
}

function renderDashboardAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Tableau de bord</h1>
        <p>Année scolaire 2025–2026 · Semestre 1</p>
      </div>
      <div class="topbar-actions">
        <button class="btn btn-outline"><i class="ti ti-download"></i> Exporter</button>
        <button class="btn btn-primary" onclick="navigate('#/eleves')"><i class="ti ti-plus"></i> Nouvel élève</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Total élèves</span>
          <div class="stat-icon blue"><i class="ti ti-users"></i></div>
        </div>
        <div class="stat-value">342</div>
        <div class="stat-trend trend-up">↑ +12 depuis la rentrée</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Professeurs actifs</span>
          <div class="stat-icon green"><i class="ti ti-chalkboard"></i></div>
        </div>
        <div class="stat-value">28</div>
        <div class="stat-trend">Toutes matières confondues</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Moyenne générale</span>
          <div class="stat-icon amber"><i class="ti ti-chart-bar"></i></div>
        </div>
        <div class="stat-value">12.4</div>
        <div class="stat-trend trend-down">↓ −0.3 vs semestre dernier</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Classes</span>
          <div class="stat-icon purple"><i class="ti ti-building"></i></div>
        </div>
        <div class="stat-value">14</div>
        <div class="stat-trend">De la 6e à la Terminale</div>
      </div>
    </div>

    <div class="grid-3-1">
      <div class="card">
        <div class="card-header">
          <h3><i class="ti ti-users" style="font-size:15px;vertical-align:-2px;margin-right:6px;color:#6b7280"></i>Élèves récents</h3>
          <a href="#" onclick="navigate('#/eleves')">Voir tous →</a>
        </div>
        <div style="overflow-x:auto">
          <table>
            <thead>
              <tr>
                <th>Nom</th><th>Classe</th><th>Moyenne</th><th>Statut</th><th></th>
              </tr>
            </thead>
            <tbody>
              ${[
                { nom:'Fatou Diallo',    classe:'3e A',   moy:'14.8', statut:'Actif',     sc:'green' },
                { nom:'Ibrahima Sow',    classe:'Tle S',  moy:'11.2', statut:'Actif',     sc:'green' },
                { nom:'Aminata Ndiaye', classe:'1re L',  moy:'9.5',  statut:'En alerte', sc:'red'   },
                { nom:'Oumar Mbaye',    classe:'4e B',   moy:'13.1', statut:'Actif',     sc:'green' },
                { nom:'Rokhaya Faye',   classe:'2de C',  moy:'15.7', statut:'Actif',     sc:'green' },
              ].map(e => `
                <tr>
                  <td><strong style="color:#1a1a2e">${e.nom}</strong></td>
                  <td><span class="pill pill-blue">${e.classe}</span></td>
                  <td><strong>${e.moy}</strong></td>
                  <td><span class="pill pill-${e.sc}">${e.statut}</span></td>
                  <td><button class="btn btn-outline btn-sm"><i class="ti ti-eye"></i></button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3><i class="ti ti-activity" style="font-size:15px;vertical-align:-2px;margin-right:6px;color:#6b7280"></i>Activité récente</h3>
        </div>
        <div class="card-body">
          <ul class="activity-list">
            ${[
              { icon:'ti-clipboard-check', bg:'#EAF3DE', ic:'#3B6D11', text:'<strong>M. Diop</strong> a saisi les notes de Maths — 3e A', time:'Il y a 10 min' },
              { icon:'ti-user-plus',       bg:'#e6f1fb', ic:'#185FA5', text:'Nouvel élève inscrit : <strong>Khadija Ba</strong>',          time:'Il y a 45 min' },
              { icon:'ti-file-export',     bg:'#FAEEDA', ic:'#854F0B', text:'Bulletins générés — <strong>Tle S</strong>',                  time:'Il y a 2h'     },
              { icon:'ti-alert-triangle',  bg:'#FCEBEB', ic:'#A32D2D', text:'<strong>Aminata Ndiaye</strong> en dessous de la moyenne',    time:'08:15'         },
            ].map(a => `
              <li class="activity-item">
                <div class="act-icon" style="background:${a.bg}"><i class="ti ${a.icon}" style="color:${a.ic}"></i></div>
                <div>
                  <div class="act-text">${a.text}</div>
                  <div class="act-time">${a.time}</div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-header"><h3>Alertes</h3></div>
        <div class="card-body">
          <div class="alert alert-danger"><i class="ti ti-user-exclamation"></i><div><strong>3 élèves en échec</strong><span>Moyenne générale sous 8/20</span></div></div>
          <div class="alert alert-warn"><i class="ti ti-clipboard-x"></i><div><strong>Notes manquantes — 2de C</strong><span>Physique-Chimie non saisie</span></div></div>
          <div class="alert alert-info"><i class="ti ti-file-analytics"></i><div><strong>Bulletins prêts à générer</strong><span>Semestre 1 — 14 classes</span></div></div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Moyennes par matière</h3></div>
        <div class="card-body">
          ${[
            { nom:'Mathématiques', moy:11.2, pct:56, color:'#3482ce'  },
            { nom:'Français',      moy:13.2, pct:66, color:'#7F77DD'  },
            { nom:'SVT',           moy:14.4, pct:72, color:'#1D9E75'  },
            { nom:'Physique-Ch.',  moy:9.8,  pct:49, color:'#EF9F27'  },
            { nom:'Histoire-Géo',  moy:12.6, pct:63, color:'#D4537E'  },
          ].map(m => `
            <div class="subject-row">
              <span class="subject-name">${m.nom}</span>
              <div class="subject-bar"><div class="progress-bar"><div class="progress-fill" style="width:${m.pct}%;background:${m.color}"></div></div></div>
              <span class="subject-avg">${m.moy}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderDashboardProf() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div><h1>Bonjour, M. Diop 👋</h1><p>Mathématiques · Semestre 1</p></div>
      <button class="btn btn-success" onclick="navigate('#/notes')"><i class="ti ti-clipboard-list"></i> Saisir des notes</button>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header"><span class="stat-label">Mes classes</span><div class="stat-icon blue"><i class="ti ti-building"></i></div></div>
        <div class="stat-value">3</div><div class="stat-trend">3e A · 4e B · Tle S</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><span class="stat-label">Élèves total</span><div class="stat-icon green"><i class="ti ti-users"></i></div></div>
        <div class="stat-value">100</div><div class="stat-trend">Toutes classes confondues</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><span class="stat-label">Notes saisies</span><div class="stat-icon amber"><i class="ti ti-clipboard-check"></i></div></div>
        <div class="stat-value">87%</div><div class="stat-trend trend-up">↑ Bon avancement</div>
      </div>
      <div class="stat-card">
        <div class="stat-header"><span class="stat-label">Notes manquantes</span><div class="stat-icon red"><i class="ti ti-alert-circle"></i></div></div>
        <div class="stat-value">13</div><div class="stat-trend trend-down">À compléter</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><h3>Évaluations récentes</h3><a onclick="navigate('#/notes')">Gérer les notes →</a></div>
      <div class="card-body">
        ${[
          { classe:'3e A',  eval:'DS N°1 — Fonctions',  date:'15 nov.',  moy:'12.4', statut:'Complète',     sc:'green' },
          { classe:'4e B',  eval:'Interrogation N°1',   date:'12 nov.',  moy:'11.8', statut:'Complète',     sc:'green' },
          { classe:'Tle S', eval:'DS N°1 — Dérivées',   date:'10 nov.',  moy:'—',    statut:'En cours',     sc:'amber' },
          { classe:'3e A',  eval:'DS N°2 — Géométrie',  date:'29 nov.',  moy:'—',    statut:'Non démarrée', sc:'red'   },
        ].map(e => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f5f5f5;font-size:13px;">
            <div>
              <div style="font-weight:500;color:#1a1a2e">${e.eval}</div>
              <div style="font-size:12px;color:#9ca3af">${e.classe} · ${e.date} ${e.moy !== '—' ? '· Moy. ' + e.moy : ''}</div>
            </div>
            <span class="pill pill-${e.sc}">${e.statut}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDashboardEleve() {
  document.getElementById('app').innerHTML = `
    <div class="profil-banner">
      <div class="avatar lg" style="background:rgba(255,255,255,0.2);border:2px solid rgba(255,255,255,0.3)">FD</div>
      <div class="profil-info">
        <h2>Fatou Diallo</h2>
        <p>Matricule N°001 · Classe de 3e A</p>
        <div class="profil-badges">
          <span class="profil-badge"><i class="ti ti-building"></i> Collège Mariama Bâ</span>
          <span class="profil-badge"><i class="ti ti-user"></i> Mme Diop, prof. principale</span>
        </div>
      </div>
      <div class="profil-stats">
        <div><div class="profil-stat-val">14.8</div><div class="profil-stat-lbl">Moyenne générale</div></div>
        <div><div class="profil-stat-val">2e</div><div class="profil-stat-lbl">Rang classe</div></div>
        <div><div class="profil-stat-val">35</div><div class="profil-stat-lbl">Élèves</div></div>
      </div>
    </div>

    <div class="grid-3-1">
      <div class="card">
        <div class="card-header">
          <h3>Mes notes — Semestre 1</h3>
          <a onclick="navigate('#/notes')">Voir tout →</a>
        </div>
        <div style="overflow-x:auto">
          <table>
            <thead><tr><th>Matière</th><th class="center">DS1</th><th class="center">Interro</th><th class="center">Moy.</th><th class="center">Appréciation</th></tr></thead>
            <tbody>
              ${[
                { mat:'Mathématiques', ds1:16, int:15, moy:16.0, app:'Excellent',  sc:'green' },
                { mat:'Français',      ds1:12, int:14, moy:13.0, app:'Bien',       sc:'blue'  },
                { mat:'SVT',           ds1:15, int:16, moy:15.0, app:'Très bien',  sc:'green' },
                { mat:'Physique-Ch.',  ds1:11, int:13, moy:12.0, app:'Assez bien', sc:'blue'  },
                { mat:'Histoire-Géo',  ds1:17, int:15, moy:16.0, app:'Excellent',  sc:'green' },
              ].map(n => `
                <tr>
                  <td style="font-weight:500;color:#1a1a2e">${n.mat}</td>
                  <td style="text-align:center"><span class="note-bubble ${n.ds1>=14?'nb-high':n.ds1>=10?'nb-mid':'nb-low'}">${n.ds1}</span></td>
                  <td style="text-align:center"><span class="note-bubble ${n.int>=14?'nb-high':n.int>=10?'nb-mid':'nb-low'}">${n.int}</span></td>
                  <td style="text-align:center" class="moy-cell ${n.moy>=14?'moy-high':n.moy>=10?'moy-mid':'moy-low'}">${n.moy.toFixed(1)}</td>
                  <td style="text-align:center"><span class="pill pill-${n.sc}">${n.app}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-col">
        <div class="card">
          <div class="card-header"><h3>Prochaines éval.</h3></div>
          <div class="card-body" style="padding:1rem">
            ${[
              { day:'02', mois:'déc', titre:'DS — Physique-Ch.', meta:'Coeff. 2 · Mme Fall', sc:'amber', type:'DS'     },
              { day:'05', mois:'déc', titre:'Interro — Maths',   meta:'Coeff. 1 · M. Diop',  sc:'purple',type:'Interro'},
              { day:'10', mois:'déc', titre:'DS — Français',     meta:'Coeff. 3 · Mme Sarr', sc:'amber', type:'DS'     },
            ].map(p => `
              <div class="planning-item">
                <div class="planning-date"><div class="day">${p.day}</div><div class="mois">${p.mois}</div></div>
                <div style="flex:1"><div class="planning-title">${p.titre}</div><div class="planning-meta">${p.meta}</div></div>
                <span class="pill pill-${p.sc}">${p.type}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div style="display:flex;gap:12px;align-items:flex-start">
              <i class="ti ti-file-analytics" style="font-size:30px;color:#7F77DD;flex-shrink:0"></i>
              <div style="flex:1">
                <div style="font-size:14px;font-weight:600;color:#2d1b69;margin-bottom:3px">Bulletin S1 disponible</div>
                <div style="font-size:12px;color:#534AB7;margin-bottom:12px">Moyenne : 14.8 · Rang : 2e/35</div>
                <button class="btn btn-primary btn-full"><i class="ti ti-download"></i> Télécharger PDF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   NOTES
══════════════════════════════════════ */
function renderNotes() {
  const role = auth.getRole();
  
  if (role === 'prof') {
    renderNotesProf();
  } else {
    renderNotesEleve();
  }
}

// ─ Vue PROF : Saisie des notes ─
function renderNotesProf() {
  const eleves = [
    'Fatou Diallo','Ibrahima Sow','Aminata Ndiaye','Oumar Mbaye',
    'Rokhaya Faye','Cheikh Diop','Mariama Ba','Moussa Fall',
    'Aissatou Diallo','Serigne Mbaye','Ndèye Sarr','Lamine Sène'
  ];

  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div><h1>Saisie des notes</h1><p>Mathématiques · Semestre 1 · 2025–2026</p></div>
      <div class="topbar-actions">
        <button class="btn btn-outline"><i class="ti ti-download"></i> Exporter</button>
        <button class="btn btn-success" onclick="saveNotes()"><i class="ti ti-device-floppy"></i> Enregistrer</button>
      </div>
    </div>

    <div class="filters">
      <select id="sel-classe"><option>3e A (35 élèves)</option><option>4e B (33 élèves)</option><option>Tle S (32 élèves)</option></select>
      <select id="sel-eval"><option>DS N°1 — Fonctions</option><option>Interrogation N°1</option><option>DS N°2 — Géométrie</option></select>
      <select><option>Coefficient 2</option><option>Coefficient 3</option><option>Coefficient 1</option></select>
      <select><option>15 novembre 2025</option><option>22 novembre 2025</option></select>
    </div>

    <div class="mini-stats">
      <div class="mini-stat"><div class="mini-stat-icon" style="background:#EAF3DE"><i class="ti ti-users" style="color:#3B6D11"></i></div><div><div class="mini-stat-label">Élèves</div><div class="mini-stat-value">12</div></div></div>
      <div class="mini-stat"><div class="mini-stat-icon" style="background:#e6f1fb"><i class="ti ti-chart-bar" style="color:#185FA5"></i></div><div><div class="mini-stat-label">Moyenne classe</div><div class="mini-stat-value" id="stat-moy">—</div></div></div>
      <div class="mini-stat"><div class="mini-stat-icon" style="background:#FAEEDA"><i class="ti ti-arrow-up" style="color:#854F0B"></i></div><div><div class="mini-stat-label">Note max</div><div class="mini-stat-value" id="stat-max">—</div></div></div>
      <div class="mini-stat"><div class="mini-stat-icon" style="background:#FCEBEB"><i class="ti ti-arrow-down" style="color:#A32D2D"></i></div><div><div class="mini-stat-label">Note min</div><div class="mini-stat-value" id="stat-min">—</div></div></div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Grille de saisie — DS N°1 · 3e A</h3>
        <span id="saved-indicator"></span>
      </div>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th style="width:36px">#</th><th>Élève</th><th class="center">Note /20</th><th class="center">Appréciation</th><th class="center">Statut</th></tr></thead>
          <tbody>
            ${eleves.map((nom, i) => `
              <tr>
                <td style="color:#9ca3af;font-size:12px">${i+1}</td>
                <td style="font-weight:500;color:#1a1a2e">${nom}</td>
                <td style="text-align:center">
                  <input class="note-input" type="number" min="0" max="20" step="0.5"
                    placeholder="—" data-index="${i}"
                    oninput="onNoteInput(this)"
                  />
                </td>
                <td style="text-align:center;color:#6b7280;font-size:13px" id="app-${i}">—</td>
                <td style="text-align:center" id="statut-${i}"><span class="pill pill-gray">—</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div style="padding:1rem 1.25rem;border-top:1px solid #f5f5f5;display:flex;align-items:center;justify-content:space-between">
        <div class="text-muted" id="saisie-info">0 / ${eleves.length} notes saisies</div>
        <button class="btn btn-success" onclick="saveNotes()"><i class="ti ti-device-floppy"></i> Enregistrer</button>
      </div>
    </div>

    <div class="toast" id="toast"><i class="ti ti-circle-check"></i><span id="toast-msg">Enregistré</span></div>
  `;

  // Reset les notes à chaque rendu
  window._notes = {};
}

// ─ Vue ÉLÈVE : Consultation SEULEMENT ─
function renderNotesEleve() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div>
        <h1>Mes notes</h1>
        <p>Consultation de vos résultats académiques</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Mes notes par matière</h3>
      </div>
      <div style="overflow-x:auto">
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
              <td><strong>Français</strong></td>
              <td><strong>16</strong></td>
              <td><strong>15</strong></td>
              <td><strong>14</strong></td>
              <td><strong style="color:#1D9E75;font-size:1.1rem;">15</strong></td>
              <td><span class="badge badge-success">Bien</span></td>
            </tr>
            <tr>
              <td><strong>Mathématiques</strong></td>
              <td><strong>12</strong></td>
              <td><strong>13</strong></td>
              <td><strong>11</strong></td>
              <td><strong style="color:#EF9F27;font-size:1.1rem;">12</strong></td>
              <td><span class="badge badge-warning">Passable</span></td>
            </tr>
            <tr>
              <td><strong>Anglais</strong></td>
              <td><strong>14</strong></td>
              <td><strong>15</strong></td>
              <td><strong>16</strong></td>
              <td><strong style="color:#1D9E75;font-size:1.1rem;">15</strong></td>
              <td><span class="badge badge-success">Bien</span></td>
            </tr>
            <tr>
              <td><strong>SVT</strong></td>
              <td><strong>18</strong></td>
              <td><strong>17</strong></td>
              <td><strong>19</strong></td>
              <td><strong style="color:#1D9E75;font-size:1.1rem;">18</strong></td>
              <td><span class="badge badge-success">Très bien</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Résumé de votre progression</h3></div>
      <div class="stats-box">
        <div class="stat-item">
          <span class="label">Moyenne générale</span>
          <span class="value" style="color:#1D9E75;">15</span>
        </div>
        <div class="stat-item">
          <span class="label">Meilleure note</span>
          <span class="value" style="color:#1D9E75;">19</span>
        </div>
        <div class="stat-item">
          <span class="label">Plus faible note</span>
          <span class="value" style="color:#EF9F27;">11</span>
        </div>
        <div class="stat-item">
          <span class="label">Notes reçues</span>
          <span class="value">12</span>
        </div>
      </div>

      <div style="margin-top:2rem;">
        <h4>Évolution de votre moyenne</h4>
        <div class="mini-chart">
          <div class="bar" style="height:60%;background:#EAF3DE"></div>
          <div class="bar" style="height:65%;background:#e6f1fb"></div>
          <div class="bar" style="height:75%;background:#1D9E75"></div>
          <div class="bar" style="height:70%;background:#1D9E75"></div>
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   ÉLÈVES
══════════════════════════════════════ */
function renderEleves() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div><h1>Gestion des élèves</h1><p>342 élèves inscrits · Année 2025–2026</p></div>
      <button class="btn btn-primary"><i class="ti ti-plus"></i> Nouvel élève</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Liste des élèves</h3>
        <div style="display:flex;gap:8px">
          <input type="text" placeholder="🔍 Rechercher..." style="padding:7px 12px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;outline:none;font-family:'DM Sans',sans-serif" oninput="filterEleves(this.value)"/>
          <select style="font-size:13px"><option>Toutes les classes</option><option>3e A</option><option>4e B</option><option>Tle S</option></select>
        </div>
      </div>
      <div style="overflow-x:auto">
        <table id="eleves-table">
          <thead><tr><th>Nom</th><th>Matricule</th><th>Classe</th><th>Moyenne</th><th>Statut</th><th>Actions</th></tr></thead>
          <tbody id="eleves-tbody"></tbody>
        </table>
      </div>
    </div>
  `;

  const eleves = [
    { nom:'Fatou Diallo',    mat:'001', classe:'3e A',  moy:'14.8', statut:'Actif',     sc:'green' },
    { nom:'Ibrahima Sow',    mat:'002', classe:'Tle S', moy:'11.2', statut:'Actif',     sc:'green' },
    { nom:'Aminata Ndiaye', mat:'003', classe:'1re L', moy:'9.5',  statut:'En alerte', sc:'red'   },
    { nom:'Oumar Mbaye',    mat:'004', classe:'4e B',  moy:'13.1', statut:'Actif',     sc:'green' },
    { nom:'Rokhaya Faye',   mat:'005', classe:'2de C', moy:'15.7', statut:'Actif',     sc:'green' },
    { nom:'Cheikh Diop',    mat:'006', classe:'3e A',  moy:'10.3', statut:'Actif',     sc:'green' },
    { nom:'Mariama Ba',     mat:'007', classe:'Tle S', moy:'16.1', statut:'Actif',     sc:'green' },
    { nom:'Moussa Fall',    mat:'008', classe:'4e B',  moy:'7.8',  statut:'En échec',  sc:'red'   },
  ];

  window._elevesData = eleves;
  renderElevesTable(eleves);
}

function renderElevesTable(data) {
  document.getElementById('eleves-tbody').innerHTML = data.map(e => `
    <tr>
      <td><strong style="color:#1a1a2e">${e.nom}</strong></td>
      <td style="color:#9ca3af">N°${e.mat}</td>
      <td><span class="pill pill-blue">${e.classe}</span></td>
      <td><strong>${e.moy}</strong></td>
      <td><span class="pill pill-${e.sc}">${e.statut}</span></td>
      <td style="display:flex;gap:6px">
        <button class="btn btn-outline btn-sm"><i class="ti ti-eye"></i></button>
        <button class="btn btn-outline btn-sm"><i class="ti ti-edit"></i></button>
        <button class="btn btn-outline btn-sm" style="color:#A32D2D"><i class="ti ti-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function filterEleves(query) {
  if (!window._elevesData) return;
  const q = query.toLowerCase();
  const filtered = window._elevesData.filter(e =>
    e.nom.toLowerCase().includes(q) || e.classe.toLowerCase().includes(q)
  );
  renderElevesTable(filtered);
}

/* ══════════════════════════════════════
   BULLETINS
══════════════════════════════════════ */
function renderBulletins() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div><h1>Bulletins scolaires</h1><p>Semestre 1 · 2025–2026</p></div>
      <button class="btn btn-primary"><i class="ti ti-file-analytics"></i> Générer tous les bulletins</button>
    </div>
    <div class="grid-2">
      ${[
        { classe:'Terminale S', nb:32, moy:'13.8', statut:'Généré',    sc:'green' },
        { classe:'Terminale L', nb:28, moy:'12.1', statut:'Généré',    sc:'green' },
        { classe:'1re S',       nb:30, moy:'14.2', statut:'En attente',sc:'amber' },
        { classe:'3e A',        nb:35, moy:'11.6', statut:'En attente',sc:'amber' },
        { classe:'4e B',        nb:33, moy:'10.9', statut:'Non généré', sc:'red'  },
        { classe:'2de C',       nb:31, moy:'12.3', statut:'Non généré', sc:'red'  },
      ].map(b => `
        <div class="card">
          <div class="card-body" style="display:flex;align-items:center;gap:16px">
            <div style="width:48px;height:48px;border-radius:12px;background:#EEEDFE;display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <i class="ti ti-file-analytics" style="font-size:22px;color:#7F77DD"></i>
            </div>
            <div style="flex:1">
              <div style="font-weight:600;color:#1a1a2e;margin-bottom:2px">${b.classe}</div>
              <div style="font-size:12px;color:#9ca3af">${b.nb} élèves · Moy. ${b.moy}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
              <span class="pill pill-${b.sc}">${b.statut}</span>
              <button class="btn btn-outline btn-sm"><i class="ti ti-download"></i> PDF</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ══════════════════════════════════════
   CLASSES
══════════════════════════════════════ */
function renderClasses() {
  document.getElementById('app').innerHTML = `
    <div class="topbar">
      <div><h1>Gestion des classes</h1><p>14 classes · Année 2025–2026</p></div>
      <button class="btn btn-primary"><i class="ti ti-plus"></i> Nouvelle classe</button>
    </div>
    <div class="grid-2">
      ${[
        { nom:'Terminale S', prof:'M. Diallo',  nb:32, moy:'13.8', color:'#3482ce'  },
        { nom:'Terminale L', prof:'Mme Sarr',   nb:28, moy:'12.1', color:'#7F77DD'  },
        { nom:'1re S',       prof:'M. Sène',    nb:30, moy:'14.2', color:'#1D9E75'  },
        { nom:'1re L',       prof:'Mme Ndiaye', nb:27, moy:'11.4', color:'#D4537E'  },
        { nom:'3e A',        prof:'Mme Diop',   nb:35, moy:'11.6', color:'#EF9F27'  },
        { nom:'4e B',        prof:'M. Fall',    nb:33, moy:'10.9', color:'#D85A30'  },
      ].map(c => `
        <div class="card">
          <div class="card-body">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
              <div style="width:10px;height:10px;border-radius:50%;background:${c.color};flex-shrink:0"></div>
              <div style="flex:1">
                <div style="font-weight:600;color:#1a1a2e">${c.nom}</div>
                <div style="font-size:12px;color:#9ca3af">Prof. principal : ${c.prof}</div>
              </div>
              <div style="text-align:right">
                <div style="font-size:18px;font-weight:600;color:#1a1a2e">${c.moy}</div>
                <div style="font-size:11px;color:#9ca3af">/ 20</div>
              </div>
            </div>
            <div class="progress-bar" style="margin-bottom:12px">
              <div class="progress-fill" style="width:${Math.round(parseFloat(c.moy)/20*100)}%;background:${c.color}"></div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:13px;color:#6b7280"><i class="ti ti-users" style="vertical-align:-2px"></i> ${c.nb} élèves</span>
              <div style="display:flex;gap:6px">
                <button class="btn btn-outline btn-sm"><i class="ti ti-eye"></i> Voir</button>
                <button class="btn btn-outline btn-sm"><i class="ti ti-edit"></i></button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
