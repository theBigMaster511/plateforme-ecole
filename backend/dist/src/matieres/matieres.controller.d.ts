import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
export declare class MatieresController {
    private readonly matieresService;
    constructor(matieresService: MatieresService);
    create(dto: CreateMatiereDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    findAll(req: any): never[] | Promise<({
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
                    email: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    emailVerified: boolean;
                    image: string | null;
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
                    email: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    emailVerified: boolean;
                    image: string | null;
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
            date: Date;
            type: import("../generated/prisma/enums").EvalType;
            professeurId: string;
            matiereId: string;
            titre: string;
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
    update(id: string, dto: UpdateMatiereDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
    remove(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        classeId: string;
        coefficient: number;
    }>;
}
