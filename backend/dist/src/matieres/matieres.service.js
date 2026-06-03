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
exports.MatieresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MatieresService = class MatieresService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const classe = await this.prisma.classe.findUnique({
            where: { id: dto.classeId },
        });
        if (!classe) {
            throw new common_1.NotFoundException(`Classe avec l'ID ${dto.classeId} introuvable.`);
        }
        const exists = await this.prisma.matiere.findFirst({
            where: {
                nom: dto.nom,
                classeId: dto.classeId,
            },
        });
        if (exists) {
            throw new common_1.ConflictException(`La matière ${dto.nom} existe déjà pour cette classe.`);
        }
        return this.prisma.matiere.create({
            data: {
                nom: dto.nom,
                coefficient: dto.coefficient || 1,
                classeId: dto.classeId,
            },
        });
    }
    async findAll() {
        return this.prisma.matiere.findMany({
            include: {
                classe: true,
                professeurs: {
                    include: {
                        professeur: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const matiere = await this.prisma.matiere.findUnique({
            where: { id },
            include: {
                classe: true,
                professeurs: {
                    include: {
                        professeur: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
                evaluations: true,
            },
        });
        if (!matiere) {
            throw new common_1.NotFoundException(`Matière avec l'ID ${id} introuvable.`);
        }
        return matiere;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.matiere.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.matiere.delete({
            where: { id },
        });
    }
};
exports.MatieresService = MatieresService;
exports.MatieresService = MatieresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MatieresService);
//# sourceMappingURL=matieres.service.js.map