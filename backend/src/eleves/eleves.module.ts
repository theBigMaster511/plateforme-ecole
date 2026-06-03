import { Module } from '@nestjs/common';
import { ElevesController } from './eleves.controller';
import { ElevesService } from './eleves.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ElevesController],
  providers: [ElevesService],
  exports: [ElevesService],
})
export class ElevesModule {}
