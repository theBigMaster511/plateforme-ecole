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
exports.ParentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParentsService = class ParentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.parent.findMany({
            include: {
                user: true,
                enfants: {
                    include: {
                        eleve: {
                            include: {
                                user: true,
                                classe: true,
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
        const parent = await this.prisma.parent.findUnique({
            where: { id },
            include: {
                user: true,
                enfants: {
                    include: {
                        eleve: {
                            include: {
                                user: true,
                                classe: true,
                            },
                        },
                    },
                },
            },
        });
        if (!parent) {
            throw new common_1.NotFoundException(`Parent avec l'ID ${id} introuvable.`);
        }
        return parent;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.parent.update({
            where: { id },
            data: dto,
        });
    }
    async linkEnfant(parentId, eleveId) {
        const parent = await this.prisma.parent.findUnique({
            where: { id: parentId },
        });
        if (!parent) {
            throw new common_1.NotFoundException(`Parent avec l'ID ${parentId} introuvable.`);
        }
        const eleve = await this.prisma.eleve.findUnique({
            where: { id: eleveId },
        });
        if (!eleve) {
            throw new common_1.NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
        }
        const exists = await this.prisma.parentEleve.findUnique({
            where: {
                parentId_eleveId: {
                    parentId,
                    eleveId,
                },
            },
        });
        if (exists) {
            throw new common_1.ConflictException('Ce parent est déjà lié à cet élève.');
        }
        return this.prisma.parentEleve.create({
            data: {
                parentId,
                eleveId,
            },
        });
    }
    async unlinkEnfant(parentId, eleveId) {
        const exists = await this.prisma.parentEleve.findUnique({
            where: {
                parentId_eleveId: {
                    parentId,
                    eleveId,
                },
            },
        });
        if (!exists) {
            throw new common_1.NotFoundException('Liaison parent-élève introuvable.');
        }
        return this.prisma.parentEleve.delete({
            where: {
                parentId_eleveId: {
                    parentId,
                    eleveId,
                },
            },
        });
    }
};
exports.ParentsService = ParentsService;
exports.ParentsService = ParentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParentsService);
//# sourceMappingURL=parents.service.js.map