import { Module } from '@nestjs/common';
import { ElevesController } from './eleves.controller';
import { ElevesService } from './eleves.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [PrismaModule],
  controllers: [ElevesController],
  providers: [ElevesService,AuthService],
  exports: [ElevesService],
})
export class ElevesModule {}
