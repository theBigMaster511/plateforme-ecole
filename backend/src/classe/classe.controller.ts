import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { Roles } from 'src/role/roles.decorator'; // ← ton propre Roles
import { Role } from 'src/role/roles.enum';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';

@Controller('classe')
@ApiTags('Gestion des Classes')
export class ClasseController {

  constructor(private readonly classeService: ClasseService) {}


  // Seul l'admin peut creer une classe
  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Créer une nouvelle classe' })
  @ApiResponse({ status: 201, description: 'Classe créée avec succès' })
  @ApiResponse({ status: 409, description: 'La classe existe déjà' })
  create(@Body() dto:CreateClasseDto) {
    return this.classeService.create(dto)
  }


  // Admin et profs voient toutes les classe
  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer toutes les classes' })
  @ApiResponse({ status: 200, description: 'Liste des classes récupérée' })
  findAll() {
    return this.classeService.finAll()
  }

  // Admin, prof et eleve voient une classe
  @Get(':id')
  @Roles(Role.ADMIN, Role.ELEVE, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Récupérer une classe par son ID' })
  @ApiResponse({ status: 200, description: 'Détails de la classe récupérés' })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  findOne(@Param('id') id: string) {
    return this.classeService.findOne(id)
  }

  // Seul l'admin peut modifier
  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier une classe' })
  @ApiResponse({ status: 200, description: 'Classe mise à jour avec succès' })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateClassDto) {
    return this.classeService.update(id, dto)
  }

  // Seul l'admin peut supprimer
  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer une classe' })
  @ApiResponse({ status: 200, description: 'Classe supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Classe introuvable' })
  remove(@Param('id') id: string) {
    return this.classeService.remove(id)
  }
}
