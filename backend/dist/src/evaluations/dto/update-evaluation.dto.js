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
exports.UpdateEvaluationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var EvalType;
(function (EvalType) {
    EvalType["DEVOIR"] = "DEVOIR";
    EvalType["INTERROGATION"] = "INTERROGATION";
    EvalType["EXAMEN"] = "EXAMEN";
    EvalType["RATTRAPAGE"] = "RATTRAPAGE";
})(EvalType || (EvalType = {}));
class UpdateEvaluationDto {
    titre;
    type;
    date;
}
exports.UpdateEvaluationDto = UpdateEvaluationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Nouveau Titre', description: 'Nouveau titre de l\'évaluation', required: false }),
    __metadata("design:type", String)
], UpdateEvaluationDto.prototype, "titre", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(EvalType),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ enum: EvalType, example: EvalType.EXAMEN, description: 'Nouveau type d\'évaluation', required: false }),
    __metadata("design:type", String)
], UpdateEvaluationDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '2024-10-20', description: 'Nouvelle date (YYYY-MM-DD)', required: false }),
    __metadata("design:type", String)
], UpdateEvaluationDto.prototype, "date", void 0);
//# sourceMappingURL=update-evaluation.dto.js.map