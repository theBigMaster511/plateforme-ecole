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
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("./auth.service");
let AuthController = class AuthController {
    authService;
    prisma;
    localAuthService;
    constructor(authService, prisma, localAuthService) {
        this.authService = authService;
        this.prisma = prisma;
        this.localAuthService = localAuthService;
    }
    async SignUp(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || "",
                password: body.password || "",
                name: body.name || ""
            }
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription"
            });
        }
        await this.localAuthService.ToogleAdminRole(account.user.id);
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignIn(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password
            }
        });
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignUpStudent(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || "",
                password: body.password || "",
                name: body.name || ""
            }
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription"
            });
        }
        await this.localAuthService.ToggleStudentRole(account.user.id);
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignInStudent(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password
            }
        });
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignUpParent(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || "",
                password: body.password || "",
                name: body.name || ""
            }
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription"
            });
        }
        await this.localAuthService.ToggleParentRole(account.user.id);
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignInParent(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password
            }
        });
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignUpTeacher(body, req, res) {
        console.log(body);
        const account = await this.authService.api.signUpEmail({
            body: {
                email: body.email || "",
                password: body.password || "",
                name: body.name || ""
            }
        });
        if (!account) {
            return res.status(401).json({
                error: "Une erreur est survenue a l'inscription"
            });
        }
        await this.localAuthService.ToggleTeacherRole(account.user.id);
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async SignInTeacher(body, res) {
        const { email, password } = body;
        const account = await this.authService.api.signInEmail({
            body: {
                email,
                password
            }
        });
        res.cookie("better-auth.session_token", account.token, {
            httpOnly: true,
            sameSite: "lax"
        });
        return res.json(account);
    }
    async getProfile(req, res) {
        const sessionToken = req.cookies['better-auth.session_token'];
        if (!sessionToken) {
            return res.json({ error: "No session token found in cookies" });
        }
        const session = await this.prisma.session.findUnique({
            where: { token: sessionToken },
            include: { user: true }
        });
        if (!session) {
            return res.json({ error: "Session not found in database" });
        }
        await this.localAuthService.AddUserAgent({
            userAgent: req.headers['user-agent'] || "",
            userToken: session.token,
            userIpAddress: req.ip || ""
        });
        return res.json(session);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-up/school"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUp", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-in/school"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignIn", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-up/student"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpStudent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-in/student"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInStudent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-up/parent"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpParent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-in/parent"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInParent", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-up/teacher"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUpTeacher", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Post)("sign-in/teacher"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignInTeacher", null);
__decorate([
    (0, nestjs_better_auth_1.AllowAnonymous)(),
    (0, common_1.Get)("me"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [nestjs_better_auth_1.AuthService,
        prisma_service_1.PrismaService,
        auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map