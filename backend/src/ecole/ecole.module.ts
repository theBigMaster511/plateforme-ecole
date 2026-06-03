import { Module } from '@nestjs/common';
import { EcoleController } from './ecole.controller';
import { EcoleService } from './ecole.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EcoleController],
  providers: [EcoleService],
  exports: [EcoleService],
})
export class EcoleModule {}
