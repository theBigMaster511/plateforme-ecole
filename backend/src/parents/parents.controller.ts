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
import { ParentsService } from './parents.service';
import { UpdateParentDto } from './dto/update-parent.dto';
import type { Request } from 'express';
import { ForbiddenException } from '@nestjs/common';

@Controller('parents')
@ApiTags('Gestion des Parents')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) { }

  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lister tous les parents', description: 'Récupérer la liste complète des parents (ADMIN uniquement)' })
  @ApiResponse({ status: 200, description: 'Liste des parents récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findAll(@Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.parentsService.findAll(ecoleId);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PARENT)
  @ApiOperation({ summary: 'Récupérer un parent par ID', description: 'Détails d\'un parent spécifique (ADMIN, PARENT)' })
  @ApiParam({ name: 'id', description: 'ID unique du parent', example: 'par123456789' })
  @ApiResponse({ status: 200, description: 'Parent récupéré' })
  @ApiResponse({ status: 404, description: 'Parent introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findOne(@Param('id') id: string, @Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.parentsService.findOne(id, ecoleId);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un parent', description: 'Mettre à jour les informations d\'un parent (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique du parent', example: 'par123456789' })
  @ApiBody({ type: UpdateParentDto, description: 'Données à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Parent mis à jour' })
  @ApiResponse({ status: 404, description: 'Parent introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateParentDto, @Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.parentsService.update(id, dto, ecoleId);
  }

  @Post(':id/enfants/:eleveId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lier un parent à un élève', description: 'Établir un lien de parenté entre un parent et un élève (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique du parent', example: 'par123456789' })
  @ApiParam({ name: 'eleveId', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiResponse({ status: 201, description: 'Élève lié au parent' })
  @ApiResponse({ status: 404, description: 'Parent ou élève introuvable' })
  @ApiResponse({ status: 409, description: 'Liaison déjà existante' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  linkEnfant(@Param('id') parentId: string, @Param('eleveId') eleveId: string, @Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.parentsService.linkEnfant(parentId, eleveId, ecoleId);
  }

  @Delete(':id/enfants/:eleveId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Délier un élève d'un parent", description: "Supprimer le lien de parenté entre un parent et un élève (ADMIN uniquement)" })
  @ApiParam({ name: 'id', description: 'ID unique du parent', example: 'par123456789' })
  @ApiParam({ name: 'eleveId', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiResponse({ status: 200, description: 'Élève délié du parent' })
  @ApiResponse({ status: 404, description: 'Liaison introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  unlinkEnfant(
    @Param('id') parentId: string,
    @Param('eleveId') eleveId: string,
    @Req() req: Request,
  ) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.parentsService.unlinkEnfant(parentId, eleveId, ecoleId);
  }
}
