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
exports.EcoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const ecole_service_1 = require("./ecole.service");
const create_ecole_dto_1 = require("./dto/create-ecole.dto");
const update_ecole_dto_1 = require("./dto/update-ecole.dto");
let EcoleController = class EcoleController {
    ecoleService;
    constructor(ecoleService) {
        this.ecoleService = ecoleService;
    }
    create(dto) {
        return this.ecoleService.create(dto);
    }
    findOne() {
        return this.ecoleService.findOne();
    }
    update(id, dto) {
        return this.ecoleService.update(id, dto);
    }
    remove(id) {
        return this.ecoleService.remove(id);
    }
};
exports.EcoleController = EcoleController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: "Créer l'école (une seule autorisée)", description: 'Créer une nouvelle école. Une seule école est autorisée en base (ADMIN uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_ecole_dto_1.CreateEcoleDto, description: 'Données de l\'école à créer' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'École créée avec succès', type: create_ecole_dto_1.CreateEcoleDto }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Une école existe déjà' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ecole_dto_1.CreateEcoleDto]),
    __metadata("design:returntype", void 0)
], EcoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR, roles_enum_1.Role.ELEVE, roles_enum_1.Role.PARENT),
    (0, swagger_1.ApiOperation)({ summary: "Récupérer les infos de l'école" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Informations de l'école récupérées",
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Aucune école configurée' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EcoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier les infos de l\'école', description: 'Modifier les informations de l\'école (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'école', example: 'cl1234567890' }),
    (0, swagger_1.ApiBody)({ type: update_ecole_dto_1.UpdateEcoleDto, description: 'Champs à mettre à jour (tous optionnels)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'École mise à jour avec succès', type: create_ecole_dto_1.CreateEcoleDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'École introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ecole_dto_1.UpdateEcoleDto]),
    __metadata("design:returntype", void 0)
], EcoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer l\'école', description: 'Supprimer l\'école (ADMIN uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de l\'école', example: 'cl1234567890' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'École supprimée avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'École introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EcoleController.prototype, "remove", null);
exports.EcoleController = EcoleController = __decorate([
    (0, common_1.Controller)('ecole'),
    (0, swagger_1.ApiTags)("Gestion de l'Ecole"),
    __metadata("design:paramtypes", [ecole_service_1.EcoleService])
], EcoleController);
//# sourceMappingURL=ecole.controller.js.map