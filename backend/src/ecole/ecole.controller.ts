import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { EcoleService } from './ecole.service';
import { CreateEcoleDto } from './dto/create-ecole.dto';
import { UpdateEcoleDto } from './dto/update-ecole.dto';

@Controller('ecole')
@ApiTags("Gestion de l'Ecole")
export class EcoleController {
  constructor(private readonly ecoleService: EcoleService) { }

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Créer l'école (une seule autorisée)", description: 'Créer une nouvelle école. Une seule école est autorisée en base (ADMIN uniquement)' })
  @ApiBody({ type: CreateEcoleDto, description: 'Données de l\'école à créer' })
  @ApiResponse({ status: 201, description: 'École créée avec succès', type: CreateEcoleDto })
  @ApiResponse({ status: 409, description: 'Une école existe déjà' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  create(@Body() dto: CreateEcoleDto) {
    return this.ecoleService.create(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: "Récupérer les infos de l'école" })
  @ApiResponse({
    status: 200,
    description: "Informations de l'école récupérées",
  })
  @ApiResponse({ status: 404, description: 'Aucune école configurée' })
  findOne() {
    return this.ecoleService.findOne();
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier les infos de l\'école', description: 'Modifier les informations de l\'école (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'école', example: 'cl1234567890' })
  @ApiBody({ type: UpdateEcoleDto, description: 'Champs à mettre à jour (tous optionnels)' })
  @ApiResponse({ status: 200, description: 'École mise à jour avec succès', type: CreateEcoleDto })
  @ApiResponse({ status: 404, description: 'École introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateEcoleDto) {
    return this.ecoleService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Supprimer l\'école', description: 'Supprimer l\'école (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'école', example: 'cl1234567890' })
  @ApiResponse({ status: 200, description: 'École supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'École introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  remove(@Param('id') id: string) {
    return this.ecoleService.remove(id);
  }
}
