export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly PROFESSEUR: "PROFESSEUR";
    readonly ELEVE: "ELEVE";
    readonly PARENT: "PARENT";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Jour: {
    readonly LUNDI: "LUNDI";
    readonly MARDI: "MARDI";
    readonly MERCREDI: "MERCREDI";
    readonly JEUDI: "JEUDI";
    readonly VENDREDI: "VENDREDI";
    readonly SAMEDI: "SAMEDI";
};
export type Jour = (typeof Jour)[keyof typeof Jour];
export declare const EvalType: {
    readonly DEVOIR: "DEVOIR";
    readonly INTERROGATION: "INTERROGATION";
    readonly EXAMEN: "EXAMEN";
    readonly RATTRAPAGE: "RATTRAPAGE";
};
export type EvalType = (typeof EvalType)[keyof typeof EvalType];
