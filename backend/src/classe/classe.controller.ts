import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { Roles } from 'src/role/roles.decorator'; // ← ton propre Roles
import { Role } from 'src/role/roles.enum';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';

@Controller('classe')
export class ClasseController {

  constructor(private readonly classeService: ClasseService) {}


  // Seul l'admin peut creer une classe
  @Post()
  @Roles(Role.ADMIN)
  create(@Body() dto:CreateClasseDto) {
    return this.classeService.create(dto)
  }


  // Admin et profs voient toutes les classe
  @Get()
  @Roles(Role.ADMIN, Role.PROFESSEUR)
  findAll() {
    return this.classeService.finAll()
  }

  // Admin, prof et eleve voient une classe
  @Get(':id')
  @Roles(Role.ADMIN, Role.ELEVE, Role.PROFESSEUR)
  findOne(@Param('id') id: string) {
    return this.classeService.findOne(id)
  }

  // Seul l'admin peut modifier
  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateClassDto) {
    return this.classeService.update(id, dto)
  }

  // Seul l'admin peut supprimer
  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.classeService.remove(id)
  }
}
