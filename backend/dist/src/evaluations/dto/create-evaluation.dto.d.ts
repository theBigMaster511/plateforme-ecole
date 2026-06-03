declare enum EvalType {
    DEVOIR = "DEVOIR",
    INTERROGATION = "INTERROGATION",
    EXAMEN = "EXAMEN",
    RATTRAPAGE = "RATTRAPAGE"
}
export declare class CreateEvaluationDto {
    titre: string;
    type: EvalType;
    date: string;
    matiereId: string;
    professeurId: string;
}
export {};
