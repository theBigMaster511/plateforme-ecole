"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.SortOrder = exports.NoteScalarFieldEnum = exports.EvaluationScalarFieldEnum = exports.ProfesseurMatiereScalarFieldEnum = exports.MatiereScalarFieldEnum = exports.ClasseScalarFieldEnum = exports.ProfesseurScalarFieldEnum = exports.ParentEleveScalarFieldEnum = exports.ParentScalarFieldEnum = exports.EleveScalarFieldEnum = exports.VerificationScalarFieldEnum = exports.AccountScalarFieldEnum = exports.SessionScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Eleve: 'Eleve',
    Parent: 'Parent',
    ParentEleve: 'ParentEleve',
    Professeur: 'Professeur',
    Classe: 'Classe',
    Matiere: 'Matiere',
    ProfesseurMatiere: 'ProfesseurMatiere',
    Evaluation: 'Evaluation',
    Note: 'Note'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope'
};
exports.VerificationScalarFieldEnum = {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.EleveScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    matricule: 'matricule',
    dateNaissance: 'dateNaissance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    classeId: 'classeId'
};
exports.ParentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    telephone: 'telephone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParentEleveScalarFieldEnum = {
    parentId: 'parentId',
    eleveId: 'eleveId'
};
exports.ProfesseurScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    specialite: 'specialite',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ClasseScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    niveau: 'niveau',
    annee: 'annee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MatiereScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    coefficient: 'coefficient',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    classeId: 'classeId'
};
exports.ProfesseurMatiereScalarFieldEnum = {
    professeurId: 'professeurId',
    matiereId: 'matiereId'
};
exports.EvaluationScalarFieldEnum = {
    id: 'id',
    titre: 'titre',
    type: 'type',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    matiereId: 'matiereId',
    professeurId: 'professeurId'
};
exports.NoteScalarFieldEnum = {
    id: 'id',
    valeur: 'valeur',
    appreciation: 'appreciation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    eleveId: 'eleveId',
    evaluationId: 'evaluationId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map