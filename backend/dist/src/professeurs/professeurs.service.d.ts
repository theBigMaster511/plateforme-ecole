import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
export declare class ProfesseursService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ecoleId: string;
        specialite: string | null;
        telephone: string | null;
    }[]>;
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
                    ecoleId: string;
                    profId: string;
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
        classes: ({
            classe: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ecoleId: string;
                profId: string;
                nom: string;
                niveau: string;
                annee: string;
            };
        } & {
            classeId: string;
            professeurId: string;
        })[];
        evaluations: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            type: import("../generated/prisma/enums").EvalType;
            professeurId: string;
            matiereId: string;
            titre: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        ecoleId: string;
        specialite: string | null;
        telephone: string | null;
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
        ecoleId: string;
        specialite: string | null;
        telephone: string | null;
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
    assignClasse(professeurId: string, classeId: string): Promise<{
        classeId: string;
        professeurId: string;
    }>;
    removeClasse(professeurId: string, classeId: string): Promise<{
        classeId: string;
        professeurId: string;
    }>;
}
