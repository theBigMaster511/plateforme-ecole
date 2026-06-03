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
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { CreateNotesBulkDto } from './dto/create-notes-bulk.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
@ApiTags('Gestion des Notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Saisir une note' })
  @ApiResponse({ status: 201, description: 'Note saisie avec succès' })
  @ApiResponse({ status: 404, description: 'Élève ou évaluation introuvable' })
  @ApiResponse({ status: 409, description: 'Une note existe déjà' })
  create(@Body() dto: CreateNoteDto) {
    return this.notesService.create(dto);
  }

  @Post('bulk')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Saisir plusieurs notes à la fois' })
  @ApiResponse({ status: 201, description: 'Notes saisies avec résultats' })
  createBulk(@Body() dto: CreateNotesBulkDto) {
    return this.notesService.createBulk(dto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les notes' })
  @ApiResponse({ status: 200, description: 'Liste des notes récupérée' })
  findAll() {
    return this.notesService.findAll();
  }

  @Get('eleve/:eleveId')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: "Récupérer les notes d'un élève" })
  @ApiResponse({ status: 200, description: "Notes de l'élève récupérées" })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  findByEleve(@Param('eleveId') eleveId: string) {
    return this.notesService.findByEleve(eleveId);
  }

  @Patch(':id')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Modifier une note' })
  @ApiResponse({ status: 200, description: 'Note mise à jour' })
  @ApiResponse({ status: 404, description: 'Note introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateNoteDto) {
    return this.notesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Supprimer une note' })
  @ApiResponse({ status: 200, description: 'Note supprimée' })
  @ApiResponse({ status: 404, description: 'Note introuvable' })
  remove(@Param('id') id: string) {
    return this.notesService.remove(id);
  }
}
