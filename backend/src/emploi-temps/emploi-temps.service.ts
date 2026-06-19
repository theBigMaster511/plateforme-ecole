import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmploiTempsDto } from './dto/create-emploi-temps.dto';
import { UpdateEmploiTempsDto } from './dto/update-emploi-temps.dto';

@Injectable()
export class EmploiTempsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEmploiTempsDto, ecoleId?: string) {
    const classe = await this.prisma.classe.findUnique({ where: { id: dto.classeId } });
    if (!classe) throw new NotFoundException('Classe introuvable.');

    if (ecoleId && classe.ecoleId !== ecoleId) {
      throw new NotFoundException('Classe introuvable.');
    }

    const matiere = await this.prisma.matiere.findUnique({ where: { id: dto.matiereId } });
    if (!matiere) throw new NotFoundException('Matière introuvable.');

    if (dto.professeurId) {
      const prof = await this.prisma.professeur.findUnique({ where: { id: dto.professeurId } });
      if (!prof) throw new NotFoundException('Professeur introuvable.');
    }

    const conflit = await this.prisma.emploiTemps.findFirst({
      where: {
        classeId: dto.classeId,
        jour: dto.jour,
        heureDebut: dto.heureDebut,
      },
    });
    if (conflit) throw new ConflictException('Un cours existe déjà à ce créneau pour cette classe.');

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

  async findByClasse(classeId: string, ecoleId?: string) {
    if (ecoleId) {
      const classe = await this.prisma.classe.findUnique({ where: { id: classeId } });
      if (!classe || classe.ecoleId !== ecoleId) {
        throw new NotFoundException('Classe introuvable.');
      }
    }
    return this.prisma.emploiTemps.findMany({
      where: { classeId },
      include: { matiere: true, professeur: { include: { user: true } } },
      orderBy: [{ jour: 'asc' }, { heureDebut: 'asc' }],
    });
  }

  async findByProfesseur(professeurId: string) {
    return this.prisma.emploiTemps.findMany({
      where: { professeurId },
      include: { classe: true, matiere: true },
      orderBy: [{ jour: 'asc' }, { heureDebut: 'asc' }],
    });
  }

  async findOne(id: string) {
    const entry = await this.prisma.emploiTemps.findUnique({
      where: { id },
      include: { classe: true, matiere: true, professeur: { include: { user: true } } },
    });
    if (!entry) throw new NotFoundException('Créneau introuvable.');
    return entry;
  }

  async update(id: string, dto: UpdateEmploiTempsDto, ecoleId?: string) {
    const entry = await this.findOne(id);
    if (ecoleId && entry.classe.ecoleId !== ecoleId) {
      throw new NotFoundException('Créneau introuvable.');
    }
    return this.prisma.emploiTemps.update({
      where: { id },
      data: dto,
      include: { classe: true, matiere: true, professeur: { include: { user: true } } },
    });
  }

  async remove(id: string, ecoleId?: string) {
    const entry = await this.findOne(id);
    if (ecoleId && entry.classe.ecoleId !== ecoleId) {
      throw new NotFoundException('Créneau introuvable.');
    }
    return this.prisma.emploiTemps.delete({ where: { id } });
  }
}
