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
exports.CreateEcoleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateEcoleDto {
    nom;
    adresse;
    telephone;
    email;
    siteWeb;
    logo;
    directeur;
    ville;
    pays;
    codePostal;
    description;
}
exports.CreateEcoleDto = CreateEcoleDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Lycée National', description: 'Nom de l\'école' }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '123 Rue de la Paix', description: 'Adresse', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '+221 33 123 45 67', description: 'Numéro de téléphone', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'contact@ecole.sn', description: 'Email', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'https://ecole.sn', description: 'Site Web', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "siteWeb", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'https://cdn.ecole.sn/logo.png', description: 'Logo URL', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Jean Dupont', description: 'Nom du directeur', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "directeur", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Dakar', description: 'Ville', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "ville", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Sénégal', description: 'Pays', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "pays", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '14000', description: 'Code postal', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "codePostal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Une belle école...', description: 'Description', required: false }),
    __metadata("design:type", String)
], CreateEcoleDto.prototype, "description", void 0);
//# sourceMappingURL=create-ecole.dto.js.map