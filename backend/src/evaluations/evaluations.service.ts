import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Injectable()
export class EvaluationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEvaluationDto) {
    // Vérifier que la matière et le professeur existent
    const matiere = await this.prisma.matiere.findUnique({
      where: { id: dto.matiereId },
    });
    if (!matiere) {
      throw new NotFoundException(
        `Matière avec l'ID ${dto.matiereId} introuvable.`,
      );
    }

    const professeur = await this.prisma.professeur.findUnique({
      where: { id: dto.professeurId },
    });
    if (!professeur) {
      throw new NotFoundException(
        `Professeur avec l'ID ${dto.professeurId} introuvable.`,
      );
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

  async findOne(id: string) {
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
      throw new NotFoundException(`Évaluation avec l'ID ${id} introuvable.`);
    }

    return evaluation;
  }

  async update(id: string, dto: UpdateEvaluationDto) {
    // Vérifier que l'évaluation existe
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

  async remove(id: string) {
    // Vérifier que l'évaluation existe
    await this.findOne(id);

    return this.prisma.evaluation.delete({
      where: { id },
    });
  }
}
