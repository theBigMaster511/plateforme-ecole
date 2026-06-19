import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { ElevesService } from './eleves.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { AuthService } from '@thallesp/nestjs-better-auth';
import { AuthService as LocalAuthService } from '../auth/auth.service';

@Controller('eleves')
@ApiTags('Gestion des Élèves')
export class ElevesController {
  constructor(private readonly elevesService: ElevesService, private readonly AuthService: AuthService, private LocalAuthService: LocalAuthService) { }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  @ApiOperation({ summary: 'Lister tous les élèves', description: 'Récupérer la liste complète des élèves (ADMIN, PROFESSEUR)' })
  @ApiResponse({ status: 200, description: 'Liste des élèves récupérée', isArray: true })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findAll(@Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.elevesService.findAll(ecoleId);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: 'Récupérer un élève par ID', description: 'Détails d\'un élève spécifique (ADMIN, PROFESSEUR, ELEVE, PARENT)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiResponse({ status: 200, description: 'Élève récupéré' })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  findOne(@Param('id') id: string) {
    return this.elevesService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Modifier un élève', description: 'Mettre à jour les informations d\'un élève (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiBody({ type: UpdateEleveDto, description: 'Données à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Élève mis à jour' })
  @ApiResponse({ status: 404, description: 'Élève introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  update(@Param('id') id: string, @Body() dto: UpdateEleveDto, @Req() req: Request) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.elevesService.update(id, dto, ecoleId);
  }

  @Post(':id/classe/:classeId')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Assigner un élève à une classe', description: 'Lier un élève à une classe spécifique (ADMIN uniquement)' })
  @ApiParam({ name: 'id', description: 'ID unique de l\'élève', example: 'ele123456789' })
  @ApiParam({ name: 'classeId', description: 'ID unique de la classe', example: 'cl123456789' })
  @ApiResponse({ status: 201, description: 'Élève assigné à la classe' })
  @ApiResponse({ status: 404, description: 'Élève ou classe introuvable' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  assignClasse(
    @Param('id') eleveId: string,
    @Param('classeId') classeId: string,
    @Req() req: Request,
  ) {
    const ecoleId = (req as any).user?.ecoleId;
    return this.elevesService.assignClasse(eleveId, classeId, ecoleId);
  }



  @Post("create-student")
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Créer un nouvel élève', description: 'Ajouter un nouvel élève à la base de données (ADMIN uniquement)' })
  @ApiBody({ description: 'Données de l\'élève à créer', type: CreateEleveDto })
  @ApiResponse({ status: 201, description: 'Élève créé avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  async createEleve(@Body() data: CreateEleveDto, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    const account = await this.AuthService.api.signUpEmail({
      body: {
        email: data.email,
        password: data.MotDePasse,
        name: data.Nom,
      }
    });

      if (!account) {
        throw new NotFoundException(`Erreur lors de la création du compte utilisateur pour l'élève ${data.Nom}.`);
      }
      await this.LocalAuthService.ToggleStudentRole(account.user.id);
    return this.elevesService.createEleve(data, account.user.id, ecoleId);
  }
}
