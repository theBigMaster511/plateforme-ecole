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
import { ParentsService } from './parents.service';
import { UpdateParentDto } from './dto/update-parent.dto';

@Controller('parents')
@ApiTags('Gestion des Parents')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lister tous les parents' })
  @ApiResponse({ status: 200, description: 'Liste des parents récupérée' })
  findAll() {
    return this.parentsService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PARENT)
  @ApiOperation({ summary: 'Récupérer un parent par ID' })
  @ApiResponse({ status: 200, description: 'Parent récupéré' })
  @ApiResponse({ status: 404, description: 'Parent introuvable' })
  findOne(@Param('id') id: string) {
    return this.parentsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un parent' })
  @ApiResponse({ status: 200, description: 'Parent mis à jour' })
  @ApiResponse({ status: 404, description: 'Parent introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateParentDto) {
    return this.parentsService.update(id, dto);
  }

  @Post(':id/enfants/:eleveId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Lier un parent à un élève' })
  @ApiResponse({ status: 201, description: 'Élève lié au parent' })
  @ApiResponse({ status: 404, description: 'Parent ou élève introuvable' })
  @ApiResponse({ status: 409, description: 'Liaison déjà existante' })
  linkEnfant(@Param('id') parentId: string, @Param('eleveId') eleveId: string) {
    return this.parentsService.linkEnfant(parentId, eleveId);
  }

  @Delete(':id/enfants/:eleveId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Délier un élève d'un parent" })
  @ApiResponse({ status: 200, description: 'Élève délié du parent' })
  @ApiResponse({ status: 404, description: 'Liaison introuvable' })
  unlinkEnfant(
    @Param('id') parentId: string,
    @Param('eleveId') eleveId: string,
  ) {
    return this.parentsService.unlinkEnfant(parentId, eleveId);
  }
}
