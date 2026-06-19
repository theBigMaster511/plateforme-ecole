import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFraisDto } from './dto/create-frais.dto';
import { UpdateFraisDto } from './dto/update-frais.dto';
import { AddPaiementDto } from './dto/add-paiement.dto';

@Injectable()
export class FraisScolaireService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFraisDto, ecoleId: string) {
    const eleve = await this.prisma.eleve.findUnique({
      where: { id: dto.eleveId },
      include: { classe: true },
    });

    if (!eleve) {
      throw new NotFoundException(`Élève ${dto.eleveId} introuvable`);
    }

    if (eleve.classe?.ecoleId !== ecoleId) {
      throw new NotFoundException(`Élève ${dto.eleveId} introuvable`);
    }

    return this.prisma.fraisScolaire.create({
      data: {
        eleveId: dto.eleveId,
        libelle: dto.libelle,
        montant: dto.montant,
        echeance: new Date(dto.echeance),
        ecoleId,
      },
      include: { eleve: { include: { user: true } }, paiements: true },
    });
  }

  async findAll(ecoleId?: string) {
    return this.prisma.fraisScolaire.findMany({
      where: ecoleId ? { ecoleId } : undefined,
      include: {
        eleve: { include: { user: true } },
        paiements: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByEleve(eleveId: string, ecoleId?: string) {
    if (ecoleId) {
      const eleve = await this.prisma.eleve.findUnique({
        where: { id: eleveId },
        include: { classe: true },
      });
      if (!eleve || eleve.classe?.ecoleId !== ecoleId) {
        throw new NotFoundException(`Élève ${eleveId} introuvable`);
      }
    }

    return this.prisma.fraisScolaire.findMany({
      where: { eleveId },
      include: {
        eleve: { include: { user: true } },
        paiements: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, ecoleId?: string) {
    const frais = await this.prisma.fraisScolaire.findUnique({
      where: { id },
      include: {
        eleve: { include: { user: true, classe: true } },
        paiements: true,
      },
    });

    if (!frais) {
      throw new NotFoundException(`Frais ${id} introuvable`);
    }

    if (ecoleId && frais.ecoleId !== ecoleId) {
      throw new NotFoundException(`Frais ${id} introuvable`);
    }

    return frais;
  }

  async getStats(ecoleId?: string) {
    const where = ecoleId ? { ecoleId } : undefined;

    const fraisList = await this.prisma.fraisScolaire.findMany({ where });

    const totalDu = fraisList.reduce((sum, f) => sum + f.montant, 0);
    const totalPaye = fraisList.reduce((sum, f) => sum + f.montantPaye, 0);

    const now = new Date();
    const enRetard = fraisList.filter(
      (f) => f.montantPaye < f.montant && new Date(f.echeance) < now,
    ).length;

    return {
      totalDu,
      totalPaye,
      enRetard,
      total: fraisList.length,
    };
  }

  async update(id: string, dto: UpdateFraisDto, ecoleId?: string) {
    await this.findOne(id, ecoleId);

    return this.prisma.fraisScolaire.update({
      where: { id },
      data: {
        libelle: dto.libelle,
        montant: dto.montant,
        echeance: dto.echeance ? new Date(dto.echeance) : undefined,
      },
      include: {
        eleve: { include: { user: true } },
        paiements: true,
      },
    });
  }

  async remove(id: string, ecoleId?: string) {
    await this.findOne(id, ecoleId);

    return this.prisma.fraisScolaire.delete({ where: { id } });
  }

  async addPaiement(fraisId: string, dto: AddPaiementDto, ecoleId?: string) {
    await this.findOne(fraisId, ecoleId);

    const [paiement] = await this.prisma.$transaction([
      this.prisma.paiement.create({
        data: {
          fraisId,
          montant: dto.montant,
          methode: dto.methode,
          reference: dto.reference,
        },
      }),
    ]);

    await this.recalculerStatut(fraisId);

    return this.prisma.paiement.findUnique({
      where: { id: paiement.id },
      include: { frais: { include: { eleve: { include: { user: true } } } } },
    });
  }

  async removePaiement(paiementId: string, ecoleId?: string) {
    const paiement = await this.prisma.paiement.findUnique({
      where: { id: paiementId },
      include: { frais: true },
    });

    if (!paiement) {
      throw new NotFoundException(`Paiement ${paiementId} introuvable`);
    }

    if (ecoleId && paiement.frais.ecoleId !== ecoleId) {
      throw new NotFoundException(`Paiement ${paiementId} introuvable`);
    }

    await this.prisma.paiement.delete({ where: { id: paiementId } });

    await this.recalculerStatut(paiement.fraisId);

    return { message: 'Paiement supprimé avec succès' };
  }

  private async recalculerStatut(fraisId: string) {
    const frais = await this.prisma.fraisScolaire.findUnique({
      where: { id: fraisId },
    });

    if (!frais) return;

    const paiements = await this.prisma.paiement.findMany({
      where: { fraisId },
    });

    const montantPaye = paiements.reduce((sum, p) => sum + p.montant, 0);

    let statut: string;
    if (montantPaye >= frais.montant) {
      statut = 'payé';
    } else if (new Date() > new Date(frais.echeance)) {
      statut = 'en_retard';
    } else if (montantPaye > 0) {
      statut = 'partiel';
    } else {
      statut = 'impayé';
    }

    await this.prisma.fraisScolaire.update({
      where: { id: fraisId },
      data: { montantPaye, statut },
    });
  }
}
