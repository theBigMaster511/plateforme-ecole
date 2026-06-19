-- CreateTable
CREATE TABLE "emploi_temps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jour" TEXT NOT NULL,
    "heureDebut" TEXT NOT NULL,
    "heureFin" TEXT NOT NULL,
    "salle" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "classeId" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,
    "professeurId" TEXT,
    CONSTRAINT "emploi_temps_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "emploi_temps_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matiere" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "emploi_temps_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "professeur" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
