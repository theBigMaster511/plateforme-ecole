import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { CreateNotesBulkDto } from './dto/create-notes-bulk.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(dto: CreateNoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
    createBulk(dto: CreateNotesBulkDto): Promise<any[]>;
    findAll(): Promise<({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            classeId: string | null;
            dateNaissance: Date | null;
            matricule: string;
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
                specialite: string | null;
            };
            matiere: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                coefficient: number;
                classeId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            type: import("../generated/prisma/enums").EvalType;
            professeurId: string;
            matiereId: string;
            titre: string;
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
    findByEleve(eleveId: string): Promise<({
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
                specialite: string | null;
            };
            matiere: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                coefficient: number;
                classeId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            type: import("../generated/prisma/enums").EvalType;
            professeurId: string;
            matiereId: string;
            titre: string;
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
    update(id: string, dto: UpdateNoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        eleveId: string;
        valeur: number;
        appreciation: string | null;
        evaluationId: string;
    }>;
}
