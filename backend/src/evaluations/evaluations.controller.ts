import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Controller('evaluations')
@ApiTags('Gestion des Évaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) { }

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
  @ApiResponse({ status: 200, description: 'Liste des évaluations récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findAll(@Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.evaluationsService.findAll(ecoleId);
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
