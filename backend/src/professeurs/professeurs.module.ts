import { Module } from '@nestjs/common';
import { ProfesseursController } from './professeurs.controller';
import { ProfesseursService } from './professeurs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfesseursController],
  providers: [ProfesseursService],
  exports: [ProfesseursService],
})
export class ProfesseursModule {}
