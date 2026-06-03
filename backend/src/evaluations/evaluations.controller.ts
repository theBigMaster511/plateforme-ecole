import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Controller('evaluations')
@ApiTags('Gestion des Évaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post()
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Créer une évaluation' })
  @ApiResponse({ status: 201, description: 'Évaluation créée avec succès' })
  @ApiResponse({
    status: 404,
    description: 'Matière ou professeur introuvable',
  })
  create(@Body() dto: CreateEvaluationDto) {
    return this.evaluationsService.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les évaluations' })
  @ApiResponse({ status: 200, description: 'Liste des évaluations récupérée' })
  findAll() {
    return this.evaluationsService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer une évaluation par ID' })
  @ApiResponse({ status: 200, description: 'Évaluation récupérée' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  findOne(@Param('id') id: string) {
    return this.evaluationsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Modifier une évaluation' })
  @ApiResponse({ status: 200, description: 'Évaluation mise à jour' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateEvaluationDto) {
    return this.evaluationsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Supprimer une évaluation' })
  @ApiResponse({ status: 200, description: 'Évaluation supprimée' })
  @ApiResponse({ status: 404, description: 'Évaluation introuvable' })
  remove(@Param('id') id: string) {
    return this.evaluationsService.remove(id);
  }
}
