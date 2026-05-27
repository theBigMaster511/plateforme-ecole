import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Eleve: "Eleve";
    readonly Parent: "Parent";
    readonly ParentEleve: "ParentEleve";
    readonly Professeur: "Professeur";
    readonly Classe: "Classe";
    readonly Matiere: "Matiere";
    readonly ProfesseurMatiere: "ProfesseurMatiere";
    readonly Evaluation: "Evaluation";
    readonly Note: "Note";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly role: "role";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly expiresAt: "expiresAt";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const EleveScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly matricule: "matricule";
    readonly dateNaissance: "dateNaissance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly classeId: "classeId";
};
export type EleveScalarFieldEnum = (typeof EleveScalarFieldEnum)[keyof typeof EleveScalarFieldEnum];
export declare const ParentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly telephone: "telephone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum];
export declare const ParentEleveScalarFieldEnum: {
    readonly parentId: "parentId";
    readonly eleveId: "eleveId";
};
export type ParentEleveScalarFieldEnum = (typeof ParentEleveScalarFieldEnum)[keyof typeof ParentEleveScalarFieldEnum];
export declare const ProfesseurScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly specialite: "specialite";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfesseurScalarFieldEnum = (typeof ProfesseurScalarFieldEnum)[keyof typeof ProfesseurScalarFieldEnum];
export declare const ClasseScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly niveau: "niveau";
    readonly annee: "annee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum];
export declare const MatiereScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly coefficient: "coefficient";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly classeId: "classeId";
};
export type MatiereScalarFieldEnum = (typeof MatiereScalarFieldEnum)[keyof typeof MatiereScalarFieldEnum];
export declare const ProfesseurMatiereScalarFieldEnum: {
    readonly professeurId: "professeurId";
    readonly matiereId: "matiereId";
};
export type ProfesseurMatiereScalarFieldEnum = (typeof ProfesseurMatiereScalarFieldEnum)[keyof typeof ProfesseurMatiereScalarFieldEnum];
export declare const EvaluationScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly type: "type";
    readonly date: "date";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly matiereId: "matiereId";
    readonly professeurId: "professeurId";
};
export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum];
export declare const NoteScalarFieldEnum: {
    readonly id: "id";
    readonly valeur: "valeur";
    readonly appreciation: "appreciation";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly eleveId: "eleveId";
    readonly evaluationId: "evaluationId";
};
export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
