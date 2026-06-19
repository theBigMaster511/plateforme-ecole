import {
  ConflictException,
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEcoleDto } from './dto/create-ecole.dto';
import { UpdateEcoleDto } from './dto/update-ecole.dto';

@Injectable()
export class EcoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEcoleDto, userId: string) {
    const exists = await this.prisma.ecole.findFirst({
      where: { userId },
    });
    if (exists) {
      throw new ConflictException(
        'Une école existe déjà. Une seule école est autorisée.',
      );
    }

    if (dto.email) {
      const emailExists = await this.prisma.ecole.findUnique({
        where: { email: dto.email },
      });
      if (emailExists) {
        throw new ConflictException('Cet email est déjà utilisé.');
      }
    }

    return this.prisma.ecole.create({
      data: {
        nom: dto.nom,
        adresse: dto.adresse,
        telephone: dto.telephone,
        email: dto.email,
        siteWeb: dto.siteWeb,
        logo: dto.logo,
        directeur: dto.directeur,
        ville: dto.ville,
        pays: dto.pays || 'Sénégal',
        codePostal: dto.codePostal,
        description: dto.description,
        userId,
      },
    });
  }

  async findAll() {
    return this.prisma.ecole.findMany();
  }

  async findOne(userId: string) {
    const ecole = await this.prisma.ecole.findFirst({
      where: { userId },
    });
    if (!ecole) {
      throw new NotFoundException('Aucune école configurée.');
    }
    return ecole;
  }

  async update(id: string, dto: UpdateEcoleDto, user?: any) {
    const ecole = await this.prisma.ecole.findUnique({ where: { id } });
    if (!ecole) {
      throw new NotFoundException(`École avec l'ID ${id} introuvable.`);
    }

    if (user && ecole.userId !== user.id) {
      throw new ForbiddenException("Vous n'êtes pas autorisé à modifier cette école.");
    }

    if (dto.email && dto.email !== ecole.email) {
      const emailExists = await this.prisma.ecole.findUnique({
        where: { email: dto.email },
      });
      if (emailExists) {
        throw new ConflictException('Cet email est déjà utilisé.');
      }
    }

    if (dto.nom && dto.nom !== ecole.nom) {
      const nomExists = await this.prisma.ecole.findUnique({
        where: { nom: dto.nom },
      });
      if (nomExists) {
        throw new ConflictException("Ce nom d'école existe déjà.");
      }
    }

    return this.prisma.ecole.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, user?: any) {
    const ecole = await this.prisma.ecole.findUnique({ where: { id } });
    if (!ecole) {
      throw new NotFoundException(`École avec l'ID ${id} introuvable.`);
    }

    if (user && ecole.userId !== user.id) {
      throw new ForbiddenException("Vous n'êtes pas autorisé à supprimer cette école.");
    }

    return this.prisma.ecole.delete({
      where: { id },
    });
  }
}
