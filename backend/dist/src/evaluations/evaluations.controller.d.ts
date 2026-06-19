import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class EvaluationsController {
    private readonly evaluationsService;
    private readonly prisma;
    constructor(evaluationsService: EvaluationsService, prisma: PrismaService);
    create(dto: CreateEvaluationDto, req?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
        semestre: number;
    }>;
    findAll(req: any, semestre?: string): Promise<({
        professeur: {
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
        };
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
        notes: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            eleveId: string;
            valeur: number;
            appreciation: string | null;
            evaluationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
        semestre: number;
    })[]>;
    findOne(id: string, req?: any): Promise<{
        professeur: {
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
        };
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
        notes: ({
            eleve: {
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
                matricule: string;
                dateNaissance: Date | null;
                classeId: string | null;
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
        semestre: number;
    }>;
    update(id: string, dto: UpdateEvaluationDto, req?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
        semestre: number;
    }>;
    remove(id: string, req?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
        semestre: number;
    }>;
}
