import { Module } from '@nestjs/common';
import { BulletinsController } from './bulletins.controller';
import { BulletinsService } from './bulletins.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BulletinsController],
  providers: [BulletinsService],
})
export class BulletinsModule {}
