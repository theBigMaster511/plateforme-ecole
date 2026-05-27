import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthGuard, AuthModule } from '@thallesp/nestjs-better-auth';
import { createAuth } from './lib/auth';
import { AuthModule as LocalAuthModule } from "./auth/auth.module";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/roles.guard';
import { ClasseModule } from './classe/classe.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule.forRootAsync({
      isGlobal: true,
      disableGlobalAuthGuard: true,
      imports: [PrismaModule], // ← assure toi que PrismaModule exporte PrismaService
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) => ({
        auth: createAuth(prisma),
      }),
    }),
    LocalAuthModule,
    ClasseModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard // seulement lui
    },
    PrismaService
  ]
})
export class AppModule {}
