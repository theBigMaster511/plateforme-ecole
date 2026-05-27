import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';

@Injectable()
export class ClasseService {
  constructor(private prisma: PrismaService) { }


  async create(dto: CreateClasseDto) {
    // Verfie si la classe existe deja
    const exists = await this.prisma.classe.findFirst({
      where: {
        nom: dto.name,
        annee: dto.years
      }
    })


    if (exists) {
      throw new ConflictException(`La classe ${dto.name} existe deja pour l'annee ${dto.years}`)
    }

    return this.prisma.classe.create({
      data: {
        nom: dto.name,
        annee: dto.years,
        niveau: dto.level
      }
    })
  }

  async finAll() {
    return this.prisma.classe.findMany({
      include: {
        _count: {
          select: {
            eleves: true,
            matieres: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    })
  }


  async findOne(id:string) {
    const classe = await this.prisma.classe.findUnique({
      where: {
        id
      },
      include: {
        eleves: {
          include: {
            user:true
          }
        },
        matieres: true,
        _count: {
          select: {
            eleves: true,
            matieres:true
          }
        }
      }
    })

    if (!classe) {
      throw new NotFoundException(`Classe ${id} introuvable`)
    }

    return classe
  }


  async update(id: string, dto: UpdateClassDto) {
    await this.findOne(id)

    return this.prisma.classe.update({
      where: {
        id
      },
      data: {
        nom: dto.name,
        niveau: dto.level,
        annee: dto.years
      }
    })
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.prisma.classe.delete({
      where:{id}
    })
  }

}
