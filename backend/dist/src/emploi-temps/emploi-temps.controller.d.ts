import { EmploiTempsService } from './emploi-temps.service';
import { CreateEmploiTempsDto } from './dto/create-emploi-temps.dto';
import { UpdateEmploiTempsDto } from './dto/update-emploi-temps.dto';
export declare class EmploiTempsController {
    private readonly service;
    constructor(service: EmploiTempsService);
    create(dto: CreateEmploiTempsDto): Promise<{
        professeur: ({
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
            specialite: string | null;
        }) | null;
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    }>;
    findAll(): Promise<({
        professeur: ({
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
            specialite: string | null;
        }) | null;
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    })[]>;
    findByClasse(classeId: string): Promise<({
        professeur: ({
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
            specialite: string | null;
        }) | null;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    })[]>;
    findByProfesseur(professeurId: string): Promise<({
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    })[]>;
    findOne(id: string): Promise<{
        professeur: ({
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
            specialite: string | null;
        }) | null;
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    }>;
    update(id: string, dto: UpdateEmploiTempsDto): Promise<{
        professeur: ({
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
            specialite: string | null;
        }) | null;
        classe: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            niveau: string;
            annee: string;
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
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classeId: string;
        professeurId: string | null;
        matiereId: string;
        jour: import("../generated/prisma/enums").Jour;
        heureDebut: string;
        heureFin: string;
        salle: string | null;
    }>;
}
