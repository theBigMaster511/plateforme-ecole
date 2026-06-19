import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';

@Injectable()
export class ElevesService {
  constructor(private prisma: PrismaService) {}

  async findAll(ecoleId: string, professeurId?: string) {
    const where: any = { classe: { ecoleId } };

    if (professeurId) {
      const classes = await this.prisma.professeurClasse.findMany({
        where: { professeurId },
        select: { classeId: true },
      });
      const classeIds = classes.map((c) => c.classeId);
      if (classeIds.length > 0) {
        where.classeId = { in: classeIds };
      } else {
        where.classeId = null; // Aucune classe assignée → aucun résultat
      }
    }

    return this.prisma.eleve.findMany({
      where,
      include: {
        user: true,
        classe: true,
        notes: {
          include: {
            evaluation: {
              include: {
                matiere: true,
              },
            },
          },
        },
        parents: {
          include: {
            parent: {
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
    const eleve = await this.prisma.eleve.findUnique({
      where: { id },
      include: {
        user: true,
        classe: true,
        notes: {
          include: {
            evaluation: {
              include: {
                matiere: true,
              },
            },
          },
        },
        parents: {
          include: {
            parent: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${id} introuvable.`);
    }

    return eleve;
  }

  async update(id: string, dto: UpdateEleveDto, ecoleId?: string) {
    const eleve = await this.findOne(id);

    if (ecoleId && eleve.classeId) {
      const classe = await this.prisma.classe.findUnique({
        where: { id: eleve.classeId },
      });
      if (!classe || classe.ecoleId !== ecoleId) {
        throw new NotFoundException(`Élève avec l'ID ${id} introuvable.`);
      }
    }

    if (dto.name || dto.email) {
      await this.prisma.user.update({
        where: { id: eleve.userId },
        data: {
          ...(dto.name && { name: dto.name }),
          ...(dto.email && { email: dto.email }),
        },
      });
    }

    return this.prisma.eleve.update({
      where: { id },
      data: {
        ...(dto.dateNaissance && { dateNaissance: new Date(dto.dateNaissance) }),
        ...(dto.classeId && { classeId: dto.classeId }),
      },
    });
  }

  async assignClasse(eleveId: string, classeId: string, ecoleId?: string) {
    // Vérifier que l'élève et la classe existent
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: eleveId },
    });
    if (!eleve) {
      throw new NotFoundException(`Élève avec l'ID ${eleveId} introuvable.`);
    }

    const classe = await this.prisma.classe.findUnique({
      where: { id: classeId },
    });
    if (!classe) {
      throw new NotFoundException(`Classe avec l'ID ${classeId} introuvable.`);
    }

    if (ecoleId && classe.ecoleId !== ecoleId) {
      throw new NotFoundException(`Classe avec l'ID ${classeId} introuvable.`);
    }

    return this.prisma.eleve.update({
      where: { id: eleveId },
      data: {
        classeId,
      },
    });
  }

  async createEleve(data:CreateEleveDto, userId: string, ecoleId: string) {
    const { dateNaissance, adresse, Nom, Matricule, MotDePasse, ClasseId, email } = data;

    const classe = await this.prisma.classe.findFirst({
      where: { id: ClasseId, ecoleId },
    });
    if (!classe) {
      throw new NotFoundException(`Classe avec l'ID ${ClasseId} introuvable.`);
    }

    const existingEleve = await this.prisma.eleve.findUnique({
      where:{
        matricule: Matricule
      }
    })


    if(existingEleve){
      throw new NotFoundException(`Un élève avec le matricule ${Matricule} existe déjà.`);
    }

    
    const user = await this.prisma.eleve.create({
      data:{
        dateNaissance: new Date(dateNaissance),
        matricule: Matricule,
        classeId: ClasseId,
        userId : userId
      }
    });

    return user
  }

  async remove(id: string, ecoleId?: string) {
    const eleve = await this.findOne(id);

    if (ecoleId && eleve.classe?.ecoleId !== ecoleId) {
      throw new NotFoundException(`Élève avec l'ID ${id} introuvable.`);
    }

    await this.prisma.parentEleve.deleteMany({ where: { eleveId: id } });
    await this.prisma.note.deleteMany({ where: { eleveId: id } });
    await this.prisma.eleve.delete({ where: { id } });
    await this.prisma.user.delete({ where: { id: eleve.userId } }).catch(() => {});

    return { message: 'Élève supprimé avec succès' };
  }
}
