import { prismaAdapter } from '@better-auth/prisma-adapter';
import { betterAuth } from 'better-auth';
import type { PrismaClient } from '../generated/prisma/client';

export function createAuth(prismaClient: PrismaClient) {
  return betterAuth({
    // basePath: '/api/auth',
    // other better-auth options...
    hooks: {}, // minimum required to use hooks. read above for more details.
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 3
    },
    database: prismaAdapter(prismaClient, {
      provider: "sqlite"
    })
  });
}
