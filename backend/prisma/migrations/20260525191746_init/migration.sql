-- AlterTable
ALTER TABLE "account" ADD COLUMN "accessTokenExpiresAt" DATETIME;
ALTER TABLE "account" ADD COLUMN "idToken" TEXT;
ALTER TABLE "account" ADD COLUMN "refreshTokenExpiresAt" DATETIME;
ALTER TABLE "account" ADD COLUMN "scope" TEXT;

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");
