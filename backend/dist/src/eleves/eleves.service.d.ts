import { PrismaService } from "../prisma/prisma.service";
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';
export declare class ElevesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../generated/prisma/enums").Role;
        };
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
                matiere: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    classeId: string;
                    nom: string;
                    coefficient: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                titre: string;
                type: import("../generated/prisma/enums").EvalType;
                date: Date;
                matiereId: string;
                professeurId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            valeur: number;
            appreciation: string | null;
            eleveId: string;
            evaluationId: string;
        })[];
        parents: ({
            parent: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    image: string | null;
                    role: import("../generated/prisma/enums").Role;
                };
            } & {
                id: string;
                userId: string;
                createdAt: Date;
                updatedAt: Date;
                telephone: string | null;
            };
        } & {
            eleveId: string;
            parentId: string;
        })[];
    } & {
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: import("../generated/prisma/enums").Role;
        };
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
                matiere: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    classeId: string;
                    nom: string;
                    coefficient: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                titre: string;
                type: import("../generated/prisma/enums").EvalType;
                date: Date;
                matiereId: string;
                professeurId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            valeur: number;
            appreciation: string | null;
            eleveId: string;
            evaluationId: string;
        })[];
        parents: ({
            parent: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    image: string | null;
                    role: import("../generated/prisma/enums").Role;
                };
            } & {
                id: string;
                userId: string;
                createdAt: Date;
                updatedAt: Date;
                telephone: string | null;
            };
        } & {
            eleveId: string;
            parentId: string;
        })[];
    } & {
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    }>;
    update(id: string, dto: UpdateEleveDto): Promise<{
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    }>;
    assignClasse(eleveId: string, classeId: string): Promise<{
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    }>;
    createEleve(data: CreateEleveDto, userId: string): Promise<{
        id: string;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        createdAt: Date;
        updatedAt: Date;
        classeId: string | null;
    }>;
}
