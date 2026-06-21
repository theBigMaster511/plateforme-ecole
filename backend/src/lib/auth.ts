import { prismaAdapter } from '@better-auth/prisma-adapter';
import { betterAuth } from 'better-auth';
import type { PrismaClient } from '../generated/prisma/client';

export function createAuth(prismaClient: PrismaClient) {
  return betterAuth({
    hooks: {},
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
    },
    session: {
      expiresIn: 60 * 60 * 24 * 30, // 30 jours au lieu de 7
      updateAge: 60 * 60 * 24, // rafraîchit la session tous les jours
    },
    database: prismaAdapter(prismaClient, {
      provider: 'sqlite',
    }),
  });
}
