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
exports.EvaluationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const evaluations_service_1 = require("./evaluations.service");
const create_evaluation_dto_1 = require("./dto/create-evaluation.dto");
const update_evaluation_dto_1 = require("./dto/update-evaluation.dto");
let EvaluationsController = class EvaluationsController {
    evaluationsService;
    constructor(evaluationsService) {
        this.evaluationsService = evaluationsService;
    }
    create(dto) {
        return this.evaluationsService.create(dto);
    }
    findAll() {
        return this.evaluationsService.findAll();
    }
    findOne(id) {
        return this.evaluationsService.findOne(id);
    }
    update(id, dto) {
        return this.evaluationsService.update(id, dto);
    }
    remove(id) {
        return this.evaluationsService.remove(id);
    }
};
exports.EvaluationsController = EvaluationsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une évaluation', description: 'Créer une nouvelle évaluation pour une matière (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_evaluation_dto_1.CreateEvaluationDto, description: 'Données de l\'évaluation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Évaluation créée avec succès', type: create_evaluation_dto_1.CreateEvaluationDto }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Matière ou professeur introuvable',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluation_dto_1.CreateEvaluationDto]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Lister toutes les évaluations', description: 'Récupérer la liste de toutes les évaluations (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des évaluations récupérée', isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une évaluation par ID', description: 'Détail d\'une évaluation spécifique (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Évaluation récupérée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Évaluation introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier une évaluation', description: 'Mettre à jour les informations d\'une évaluation (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' }),
    (0, swagger_1.ApiBody)({ type: update_evaluation_dto_1.UpdateEvaluationDto, description: 'Champs à mettre à jour' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Évaluation mise à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Évaluation introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_evaluation_dto_1.UpdateEvaluationDto]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une évaluation', description: 'Supprimer une évaluation (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Évaluation supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Évaluation introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "remove", null);
exports.EvaluationsController = EvaluationsController = __decorate([
    (0, common_1.Controller)('evaluations'),
    (0, swagger_1.ApiTags)('Gestion des Évaluations'),
    __metadata("design:paramtypes", [evaluations_service_1.EvaluationsService])
], EvaluationsController);
//# sourceMappingURL=evaluations.controller.js.map