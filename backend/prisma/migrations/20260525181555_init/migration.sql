-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ELEVE'
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "expiresAt" DATETIME,
    "password" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "eleve" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "dateNaissance" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "classeId" TEXT,
    CONSTRAINT "eleve_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "eleve_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "classe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "telephone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "parent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parent_eleve" (
    "parentId" TEXT NOT NULL,
    "eleveId" TEXT NOT NULL,

    PRIMARY KEY ("parentId", "eleveId"),
    CONSTRAINT "parent_eleve_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "parent_eleve_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleve" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "professeur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "specialite" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "professeur_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "niveau" TEXT NOT NULL,
    "annee" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "matiere" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "coefficient" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "classeId" TEXT NOT NULL,
    CONSTRAINT "matiere_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "classe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "professeur_matiere" (
    "professeurId" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,

    PRIMARY KEY ("professeurId", "matiereId"),
    CONSTRAINT "professeur_matiere_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "professeur" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "professeur_matiere_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matiere" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "evaluation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "matiereId" TEXT NOT NULL,
    "professeurId" TEXT NOT NULL,
    CONSTRAINT "evaluation_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matiere" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "evaluation_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "professeur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valeur" REAL NOT NULL,
    "appreciation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "eleveId" TEXT NOT NULL,
    "evaluationId" TEXT NOT NULL,
    CONSTRAINT "note_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleve" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "note_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "eleve_userId_key" ON "eleve"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "eleve_matricule_key" ON "eleve"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "parent_userId_key" ON "parent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "professeur_userId_key" ON "professeur"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "note_eleveId_evaluationId_key" ON "note"("eleveId", "evaluationId");
