import { Module } from '@nestjs/common';
import { FraisScolaireController } from './frais-scolaire.controller';
import { FraisScolaireService } from './frais-scolaire.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FraisScolaireController],
  providers: [FraisScolaireService],
  exports: [FraisScolaireService],
})
export class FraisScolaireModule {}
