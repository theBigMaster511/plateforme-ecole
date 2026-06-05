# 🏫 Documentation de l'API Plateforme École

Bienvenue dans la documentation officielle de l'API de la Plateforme École. Cette API permet de gérer l'intégralité du cycle de vie administratif et pédagogique d'un établissement scolaire.

---

## 🚀 Introduction
L'API est construite avec **NestJS**, utilisant une architecture modulaire et une base de données **SQLite** via Prisma. Elle expose des endpoints RESTful sécurisés par un système de rôles strict.

**URL de base :** `http://localhost:3000` (ou l'URL de votre serveur de production)

---

## 🔐 Authentification & Sécurité

### Système d'Authentification
L'API utilise `@thallesp/nestjs-better-auth` et gère l'authentification via des **cookies sécurisés (httpOnly)**. Une fois connecté, le serveur envoie un cookie de session qui est automatiquement transmis avec chaque requête suivante.

**Cookie utilisé :** `better-auth.session_token`

C'est une approche plus sécurisée que le stockage local des tokens (comme le localStorage), car elle protège contre les attaques XSS.


### Gestion des Rôles (RBAC)
L'accès aux ressources est restreint selon le rôle de l'utilisateur :

| Rôle | Description | Permissions Principales |
| :--- | :--- | :--- |
| **ADMIN** | Administrateur | Contrôle total sur toutes les ressources (CRUD complet). |
| **PROFESSEUR** | Enseignant | Gestion des évaluations, saisie des notes, consultation des élèves. |
| **ELEVE** | Étudiant | Consultation de ses propres notes et détails de sa classe. |
| **PARENT** | Parent | Consultation des notes et informations de ses enfants. |

---

## 🛠 Concepts Généraux

### Formats de Données
- **Requêtes** : `application/json`
- **Réponses** : `application/json`

### Codes de Retour Communs
| Code | Signification | Description |
| :--- | :--- | :--- |
| `200` | OK | Requête réussie. |
| `201` | Created | Ressource créée avec succès. |
| `400` | Bad Request | Données envoyées invalides. |
| `401` | Unauthorized | Authentification manquante ou invalide. |
| `403` | Forbidden | Vous n'avez pas le rôle requis pour cette action. |
| `404` | Not Found | La ressource demandée n'existe pas. |
| `409` | Conflict | Conflit de données (ex: classe déjà existante). |
| `500` | Internal Server Error | Erreur inattendue du serveur. |

---

## 📚 Guide des Modules

### 🏫 Module École
Gère les informations générales de l'établissement. **Une seule école est autorisée en base de données.**

- **Créer/Modifier l'école** : Réservé à l'ADMIN. Permet de configurer le nom, l'adresse, le logo et le directeur.

### 🏫 Module Classes
Gère les classes scolaires (ex: "6ème A", "Terminale S").
- **Flux** : L'ADMIN crée la classe $\rightarrow$ Les élèves y sont ensuite assignés.
- **Accès** : Les professeurs et admins voient tout ; les élèves voient leur propre classe.

### 📚 Module Matières
Gère les matières enseignées dans chaque classe.
- **Liaison** : Chaque matière est liée à une classe spécifique.
- **Coefficient** : Permet de pondérer l'importance de la matière dans la moyenne.

### 👨‍🏫 Module Professeurs
Gère le corps enseignant et leurs spécialités.
- **Assignation** : Un professeur est assigné à une ou plusieurs matières via l'endpoint `/professeurs/:id/matieres/:matiereId`.

### 🎓 Module Élèves
Gère les étudiants de l'établissement.
- **Liaison** : Chaque élève doit être assigné à une classe pour pouvoir recevoir des notes.

### 👪 Module Parents
Gère les parents et leurs liens avec les élèves.
- **Lien Parent-Enfant** : Un parent peut être lié à plusieurs élèves (fratrie).

### 📝 Module Évaluations
Gère la création des tests, devoirs et examens.
- **Types** : `DEVOIR`, `INTERROGATION`, `EXAMEN`, `RATTRAPAGE`.
- **Liaison** : Une évaluation est créée par un professeur pour une matière spécifique.

### 💯 Module Notes
Le cœur du système de notation.
- **Saisie Individuelle** : Pour une seule note.
- **Saisie en Masse (Bulk)** : Permet d'importer une liste de notes pour toute une classe en une seule requête.
- **Consultation** : L'élève et le parent peuvent consulter les notes liées à l'ID de l'élève.

---

## 🔄 Flux de Travail Typique (Workflow)

Pour mettre en place un cycle scolaire complet, suivez cet ordre :
1. **Configuration** : Créer l'École $\rightarrow$ Créer les Classes.
2. **Soutien Pédagogique** : Créer les Matières pour chaque classe $\rightarrow$ Créer les comptes Professeurs $\rightarrow$ Assigner les Profs aux Matières.
3. **Administration Élèves** : Créer les Élèves $\rightarrow$ Assigner les Élèves aux Classes $\rightarrow$ Créer les Parents $\rightarrow$ Lier Parents et Enfants.
4. **Cycle d'Évaluation** : Créer une Évaluation (ex: "Contrôle 1 Maths") $\rightarrow$ Saisir les Notes $\rightarrow$ Consultation par les Parents/Élèves.

---

## 💡 Exemples de Requêtes

### Saisir une note (Professeur)
`POST /notes`
```json
{
  "valeur": 14.5,
  "appreciation": "Bon travail",
  "eleveId": "ele_123",
  "evaluationId": "eval_456"
}
```

### Récupérer les notes d'un élève (Parent/Élève)
`GET /notes/eleve/ele_123`
**Réponse :**
```json
[
  { "id": "n1", "valeur": 14.5, "matiere": "Maths", "evaluation": "Contrôle 1" },
  { "id": "n2", "valeur": 12, "matiere": "Français", "evaluation": "Rédaction" }
]
```
