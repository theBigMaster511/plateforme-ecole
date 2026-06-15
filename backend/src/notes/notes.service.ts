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

  async create(dto: CreateNoteDto, professeurId?: string) {
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: dto.eleveId },
      include: { classe: true },
    });
    if (!eleve) {
      throw new NotFoundException(
        `Élève avec l'ID ${dto.eleveId} introuvable.`,
      );
    }

    let evaluationId = dto.evaluationId;

    if (!evaluationId && dto.matiereNom) {
      let classeId = eleve.classeId;
      if (!classeId) {
        const firstClasse = await this.prisma.classe.findFirst();
        classeId = firstClasse?.id || null;
      }
      let matiere = classeId
        ? await this.prisma.matiere.findFirst({
            where: { nom: dto.matiereNom, classeId },
          })
        : null;
      if (!matiere && classeId) {
        matiere = await this.prisma.matiere.create({
          data: { nom: dto.matiereNom, coefficient: 1, classeId },
        });
      }
      if (!matiere) {
        throw new NotFoundException(
          `Aucune classe trouvée pour créer la matière "${dto.matiereNom}".`,
        );
      }
      const pid = professeurId || (await this.prisma.professeur.findFirst())?.id;
      const existingEval = await this.prisma.evaluation.findFirst({
        where: { matiereId: matiere.id, professeurId: pid || undefined },
      });
      if (existingEval) {
        evaluationId = existingEval.id;
      } else if (pid) {
        const created = await this.prisma.evaluation.create({
          data: {
            titre: dto.matiereNom,
            type: 'DEVOIR' as any,
            date: new Date(),
            matiereId: matiere.id,
            professeurId: pid,
          },
        });
        evaluationId = created.id;
      }
    }

    if (!evaluationId) {
      throw new NotFoundException(
        'Aucune évaluation trouvée. Fournissez evaluationId ou matiereNom.',
      );
    }

    const evaluation = await this.prisma.evaluation.findUnique({
      where: { id: evaluationId },
    });
    if (!evaluation) {
      throw new NotFoundException(
        `Évaluation avec l'ID ${evaluationId} introuvable.`,
      );
    }

    const exists = await this.prisma.note.findUnique({
      where: {
        eleveId_evaluationId: {
          eleveId: dto.eleveId,
          evaluationId: evaluationId,
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
        evaluationId: evaluationId,
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
