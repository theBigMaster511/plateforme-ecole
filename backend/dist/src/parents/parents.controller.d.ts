import { ParentsService } from './parents.service';
import { UpdateParentDto } from './dto/update-parent.dto';
import type { Request } from 'express';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: ParentsService);
    findAll(req: Request): Promise<({
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
        enfants: ({
            eleve: {
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
        } & {
            parentId: string;
            eleveId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
    })[]>;
    findOne(id: string, req: Request): Promise<{
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
        enfants: ({
            eleve: {
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
        } & {
            parentId: string;
            eleveId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
    }>;
    update(id: string, dto: UpdateParentDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
    }>;
    linkEnfant(parentId: string, eleveId: string, req: Request): Promise<{
        parentId: string;
        eleveId: string;
    }>;
    unlinkEnfant(parentId: string, eleveId: string, req: Request): Promise<{
        parentId: string;
        eleveId: string;
    }>;
}
