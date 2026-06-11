import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEcoleDto } from 'src/ecole/dto/create-ecole.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';

@Injectable()
export class ElevesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.eleve.findMany({
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

  async update(id: string, dto: UpdateEleveDto) {
    // Vérifier que l'élève existe
    await this.findOne(id);

    return this.prisma.eleve.update({
      where: { id },
      data: {
        dateNaissance: dto.dateNaissance
          ? new Date(dto.dateNaissance)
          : undefined,
      },
    });
  }

  async assignClasse(eleveId: string, classeId: string) {
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

    return this.prisma.eleve.update({
      where: { id: eleveId },
      data: {
        classeId,
      },
    });
  }

  async createEleve(data:CreateEleveDto, userId: string) {
    const { dateNaissance, adresse, Nom, Matricule, MotDePasse, ClasseId, email } = data;
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
}
