import { PrismaService } from "../prisma/prisma.service";
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
export declare class ClasseService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateClasseDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        niveau: string;
        annee: string;
    }>;
    finAll(): Promise<({
        _count: {
            eleves: number;
            matieres: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
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
            classeId: string | null;
            dateNaissance: Date | null;
            matricule: string;
        })[];
        matieres: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            coefficient: number;
            classeId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        niveau: string;
        annee: string;
    }>;
    update(id: string, dto: UpdateClassDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        niveau: string;
        annee: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        niveau: string;
        annee: string;
    }>;
}
