import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { CommunicationService } from './communication.service';
import type { Request } from 'express';

@Controller('communications')
@ApiTags('Communications')
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Envoyer une communication' })
  @ApiResponse({ status: 201, description: 'Communication envoyée' })
  create(@Body() dto: { title: string; content: string; target: string }, @Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    return this.communicationService.create(dto, ecoleId);
  }

  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE, Role.PARENT)
  @ApiOperation({ summary: 'Lister les communications' })
  @ApiResponse({ status: 200, description: 'Liste des communications', isArray: true })
  findAll(@Req() req: Request) {
    const ecoleId = (req as any).user.ecoleId;
    if (!ecoleId) return [];
    return this.communicationService.findAll(ecoleId);
  }
}
