import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { CreateNotesBulkDto } from './dto/create-notes-bulk.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNoteDto) {
    // Vérifier que l'élève et l'évaluation existent
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: dto.eleveId },
    });
    if (!eleve) {
      throw new NotFoundException(
        `Élève avec l'ID ${dto.eleveId} introuvable.`,
      );
    }

    const evaluation = await this.prisma.evaluation.findUnique({
      where: { id: dto.evaluationId },
    });
    if (!evaluation) {
      throw new NotFoundException(
        `Évaluation avec l'ID ${dto.evaluationId} introuvable.`,
      );
    }

    // Vérifier qu'une note unique n'existe pas déjà pour cet élève et cette évaluation
    const exists = await this.prisma.note.findUnique({
      where: {
        eleveId_evaluationId: {
          eleveId: dto.eleveId,
          evaluationId: dto.evaluationId,
        },
      },
    });
    if (exists) {
      throw new ConflictException(
        'Une note existe déjà pour cet élève et cette évaluation.',
      );
    }

    return this.prisma.note.create({
      data: {
        valeur: dto.valeur,
        appreciation: dto.appreciation,
        eleveId: dto.eleveId,
        evaluationId: dto.evaluationId,
      },
    });
  }

  async createBulk(dto: CreateNotesBulkDto) {
    const results: any[] = [];

    for (const note of dto.notes) {
      try {
        const created = await this.create(note);
        results.push({ success: true, data: created });
      } catch (error) {
        results.push({
          success: false,
          error: (error as any).message,
          eleveId: note.eleveId,
        });
      }
    }

    return results;
  }

  async findByEleve(eleveId: string) {
    // Vérifier que l'élève existe
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
    });
    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
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

  async findOne(id: string) {
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
      throw new NotFoundException(`Note avec l'ID ${id} introuvable.`);
    }

    return note;
  }

  async update(id: string, dto: UpdateNoteDto) {
    // Vérifier que la note existe
    await this.findOne(id);

    return this.prisma.note.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    // Vérifier que la note existe
    await this.findOne(id);

    return this.prisma.note.delete({
      where: { id },
    });
  }
}
