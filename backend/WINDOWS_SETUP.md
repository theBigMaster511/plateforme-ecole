# Installation Windows

Le backend n'a pas besoin de Bun. Les scripts npm utilisent Nest, Jest et Prisma.

## Prerequis recommandes

- Node.js 22 LTS
- npm fourni avec Node

Le projet utilise SQLite via `@prisma/adapter-better-sqlite3`. Cette dependance installe `better-sqlite3`, un module natif. Sur Windows, Node 22 LTS est le chemin le plus simple parce que les binaires precompiles sont mieux supportes.

Avec Node 24, npm peut essayer de compiler `better-sqlite3`. Il faut alors installer Visual Studio Build Tools avec le workload `Desktop development with C++`, sinon `node-gyp` echoue.

## Option conseillee avec nvm-windows

```powershell
nvm install 22
nvm use 22
node -v
```

Puis, depuis `backend` :

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
npm run build
npm run start:dev
```

## Frontend

Depuis `frontend` :

```powershell
npm install
npm run dev
```

Le frontend tourne sur `http://localhost:5173` et le proxy Vite redirige `/api` vers le backend Nest sur `http://localhost:3000`.
