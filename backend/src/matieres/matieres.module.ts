import { Module } from '@nestjs/common';
import { MatieresController } from './matieres.controller';
import { MatieresService } from './matieres.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MatieresController],
  providers: [MatieresService],
  exports: [MatieresService],
})
export class MatieresModule {}
