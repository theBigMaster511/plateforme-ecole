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
exports.EvaluationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EvaluationsService = class EvaluationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const matiere = await this.prisma.matiere.findUnique({
            where: { id: dto.matiereId },
        });
        if (!matiere) {
            throw new common_1.NotFoundException(`Matière avec l'ID ${dto.matiereId} introuvable.`);
        }
        const professeur = await this.prisma.professeur.findUnique({
            where: { id: dto.professeurId },
        });
        if (!professeur) {
            throw new common_1.NotFoundException(`Professeur avec l'ID ${dto.professeurId} introuvable.`);
        }
        return this.prisma.evaluation.create({
            data: {
                titre: dto.titre,
                type: dto.type,
                date: new Date(dto.date),
                matiereId: dto.matiereId,
                professeurId: dto.professeurId,
            },
        });
    }
    async findAll() {
        return this.prisma.evaluation.findMany({
            include: {
                matiere: {
                    include: {
                        classe: true,
                    },
                },
                professeur: {
                    include: {
                        user: true,
                    },
                },
                notes: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
    }
    async findOne(id) {
        const evaluation = await this.prisma.evaluation.findUnique({
            where: { id },
            include: {
                matiere: {
                    include: {
                        classe: true,
                    },
                },
                professeur: {
                    include: {
                        user: true,
                    },
                },
                notes: {
                    include: {
                        eleve: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Évaluation avec l'ID ${id} introuvable.`);
        }
        return evaluation;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.evaluation.update({
            where: { id },
            data: {
                titre: dto.titre,
                type: dto.type,
                date: dto.date ? new Date(dto.date) : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.evaluation.delete({
            where: { id },
        });
    }
};
exports.EvaluationsService = EvaluationsService;
exports.EvaluationsService = EvaluationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvaluationsService);
//# sourceMappingURL=evaluations.service.js.map