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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
import type { Request } from 'express';

@Controller('classe')
@ApiTags('Gestion des Classes')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  // Seul l'admin peut creer une classe
  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: 'Créer une nouvelle classe',
    description: 'Créer une nouvelle classe (ADMIN uniquement)',
  })
  @ApiBody({ type: CreateClasseDto, description: 'Données de la classe' })
  @ApiResponse({
    status: 201,
    description: 'Classe créée avec succès',
    type: CreateClasseDto,
  })
  @ApiResponse({ status: 409, description: 'La classe existe déjà' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  create(@Body() dto: CreateClasseDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.classeService.create(dto, ecoleId);
  }

  // Admin et profs voient toutes les classe
  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({
    summary: 'Récupérer toutes les classes',
    description: 'Lister toutes les classes (ADMIN, PROFESSEUR)',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des classes récupérée',
    isArray: true,
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async findAll(@Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.classeService.findAll(ecoleId);
  }

  // Admin, prof et eleve voient une classe
  @Get(':id')
  @Roles(Role.ADMIN, Role.ELEVE, Role.PROFESSEUR)
  @ApiOperation({
    summary: 'Récupérer une classe par son ID',
    description: "Détail d'une classe spécifique (ADMIN, PROFESSEUR, ELEVE)",
  })
  @ApiParam({
    name: 'id',
    description: 'ID unique de la classe',
    example: 'cl1234567890',
  })
  @ApiResponse({
    status: 200,
    description: 'Détails de la classe récupérés',
    type: CreateClasseDto,
  })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findOne(@Param('id') id: string) {
    return this.classeService.findOne(id);
  }

  // Seul l'admin peut modifier
  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: 'Modifier une classe',
    description: "Modifier les informations d'une classe (ADMIN uniquement)",
  })
  @ApiParam({
    name: 'id',
    description: 'ID unique de la classe',
    example: 'cl1234567890',
  })
  @ApiBody({
    type: UpdateClassDto,
    description: 'Champs à mettre à jour (tous optionnels)',
  })
  @ApiResponse({
    status: 200,
    description: 'Classe mise à jour avec succès',
    type: CreateClasseDto,
  })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateClassDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.classeService.update(id, dto, ecoleId);
  }

  // Seul l'admin peut supprimer
  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({
    summary: 'Supprimer une classe',
    description: 'Supprimer une classe (ADMIN uniquement)',
  })
  @ApiParam({
    name: 'id',
    description: 'ID unique de la classe',
    example: 'cl1234567890',
  })
  @ApiResponse({ status: 200, description: 'Classe supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  remove(@Param('id') id: string, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.classeService.remove(id, ecoleId);
  }
}
