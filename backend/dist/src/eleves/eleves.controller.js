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
exports.ElevesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const eleves_service_1 = require("./eleves.service");
const update_eleve_dto_1 = require("./dto/update-eleve.dto");
const create_eleve_dto_1 = require("./dto/create-eleve.dto");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
const auth_service_1 = require("../auth/auth.service");
let ElevesController = class ElevesController {
    elevesService;
    AuthService;
    LocalAuthService;
    constructor(elevesService, AuthService, LocalAuthService) {
        this.elevesService = elevesService;
        this.AuthService = AuthService;
        this.LocalAuthService = LocalAuthService;
    }
    findAll() {
        return this.elevesService.findAll();
    }
    findOne(id) {
        return this.elevesService.findOne(id);
    }
    update(id, dto) {
        return this.elevesService.update(id, dto);
    }
    assignClasse(eleveId, classeId) {
        return this.elevesService.assignClasse(eleveId, classeId);
    }
    async createEleve(data) {
        const account = await this.AuthService.api.signUpEmail({
            body: {
                email: data.email,
                password: data.MotDePasse,
                name: data.Nom,
            }
        });
        if (!account) {
            throw new common_1.NotFoundException(`Erreur lors de la création du compte utilisateur pour l'élève ${data.Nom}.`);
        }
        await this.LocalAuthService.ToggleStudentRole(account.user.id);
        return this.elevesService.createEleve(data, account.user.id);
    }
};
exports.ElevesController = ElevesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Lister tous les élèves', description: 'Récupérer la liste complète des élèves (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des élèves récupérée', isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR, roles_enum_1.Role.ELEVE, roles_enum_1.Role.PARENT),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un élève par ID', description: 'Détails d\'un élève spécifique (ADMIN, PROFESSEUR, ELEVE, PARENT)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Élève récupéré' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un élève', description: 'Mettre à jour les informations d\'un élève (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' }),
    (0, swagger_1.ApiBody)({ type: update_eleve_dto_1.UpdateEleveDto, description: 'Données à mettre à jour' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Élève mis à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eleve_dto_1.UpdateEleveDto]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/classe/:classeId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Assigner un élève à une classe', description: 'Lier un élève à une classe spécifique (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' }),
    (0, swagger_1.ApiParam)({ name: 'classeId', description: 'ID unique de la classe', example: 'cl123456789' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Élève assigné à la classe' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève ou classe introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "assignClasse", null);
__decorate([
    (0, common_1.Post)("create-student"),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouvel élève', description: 'Ajouter un nouvel élève à la base de données (ADMIN uniquement)' }),
    (0, swagger_1.ApiBody)({ description: 'Données de l\'élève à créer', type: create_eleve_dto_1.CreateEleveDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Élève créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eleve_dto_1.CreateEleveDto]),
    __metadata("design:returntype", Promise)
], ElevesController.prototype, "createEleve", null);
exports.ElevesController = ElevesController = __decorate([
    (0, common_1.Controller)('eleves'),
    (0, swagger_1.ApiTags)('Gestion des Élèves'),
    __metadata("design:paramtypes", [eleves_service_1.ElevesService, nestjs_better_auth_1.AuthService, auth_service_1.AuthService])
], ElevesController);
//# sourceMappingURL=eleves.controller.js.map