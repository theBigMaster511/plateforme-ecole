import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('evaluations')
@ApiTags('Gestion des Évaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService, private readonly prisma: PrismaService) { }

  @Post()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Créer une évaluation', description: 'Créer une nouvelle évaluation pour une matière (ADMIN, PROFESSEUR)' })
  @ApiBody({ type: CreateEvaluationDto, description: 'Données de l\'évaluation' })
  @ApiResponse({ status: 201, description: 'Évaluation créée avec succès', type: CreateEvaluationDto })
  @ApiResponse({
    status: 404,
    description: 'Matière ou professeur introuvable',
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  create(@Body() dto: CreateEvaluationDto, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.evaluationsService.create(dto, ecoleId);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les évaluations', description: 'Récupérer la liste de toutes les évaluations (ADMIN, PROFESSEUR)' })
  @ApiQuery({ name: 'semestre', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Liste des évaluations récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async findAll(@Req() req: any, @Query('semestre') semestre?: string) {
    const ecoleId = req.user.ecoleId;
    if (!ecoleId) return [];
    const user = req.user;
    let professeurId: string | undefined;
    if (user && user.role === 'PROFESSEUR') {
      const prof = await this.prisma.professeur.findUnique({ where: { userId: user.id } });
      professeurId = prof?.id;
    }
    return this.evaluationsService.findAll(ecoleId, professeurId, semestre ? parseInt(semestre, 10) : undefined);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer une évaluation par ID', description: 'Détail d\'une évaluation spécifique (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' })
  @ApiResponse({ status: 200, description: 'Évaluation récupérée' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findOne(@Param('id') id: string, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.evaluationsService.findOne(id, ecoleId);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Modifier une évaluation', description: 'Mettre à jour les informations d\'une évaluation (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' })
  @ApiBody({ type: UpdateEvaluationDto, description: 'Champs à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Évaluation mise à jour' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateEvaluationDto, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.evaluationsService.update(id, dto, ecoleId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Supprimer une évaluation', description: 'Supprimer une évaluation (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'évaluation', example: 'eval123456789' })
  @ApiResponse({ status: 200, description: 'Évaluation supprimée' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  remove(@Param('id') id: string, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.evaluationsService.remove(id, ecoleId);
  }
}
