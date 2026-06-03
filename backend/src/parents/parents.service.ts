import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateParentDto } from './dto/update-parent.dto';

@Injectable()
export class ParentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.parent.findMany({
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

  async findOne(id: string) {
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

    return parent;
  }

  async update(id: string, dto: UpdateParentDto) {
    // Vérifier que le parent existe
    await this.findOne(id);

    return this.prisma.parent.update({
      where: { id },
      data: dto,
    });
  }

  async linkEnfant(parentId: string, eleveId: string) {
    // Vérifier que le parent et l'élève existent
    const parent = await this.prisma.parent.findUnique({
      where: { id: parentId },
    });
    if (!parent) {
      throw new NotFoundException(`Parent avec l'ID ${parentId} introuvable.`);
    }

    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
    });
    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
    }

    // Vérifier que la liaison n'existe pas déjà
    const exists = await this.prisma.parentEleve.findUnique({
      where: {
        parentId_eleveId: {
          parentId,
          eleveId,
        },
      },
    });
    if (exists) {
      throw new ConflictException('Ce parent est déjà lié à cet élève.');
    }

    return this.prisma.parentEleve.create({
      data: {
        parentId,
        eleveId,
      },
    });
  }

  async unlinkEnfant(parentId: string, eleveId: string) {
    // Vérifier que la liaison existe
    const exists = await this.prisma.parentEleve.findUnique({
      where: {
        parentId_eleveId: {
          parentId,
          eleveId,
        },
      },
    });
    if (!exists) {
      throw new NotFoundException('Liaison parent-élève introuvable.');
    }

    return this.prisma.parentEleve.delete({
      where: {
        parentId_eleveId: {
          parentId,
          eleveId,
        },
      },
    });
  }
}
