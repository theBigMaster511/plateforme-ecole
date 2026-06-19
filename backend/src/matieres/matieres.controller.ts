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
import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';

@Controller('matieres')
@ApiTags('Gestion des Matières')
export class MatieresController {
  constructor(private readonly matieresService: MatieresService) { }

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Créer une matière', description: 'Créer une nouvelle matière liée à une classe (ADMIN uniquement)' })
  @ApiBody({ type: CreateMatiereDto, description: 'Données de la matière à créer' })
  @ApiResponse({ status: 201, description: 'Matière créée avec succès', type: CreateMatiereDto })
  @ApiResponse({ status: 409, description: 'La matière existe déjà pour cette classe' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  create(@Body() dto: CreateMatiereDto, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.matieresService.create(dto, ecoleId);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les matières', description: 'Récupérer la liste de toutes les matières (ADMIN, PROFESSEUR)' })
  @ApiResponse({ status: 200, description: 'Liste des matières récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findAll(@Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.matieresService.findAll(ecoleId);
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
  update(@Param('id') id: string, @Body() dto: UpdateMatiereDto, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.matieresService.update(id, dto, ecoleId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer une matière' })
  @ApiResponse({ status: 200, description: 'Matière supprimée' })
  @ApiResponse({ status: 404, description: 'Matière introuvable' })
  remove(@Param('id') id: string, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.matieresService.remove(id, ecoleId);
  }
}
