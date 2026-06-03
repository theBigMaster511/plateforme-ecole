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
exports.EcoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EcoleService = class EcoleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.ecole.findFirst();
        if (exists) {
            throw new common_1.ConflictException('Une école existe déjà. Une seule école est autorisée.');
        }
        if (dto.email) {
            const emailExists = await this.prisma.ecole.findUnique({
                where: { email: dto.email },
            });
            if (emailExists) {
                throw new common_1.ConflictException('Cet email est déjà utilisé.');
            }
        }
        return this.prisma.ecole.create({
            data: {
                nom: dto.nom,
                adresse: dto.adresse,
                telephone: dto.telephone,
                email: dto.email,
                siteWeb: dto.siteWeb,
                logo: dto.logo,
                directeur: dto.directeur,
                ville: dto.ville,
                pays: dto.pays || 'Sénégal',
                codePostal: dto.codePostal,
                description: dto.description,
            },
        });
    }
    async findAll() {
        return this.prisma.ecole.findMany();
    }
    async findOne() {
        const ecole = await this.prisma.ecole.findFirst();
        if (!ecole) {
            throw new common_1.NotFoundException('Aucune école configurée.');
        }
        return ecole;
    }
    async update(id, dto) {
        const ecole = await this.prisma.ecole.findUnique({ where: { id } });
        if (!ecole) {
            throw new common_1.NotFoundException(`École avec l'ID ${id} introuvable.`);
        }
        if (dto.email && dto.email !== ecole.email) {
            const emailExists = await this.prisma.ecole.findUnique({
                where: { email: dto.email },
            });
            if (emailExists) {
                throw new common_1.ConflictException('Cet email est déjà utilisé.');
            }
        }
        if (dto.nom && dto.nom !== ecole.nom) {
            const nomExists = await this.prisma.ecole.findUnique({
                where: { nom: dto.nom },
            });
            if (nomExists) {
                throw new common_1.ConflictException("Ce nom d'école existe déjà.");
            }
        }
        return this.prisma.ecole.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        const ecole = await this.prisma.ecole.findUnique({ where: { id } });
        if (!ecole) {
            throw new common_1.NotFoundException(`École avec l'ID ${id} introuvable.`);
        }
        return this.prisma.ecole.delete({
            where: { id },
        });
    }
};
exports.EcoleService = EcoleService;
exports.EcoleService = EcoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EcoleService);
//# sourceMappingURL=ecole.service.js.map