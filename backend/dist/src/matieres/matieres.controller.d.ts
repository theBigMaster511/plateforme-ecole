import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
export declare class MatieresController {
    private readonly matieresService;
    constructor(matieresService: MatieresService);
    create(dto: CreateMatiereDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
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
                telephone: string | null;
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
            niveau: string;
            annee: string;
        };
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
    }>;
    update(id: string, dto: UpdateMatiereDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
}
