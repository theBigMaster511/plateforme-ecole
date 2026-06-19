declare enum Jour {
    LUNDI = "LUNDI",
    MARDI = "MARDI",
    MERCREDI = "MERCREDI",
    JEUDI = "JEUDI",
    VENDREDI = "VENDREDI",
    SAMEDI = "SAMEDI"
}
export declare class CreateEmploiTempsDto {
    jour: Jour;
    heureDebut: string;
    heureFin: string;
    classeId: string;
    matiereId: string;
    professeurId?: string;
    salle?: string;
}
export {};
