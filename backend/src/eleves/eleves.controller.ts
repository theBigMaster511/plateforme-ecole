import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { ElevesService } from './eleves.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';

@Controller('eleves')
@ApiTags('Gestion des Élèves')
export class ElevesController {
  constructor(private readonly elevesService: ElevesService) {}

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister tous les élèves' })
  @ApiResponse({ status: 200, description: 'Liste des élèves récupérée' })
  findAll() {
    return this.elevesService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: 'Récupérer un élève par ID' })
  @ApiResponse({ status: 200, description: 'Élève récupéré' })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  findOne(@Param('id') id: string) {
    return this.elevesService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un élève' })
  @ApiResponse({ status: 200, description: 'Élève mis à jour' })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateEleveDto) {
    return this.elevesService.update(id, dto);
  }

  @Post(':id/classe/:classeId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Assigner un élève à une classe' })
  @ApiResponse({ status: 201, description: 'Élève assigné à la classe' })
  @ApiResponse({ status: 404, description: 'Élève ou classe introuvable' })
  assignClasse(
    @Param('id') eleveId: string,
    @Param('classeId') classeId: string,
  ) {
    return this.elevesService.assignClasse(eleveId, classeId);
  }
}
