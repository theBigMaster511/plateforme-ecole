import { PrismaService } from "../prisma/prisma.service";
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
export declare class ClasseService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateClasseDto, ecoleId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
    findAll(ecoleId?: string | null): Promise<({
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
    update(id: string, dto: UpdateClassDto, ecoleId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        ecoleId: string;
        profId: string | null;
        niveau: string;
        annee: string;
    }>;
    remove(id: string, ecoleId?: string): Promise<{
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
