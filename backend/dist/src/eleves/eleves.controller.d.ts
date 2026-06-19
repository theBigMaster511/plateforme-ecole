import { ElevesService } from './eleves.service';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { AuthService } from '@thallesp/nestjs-better-auth';
import { AuthService as LocalAuthService } from '../auth/auth.service';
export declare class ElevesController {
    private readonly elevesService;
    private readonly AuthService;
    private LocalAuthService;
    constructor(elevesService: ElevesService, AuthService: AuthService, LocalAuthService: LocalAuthService);
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
            ecoleId: string;
            profId: string;
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
                    classeId: string;
                    coefficient: number;
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
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
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
            ecoleId: string;
            profId: string;
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
                    classeId: string;
                    coefficient: number;
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
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    update(id: string, dto: UpdateEleveDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    assignClasse(eleveId: string, classeId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
    createEleve(data: CreateEleveDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        matricule: string;
        dateNaissance: Date | null;
        classeId: string | null;
    }>;
}
