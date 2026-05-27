"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ToogleAdminRole(userId) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            });
            if (!toggleAdmin) {
                throw new Error("UnAuthorize");
            }
            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "ADMIN"
                }
            });
            return admin;
        }
        catch (error) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`);
        }
    }
    async ToggleStudentRole(userId) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            });
            if (!toggleAdmin) {
                throw new Error("UnAuthorize");
            }
            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "ELEVE"
                }
            });
            return admin;
        }
        catch (error) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`);
        }
    }
    async ToggleTeacherRole(userId) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            });
            if (!toggleAdmin) {
                throw new Error("UnAuthorize");
            }
            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "PROFESSEUR"
                }
            });
            return admin;
        }
        catch (error) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`);
        }
    }
    async ToggleParentRole(userId) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            });
            if (!toggleAdmin) {
                throw new Error("UnAuthorize");
            }
            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "PARENT"
                }
            });
            return admin;
        }
        catch (error) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`);
        }
    }
    async AddUserAgent(userMetaDate) {
        try {
            await this.prisma.session.update({
                where: {
                    token: userMetaDate.userToken
                },
                data: {
                    userAgent: userMetaDate.userAgent,
                    ipAddress: userMetaDate.userIpAddress
                },
            });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new Error("Une erreur est survenue lors de la mise a jour des metadata");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map