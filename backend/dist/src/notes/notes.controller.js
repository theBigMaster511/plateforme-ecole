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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../role/roles.decorator");
const roles_enum_1 = require("../role/roles.enum");
const prisma_service_1 = require("../prisma/prisma.service");
const notes_service_1 = require("./notes.service");
const create_note_dto_1 = require("./dto/create-note.dto");
const create_notes_bulk_dto_1 = require("./dto/create-notes-bulk.dto");
const update_note_dto_1 = require("./dto/update-note.dto");
let NotesController = class NotesController {
    notesService;
    prisma;
    constructor(notesService, prisma) {
        this.notesService = notesService;
        this.prisma = prisma;
    }
    async create(dto, req) {
        const user = req.user;
        let professeurId;
        if (user) {
            const prof = await this.prisma.professeur.findUnique({ where: { userId: user.id } });
            professeurId = prof?.id;
        }
        return this.notesService.create(dto, professeurId);
    }
    createBulk(dto) {
        return this.notesService.createBulk(dto);
    }
    findAll() {
        return this.notesService.findAll();
    }
    findByEleve(eleveId) {
        return this.notesService.findByEleve(eleveId);
    }
    update(id, dto) {
        return this.notesService.update(id, dto);
    }
    remove(id) {
        return this.notesService.remove(id);
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Saisir une note', description: 'Saisir une note individuelle pour un élève (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_note_dto_1.CreateNoteDto, description: 'Données de la note' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Note saisie avec succès', type: create_note_dto_1.CreateNoteDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève ou évaluation introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Une note existe déjà' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Saisir plusieurs notes à la fois', description: 'Saisir un ensemble de notes pour plusieurs élèves (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiBody)({ type: create_notes_bulk_dto_1.CreateNotesBulkDto, description: 'Liste de notes à saisir' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Notes saisies avec résultats' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notes_bulk_dto_1.CreateNotesBulkDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "createBulk", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Lister toutes les notes', description: 'Récupérer l\'ensemble des notes de l\'établissement (ADMIN, PROFESSEUR)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des notes récupérée', isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('eleve/:eleveId'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.PROFESSEUR, roles_enum_1.Role.ELEVE, roles_enum_1.Role.PARENT),
    (0, swagger_1.ApiOperation)({ summary: "Récupérer les notes d'un élève", description: "Récupérer toutes les notes d'un élève spécifique (ADMIN, PROFESSEUR, ELEVE, PARENT)" }),
    (0, swagger_1.ApiParam)({ name: 'eleveId', description: 'ID unique de l\'élève', example: 'ele123456789' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Notes de l'élève récupérées", isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Élève introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('eleveId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findByEleve", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier une note', description: 'Mettre à jour la valeur ou l\'appréciation d\'une note (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de la note', example: 'note123456789' }),
    (0, swagger_1.ApiBody)({ type: update_note_dto_1.UpdateNoteDto, description: 'Champs à mettre à jour' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Note mise à jour' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Note introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.PROFESSEUR),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une note', description: 'Supprimer définitivement une note (PROFESSEUR uniquement)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID unique de la note', example: 'note123456789' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Note supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Note introuvable' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Non autorisé' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "remove", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    (0, swagger_1.ApiTags)('Gestion des Notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService,
        prisma_service_1.PrismaService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map