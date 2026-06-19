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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
const auth_service_1 = require("./auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthController = class AuthController {
    authService;
    localAuthService;
    prisma;
    constructor(authService, localAuthService, prisma) {
        this.authService = authService;
        this.localAuthService = localAuthService;
        this.prisma = prisma;
    }
    async SignUp(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || '',
                password: body.password || '',
                name: body.name || '',
            },
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription",
            });
        }
        await this.localAuthService.ToogleAdminRole(account.user.id);
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignIn(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignUpStudent(body, req, res) {
        console.log(body);
        if (body.classeId) {
            const classe = await this.prisma.classe.findUnique({
                where: { id: body.classeId },
            });
            if (!classe) {
                return res.status(404).json({
                    error: 'Classe introuvable',
                });
            }
        }
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || '',
                password: body.password || '',
                name: body.name || '',
            },
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription",
            });
        }
        await this.localAuthService.ToggleStudentRole(account.user.id);
        await this.prisma.eleve.create({
            data: {
                userId: account.user.id,
                matricule: body.matricule || `E-${Date.now()}`,
                dateNaissance: body.dateNaissance
                    ? new Date(body.dateNaissance)
                    : undefined,
                classeId: body.classeId || undefined,
            },
        });
        const parentEmail = `parent_${body.email}`;
        const parentPassword = Math.random().toString(36).substring(2, 10);
        const parentAccount = await this.authService.api.signUpEmail({
            body: {
                email: parentEmail,
                password: parentPassword,
                name: `Parent de ${body.name || 'élève'}`,
            },
        });
        if (parentAccount) {
            await this.localAuthService.ToggleParentRole(parentAccount.user.id);
            const parent = await this.prisma.parent.create({
                data: {
                    userId: parentAccount.user.id,
                },
            });
            const eleve = await this.prisma.eleve.findUnique({
                where: { userId: account.user.id },
            });
            if (eleve) {
                await this.prisma.parentEleve.create({
                    data: {
                        parentId: parent.id,
                        eleveId: eleve.id,
                    },
                });
            }
            res.json({
                ...account,
                parentAccount: {
                    email: parentEmail,
                    password: parentPassword,
                },
            });
            return;
        }
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignInStudent(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignUpParent(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || '',
                password: body.password || '',
                name: body.name || '',
            },
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription",
            });
        }
        await this.localAuthService.ToggleParentRole(account.user.id);
        await this.prisma.parent.create({
            data: {
                userId: account.user.id,
                telephone: body.telephone || undefined,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignInParent(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignUpTeacher(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || '',
                password: body.password || '',
                name: body.name || '',
            },
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription",
            });
        }
        await this.localAuthService.ToggleTeacherRole(account.user.id);
        await this.prisma.professeur.create({
            data: {
                userId: account.user.id,
                specialite: body.specialite || undefined,
                telephone: body.telephone || undefined,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async SignInTeacher(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        res.cookie('better-auth.session_token', account.token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json(account);
    }
    async logout(res) {
        res.clearCookie('better-auth.session_token', {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.json({ success: true });
    }
    async getProfile(req, res) {
        const sessionToken = req.cookies['better-auth.session_token'];
        if (!sessionToken) {
            return res.json({ error: 'No session token found in cookies' });
        }
        const session = await this.prisma.session.findUnique({
            where: { token: sessionToken },
            include: { user: true },
        });
        if (!session) {
            return res.json({ error: 'Session not found in database' });
        }
        await this.localAuthService.AddUserAgent({
            userAgent: req.headers['user-agent'] || '',
            userToken: session.token,
            userIpAddress: req.ip || '',
        });
        const [eleve, professeur, parent] = await Promise.all([
            this.prisma.eleve.findUnique({ where: { userId: session.userId } }),
            this.prisma.professeur.findUnique({
                where: { userId: session.userId },
                include: {
                    classes: { include: { classe: true } },
                },
            }),
            this.prisma.parent.findUnique({
                where: { userId: session.userId },
                include: {
                    enfants: {
                        include: {
                            eleve: {
                                include: { user: true, classe: true },
                            },
                        },
                    },
                },
            }),
        ]);
        return res.json({ ...session, eleve, professeur, parent });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-up/school'),
    (0, swagger_1.ApiOperation)({ summary: "Inscription pour l'administration de l'école" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Compte admin créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Erreur lors de l'inscription" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUp", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-in/school'),
    (0, swagger_1.ApiOperation)({ summary: "Connexion pour l'administration de l'école" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Connexion réussie' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignIn", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-up/student'),
    (0, swagger_1.ApiOperation)({ summary: 'Inscription pour les élèves' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Compte élève créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Erreur lors de l'inscription" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpStudent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-in/student'),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion pour les élèves' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Connexion réussie' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInStudent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-up/parent'),
    (0, swagger_1.ApiOperation)({ summary: 'Inscription pour les parents' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Compte parent créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Erreur lors de l'inscription" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpParent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-in/parent'),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion pour les parents' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Connexion réussie' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInParent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-up/teacher'),
    (0, swagger_1.ApiOperation)({ summary: 'Inscription pour les professeurs' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Compte professeur créé avec succès',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Erreur lors de l'inscription" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpTeacher", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('sign-in/teacher'),
    (0, swagger_1.ApiOperation)({ summary: 'Connexion pour les professeurs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Connexion réussie' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInTeacher", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: "Deconnecter l'utilisateur connecte" }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: "Récupérer le profil de l'utilisateur connecté" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profil récupéré avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Session non trouvée' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Authentification'),
    __metadata("design:paramtypes", [nestjs_better_auth_1.AuthService,
        auth_service_1.AuthService,
        prisma_service_1.PrismaService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map