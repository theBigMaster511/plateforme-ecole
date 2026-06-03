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
let ElevesController = class ElevesController {
    elevesService;
    constructor(elevesService) {
        this.elevesService = elevesService;
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
};
exports.ElevesController = ElevesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Lister tous les élèves' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des élèves récupérée' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR, roles_enum_1.Role.ELEVE, roles_enum_1.Role.PARENT),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un élève par ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Élève récupéré' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un élève' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Élève mis à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eleve_dto_1.UpdateEleveDto]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/classe/:classeId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Assigner un élève à une classe' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Élève assigné à la classe' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève ou classe introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('classeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ElevesController.prototype, "assignClasse", null);
exports.ElevesController = ElevesController = __decorate([
    (0, common_1.Controller)('eleves'),
    (0, swagger_1.ApiTags)('Gestion des Élèves'),
    __metadata("design:paramtypes", [eleves_service_1.ElevesService])
], ElevesController);
//# sourceMappingURL=eleves.controller.js.map