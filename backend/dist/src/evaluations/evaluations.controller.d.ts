import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
export declare class EvaluationsController {
    private readonly evaluationsService;
    constructor(evaluationsService: EvaluationsService);
    create(dto: CreateEvaluationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
    }>;
    findAll(): Promise<({
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
            specialite: string | null;
        };
        matiere: {
            classe: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
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
    })[]>;
    findOne(id: string): Promise<{
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
            specialite: string | null;
        };
        matiere: {
            classe: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
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
    }>;
    update(id: string, dto: UpdateEvaluationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        professeurId: string;
        matiereId: string;
        titre: string;
        type: import("../generated/prisma/enums").EvalType;
        date: Date;
    }>;
}
