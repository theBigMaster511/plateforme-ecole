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
exports.ClasseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const classe_service_1 = require("./classe.service");
const create_classe_dto_1 = require("./dto/create-classe.dto");
const update_classe_dto_1 = require("./dto/update-classe.dto");
let ClasseController = class ClasseController {
    classeService;
    constructor(classeService) {
        this.classeService = classeService;
    }
    create(dto) {
        return this.classeService.create(dto);
    }
    findAll() {
        return this.classeService.finAll();
    }
    findOne(id) {
        return this.classeService.findOne(id);
    }
    update(id, dto) {
        return this.classeService.update(id, dto);
    }
    remove(id) {
        return this.classeService.remove(id);
    }
};
exports.ClasseController = ClasseController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle classe', description: 'Créer une nouvelle classe (ADMIN uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_classe_dto_1.CreateClasseDto, description: 'Données de la classe' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Classe créée avec succès', type: create_classe_dto_1.CreateClasseDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'La classe existe déjà' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_classe_dto_1.CreateClasseDto]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les classes', description: 'Lister toutes les classes (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des classes récupérée', isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.ELEVE, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une classe par son ID', description: 'Détail d\'une classe spécifique (ADMIN, PROFESSEUR, ELEVE)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de la classe', example: 'cl1234567890' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Détails de la classe récupérés', type: create_classe_dto_1.CreateClasseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier une classe', description: 'Modifier les informations d\'une classe (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de la classe', example: 'cl1234567890' }),
    (0, swagger_1.ApiBody)({ type: update_classe_dto_1.UpdateClassDto, description: 'Champs à mettre à jour (tous optionnels)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe mise à jour avec succès', type: create_classe_dto_1.CreateClasseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_classe_dto_1.UpdateClassDto]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une classe', description: 'Supprimer une classe (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de la classe', example: 'cl1234567890' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe supprimée avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "remove", null);
exports.ClasseController = ClasseController = __decorate([
    (0, common_1.Controller)('classe'),
    (0, swagger_1.ApiTags)('Gestion des Classes'),
    __metadata("design:paramtypes", [classe_service_1.ClasseService])
], ClasseController);
//# sourceMappingURL=classe.controller.js.map