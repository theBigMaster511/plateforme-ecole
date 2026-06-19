import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { CreateNotesBulkDto } from './dto/create-notes-bulk.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
@ApiTags('Gestion des Notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly prisma: PrismaService,
  ) { }

  @Post()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Saisir une note', description: 'Saisir une note individuelle pour un élève (ADMIN, PROFESSEUR)' })
  @ApiBody({ type: CreateNoteDto, description: 'Données de la note' })
  @ApiResponse({ status: 201, description: 'Note saisie avec succès', type: CreateNoteDto })
  @ApiResponse({ status: 404, description: 'Élève ou évaluation introuvable' })
  @ApiResponse({ status: 409, description: 'Une note existe déjà' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async create(@Body() dto: CreateNoteDto, @Req() req: any) {
    const user = req.user;
    if (!user) throw new ForbiddenException('Non authentifié');
    let professeurId: string | undefined;
    const ecoleId = user.ecoleId;
    if (user.role === 'PROFESSEUR') {
      const prof = await this.prisma.professeur.findUnique({ where: { userId: user.id } });
      professeurId = prof?.id;
    }
    return this.notesService.create(dto, professeurId, ecoleId);
  }

  @Post('bulk')
  @Roles(Role.PROFESSEUR)
  @ApiOperation({ summary: 'Saisir plusieurs notes à la fois', description: 'Saisir un ensemble de notes pour plusieurs élèves (PROFESSEUR uniquement)' })
  @ApiBody({ type: CreateNotesBulkDto, description: 'Liste de notes à saisir' })
  @ApiResponse({ status: 201, description: 'Notes saisies avec résultats' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createBulk(@Body() dto: CreateNotesBulkDto, @Req() req?: any) {
    const user = req?.user;
    let professeurId: string | undefined;
    const ecoleId = user?.ecoleId;
    if (user) {
      const prof = await this.prisma.professeur.findUnique({ where: { userId: user.id } });
      professeurId = prof?.id;
    }
    return this.notesService.createBulk(dto, professeurId, ecoleId);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister toutes les notes', description: 'Récupérer l\'ensemble des notes de l\'établissement (ADMIN, PROFESSEUR)' })
  @ApiResponse({ status: 200, description: 'Liste des notes récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async findAll(@Req() req: any) {
    const ecoleId = req.user.ecoleId;
    if (!ecoleId) return [];
    const user = req.user;
    let professeurId: string | undefined;
    if (user && user.role === 'PROFESSEUR') {
      const prof = await this.prisma.professeur.findUnique({ where: { userId: user.id } });
      professeurId = prof?.id;
    }
    return this.notesService.findAll(ecoleId, professeurId);
  }

  @Get('eleve/:eleveId')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: "Récupérer les notes d'un élève", description: "Récupérer toutes les notes d'un élève spécifique (ADMIN, PROFESSEUR, ELEVE, PARENT)" })
  @ApiParam({ name: 'eleveId', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiResponse({ status: 200, description: "Notes de l'élève récupérées", isArray: true })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findByEleve(@Param('eleveId') eleveId: string, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.notesService.findByEleve(eleveId, ecoleId);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Modifier une note', description: 'Mettre à jour la valeur ou l\'appréciation d\'une note (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique de la note', example: 'note123456789' })
  @ApiBody({ type: UpdateNoteDto, description: 'Champs à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Note mise à jour' })
  @ApiResponse({ status: 404, description: 'Note introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateNoteDto, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.notesService.update(id, dto, ecoleId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Supprimer une note', description: 'Supprimer définitivement une note (ADMIN, PROFESSEUR)' })
  @ApiParam({ name: 'id', description: 'ID unique de la note', example: 'note123456789' })
  @ApiResponse({ status: 200, description: 'Note supprimée' })
  @ApiResponse({ status: 404, description: 'Note introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  remove(@Param('id') id: string, @Req() req?: any) {
    const ecoleId = req?.user?.ecoleId;
    return this.notesService.remove(id, ecoleId);
  }
}
