import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.decorator";
import { Role } from "./roles.enum";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest();

    // Récupère le token depuis le cookie
    const cookieHeader = req.headers.cookie || "";
    const tokenMatch = cookieHeader.match(/better-auth\.session_token=([^;]+)/);

    if (!tokenMatch) {
      throw new ForbiddenException("Utilisateur non authentifie");
    }

    const token = tokenMatch[1];

    // Cherche la session en base
    const session = await this.prisma.session.findUnique({
      where: { token },
      include: { user: true }
    });

    if (!session || !session.user) {
      throw new ForbiddenException("Session invalide");
    }

    // Attache l'user à la requête pour les controllers
    req.user = session.user;

    const hasRole = requiredRoles.some((role) => session.user.role === role);

    if (!hasRole) {
      throw new ForbiddenException(`Acces refuse - Role requis: ${requiredRoles.join(", ")}`);
    }

    return true;
  }
}
