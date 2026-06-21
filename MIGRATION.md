# Frontend Migration: Vanilla HTML/CSS/JS → Next.js App Router

## Overview
La plateforme de gestion scolaire a été migrée de Vanilla JavaScript vers **Next.js 16 avec App Router**, tout en conservant:
- ✅ Le design et les classes CSS identiques
- ✅ La structure HTML inchangée
- ✅ Les appels API sur `/api/...` via un proxy
- ✅ La même fonctionnalité complète

## Structure du projet

```
frontend-next/
├── app/
│   ├── (dashboard)/              # Groupe de routes protégées
│   │   ├── layout.tsx           # Layout avec sidebar pour pages authentifiées
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Page d'accueil du dashboard
│   │   ├── eleves/
│   │   │   └── page.tsx         # Gestion des élèves
│   │   ├── notes/
│   │   │   └── page.tsx         # Saisie et consultation des notes
│   │   ├── bulletins/
│   │   │   └── page.tsx         # Gestion des bulletins
│   │   ├── classes/
│   │   │   └── page.tsx         # Gestion des classes
│   │   └── professeurs/
│   │       └── page.tsx         # Gestion des professeurs
│   ├── api/
│   │   └── [...segments]/
│   │       └── route.ts         # API proxy vers le backend
│   ├── layout.tsx               # Layout racine avec AuthProvider
│   ├── page.tsx                 # Page de login
│   └── globals.css              # Styles vanilla CSS
├── components/
│   └── Sidebar.tsx              # Navigation sidebar
├── lib/
│   ├── auth-context.tsx         # Contexte d'authentification React
│   └── api.ts                   # Client API centralisé
├── .env.local                   # Variables d'environnement
└── next.config.ts               # Configuration Next.js
```

## Conversion: Vanilla JS → React Hooks

### Exemple: Authentification

**Avant (Vanilla JS):**
```javascript
const auth = {
  currentUser: null,
  currentRole: null,
  
  async login(email, password, role) {
    const result = await api.post(endpoint, { email, password });
    this.currentUser = result.user;
    this.currentRole = role;
    return result;
  }
};
```

**Après (React Hooks):**
```typescript
// lib/auth-context.tsx
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const login = async (email: string, password: string, userRole: string) => {
    const res = await fetch(`/api${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    const userData = await res.json();
    setUser(userData);
    setRole(userRole);
    return { user: userData };
  };

  return { user, role, login };
}
```

### Exemple: Chargement de données

**Avant (Vanilla JS):**
```javascript
function renderDashboard() {
  document.getElementById('app').innerHTML = `<div class="loader">...</div>`;
  
  const [elevesResponse, classesResponse] = await Promise.all([
    api.getEleves(),
    api.getClasses()
  ]);
  
  document.getElementById('app').innerHTML = `<table>...</table>`;
}
```

**Après (React Hooks):**
```typescript
// app/(dashboard)/dashboard/page.tsx
export default function Dashboard() {
  const [eleves, setEleves] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [elevesRes, classesRes] = await Promise.all([
      api.getEleves(),
      api.getClasses()
    ]);
    setEleves(Array.isArray(elevesRes) ? elevesRes : []);
    setLoading(false);
  };

  if (loading) return <div className="loader">Chargement...</div>;
  return <table className="notes-table">...</table>;
}
```

## Configuration de l'API

### Proxy Next.js → Backend
Le fichier `app/api/[...segments]/route.ts` intercepte toutes les requêtes vers `/api/...` et les redirige vers le backend:

```
Frontend: /api/auth/me
    ↓ (proxy)
Backend: http://localhost:3000/auth/me
```

**Avantages:**
- ✅ Cookies d'authentification gérés automatiquement
- ✅ CORS résolu (pas d'erreurs CORS)
- ✅ Requêtes côté serveur possibles
- ✅ Aucun changement côté backend

### Client API centralisé
`lib/api.ts` fournit une interface uniforme:

```typescript
import { api } from '@/lib/api';

// Utilisation
const eleves = await api.getEleves();
const notes = await api.getNotes(eleveId);
const result = await api.createEleve(data);
```

## Système d'authentification

### Flow d'authentification
1. Utilisateur se connecte via la page de login (`app/page.tsx`)
2. `useAuth().login()` envoie requête POST à `/api/auth/sign-in/{role}`
3. Réponse stockée dans le contexte React + cookies
4. Redirection vers `/dashboard`
5. Les pages protégées vérifient `useAuth().isLoggedIn()`

### Routes protégées
Le layout `app/(dashboard)/layout.tsx` protège toutes les pages du groupe `(dashboard)`:

```typescript
export default function DashboardLayout({ children }) {
  const { isLoggedIn, isLoading } = useAuth();
  
  useEffect(() => {
    if (!isLoading && !isLoggedIn()) {
      router.push('/'); // Redirection vers login
    }
  }, [isLoading, isLoggedIn]);
}
```

## Styles CSS

Les styles CSS originaux (vanilla CSS3) ont été conservés **sans aucune modification**:
- Variables CSS personnalisées (`--color-admin`, etc.)
- Classes utilitaires identiques
- Responsive design préservé
- Animations inchangées

**Fichier:** `app/globals.css`

## Variables d'environnement

Créer `.env.local` avec:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

**Note:** `NEXT_PUBLIC_` préfixe rend la variable accessible au navigateur.

## Installation et démarrage

```bash
# Installation des dépendances
npm install

# Mode développement (port 5173, hot-reload)
npm run dev

# Build production
npm build

# Démarrage production
npm start
```

L'application démarre sur `http://localhost:5173`

## Avantages de la migration

| Aspect | Avant | Après |
|--------|-------|-------|
| **Framework** | Vanilla JS | Next.js 16 (React 19.2) |
| **Routage** | Hash (#/route) | File-based routing (App Router) |
| **SSR** | ❌ Non | ✅ Oui |
| **Code splitting** | Manuel | Automatique par Next.js |
| **Dev server** | Vite | Next.js dev server |
| **CSS** | Vanilla CSS | Vanilla CSS (conservé) |
| **State management** | Objet global | React Context + Hooks |
| **TypeScript** | ❌ Non | ✅ Oui (optionnel) |
| **API Calls** | Fetch direct | Centralisé via `api.ts` + proxy |

## Correspondance old → new

| Fichier ancien | Nouveau fichier |
|---|---|
| `js/auth.js` | `lib/auth-context.tsx` |
| `js/api.js` | `lib/api.ts` |
| `js/views.js` | `app/(dashboard)/*/page.tsx` |
| `js/router.js` | App Router (automatique) |
| `js/app.js` | `app/(dashboard)/layout.tsx` |
| `index.html` | `app/layout.tsx` |
| `css/style.css` | `app/globals.css` |

## Notes importantes

1. **Pas de suppression de backend** - Le backend NestJS reste inchangé
2. **Cookies d'authentification** - Gérés automatiquement par le proxy API
3. **Routes protégées** - Utiliser `useAuth()` pour vérifier l'authentification
4. **Validation des données** - TypeScript types recommandés (optionnel mais bénéfique)
5. **Scalabilité** - Structure App Router permet une croissance facile

## Prochaines étapes

Pour continuer la migration:
1. ✅ Créer les pages individuelles (eleves, notes, bulletins, etc.)
2. ✅ Créer les composants réutilisables (Modal, Table, Form)
3. ✅ Ajouter la validation de formulaires
4. ✅ Implémenter la pagination et les filtres
5. ✅ Ajouter les tests avec Jest/RTL
6. ✅ Déployer sur Vercel

## Support

Pour questions ou problèmes, consulter:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks Guide](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
