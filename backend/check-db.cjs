const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'dev.db');
console.log('DB path:', dbPath);

const db = new Database(dbPath);

// Get schools
const ecoles = db.prepare(`
  SELECT e.id as ecole_id, e.nom as ecole_nom, u.name as admin_name, u.email as admin_email
  FROM ecole e JOIN user u ON e.userId = u.id
`).all();

for (const e of ecoles) {
  const classes = db.prepare('SELECT COUNT(*) as c FROM classe WHERE ecoleId = ?').get(e.ecole_id).c;
  const profs = db.prepare('SELECT COUNT(*) as c FROM professeur WHERE ecoleId = ?').get(e.ecole_id).c;
  const eleves = db.prepare(`
    SELECT COUNT(*) as c FROM eleve e 
    JOIN classe c ON e.classeId = c.id 
    WHERE c.ecoleId = ?
  `).get(e.ecole_id).c;

  console.log(`École: ${e.ecole_nom} (${e.ecole_id})`);
  console.log(`  Admin: ${e.admin_name} (${e.admin_email})`);
  console.log(`  Classes: ${classes}`);
  console.log(`  Profs: ${profs}`);
  console.log(`  Élèves: ${eleves}`);
}

const totalEleves = db.prepare('SELECT COUNT(*) as c FROM eleve').get().c;
const sansClasse = db.prepare('SELECT COUNT(*) as c FROM eleve WHERE classeId IS NULL').get().c;
const totalUsers = db.prepare('SELECT COUNT(*) as c FROM user').get().c;
console.log(`\nTotal élèves: ${totalEleves} (dont ${sansClasse} sans classe)`);
console.log(`Total users: ${totalUsers}`);

// List all classes
const allClasses = db.prepare(`
  SELECT c.nom, c.ecoleId, (SELECT COUNT(*) FROM eleve WHERE classeId = c.id) as eleves_count
  FROM classe c
`).all();
for (const c of allClasses) {
  console.log(`  Classe ${c.nom}: ${c.eleves_count} élèves (école: ${c.ecoleId})`);
}

db.close();
