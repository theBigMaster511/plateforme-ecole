import {
  ConflictException,
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateParentDto } from './dto/update-parent.dto';

@Injectable()
export class ParentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(ecoleId?: string) {
    const where: any = {};
    if (ecoleId) {
      where.enfants = {
        some: {
          eleve: {
            classe: {
              ecoleId,
            },
          },
        },
      };
    }
    return this.prisma.parent.findMany({
      where,
      include: {
        user: true,
        enfants: {
          include: {
            eleve: {
              include: {
                user: true,
                classe: true,
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

  async findOne(id: string, ecoleId?: string) {
    const parent = await this.prisma.parent.findUnique({
      where: { id },
      include: {
        user: true,
        enfants: {
          include: {
            eleve: {
              include: {
                user: true,
                classe: true,
              },
            },
          },
        },
      },
    });

    if (!parent) {
      throw new NotFoundException(`Parent avec l'ID ${id} introuvable.`);
    }

    if (ecoleId) {
      const belongsToSchool = parent.enfants.some(
        (pe) => pe.eleve.classe?.ecoleId === ecoleId,
      );
      if (!belongsToSchool) {
        throw new ForbiddenException('Ce parent ne fait pas partie de votre école.');
      }
    }

    return parent;
  }

  async update(id: string, dto: UpdateParentDto, ecoleId?: string) {
    await this.findOne(id, ecoleId);

    return this.prisma.parent.update({
      where: { id },
      data: dto,
    });
  }

  async linkEnfant(parentId: string, eleveId: string, ecoleId?: string) {
    const parent = await this.prisma.parent.findUnique({
      where: { id: parentId },
    });
    if (!parent) {
      throw new NotFoundException(`Parent avec l'ID ${parentId} introuvable.`);
    }

    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
      include: { classe: true },
    });
    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
    }

    if (ecoleId && eleve.classe?.ecoleId !== ecoleId) {
      throw new ForbiddenException("Cet élève n'appartient pas à votre école.");
    }

    const exists = await this.prisma.parentEleve.findUnique({
      where: {
        parentId_eleveId: { parentId, eleveId },
      },
    });
    if (exists) {
      throw new ConflictException('Ce parent est déjà lié à cet élève.');
    }

    return this.prisma.parentEleve.create({
      data: { parentId, eleveId },
    });
  }

  async unlinkEnfant(parentId: string, eleveId: string, ecoleId?: string) {
    if (ecoleId) {
      const eleve = await this.prisma.eleve.findUnique({
        where: { id: eleveId },
        include: { classe: true },
      });
      if (!eleve || eleve.classe?.ecoleId !== ecoleId) {
        throw new ForbiddenException("Cet élève n'appartient pas à votre école.");
      }
    }

    const exists = await this.prisma.parentEleve.findUnique({
      where: {
        parentId_eleveId: { parentId, eleveId },
      },
    });
    if (!exists) {
      throw new NotFoundException('Liaison parent-élève introuvable.');
    }

    return this.prisma.parentEleve.delete({
      where: {
        parentId_eleveId: { parentId, eleveId },
      },
    });
  }
}
