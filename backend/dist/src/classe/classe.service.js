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
exports.ClasseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClasseService = class ClasseService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.classe.findFirst({
            where: {
                nom: dto.name,
                annee: dto.years
            }
        });
        if (exists) {
            throw new common_1.ConflictException(`La classe ${dto.name} existe deja pour l'annee ${dto.years}`);
        }
        return this.prisma.classe.create({
            data: {
                nom: dto.name,
                annee: dto.years,
                niveau: dto.level
            }
        });
    }
    async finAll() {
        return this.prisma.classe.findMany({
            include: {
                _count: {
                    select: {
                        eleves: true,
                        matieres: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    async findOne(id) {
        const classe = await this.prisma.classe.findUnique({
            where: {
                id
            },
            include: {
                eleves: {
                    include: {
                        user: true
                    }
                },
                matieres: true,
                _count: {
                    select: {
                        eleves: true,
                        matieres: true
                    }
                }
            }
        });
        if (!classe) {
            throw new common_1.NotFoundException(`Classe ${id} introuvable`);
        }
        return classe;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.classe.update({
            where: {
                id
            },
            data: {
                nom: dto.name,
                niveau: dto.level,
                annee: dto.years
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.classe.delete({
            where: { id }
        });
    }
};
exports.ClasseService = ClasseService;
exports.ClasseService = ClasseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClasseService);
//# sourceMappingURL=classe.service.js.map