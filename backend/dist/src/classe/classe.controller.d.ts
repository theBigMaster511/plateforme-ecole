import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
export declare class ClasseController {
    private readonly classeService;
    constructor(classeService: ClasseService);
    create(dto: CreateClasseDto): Promise<{
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        _count: {
            eleves: number;
            matieres: number;
        };
    } & {
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        eleves: ({
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
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            matricule: string;
            dateNaissance: Date | null;
            classeId: string | null;
        })[];
        matieres: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            classeId: string;
            coefficient: number;
        }[];
        _count: {
            eleves: number;
            matieres: number;
        };
    } & {
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateClassDto): Promise<{
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        nom: string;
        niveau: string;
        annee: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
