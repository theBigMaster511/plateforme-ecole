-- CreateTable
CREATE TABLE "ecole" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "adresse" TEXT,
    "telephone" TEXT,
    "email" TEXT,
    "siteWeb" TEXT,
    "logo" TEXT,
    "directeur" TEXT,
    "ville" TEXT,
    "pays" TEXT NOT NULL DEFAULT 'Sénégal',
    "codePostal" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ecole_nom_key" ON "ecole"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "ecole_email_key" ON "ecole"("email");
