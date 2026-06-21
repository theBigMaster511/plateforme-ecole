import { ProfesseursService } from './professeurs.service';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import type { Request } from 'express';
import { AuthService } from '@thallesp/nestjs-better-auth';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
export declare class ProfesseursController {
    private readonly professeursService;
    private authService;
    constructor(professeursService: ProfesseursService, authService: AuthService);
    CreateProfesseur(req: Request, body: CreateProfesseurDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        ecoleId: string;
        specialite: string | null;
    }>;
    findAll(req: Request): Promise<({
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import("../generated/prisma/enums").Role;
        };
        classes: ({
            classe: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                ecoleId: string;
                profId: string | null;
                niveau: string;
                annee: string;
            };
        } & {
            classeId: string;
            professeurId: string;
        })[];
        matieres: ({
            matiere: {
                classe: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nom: string;
                    ecoleId: string;
                    profId: string | null;
                    niveau: string;
                    annee: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                classeId: string;
                coefficient: number;
            };
        } & {
            professeurId: string;
            matiereId: string;
        })[];
        evaluations: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            professeurId: string;
            matiereId: string;
            titre: string;
            type: import("../generated/prisma/enums").EvalType;
            date: Date;
            semestre: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        ecoleId: string;
        specialite: string | null;
    })[]>;
    findOne(id: string, req: Request): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import("../generated/prisma/enums").Role;
        };
        classes: ({
            classe: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                ecoleId: string;
                profId: string | null;
                niveau: string;
                annee: string;
            };
        } & {
            classeId: string;
            professeurId: string;
        })[];
        matieres: ({
            matiere: {
                classe: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nom: string;
                    ecoleId: string;
                    profId: string | null;
                    niveau: string;
                    annee: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                classeId: string;
                coefficient: number;
            };
        } & {
            professeurId: string;
            matiereId: string;
        })[];
        evaluations: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            professeurId: string;
            matiereId: string;
            titre: string;
            type: import("../generated/prisma/enums").EvalType;
            date: Date;
            semestre: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        ecoleId: string;
        specialite: string | null;
    }>;
    update(id: string, dto: UpdateProfesseurDto, req: Request): Promise<({
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import("../generated/prisma/enums").Role;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        ecoleId: string;
        specialite: string | null;
    }) | null>;
    assignMatiere(professeurId: string, matiereId: string, req: Request): Promise<{
        professeurId: string;
        matiereId: string;
    }>;
    remove(id: string, req: Request): Promise<{
        message: string;
    }>;
    removeMatiere(professeurId: string, matiereId: string, req: Request): Promise<{
        professeurId: string;
        matiereId: string;
    }>;
    assignClasse(professeurId: string, classeId: string, req: Request): Promise<{
        classeId: string;
        professeurId: string;
    }>;
    removeClasse(professeurId: string, classeId: string, req: Request): Promise<{
        classeId: string;
        professeurId: string;
    }>;
}
