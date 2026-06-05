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
exports.UpdateEcoleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateEcoleDto {
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
exports.UpdateEcoleDto = UpdateEcoleDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Lycée National Mis à jour', description: 'Nom de l\'école', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '456 Avenue des Arts', description: 'Adresse', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '+221 33 000 00 00', description: 'Numéro de téléphone', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'admin@ecole.sn', description: 'Email', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'https://ecole-updated.sn', description: 'Site Web', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "siteWeb", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'https://cdn.ecole.sn/logo-new.png', description: 'Logo URL', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Mme. Sophie Touré', description: 'Nom du directeur', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "directeur", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Thiès', description: 'Ville', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "ville", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Sénégal', description: 'Pays', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "pays", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '10100', description: 'Code postal', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "codePostal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Une description mise à jour...', description: 'Description', required: false }),
    __metadata("design:type", String)
], UpdateEcoleDto.prototype, "description", void 0);
//# sourceMappingURL=update-ecole.dto.js.map