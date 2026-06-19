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
exports.ProfesseursController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const professeurs_service_1 = require("./professeurs.service");
const update_professeur_dto_1 = require("./dto/update-professeur.dto");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
const resend_1 = require("../lib/resend");
const create_professeur_dto_1 = require("./dto/create-professeur.dto");
let ProfesseursController = class ProfesseursController {
    professeursService;
    authService;
    constructor(professeursService, authService) {
        this.professeursService = professeursService;
        this.authService = authService;
    }
    async CreateProfesseur(req, body) {
        const user = req.user;
        console.log('user:', user);
        return resend_1.resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['nouhouprodev@gmail.com'],
            subject: 'test',
            html: '<h1>Hello</h1>',
        });
    }
    findAll(req) {
        const user = req.user;
        if (!user) {
            return new common_1.UnauthorizedException('non connecte');
        }
        console.log(user);
        return this.professeursService.findAll(user.id);
    }
    findOne(id) {
        return this.professeursService.findOne(id);
    }
    update(id, dto) {
        return this.professeursService.update(id, dto);
    }
    assignMatiere(professeurId, matiereId) {
        return this.professeursService.assignMatiere(professeurId, matiereId);
    }
    remove(id) {
        return this.professeursService.remove(id);
    }
    removeMatiere(professeurId, matiereId) {
        return this.professeursService.removeMatiere(professeurId, matiereId);
    }
    assignClasse(professeurId, classeId) {
        return this.professeursService.assignClasse(professeurId, classeId);
    }
    removeClasse(professeurId, classeId) {
        return this.professeursService.removeClasse(professeurId, classeId);
    }
};
exports.ProfesseursController = ProfesseursController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_professeur_dto_1.CreateProfesseurDto]),
    __metadata("design:returntype", Promise)
], ProfesseursController.prototype, "CreateProfesseur", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Lister tous les professeurs',
        description: 'Récupérer la liste complète des professeurs (ADMIN uniquement)',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des professeurs récupérée',
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer un professeur par ID',
        description: "Détails d'un professeur spécifique (ADMIN, PROFESSEUR)",
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID unique du professeur',
        example: 'prof123456789',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Professeur récupéré' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Professeur introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier un professeur',
        description: "Mettre à jour les informations d'un professeur (ADMIN uniquement)",
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID unique du professeur',
        example: 'prof123456789',
    }),
    (0, swagger_1.ApiBody)({
        type: update_professeur_dto_1.UpdateProfesseurDto,
        description: 'Données à mettre à jour',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Professeur mis à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Professeur introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_professeur_dto_1.UpdateProfesseurDto]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/matieres/:matiereId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Assigner une matière à un professeur',
        description: 'Lier une matière spécifique à un professeur (ADMIN uniquement)',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID unique du professeur',
        example: 'prof123456789',
    }),
    (0, swagger_1.ApiParam)({
        name: 'matiereId',
        description: 'ID unique de la matière',
        example: 'mat123456789',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Matière assignée' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Professeur ou matière introuvable',
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Assignation déjà existante' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('matiereId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "assignMatiere", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({
        summary: 'Supprimer un professeur',
        description: 'Supprimer définitivement un professeur et son compte utilisateur (ADMIN uniquement)',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID unique du professeur',
        example: 'prof123456789',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Professeur supprimé' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Professeur introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(':id/matieres/:matiereId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: "Retirer une matière d'un professeur",
        description: 'Supprimer le lien entre un professeur et une matière (ADMIN uniquement)',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID unique du professeur',
        example: 'prof123456789',
    }),
    (0, swagger_1.ApiParam)({
        name: 'matiereId',
        description: 'ID unique de la matière',
        example: 'mat123456789',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matière retirée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Assignation introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('matiereId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "removeMatiere", null);
__decorate([
    (0, common_1.Post)(':id/classes/:classeId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Assigner une classe à un professeur' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Classe assignée' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Assignation déjà existante' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "assignClasse", null);
__decorate([
    (0, common_1.Delete)(':id/classes/:classeId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Retirer une classe d'un professeur" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe retirée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Assignation introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfesseursController.prototype, "removeClasse", null);
exports.ProfesseursController = ProfesseursController = __decorate([
    (0, common_1.Controller)('professeurs'),
    (0, swagger_1.ApiTags)('Gestion des Professeurs'),
    __metadata("design:paramtypes", [professeurs_service_1.ProfesseursService,
        nestjs_better_auth_1.AuthService])
], ProfesseursController);
//# sourceMappingURL=professeurs.controller.js.map