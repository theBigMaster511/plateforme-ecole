import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';

@Injectable()
export class ProfesseursService {
  constructor(private prisma: PrismaService) {}

<<<<<<< HEAD
  async findAll(userId: string) {
    const school = await this.prisma.ecole.findFirst({
      where: {
        userId,
=======
  async create(dto: CreateProfesseurDto, ecoleId: string) {
    const { email, ...profData } = dto;

    if (!email) {
      throw new BadRequestException('Email requis pour créer un professeur');
    }

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new BadRequestException(`Aucun utilisateur trouvé avec l'email ${email}`);
    }

    return this.prisma.professeur.create({
      data: {
        ...profData,
        ecoleId,
        userId: user.id,
      },
    });
  }

  async findAll(ecoleId?: string) {
    return this.prisma.professeur.findMany({
      where: ecoleId ? { ecoleId } : undefined,
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
        classes: {
          include: {
            classe: true,
          },
        },
        evaluations: true,
>>>>>>> 1a23e1c06fcf591b93a747ce8b56226e22e2ebc1
      },
    });

    if (!school) {
      console.log('School: ', school);
      throw new Error("school does'nt exist");
    }
    return this.prisma.professeur.findMany({
      where: {
        ecoleId: school.id,
      },
    });
  }

  async findOne(id: string, ecoleId?: string) {
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
        classes: {
          include: {
            classe: true,
          },
        },
        evaluations: true,
      },
    });

    if (!professeur) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    if (ecoleId && professeur.ecoleId !== ecoleId) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    return professeur;
  }

  async update(id: string, dto: UpdateProfesseurDto, ecoleId?: string) {
    const professeur = await this.prisma.professeur.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!professeur) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    if (ecoleId && professeur.ecoleId !== ecoleId) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    const { name, email, ...profData } = dto;

    if (name || email) {
      await this.prisma.user.update({
        where: { id: professeur.userId },
        data: {
          ...(name && { name }),
          ...(email && { email }),
        },
      });
    }

    if (Object.keys(profData).length > 0) {
      return this.prisma.professeur.update({
        where: { id },
        data: profData,
        include: { user: true },
      });
    }

    return this.prisma.professeur.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async assignMatiere(professeurId: string, matiereId: string, ecoleId?: string) {
    // Vérifier que le professeur et la matière existent
    const professeur = await this.prisma.professeur.findUnique({
      where: { id: professeurId },
    });
    if (!professeur) {
      throw new NotFoundException(
        `Professeur avec l'ID ${professeurId} introuvable.`,
      );
    }

    if (ecoleId && professeur.ecoleId !== ecoleId) {
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

  async remove(id: string, ecoleId?: string) {
    const professeur = await this.prisma.professeur.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!professeur) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    if (ecoleId && professeur.ecoleId !== ecoleId) {
      throw new NotFoundException(`Professeur avec l'ID ${id} introuvable.`);
    }

    const evaluations = await this.prisma.evaluation.findMany({
      where: { professeurId: id },
      select: { id: true },
    });
    const evaluationIds = evaluations.map((e) => e.id);

    if (evaluationIds.length > 0) {
      await this.prisma.note.deleteMany({
        where: { evaluationId: { in: evaluationIds } },
      });
      await this.prisma.evaluation.deleteMany({
        where: { id: { in: evaluationIds } },
      });
    }

    await this.prisma.professeur.delete({ where: { id } });
    await this.prisma.user.delete({ where: { id: professeur.userId } });

    return { message: 'Professeur supprimé avec succès' };
  }

  async removeMatiere(professeurId: string, matiereId: string, ecoleId?: string) {
    if (ecoleId) {
      const professeur = await this.prisma.professeur.findUnique({
        where: { id: professeurId },
      });
      if (!professeur || professeur.ecoleId !== ecoleId) {
        throw new NotFoundException(`Professeur avec l'ID ${professeurId} introuvable.`);
      }
    }

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

  async assignClasse(professeurId: string, classeId: string, ecoleId?: string) {
    const professeur = await this.prisma.professeur.findUnique({
      where: { id: professeurId },
    });
    if (!professeur) {
      throw new NotFoundException(
        `Professeur avec l'ID ${professeurId} introuvable.`,
      );
    }

    if (ecoleId && professeur.ecoleId !== ecoleId) {
      throw new NotFoundException(`Professeur avec l'ID ${professeurId} introuvable.`);
    }

    const classe = await this.prisma.classe.findUnique({
      where: { id: classeId },
    });
    if (!classe) {
      throw new NotFoundException(`Classe avec l'ID ${classeId} introuvable.`);
    }

    const exists = await this.prisma.professeurClasse.findUnique({
      where: {
        professeurId_classeId: {
          professeurId,
          classeId,
        },
      },
    });
    if (exists) {
      throw new ConflictException(
        'Ce professeur est déjà assigné à cette classe.',
      );
    }

    return this.prisma.professeurClasse.create({
      data: { professeurId, classeId },
    });
  }

  async removeClasse(professeurId: string, classeId: string, ecoleId?: string) {
    if (ecoleId) {
      const professeur = await this.prisma.professeur.findUnique({
        where: { id: professeurId },
      });
      if (!professeur || professeur.ecoleId !== ecoleId) {
        throw new NotFoundException(`Professeur avec l'ID ${professeurId} introuvable.`);
      }
    }

    const exists = await this.prisma.professeurClasse.findUnique({
      where: {
        professeurId_classeId: {
          professeurId,
          classeId,
        },
      },
    });
    if (!exists) {
      throw new NotFoundException('Assignation classe non trouvée.');
    }

    return this.prisma.professeurClasse.delete({
      where: {
        professeurId_classeId: {
          professeurId,
          classeId,
        },
      },
    });
  }
}
