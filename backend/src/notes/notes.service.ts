import {
  ConflictException,
  ForbiddenException,
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

  async create(dto: CreateNoteDto, professeurId?: string, ecoleId?: string) {
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: dto.eleveId },
      include: { classe: true },
    });
    if (!eleve) {
      throw new NotFoundException(
        `Élève avec l'ID ${dto.eleveId} introuvable.`,
      );
    }
    if (ecoleId && eleve.classe?.ecoleId !== ecoleId) {
      throw new NotFoundException(
        `Élève avec l'ID ${dto.eleveId} introuvable.`,
      );
    }

    // Si un professeur est spécifié, vérifier qu'il est assigné à cette classe et à cette matière
    if (professeurId) {
      const estDansClasse = await this.prisma.professeurClasse.findUnique({
        where: {
          professeurId_classeId: {
            professeurId,
            classeId: eleve.classeId || '',
          },
        },
      });
      if (!estDansClasse) {
        throw new ForbiddenException(
          'Vous ne pouvez noter que les élèves de vos classes assignées.',
        );
      }
    }

    let evaluationId = dto.evaluationId;

    if (!evaluationId && dto.matiereNom) {
      const classeId = eleve.classeId;
      if (!classeId) {
        throw new NotFoundException(
          `L'élève "${eleve.id}" n'a pas de classe assignée.`,
        );
      }
      let matiere = await this.prisma.matiere.findFirst({
        where: { nom: dto.matiereNom, classeId },
      });
      if (!matiere) {
        if (!dto.coefficient) {
          throw new NotFoundException(
            `Le coefficient est requis pour créer la matière "${dto.matiereNom}".`,
          );
        }
        matiere = await this.prisma.matiere.create({
          data: { nom: dto.matiereNom, coefficient: dto.coefficient, classeId },
        });
      }
      // Vérifier que le professeur est assigné à cette matière
      if (professeurId) {
        const estAssignMatiere = await this.prisma.professeurMatiere.findUnique({
          where: {
            professeurId_matiereId: {
              professeurId,
              matiereId: matiere.id,
            },
          },
        });
        if (!estAssignMatiere) {
          throw new ForbiddenException(
            `Vous n'êtes pas assigné à la matière "${dto.matiereNom}".`,
          );
        }
      }
      const ecoleId = eleve.classe?.ecoleId;
      const pid = professeurId || (ecoleId ? (await this.prisma.professeur.findFirst({ where: { ecoleId } }))?.id : undefined);
      const existingEval = await this.prisma.evaluation.findFirst({
        where: { matiereId: matiere.id, professeurId: pid || undefined },
      });
      if (existingEval) {
        evaluationId = existingEval.id;
      } else if (pid) {
        const mois = new Date().getMonth() + 1;
        const semestre = (mois >= 10 || mois <= 3) ? 1 : 2;
        const created = await this.prisma.evaluation.create({
          data: {
            titre: dto.matiereNom,
            type: 'DEVOIR' as any,
            date: new Date(),
            matiereId: matiere.id,
            professeurId: pid,
            semestre,
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

  async createBulk(dto: CreateNotesBulkDto, professeurId?: string, ecoleId?: string) {
    const results: any[] = [];

    for (const note of dto.notes) {
      try {
        const created = await this.create(note, professeurId, ecoleId);
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

  async findByEleve(eleveId: string, ecoleId?: string) {
    // Vérifier que l'élève existe
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
      include: { classe: true },
    });
    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
    }
    if (ecoleId && eleve.classe?.ecoleId !== ecoleId) {
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

  async findAll(ecoleId?: string, professeurId?: string) {
    const where: any = ecoleId
      ? { eleve: { classe: { ecoleId } } }
      : {};

    if (professeurId) {
      const classes = await this.prisma.professeurClasse.findMany({
        where: { professeurId },
        select: { classeId: true },
      });
      const classeIds = classes.map((c) => c.classeId);
      where.eleve = { ...(where.eleve || {}), classeId: { in: classeIds } };
    }

    return this.prisma.note.findMany({
      where,
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

  async update(id: string, dto: UpdateNoteDto, ecoleId?: string) {
    // Vérifier que la note existe
    const note = await this.findOne(id);
    if (ecoleId && note.eleve.classe?.ecoleId !== ecoleId) {
      throw new NotFoundException(`Note avec l'ID ${id} introuvable.`);
    }

    return this.prisma.note.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, ecoleId?: string) {
    // Vérifier que la note existe
    const note = await this.findOne(id);
    if (ecoleId && note.eleve.classe?.ecoleId !== ecoleId) {
      throw new NotFoundException(`Note avec l'ID ${id} introuvable.`);
    }

    return this.prisma.note.delete({
      where: { id },
    });
  }
}
