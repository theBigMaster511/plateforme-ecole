import { Controller, Get, Post, Patch, Delete, Body, Param, Req } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';
import { EmploiTempsService } from './emploi-temps.service';
import { CreateEmploiTempsDto } from './dto/create-emploi-temps.dto';
import { UpdateEmploiTempsDto } from './dto/update-emploi-temps.dto';

@Controller('emploi-temps')
@ApiTags('Emploi du temps')
export class EmploiTempsController {
  constructor(private readonly service: EmploiTempsService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() dto: CreateEmploiTempsDto, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.service.create(dto, ecoleId);
  }

  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.service.findAll();
  }

  @Get('classe/:classeId')
  @Roles(Role.ADMIN, Role.PROFESSEUR, Role.ELEVE)
  findByClasse(@Param('classeId') classeId: string, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.service.findByClasse(classeId, ecoleId);
  }

  @Get('professeur/:professeurId')
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  findByProfesseur(@Param('professeurId') professeurId: string) {
    return this.service.findByProfesseur(professeurId);
  }

  @Get(':id')
  @Roles(Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateEmploiTempsDto, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.service.update(id, dto, ecoleId);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string, @Req() req: any) {
    const ecoleId = req.user?.ecoleId;
    return this.service.remove(id, ecoleId);
  }
}
