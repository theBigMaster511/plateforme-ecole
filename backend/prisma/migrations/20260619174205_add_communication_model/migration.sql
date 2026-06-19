-- DropIndex
DROP INDEX "professeur_ecoleId_key";

-- CreateTable
CREATE TABLE "frais_scolaire" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eleveId" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "montant" REAL NOT NULL,
    "montantPaye" REAL NOT NULL DEFAULT 0,
    "echeance" DATETIME NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'impayé',
    "ecoleId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "frais_scolaire_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleve" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "frais_scolaire_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "ecole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "communication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ecoleId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "target" TEXT NOT NULL DEFAULT 'all',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "communication_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "ecole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "paiement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fraisId" TEXT NOT NULL,
    "montant" REAL NOT NULL,
    "methode" TEXT NOT NULL,
    "reference" TEXT,
    "datePaiement" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "paiement_fraisId_fkey" FOREIGN KEY ("fraisId") REFERENCES "frais_scolaire" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ecoleId" TEXT NOT NULL,
    "profId" TEXT,
    "nom" TEXT NOT NULL,
    "niveau" TEXT NOT NULL,
    "annee" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "classe_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "ecole" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "classe_profId_fkey" FOREIGN KEY ("profId") REFERENCES "professeur" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_classe" ("annee", "createdAt", "ecoleId", "id", "niveau", "nom", "profId", "updatedAt") SELECT "annee", "createdAt", "ecoleId", "id", "niveau", "nom", "profId", "updatedAt" FROM "classe";
DROP TABLE "classe";
ALTER TABLE "new_classe" RENAME TO "classe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
