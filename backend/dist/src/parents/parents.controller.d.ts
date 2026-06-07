import { ParentsService } from './parents.service';
import { UpdateParentDto } from './dto/update-parent.dto';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: ParentsService);
    findAll(): Promise<({
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
        enfants: ({
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
                    niveau: string;
                    annee: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                classeId: string | null;
                dateNaissance: Date | null;
                matricule: string;
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
    findOne(id: string): Promise<{
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
        enfants: ({
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
                    niveau: string;
                    annee: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                classeId: string | null;
                dateNaissance: Date | null;
                matricule: string;
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
    update(id: string, dto: UpdateParentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        telephone: string | null;
    }>;
    linkEnfant(parentId: string, eleveId: string): Promise<{
        parentId: string;
        eleveId: string;
    }>;
    unlinkEnfant(parentId: string, eleveId: string): Promise<{
        parentId: string;
        eleveId: string;
    }>;
}
