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
exports.EmploiTempsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmploiTempsService = class EmploiTempsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const classe = await this.prisma.classe.findUnique({ where: { id: dto.classeId } });
        if (!classe)
            throw new common_1.NotFoundException('Classe introuvable.');
        const matiere = await this.prisma.matiere.findUnique({ where: { id: dto.matiereId } });
        if (!matiere)
            throw new common_1.NotFoundException('Matière introuvable.');
        if (dto.professeurId) {
            const prof = await this.prisma.professeur.findUnique({ where: { id: dto.professeurId } });
            if (!prof)
                throw new common_1.NotFoundException('Professeur introuvable.');
        }
        const conflit = await this.prisma.emploiTemps.findFirst({
            where: {
                classeId: dto.classeId,
                jour: dto.jour,
                heureDebut: dto.heureDebut,
            },
        });
        if (conflit)
            throw new common_1.ConflictException('Un cours existe déjà à ce créneau pour cette classe.');
        return this.prisma.emploiTemps.create({
            data: dto,
            include: { classe: true, matiere: true, professeur: { include: { user: true } } },
        });
    }
    async findAll() {
        return this.prisma.emploiTemps.findMany({
            include: { classe: true, matiere: true, professeur: { include: { user: true } } },
            orderBy: [{ jour: 'asc' }, { heureDebut: 'asc' }],
        });
    }
    async findByClasse(classeId) {
        return this.prisma.emploiTemps.findMany({
            where: { classeId },
            include: { matiere: true, professeur: { include: { user: true } } },
            orderBy: [{ jour: 'asc' }, { heureDebut: 'asc' }],
        });
    }
    async findByProfesseur(professeurId) {
        return this.prisma.emploiTemps.findMany({
            where: { professeurId },
            include: { classe: true, matiere: true },
            orderBy: [{ jour: 'asc' }, { heureDebut: 'asc' }],
        });
    }
    async findOne(id) {
        const entry = await this.prisma.emploiTemps.findUnique({
            where: { id },
            include: { classe: true, matiere: true, professeur: { include: { user: true } } },
        });
        if (!entry)
            throw new common_1.NotFoundException('Créneau introuvable.');
        return entry;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.emploiTemps.update({
            where: { id },
            data: dto,
            include: { classe: true, matiere: true, professeur: { include: { user: true } } },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.emploiTemps.delete({ where: { id } });
    }
};
exports.EmploiTempsService = EmploiTempsService;
exports.EmploiTempsService = EmploiTempsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmploiTempsService);
//# sourceMappingURL=emploi-temps.service.js.map