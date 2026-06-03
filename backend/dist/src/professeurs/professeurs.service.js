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
exports.ProfesseursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfesseursService = class ProfesseursService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.professeur.findMany({
            include: {
                user: true,
                matieres: {
                    include: {
                        matiere: {
                            include: {
                                classe: true,
                            },
                        },
                    },
                },
                evaluations: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const professeur = await this.prisma.professeur.findUnique({
            where: { id },
            include: {
                user: true,
                matieres: {
                    include: {
                        matiere: {
                            include: {
                                classe: true,
                            },
                        },
                    },
                },
                evaluations: true,
            },
        });
        if (!professeur) {
            throw new common_1.NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
        }
        return professeur;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.professeur.update({
            where: { id },
            data: dto,
        });
    }
    async assignMatiere(professeurId, matiereId) {
        const professeur = await this.prisma.professeur.findUnique({
            where: { id: professeurId },
        });
        if (!professeur) {
            throw new common_1.NotFoundException(`Professeur avec l'ID ${professeurId} introuvable.`);
        }
        const matiere = await this.prisma.matiere.findUnique({
            where: { id: matiereId },
        });
        if (!matiere) {
            throw new common_1.NotFoundException(`Matière avec l'ID ${matiereId} introuvable.`);
        }
        const exists = await this.prisma.professeurMatiere.findUnique({
            where: {
                professeurId_matiereId: {
                    professeurId,
                    matiereId,
                },
            },
        });
        if (exists) {
            throw new common_1.ConflictException('Ce professeur a déjà cette matière assignée.');
        }
        return this.prisma.professeurMatiere.create({
            data: {
                professeurId,
                matiereId,
            },
        });
    }
    async removeMatiere(professeurId, matiereId) {
        const exists = await this.prisma.professeurMatiere.findUnique({
            where: {
                professeurId_matiereId: {
                    professeurId,
                    matiereId,
                },
            },
        });
        if (!exists) {
            throw new common_1.NotFoundException('Assignation non trouvée.');
        }
        return this.prisma.professeurMatiere.delete({
            where: {
                professeurId_matiereId: {
                    professeurId,
                    matiereId,
                },
            },
        });
    }
};
exports.ProfesseursService = ProfesseursService;
exports.ProfesseursService = ProfesseursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfesseursService);
//# sourceMappingURL=professeurs.service.js.map