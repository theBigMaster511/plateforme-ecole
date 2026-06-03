import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEcoleDto } from './dto/create-ecole.dto';
import { UpdateEcoleDto } from './dto/update-ecole.dto';

@Injectable()
export class EcoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEcoleDto) {
    // Vérifier s'il existe déjà une école
    const exists = await this.prisma.ecole.findFirst();
    if (exists) {
      throw new ConflictException(
        'Une école existe déjà. Une seule école est autorisée.',
      );
    }

    // Vérifier si l'email est unique s'il est fourni
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
      },
    });
  }

  async findAll() {
    return this.prisma.ecole.findMany();
  }

  async findOne() {
    const ecole = await this.prisma.ecole.findFirst();
    if (!ecole) {
      throw new NotFoundException('Aucune école configurée.');
    }
    return ecole;
  }

  async update(id: string, dto: UpdateEcoleDto) {
    // Vérifier que l'école existe
    const ecole = await this.prisma.ecole.findUnique({ where: { id } });
    if (!ecole) {
      throw new NotFoundException(`École avec l'ID ${id} introuvable.`);
    }

    // Vérifier que le nouvel email n'existe pas
    if (dto.email && dto.email !== ecole.email) {
      const emailExists = await this.prisma.ecole.findUnique({
        where: { email: dto.email },
      });
      if (emailExists) {
        throw new ConflictException('Cet email est déjà utilisé.');
      }
    }

    // Vérifier que le nouveau nom n'existe pas
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

  async remove(id: string) {
    const ecole = await this.prisma.ecole.findUnique({ where: { id } });
    if (!ecole) {
      throw new NotFoundException(`École avec l'ID ${id} introuvable.`);
    }

    return this.prisma.ecole.delete({
      where: { id },
    });
  }
}
