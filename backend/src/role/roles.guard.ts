import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.enum';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest();

    // Récupère le token depuis le cookie
    const cookieHeader = req.headers.cookie || '';
    const tokenMatch = cookieHeader.match(/better-auth\.session_token=([^;]+)/);

    if (!tokenMatch) {
      throw new ForbiddenException('Utilisateur non authentifie');
    }

    const token = tokenMatch[1];

    // Cherche la session en base
    const session = await this.prisma.session.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!session || !session.user) {
      throw new ForbiddenException('Session invalide');
    }

    // Attache l'user à la requête pour les controllers
    req.user = session.user;

    // Récupère l'ecoleId selon le rôle
    if (session.user.role === Role.ADMIN) {
      const ecole = await this.prisma.ecole.findUnique({
        where: { userId: session.user.id },
      });
      if (ecole) {
        req.user.ecoleId = ecole.id;
      }
    } else if (session.user.role === Role.PROFESSEUR) {
      const professeur = await this.prisma.professeur.findUnique({
        where: { userId: session.user.id },
      });
      if (professeur) {
        req.user.ecoleId = professeur.ecoleId;
      }
    } else if (session.user.role === Role.ELEVE) {
      const eleve = await this.prisma.eleve.findUnique({
        where: { userId: session.user.id },
        include: { classe: true },
      });
      if (eleve?.classe) {
        req.user.ecoleId = eleve.classe.ecoleId;
      }
    } else if (session.user.role === Role.PARENT) {
      const parentEnfants = await this.prisma.parentEleve.findMany({
        where: { parent: { userId: session.user.id } },
        include: { eleve: { include: { classe: true } } },
      });
      if (parentEnfants.length > 0 && parentEnfants[0].eleve?.classe) {
        req.user.ecoleId = parentEnfants[0].eleve.classe.ecoleId;
      }
    }

    const hasRole = requiredRoles.some((role) => session.user.role === role);

    if (!hasRole) {
      throw new ForbiddenException(
        `Acces refuse - Role requis: ${requiredRoles.join(', ')}`,
      );
    }

    return true;
  }
}
