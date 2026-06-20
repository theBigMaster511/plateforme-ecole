import { PrismaService } from "../prisma/prisma.service";
import type { Request } from 'express';
import { ElevesService } from './eleves.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { AuthService } from '@thallesp/nestjs-better-auth';
import { AuthService as LocalAuthService } from '../auth/auth.service';
export declare class ElevesController {
    private readonly elevesService;
    private readonly AuthService;
    private LocalAuthService;
    private readonly prisma;
    constructor(elevesService: ElevesService, AuthService: AuthService, LocalAuthService: LocalAuthService, prisma: PrismaService);
    findAll(req: Request): Promise<({
        user: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../generated/prisma/enums").Role;
        };
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            ecoleId: string;
            profId: string | null;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
                matiere: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nom: string;
                    classeId: string;
                    coefficient: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                date: Date;
                type: import("../generated/prisma/enums").EvalType;
                professeurId: string;
                matiereId: string;
                titre: string;
                semestre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            eleveId: string;
            valeur: number;
            appreciation: string | null;
            evaluationId: string;
        })[];
        parents: ({
            parent: {
                user: {
                    email: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    emailVerified: boolean;
                    image: string | null;
                    role: import("../generated/prisma/enums").Role;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                telephone: string | null;
            };
        } & {
            parentId: string;
            eleveId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            email: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../generated/prisma/enums").Role;
        };
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            ecoleId: string;
            profId: string | null;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
                matiere: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nom: string;
                    classeId: string;
                    coefficient: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                date: Date;
                type: import("../generated/prisma/enums").EvalType;
                professeurId: string;
                matiereId: string;
                titre: string;
                semestre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            eleveId: string;
            valeur: number;
            appreciation: string | null;
            evaluationId: string;
        })[];
        parents: ({
            parent: {
                user: {
                    email: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    emailVerified: boolean;
                    image: string | null;
                    role: import("../generated/prisma/enums").Role;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                telephone: string | null;
            };
        } & {
            parentId: string;
            eleveId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    update(id: string, dto: UpdateEleveDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    assignClasse(eleveId: string, classeId: string, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    remove(id: string, req: Request): Promise<{
        message: string;
    }>;
    createEleve(data: CreateEleveDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
}
