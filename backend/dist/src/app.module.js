"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_module_1 = require("./prisma/prisma.module");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
const auth_1 = require("./lib/auth");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./role/roles.guard");
const classe_module_1 = require("./classe/classe.module");
const ecole_module_1 = require("./ecole/ecole.module");
const matieres_module_1 = require("./matieres/matieres.module");
const professeurs_module_1 = require("./professeurs/professeurs.module");
const eleves_module_1 = require("./eleves/eleves.module");
const parents_module_1 = require("./parents/parents.module");
const evaluations_module_1 = require("./evaluations/evaluations.module");
const notes_module_1 = require("./notes/notes.module");
const emploi_temps_module_1 = require("./emploi-temps/emploi-temps.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            nestjs_better_auth_1.AuthModule.forRootAsync({
                isGlobal: true,
                disableGlobalAuthGuard: true,
                imports: [prisma_module_1.PrismaModule],
                inject: [prisma_service_1.PrismaService],
                useFactory: (prisma) => ({
                    auth: (0, auth_1.createAuth)(prisma),
                }),
            }),
            auth_module_1.AuthModule,
            classe_module_1.ClasseModule,
            ecole_module_1.EcoleModule,
            matieres_module_1.MatieresModule,
            professeurs_module_1.ProfesseursModule,
            eleves_module_1.ElevesModule,
            parents_module_1.ParentsModule,
            evaluations_module_1.EvaluationsModule,
            notes_module_1.NotesModule,
            emploi_temps_module_1.EmploiTempsModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            prisma_service_1.PrismaService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map