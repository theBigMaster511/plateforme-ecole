import { PrismaService } from "../prisma/prisma.service";
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { CreateNotesBulkDto } from './dto/create-notes-bulk.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    private readonly prisma;
    constructor(notesService: NotesService, prisma: PrismaService);
    create(dto: CreateNoteDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
    createBulk(dto: CreateNotesBulkDto, req?: any): Promise<any[]>;
    findAll(req: any): Promise<({
        eleve: {
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            matricule: string;
            dateNaissance: Date | null;
            classeId: string | null;
        };
        evaluation: {
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
    })[]>;
    findByEleve(eleveId: string, req?: any): Promise<({
        evaluation: {
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
    })[]>;
    update(id: string, dto: UpdateNoteDto, req?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
    remove(id: string, req?: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
}
