-- CreateTable
CREATE TABLE "professeur_classe" (
    "professeurId" TEXT NOT NULL,
    "classeId" TEXT NOT NULL,

    PRIMARY KEY ("professeurId", "classeId"),
    CONSTRAINT "professeur_classe_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "professeur" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "professeur_classe_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
