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
import { EcoleService } from './ecole.service';
import { CreateEcoleDto } from './dto/create-ecole.dto';
import { UpdateEcoleDto } from './dto/update-ecole.dto';

@Controller('ecole')
@ApiTags("Gestion de l'Ecole")
export class EcoleController {
  constructor(private readonly ecoleService: EcoleService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Créer l'école (une seule autorisée)" })
  @ApiResponse({ status: 201, description: 'École créée avec succès' })
  @ApiResponse({ status: 409, description: 'Une école existe déjà' })
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
  @ApiOperation({ summary: "Modifier l'école" })
  @ApiResponse({ status: 200, description: 'École mise à jour avec succès' })
  @ApiResponse({ status: 404, description: 'École introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateEcoleDto) {
    return this.ecoleService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Supprimer l'école" })
  @ApiResponse({ status: 200, description: 'École supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'École introuvable' })
  remove(@Param('id') id: string) {
    return this.ecoleService.remove(id);
  }
}
