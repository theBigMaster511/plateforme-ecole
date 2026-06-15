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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateNoteDto {
    valeur;
    appreciation;
    eleveId;
    evaluationId;
    matiereNom;
}
exports.CreateNoteDto = CreateNoteDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(20),
    (0, swagger_1.ApiProperty)({ example: 15.5, description: 'Valeur de la note (entre 0 et 20)' }),
    __metadata("design:type", Number)
], CreateNoteDto.prototype, "valeur", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Bon travail, continuez ainsi', description: 'Appréciation du professeur', required: false }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "appreciation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'ele123456789', description: 'ID de l\'élève' }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "eleveId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'eval123456789', description: 'ID de l\'évaluation (optionnel si matiereNom fourni)' }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "evaluationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Mathématiques', description: 'Nom de la matière (utilisé si evaluationId non fourni)' }),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "matiereNom", void 0);
//# sourceMappingURL=create-note.dto.js.map