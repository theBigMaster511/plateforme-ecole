import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';

@Injectable()
export class ProfesseursService {
  constructor(private prisma: PrismaService) {}

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

  async findOne(id: string) {
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
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    return professeur;
  }

  async update(id: string, dto: UpdateProfesseurDto) {
    // Vérifier que le professeur existe
    await this.findOne(id);

    return this.prisma.professeur.update({
      where: { id },
      data: dto,
    });
  }

  async assignMatiere(professeurId: string, matiereId: string) {
    // Vérifier que le professeur et la matière existent
    const professeur = await this.prisma.professeur.findUnique({
      where: { id: professeurId },
    });
    if (!professeur) {
      throw new NotFoundException(
        `Professeur avec l'ID ${professeurId} introuvable.`,
      );
    }

    const matiere = await this.prisma.matiere.findUnique({
      where: { id: matiereId },
    });
    if (!matiere) {
      throw new NotFoundException(
        `Matière avec l'ID ${matiereId} introuvable.`,
      );
    }

    // Vérifier que l'assignation n'existe pas déjà
    const exists = await this.prisma.professeurMatiere.findUnique({
      where: {
        professeurId_matiereId: {
          professeurId,
          matiereId,
        },
      },
    });
    if (exists) {
      throw new ConflictException(
        'Ce professeur a déjà cette matière assignée.',
      );
    }

    return this.prisma.professeurMatiere.create({
      data: {
        professeurId,
        matiereId,
      },
    });
  }

  async removeMatiere(professeurId: string, matiereId: string) {
    // Vérifier que l'assignation existe
    const exists = await this.prisma.professeurMatiere.findUnique({
      where: {
        professeurId_matiereId: {
          professeurId,
          matiereId,
        },
      },
    });
    if (!exists) {
      throw new NotFoundException('Assignation non trouvée.');
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
}
