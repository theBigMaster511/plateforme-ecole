import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { FraisScolaireService } from './frais-scolaire.service';
import { CreateFraisDto } from './dto/create-frais.dto';
import { UpdateFraisDto } from './dto/update-frais.dto';
import { AddPaiementDto } from './dto/add-paiement.dto';

@Controller()
@ApiTags('Gestion des Frais Scolaires')
export class FraisScolaireController {
  constructor(
    private readonly fraisScolaireService: FraisScolaireService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('frais-scolaire')
  @Roles(Role.ADMIN, Role.PARENT, Role.ELEVE)
  @ApiOperation({ summary: 'Lister les frais', description: 'Liste des frais selon le rôle (ADMIN tous, PARENT enfants, ELEVE soi-même)' })
  @ApiResponse({ status: 200, description: 'Liste des frais', isArray: true })
  async findAll(@Req() req: Request) {
    const user = (req as any).user;

    if (user.role === Role.ADMIN) {
      return this.fraisScolaireService.findAll(user.ecoleId);
    }

    if (user.role === Role.PARENT) {
      const parentRecord = await this.prisma.parent.findUnique({
        where: { userId: user.id },
        include: { enfants: true },
      });
      if (!parentRecord) return [];
      const results = await Promise.all(
        parentRecord.enfants.map((pe) =>
          this.fraisScolaireService.findByEleve(pe.eleveId),
        ),
      );
      return results.flat();
    }

    if (user.role === Role.ELEVE) {
      const eleveRecord = await this.prisma.eleve.findUnique({
        where: { userId: user.id },
      });
      if (!eleveRecord) return [];
      return this.fraisScolaireService.findByEleve(eleveRecord.id);
    }

    return [];
  }

  @Get('frais-scolaire/stats')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Statistiques des frais', description: 'Stats globales pour le tableau de bord admin' })
  @ApiResponse({ status: 200, description: 'Statistiques' })
  getStats(@Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.getStats(ecoleId);
  }

  @Get('frais-scolaire/eleve/:eleveId')
  @Roles(Role.ADMIN, Role.PARENT, Role.ELEVE)
  @ApiOperation({ summary: 'Frais par élève', description: 'Récupérer les frais d\'un élève spécifique' })
  @ApiParam({ name: 'eleveId', description: 'ID de l\'élève' })
  @ApiResponse({ status: 200, description: 'Frais de l\'élève', isArray: true })
  @ApiResponse({ status: 403, description: 'Accès refusé' })
  async findByEleve(@Param('eleveId') eleveId: string, @Req() req: Request) {
    const user = (req as any).user;

    if (user.role === Role.ADMIN) {
      return this.fraisScolaireService.findByEleve(eleveId, user.ecoleId);
    }

    if (user.role === Role.PARENT) {
      const parentRecord = await this.prisma.parent.findUnique({
        where: { userId: user.id },
        include: { enfants: true },
      });
      if (!parentRecord || !parentRecord.enfants.some((pe) => pe.eleveId === eleveId)) {
        throw new ForbiddenException('Accès refusé');
      }
      return this.fraisScolaireService.findByEleve(eleveId);
    }

    if (user.role === Role.ELEVE) {
      const eleveRecord = await this.prisma.eleve.findUnique({
        where: { userId: user.id },
      });
      if (!eleveRecord || eleveRecord.id !== eleveId) {
        throw new ForbiddenException('Accès refusé');
      }
      return this.fraisScolaireService.findByEleve(eleveId);
    }

    return [];
  }

  @Post('frais-scolaire')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Créer un frais', description: 'Ajouter un nouveau frais scolaire (ADMIN)' })
  @ApiBody({ type: CreateFraisDto })
  @ApiResponse({ status: 201, description: 'Frais créé' })
  create(@Body() dto: CreateFraisDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.create(dto, ecoleId);
  }

  @Patch('frais-scolaire/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un frais', description: 'Mettre à jour un frais scolaire (ADMIN)' })
  @ApiParam({ name: 'id', description: 'ID du frais' })
  @ApiBody({ type: UpdateFraisDto })
  @ApiResponse({ status: 200, description: 'Frais mis à jour' })
  update(@Param('id') id: string, @Body() dto: UpdateFraisDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.update(id, dto, ecoleId);
  }

  @Delete('frais-scolaire/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer un frais', description: 'Supprimer un frais scolaire (ADMIN)' })
  @ApiParam({ name: 'id', description: 'ID du frais' })
  @ApiResponse({ status: 200, description: 'Frais supprimé' })
  remove(@Param('id') id: string, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.remove(id, ecoleId);
  }

  @Post('frais-scolaire/:id/paiement')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Ajouter un paiement', description: 'Enregistrer un paiement pour un frais (ADMIN)' })
  @ApiParam({ name: 'id', description: 'ID du frais' })
  @ApiBody({ type: AddPaiementDto })
  @ApiResponse({ status: 201, description: 'Paiement ajouté' })
  addPaiement(@Param('id') id: string, @Body() dto: AddPaiementDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.addPaiement(id, dto, ecoleId);
  }

  @Delete('paiement/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer un paiement', description: 'Supprimer un paiement et recalculer le statut (ADMIN)' })
  @ApiParam({ name: 'id', description: 'ID du paiement' })
  @ApiResponse({ status: 200, description: 'Paiement supprimé' })
  removePaiement(@Param('id') id: string, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.fraisScolaireService.removePaiement(id, ecoleId);
  }
}
