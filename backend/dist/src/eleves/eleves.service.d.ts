import { PrismaService } from "../prisma/prisma.service";
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';
export declare class ElevesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(ecoleId: string, professeurId?: string): Promise<({
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
                professeurId: string;
                matiereId: string;
                titre: string;
                type: import("../generated/prisma/enums").EvalType;
                date: Date;
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
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
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
                professeurId: string;
                matiereId: string;
                titre: string;
                type: import("../generated/prisma/enums").EvalType;
                date: Date;
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
    update(id: string, dto: UpdateEleveDto, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    assignClasse(eleveId: string, classeId: string, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    createEleve(data: CreateEleveDto, userId: string, ecoleId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    remove(id: string, ecoleId?: string): Promise<{
        message: string;
    }>;
}
