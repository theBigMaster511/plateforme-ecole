# CLAUDE.md - Frontend

## Development Commands
- Install dependencies: `npm install` (or `bun install`)
- Run dev server: `npm run dev` (starts on http://localhost:5173)
- Build for production: `npm run build`

## Architecture
- **Framework**: Vanilla HTML/CSS/JavaScript (no build framework needed)
- **Build Tool**: Vite (provides dev server with hot reload)
- **Server**: Vite dev server with proxy to backend API

## Backend Integration
- Backend API: `http://localhost:3000` (via Vite proxy at `/api`)
- Authentication: Cookie-based (httpOnly cookies - automatic with `credentials: 'include'`)
- API module: `js/api.js` - contains all API calls

## Key Features
- Authentication via `/auth/sign-in/*` endpoints (supports school/student/teacher/parent roles)
- Role-based UI rendering
- Automatic cookie handling for session management

## Important Notes
- The Vite proxy in `vite.config.js` automatically forwards `/api/*` requests to the backend
- All API calls must use `credentials: 'include'` for cookies to work
- Backend must have CORS enabled for http://localhost:5173
