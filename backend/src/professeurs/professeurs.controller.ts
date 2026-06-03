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
import { ProfesseursService } from './professeurs.service';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';

@Controller('professeurs')
@ApiTags('Gestion des Professeurs')
export class ProfesseursController {
  constructor(private readonly professeursService: ProfesseursService) {}

  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lister tous les professeurs' })
  @ApiResponse({ status: 200, description: 'Liste des professeurs récupérée' })
  findAll() {
    return this.professeursService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer un professeur par ID' })
  @ApiResponse({ status: 200, description: 'Professeur récupéré' })
  @ApiResponse({ status: 404, description: 'Professeur introuvable' })
  findOne(@Param('id') id: string) {
    return this.professeursService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un professeur' })
  @ApiResponse({ status: 200, description: 'Professeur mis à jour' })
  @ApiResponse({ status: 404, description: 'Professeur introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateProfesseurDto) {
    return this.professeursService.update(id, dto);
  }

  @Post(':id/matieres/:matiereId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Assigner une matière à un professeur' })
  @ApiResponse({ status: 201, description: 'Matière assignée' })
  @ApiResponse({
    status: 404,
    description: 'Professeur ou matière introuvable',
  })
  @ApiResponse({ status: 409, description: 'Assignation déjà existante' })
  assignMatiere(
    @Param('id') professeurId: string,
    @Param('matiereId') matiereId: string,
  ) {
    return this.professeursService.assignMatiere(professeurId, matiereId);
  }

  @Delete(':id/matieres/:matiereId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Retirer une matière d'un professeur" })
  @ApiResponse({ status: 200, description: 'Matière retirée' })
  @ApiResponse({ status: 404, description: 'Assignation introuvable' })
  removeMatiere(
    @Param('id') professeurId: string,
    @Param('matiereId') matiereId: string,
  ) {
    return this.professeursService.removeMatiere(professeurId, matiereId);
  }
}
