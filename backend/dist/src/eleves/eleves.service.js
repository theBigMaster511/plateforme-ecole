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
exports.ElevesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ElevesService = class ElevesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.eleve.findMany({
            include: {
                user: true,
                classe: true,
                notes: {
                    include: {
                        evaluation: {
                            include: {
                                matiere: true,
                            },
                        },
                    },
                },
                parents: {
                    include: {
                        parent: {
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
        const eleve = await this.prisma.eleve.findUnique({
            where: { id },
            include: {
                user: true,
                classe: true,
                notes: {
                    include: {
                        evaluation: {
                            include: {
                                matiere: true,
                            },
                        },
                    },
                },
                parents: {
                    include: {
                        parent: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        if (!eleve) {
            throw new common_1.NotFoundException(`Élève avec l'ID ${id} introuvable.`);
        }
        return eleve;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.eleve.update({
            where: { id },
            data: {
                dateNaissance: dto.dateNaissance
                    ? new Date(dto.dateNaissance)
                    : undefined,
            },
        });
    }
    async assignClasse(eleveId, classeId) {
        const eleve = await this.prisma.eleve.findUnique({
            where: { id: eleveId },
        });
        if (!eleve) {
            throw new common_1.NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
        }
        const classe = await this.prisma.classe.findUnique({
            where: { id: classeId },
        });
        if (!classe) {
            throw new common_1.NotFoundException(`Classe avec l'ID ${classeId} introuvable.`);
        }
        return this.prisma.eleve.update({
            where: { id: eleveId },
            data: {
                classeId,
            },
        });
    }
    async createEleve(data, userId) {
        const { dateNaissance, adresse, Nom, Matricule, MotDePasse, ClasseId, email } = data;
        const existingEleve = await this.prisma.eleve.findUnique({
            where: {
                matricule: Matricule
            }
        });
        if (existingEleve) {
            throw new common_1.NotFoundException(`Un élève avec le matricule ${Matricule} existe déjà.`);
        }
        const user = await this.prisma.eleve.create({
            data: {
                dateNaissance: new Date(dateNaissance),
                matricule: Matricule,
                classeId: ClasseId,
                userId: userId
            }
        });
        return user;
    }
};
exports.ElevesService = ElevesService;
exports.ElevesService = ElevesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ElevesService);
//# sourceMappingURL=eleves.service.js.map