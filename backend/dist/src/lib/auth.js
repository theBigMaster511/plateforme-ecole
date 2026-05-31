"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuth = createAuth;
const prisma_adapter_1 = require("@better-auth/prisma-adapter");
const better_auth_1 = require("better-auth");
function createAuth(prismaClient) {
    return (0, better_auth_1.betterAuth)({
        hooks: {},
        emailAndPassword: {
            enabled: true,
            minPasswordLength: 3
        },
        database: (0, prisma_adapter_1.prismaAdapter)(prismaClient, {
            provider: "sqlite"
        })
    });
}
//# sourceMappingURL=auth.js.map