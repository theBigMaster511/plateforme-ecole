import { ElevesService } from './eleves.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
export declare class ElevesController {
    private readonly elevesService;
    constructor(elevesService: ElevesService);
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
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
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
        })[];
        parents: ({
            parent: {
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
        classeId: string | null;
        dateNaissance: Date | null;
        matricule: string;
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
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
        } | null;
        notes: ({
            evaluation: {
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
        })[];
        parents: ({
            parent: {
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
        classeId: string | null;
        dateNaissance: Date | null;
        matricule: string;
    }>;
    update(id: string, dto: UpdateEleveDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        classeId: string | null;
        dateNaissance: Date | null;
        matricule: string;
    }>;
    assignClasse(eleveId: string, classeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        classeId: string | null;
        dateNaissance: Date | null;
        matricule: string;
    }>;
}
