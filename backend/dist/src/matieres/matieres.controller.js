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
exports.MatieresController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const matieres_service_1 = require("./matieres.service");
const create_matiere_dto_1 = require("./dto/create-matiere.dto");
const update_matiere_dto_1 = require("./dto/update-matiere.dto");
let MatieresController = class MatieresController {
    matieresService;
    constructor(matieresService) {
        this.matieresService = matieresService;
    }
    create(dto) {
        return this.matieresService.create(dto);
    }
    findAll() {
        return this.matieresService.findAll();
    }
    findOne(id) {
        return this.matieresService.findOne(id);
    }
    update(id, dto) {
        return this.matieresService.update(id, dto);
    }
    remove(id) {
        return this.matieresService.remove(id);
    }
};
exports.MatieresController = MatieresController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une matière', description: 'Créer une nouvelle matière liée à une classe (ADMIN uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_matiere_dto_1.CreateMatiereDto, description: 'Données de la matière à créer' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Matière créée avec succès', type: create_matiere_dto_1.CreateMatiereDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'La matière existe déjà pour cette classe' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matiere_dto_1.CreateMatiereDto]),
    __metadata("design:returntype", void 0)
], MatieresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Lister toutes les matières', description: 'Récupérer la liste de toutes les matières (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des matières récupérée', isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatieresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une matière par ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matière récupérée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matière introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatieresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier une matière' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matière mise à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matière introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_matiere_dto_1.UpdateMatiereDto]),
    __metadata("design:returntype", void 0)
], MatieresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une matière' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Matière supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Matière introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatieresController.prototype, "remove", null);
exports.MatieresController = MatieresController = __decorate([
    (0, common_1.Controller)('matieres'),
    (0, swagger_1.ApiTags)('Gestion des Matières'),
    __metadata("design:paramtypes", [matieres_service_1.MatieresService])
], MatieresController);
//# sourceMappingURL=matieres.controller.js.map