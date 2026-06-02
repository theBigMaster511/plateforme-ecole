# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Install dependencies: `bun install`
- Run in development mode: `bun run start:dev`
- Run in production mode: `bun run start:prod`
- Build the project: `bun run build`
- Run all tests: `bun run test`
- Lint code: `bun run lint`
- Format code: `bun run format`

## Architecture & Project Structure
The project is a NestJS-based backend for a school management platform.

### High-Level Architecture
- **Framework**: NestJS (Modular architecture).
- **Database Layer**: Prisma ORM with SQLite (dev.db).
- **Authentication**: Managed via `@thallesp/nestjs-better-auth` and `better-auth`.
- **Role-Based Access Control (RBAC)**: Implemented using a custom `@Roles()` decorator and a `Role` enum to restrict access to endpoints (ADMIN, PROFESSEUR, ELEVE, PARENT).
- **API Documentation**: Swagger is integrated for automatic endpoint documentation.

### Core Modules
- `src/auth`: Handles user registration (segmented by role), sign-in, and session management. It includes a `LocalAuthService` for toggling user roles.
- `src/classe`: Manages the lifecycle of school classes (CRUD operations).
- `src/role`: Contains the role definitions and the logic for role-based guards.
- `src/prisma`: Provides the global `PrismaService` used across all modules for database access.
- `src/generated/prisma`: Contains the auto-generated Prisma client.

### Database Schema (Prisma)
The system manages relations between:
- `User` (linked to roles).
- `Eleve`, `Professeur`, `Parent`.
- `Classe`, `Matiere`, `Evaluation`, `Note`.
- `ParentEleve` and `ProfesseurMatiere` (junction tables for many-to-many relationships).
