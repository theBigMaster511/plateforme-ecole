import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { BulletinsService } from './bulletins.service';
import type { Request } from 'express';

@Controller('bulletins')
@ApiTags('Bulletins')
export class BulletinsController {
  constructor(private readonly bulletinsService: BulletinsService) {}

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.PARENT, Role.ELEVE)
  @ApiOperation({ summary: 'Lister les bulletins' })
  @ApiQuery({ name: 'semestre', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Liste des bulletins', isArray: true })
  findAll(@Req() req: Request, @Query('semestre') semestre?: string) {
    const ecoleId = (req as any).user.ecoleId;
    if (!ecoleId) return [];
    return this.bulletinsService.findAll(ecoleId, semestre ? parseInt(semestre, 10) : undefined);
  }

  @Get(':eleveId')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.PARENT, Role.ELEVE)
  @ApiOperation({ summary: "Bulletin d'un élève" })
  @ApiQuery({ name: 'semestre', required: false, type: Number })
  findByEleve(
    @Param('eleveId') eleveId: string,
    @Req() req: Request,
    @Query('semestre') semestre?: string,
  ) {
    const user = (req as any).user;
    const ecoleId = user.ecoleId;
    if (!ecoleId) return [];
    return this.bulletinsService.findByEleve(eleveId, semestre ? parseInt(semestre, 10) : undefined, ecoleId, user.role);
  }
}
