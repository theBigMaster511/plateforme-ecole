import { PrismaService } from "../prisma/prisma.service";
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
export declare class MatieresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMatiereDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        coefficient: number;
        classeId: string;
    }>;
    findAll(): Promise<({
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        };
        professeurs: ({
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
                specialite: string | null;
            };
        } & {
            professeurId: string;
            matiereId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        coefficient: number;
        classeId: string;
    })[]>;
    findOne(id: string): Promise<{
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        };
        professeurs: ({
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
                specialite: string | null;
            };
        } & {
            professeurId: string;
            matiereId: string;
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
        nom: string;
        coefficient: number;
        classeId: string;
    }>;
    update(id: string, dto: UpdateMatiereDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        coefficient: number;
        classeId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        coefficient: number;
        classeId: string;
    }>;
}
