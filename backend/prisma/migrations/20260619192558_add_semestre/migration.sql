-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_evaluation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "matiereId" TEXT NOT NULL,
    "professeurId" TEXT NOT NULL,
    "semestre" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "evaluation_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matiere" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "evaluation_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "professeur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_evaluation" ("createdAt", "date", "id", "matiereId", "professeurId", "titre", "type", "updatedAt") SELECT "createdAt", "date", "id", "matiereId", "professeurId", "titre", "type", "updatedAt" FROM "evaluation";
DROP TABLE "evaluation";
ALTER TABLE "new_evaluation" RENAME TO "evaluation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
