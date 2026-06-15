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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotesService = class NotesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, professeurId) {
        const eleve = await this.prisma.eleve.findUnique({
            where: { id: dto.eleveId },
            include: { classe: true },
        });
        if (!eleve) {
            throw new common_1.NotFoundException(`Élève avec l'ID ${dto.eleveId} introuvable.`);
        }
        let evaluationId = dto.evaluationId;
        if (!evaluationId && dto.matiereNom) {
            let classeId = eleve.classeId;
            if (!classeId) {
                const firstClasse = await this.prisma.classe.findFirst();
                classeId = firstClasse?.id || null;
            }
            let matiere = classeId
                ? await this.prisma.matiere.findFirst({
                    where: { nom: dto.matiereNom, classeId },
                })
                : null;
            if (!matiere && classeId) {
                matiere = await this.prisma.matiere.create({
                    data: { nom: dto.matiereNom, coefficient: 1, classeId },
                });
            }
            if (!matiere) {
                throw new common_1.NotFoundException(`Aucune classe trouvée pour créer la matière "${dto.matiereNom}".`);
            }
            const pid = professeurId || (await this.prisma.professeur.findFirst())?.id;
            const existingEval = await this.prisma.evaluation.findFirst({
                where: { matiereId: matiere.id, professeurId: pid || undefined },
            });
            if (existingEval) {
                evaluationId = existingEval.id;
            }
            else if (pid) {
                const created = await this.prisma.evaluation.create({
                    data: {
                        titre: dto.matiereNom,
                        type: 'DEVOIR',
                        date: new Date(),
                        matiereId: matiere.id,
                        professeurId: pid,
                    },
                });
                evaluationId = created.id;
            }
        }
        if (!evaluationId) {
            throw new common_1.NotFoundException('Aucune évaluation trouvée. Fournissez evaluationId ou matiereNom.');
        }
        const evaluation = await this.prisma.evaluation.findUnique({
            where: { id: evaluationId },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException(`Évaluation avec l'ID ${evaluationId} introuvable.`);
        }
        const exists = await this.prisma.note.findUnique({
            where: {
                eleveId_evaluationId: {
                    eleveId: dto.eleveId,
                    evaluationId: evaluationId,
                },
            },
        });
        if (exists) {
            throw new common_1.ConflictException('Une note existe déjà pour cet élève et cette évaluation.');
        }
        return this.prisma.note.create({
            data: {
                valeur: dto.valeur,
                appreciation: dto.appreciation,
                eleveId: dto.eleveId,
                evaluationId: evaluationId,
            },
        });
    }
    async createBulk(dto) {
        const results = [];
        for (const note of dto.notes) {
            try {
                const created = await this.create(note);
                results.push({ success: true, data: created });
            }
            catch (error) {
                results.push({
                    success: false,
                    error: error.message,
                    eleveId: note.eleveId,
                });
            }
        }
        return results;
    }
    async findByEleve(eleveId) {
        const eleve = await this.prisma.eleve.findUnique({
            where: { id: eleveId },
        });
        if (!eleve) {
            throw new common_1.NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
        }
        return this.prisma.note.findMany({
            where: { eleveId },
            include: {
                evaluation: {
                    include: {
                        matiere: true,
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
    async findAll() {
        return this.prisma.note.findMany({
            include: {
                eleve: {
                    include: {
                        user: true,
                        classe: true,
                    },
                },
                evaluation: {
                    include: {
                        matiere: true,
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
        const note = await this.prisma.note.findUnique({
            where: { id },
            include: {
                eleve: {
                    include: {
                        user: true,
                        classe: true,
                    },
                },
                evaluation: {
                    include: {
                        matiere: true,
                        professeur: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        if (!note) {
            throw new common_1.NotFoundException(`Note avec l'ID ${id} introuvable.`);
        }
        return note;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.note.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.note.delete({
            where: { id },
        });
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotesService);
//# sourceMappingURL=notes.service.js.map