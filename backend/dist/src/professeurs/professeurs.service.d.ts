import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
export declare class ProfesseursService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
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
        matieres: ({
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
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        specialite: string | null;
    })[]>;
    findOne(id: string): Promise<{
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
        matieres: ({
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
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
        specialite: string | null;
    }>;
    update(id: string, dto: UpdateProfesseurDto): Promise<({
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
    }) | null>;
    assignMatiere(professeurId: string, matiereId: string): Promise<{
        professeurId: string;
        matiereId: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    removeMatiere(professeurId: string, matiereId: string): Promise<{
        professeurId: string;
        matiereId: string;
    }>;
}
