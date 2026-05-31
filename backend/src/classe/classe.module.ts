import { Module } from '@nestjs/common';
import { ClasseController } from './classe.controller';
import { ClasseService } from './classe.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ClasseController],
  providers: [ClasseService],
  exports:[ClasseService]
})
export class ClasseModule {}
