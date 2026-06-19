"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploiTempsModule = void 0;
const common_1 = require("@nestjs/common");
const emploi_temps_controller_1 = require("./emploi-temps.controller");
const emploi_temps_service_1 = require("./emploi-temps.service");
const prisma_module_1 = require("../prisma/prisma.module");
let EmploiTempsModule = class EmploiTempsModule {
};
exports.EmploiTempsModule = EmploiTempsModule;
exports.EmploiTempsModule = EmploiTempsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [emploi_temps_controller_1.EmploiTempsController],
        providers: [emploi_temps_service_1.EmploiTempsService],
    })
], EmploiTempsModule);
//# sourceMappingURL=emploi-temps.module.js.map