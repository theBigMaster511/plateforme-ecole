import { PrismaService } from "../prisma/prisma.service";
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
export declare class MatieresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMatiereDto, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    findAll(ecoleId?: string): Promise<({
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
                telephone: string | null;
                ecoleId: string;
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
        classeId: string;
        coefficient: number;
    })[]>;
    findOne(id: string): Promise<{
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
                telephone: string | null;
                ecoleId: string;
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
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    update(id: string, dto: UpdateMatiereDto, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    remove(id: string, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
}
