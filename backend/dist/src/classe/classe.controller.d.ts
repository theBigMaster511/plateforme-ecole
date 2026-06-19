import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
import type { Request } from 'express';
export declare class ClasseController {
    private readonly classeService;
    constructor(classeService: ClasseService);
    create(dto: CreateClasseDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
    findAll(req: Request): Promise<({
        _count: {
            eleves: number;
            matieres: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    })[]>;
    findOne(id: string): Promise<{
        _count: {
            eleves: number;
            matieres: number;
        };
        eleves: ({
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
        })[];
        matieres: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            classeId: string;
            coefficient: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
    update(id: string, dto: UpdateClassDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
}
