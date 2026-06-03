import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';

@Injectable()
export class MatieresService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMatiereDto) {
    // Vérifier que la classe existe
    const classe = await this.prisma.classe.findUnique({
      where: { id: dto.classeId },
    });
    if (!classe) {
      throw new NotFoundException(
        `Classe avec l'ID ${dto.classeId} introuvable.`,
      );
    }

    // Vérifier que la matière n'existe pas déjà pour cette classe
    const exists = await this.prisma.matiere.findFirst({
      where: {
        nom: dto.nom,
        classeId: dto.classeId,
      },
    });
    if (exists) {
      throw new ConflictException(
        `La matière ${dto.nom} existe déjà pour cette classe.`,
      );
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

  async findOne(id: string) {
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
      throw new NotFoundException(`Matière avec l'ID ${id} introuvable.`);
    }

    return matiere;
  }

  async update(id: string, dto: UpdateMatiereDto) {
    // Vérifier que la matière existe
    await this.findOne(id);

    return this.prisma.matiere.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    // Vérifier que la matière existe
    await this.findOne(id);

    return this.prisma.matiere.delete({
      where: { id },
    });
  }
}
