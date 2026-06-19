import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { createAuth } from './lib/auth';
import { AuthModule as LocalAuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/roles.guard';
import { ClasseModule } from './classe/classe.module';
import { EcoleModule } from './ecole/ecole.module';
import { MatieresModule } from './matieres/matieres.module';
import { ProfesseursModule } from './professeurs/professeurs.module';
import { ElevesModule } from './eleves/eleves.module';
import { ParentsModule } from './parents/parents.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { NotesModule } from './notes/notes.module';
import { EmploiTempsModule } from './emploi-temps/emploi-temps.module';
import { FraisScolaireModule } from './frais-scolaire/frais-scolaire.module';

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
    ClasseModule,
    EcoleModule,
    MatieresModule,
    ProfesseursModule,
    ElevesModule,
    ParentsModule,
    EvaluationsModule,
    NotesModule,
    EmploiTempsModule,
    FraisScolaireModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // seulement lui
    },
    PrismaService,
  ],
})
export class AppModule {}
