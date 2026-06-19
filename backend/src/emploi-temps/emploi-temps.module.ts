import { Module } from '@nestjs/common';
import { EmploiTempsController } from './emploi-temps.controller';
import { EmploiTempsService } from './emploi-temps.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmploiTempsController],
  providers: [EmploiTempsService],
})
export class EmploiTempsModule {}
