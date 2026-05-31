import type { PrismaClient } from '../generated/prisma/client';
export declare function createAuth(prismaClient: PrismaClient): import("better-auth", { with: { "resolution-mode": "import" } }).Auth<{
    hooks: {};
    emailAndPassword: {
        enabled: true;
        minPasswordLength: number;
    };
    database: (options: import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions) => import("better-auth", { with: { "resolution-mode": "import" } }).DBAdapter<import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions>;
}>;
