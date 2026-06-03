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
import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';

@Controller('matieres')
@ApiTags('Gestion des Matières')
export class MatieresController {
  constructor(private readonly matieresService: MatieresService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Créer une matière' })
  @ApiResponse({ status: 201, description: 'Matière créée avec succès' })
  @ApiResponse({ status: 409, description: 'La matière existe déjà' })
  create(@Body() dto: CreateMatiereDto) {
    return this.matieresService.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les matières' })
  @ApiResponse({ status: 200, description: 'Liste des matières récupérée' })
  findAll() {
    return this.matieresService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer une matière par ID' })
  @ApiResponse({ status: 200, description: 'Matière récupérée' })
  @ApiResponse({ status: 404, description: 'Matière introuvable' })
  findOne(@Param('id') id: string) {
    return this.matieresService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier une matière' })
  @ApiResponse({ status: 200, description: 'Matière mise à jour' })
  @ApiResponse({ status: 404, description: 'Matière introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateMatiereDto) {
    return this.matieresService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer une matière' })
  @ApiResponse({ status: 200, description: 'Matière supprimée' })
  @ApiResponse({ status: 404, description: 'Matière introuvable' })
  remove(@Param('id') id: string) {
    return this.matieresService.remove(id);
  }
}
