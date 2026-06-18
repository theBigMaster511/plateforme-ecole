import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { ProfesseursService } from './professeurs.service';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';

@Controller('professeurs')
@ApiTags('Gestion des Professeurs')
export class ProfesseursController {
  constructor(private readonly professeursService: ProfesseursService) { }

  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lister tous les professeurs', description: 'Récupérer la liste complète des professeurs (ADMIN uniquement)' })
  @ApiResponse({ status: 200, description: 'Liste des professeurs récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findAll() {
    return this.professeursService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer un professeur par ID', description: 'Détails d\'un professeur spécifique (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique du professeur', example: 'prof123456789' })
  @ApiResponse({ status: 200, description: 'Professeur récupéré' })
  @ApiResponse({ status: 404, description: 'Professeur introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findOne(@Param('id') id: string) {
    return this.professeursService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un professeur', description: 'Mettre à jour les informations d\'un professeur (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique du professeur', example: 'prof123456789' })
  @ApiBody({ type: UpdateProfesseurDto, description: 'Données à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Professeur mis à jour' })
  @ApiResponse({ status: 404, description: 'Professeur introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateProfesseurDto) {
    return this.professeursService.update(id, dto);
  }

  @Post(':id/matieres/:matiereId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Assigner une matière à un professeur', description: 'Lier une matière spécifique à un professeur (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique du professeur', example: 'prof123456789' })
  @ApiParam({ name: 'matiereId', description: 'ID unique de la matière', example: 'mat123456789' })
  @ApiResponse({ status: 201, description: 'Matière assignée' })
  @ApiResponse({
    status: 404,
    description: 'Professeur ou matière introuvable',
  })
  @ApiResponse({ status: 409, description: 'Assignation déjà existante' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  assignMatiere(
    @Param('id') professeurId: string,
    @Param('matiereId') matiereId: string,
  ) {
    return this.professeursService.assignMatiere(professeurId, matiereId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(200)
  @ApiOperation({ summary: 'Supprimer un professeur', description: 'Supprimer définitivement un professeur et son compte utilisateur (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique du professeur', example: 'prof123456789' })
  @ApiResponse({ status: 200, description: 'Professeur supprimé' })
  @ApiResponse({ status: 404, description: 'Professeur introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  remove(@Param('id') id: string) {
    return this.professeursService.remove(id);
  }

  @Delete(':id/matieres/:matiereId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Retirer une matière d'un professeur", description: "Supprimer le lien entre un professeur et une matière (ADMIN uniquement)" })
  @ApiParam({ name: 'id', description: 'ID unique du professeur', example: 'prof123456789' })
  @ApiParam({ name: 'matiereId', description: 'ID unique de la matière', example: 'mat123456789' })
  @ApiResponse({ status: 200, description: 'Matière retirée' })
  @ApiResponse({ status: 404, description: 'Assignation introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  removeMatiere(
    @Param('id') professeurId: string,
    @Param('matiereId') matiereId: string,
  ) {
    return this.professeursService.removeMatiere(professeurId, matiereId);
  }

  @Post(':id/classes/:classeId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Assigner une classe à un professeur' })
  @ApiResponse({ status: 201, description: 'Classe assignée' })
  @ApiResponse({ status: 409, description: 'Assignation déjà existante' })
  assignClasse(
    @Param('id') professeurId: string,
    @Param('classeId') classeId: string,
  ) {
    return this.professeursService.assignClasse(professeurId, classeId);
  }

  @Delete(':id/classes/:classeId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Retirer une classe d'un professeur" })
  @ApiResponse({ status: 200, description: 'Classe retirée' })
  @ApiResponse({ status: 404, description: 'Assignation introuvable' })
  removeClasse(
    @Param('id') professeurId: string,
    @Param('classeId') classeId: string,
  ) {
    return this.professeursService.removeClasse(professeurId, classeId);
  }
}
