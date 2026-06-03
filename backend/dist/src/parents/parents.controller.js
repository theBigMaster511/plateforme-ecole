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
exports.ParentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const parents_service_1 = require("./parents.service");
const update_parent_dto_1 = require("./dto/update-parent.dto");
let ParentsController = class ParentsController {
    parentsService;
    constructor(parentsService) {
        this.parentsService = parentsService;
    }
    findAll() {
        return this.parentsService.findAll();
    }
    findOne(id) {
        return this.parentsService.findOne(id);
    }
    update(id, dto) {
        return this.parentsService.update(id, dto);
    }
    linkEnfant(parentId, eleveId) {
        return this.parentsService.linkEnfant(parentId, eleveId);
    }
    unlinkEnfant(parentId, eleveId) {
        return this.parentsService.unlinkEnfant(parentId, eleveId);
    }
};
exports.ParentsController = ParentsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Lister tous les parents' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des parents récupérée' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PARENT),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un parent par ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Parent récupéré' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parent introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un parent' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Parent mis à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parent introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_parent_dto_1.UpdateParentDto]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/enfants/:eleveId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Lier un parent à un élève' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Élève lié au parent' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parent ou élève introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Liaison déjà existante' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('eleveId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "linkEnfant", null);
__decorate([
    (0, common_1.Delete)(':id/enfants/:eleveId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Délier un élève d'un parent" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Élève délié du parent' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Liaison introuvable' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('eleveId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "unlinkEnfant", null);
exports.ParentsController = ParentsController = __decorate([
    (0, common_1.Controller)('parents'),
    (0, swagger_1.ApiTags)('Gestion des Parents'),
    __metadata("design:paramtypes", [parents_service_1.ParentsService])
], ParentsController);
//# sourceMappingURL=parents.controller.js.map