declare enum EvalType {
    DEVOIR = "DEVOIR",
    INTERROGATION = "INTERROGATION",
    EXAMEN = "EXAMEN",
    RATTRAPAGE = "RATTRAPAGE"
}
export declare class UpdateEvaluationDto {
    titre?: string;
    type?: EvalType;
    date?: string;
}
export {};
