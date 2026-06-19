import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  ForbiddenException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { AuthService, AllowAnonymous } from '@thallesp/nestjs-better-auth';
import type { Response, Request as ExpressRequest } from 'express';
import { AuthService as LocalAuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
@ApiTags('Authentification')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly localAuthService: LocalAuthService,
    private readonly prisma: PrismaService,
  ) {}

  //*
  // Ces Fonction d'authenfication sont faites pour les admins ou l'administration de l'ecole
  // //*
  @AllowAnonymous()
  @Post('sign-up/school')
  @ApiOperation({ summary: "Inscription pour l'administration de l'école" })
  @ApiResponse({ status: 201, description: 'Compte admin créé avec succès' })
  @ApiResponse({ status: 401, description: "Erreur lors de l'inscription" })
  async SignUp(
    @Body() body: any,
    @Req() req: ExpressRequest,
    @Res() res: Response,
  ) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || '',
        password: body.password || '',
        name: body.name || '',
      },
    });

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription",
      });
    }

    await this.localAuthService.ToogleAdminRole(account.user.id);

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.json(account);
  }

  @AllowAnonymous()
  @Post('sign-in/school')
  @ApiOperation({ summary: "Connexion pour l'administration de l'école" })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  async SignIn(@Body() body: any, @Res() res: Response) {
    const { email, password } = body;

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json(account);
  }

  /*
    Ces fonctions d'authentification sont faites pour les eleves
  */
  @AllowAnonymous()
  @Post('sign-up/student')
  @ApiOperation({ summary: 'Inscription pour les élèves' })
  @ApiResponse({ status: 201, description: 'Compte élève créé avec succès' })
  @ApiResponse({ status: 401, description: "Erreur lors de l'inscription" })
  async SignUpStudent(
    @Body() body: any,
    @Req() req: ExpressRequest,
    @Res() res: Response,
  ) {
    console.log(body);

    if (body.classeId) {
      const classe = await this.prisma.classe.findUnique({
        where: { id: body.classeId },
      });

      if (!classe) {
        return res.status(404).json({
          error: 'Classe introuvable',
        });
      }
    }

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || '',
        password: body.password || '',
        name: body.name || '',
      },
    });

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription",
      });
    }

    await this.localAuthService.ToggleStudentRole(account.user.id);

    await this.prisma.eleve.create({
      data: {
        userId: account.user.id,
        matricule: body.matricule || `E-${Date.now()}`,
        dateNaissance: body.dateNaissance
          ? new Date(body.dateNaissance)
          : undefined,
        classeId: body.classeId || undefined,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.json(account);
  }

  @AllowAnonymous()
  @Post('sign-in/student')
  @ApiOperation({ summary: 'Connexion pour les élèves' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  async SignInStudent(@Body() body: any, @Res() res: Response) {
    const { email, password } = body;

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json(account);
  }

  /*
    Ces fonctions d'authentification sont faites pour les Parent
  */
  @AllowAnonymous()
  @Post('sign-up/parent')
  @ApiOperation({ summary: 'Inscription pour les parents' })
  @ApiResponse({ status: 201, description: 'Compte parent créé avec succès' })
  @ApiResponse({ status: 401, description: "Erreur lors de l'inscription" })
  async SignUpParent(
    @Body() body: any,
    @Req() req: ExpressRequest,
    @Res() res: Response,
  ) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || '',
        password: body.password || '',
        name: body.name || '',
      },
    });

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription",
      });
    }

    await this.localAuthService.ToggleParentRole(account.user.id);

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.json(account);
  }

  @AllowAnonymous()
  @Post('sign-in/parent')
  @ApiOperation({ summary: 'Connexion pour les parents' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  async SignInParent(@Body() body: any, @Res() res: Response) {
    const { email, password } = body;

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json(account);
  }

  /*
    Ces fonctions d'authentification sont faites pour les eleves
  */
  @AllowAnonymous()
  @Post('sign-up/teacher')
  @ApiOperation({ summary: 'Inscription pour les professeurs' })
  @ApiResponse({
    status: 201,
    description: 'Compte professeur créé avec succès',
  })
  @ApiResponse({ status: 401, description: "Erreur lors de l'inscription" })
  async SignUpTeacher(
    @Body() body: any,
    @Req() req: ExpressRequest,
    @Res() res: Response,
  ) {
    console.log(body);

    const { email, password, name, ecoleId } = body;

    if (!email && !password && !name && !ecoleId) {
      return new ForbiddenException('champ manquant');
    }

    const account = await this.authService.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription",
      });
    }

    await this.localAuthService.ToggleTeacherRole(account.user.id);

    await this.prisma.professeur.create({
      data: {
        userId: account.user.id,
        specialite: body.specialite || undefined,
        telephone: body.telephone || undefined,
        ecoleId,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.json(account);
  }

  @AllowAnonymous()
  @Post('sign-in/teacher')
  @ApiOperation({ summary: 'Connexion pour les professeurs' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  async SignInTeacher(@Body() body: any, @Res() res: Response) {
    const { email, password } = body;

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    res.cookie('better-auth.session_token', account.token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json(account);
  }

  @AllowAnonymous()
  @Post('logout')
  @ApiOperation({ summary: "Deconnecter l'utilisateur connecte" })
  async logout(@Res() res: Response) {
    res.clearCookie('better-auth.session_token', {
      httpOnly: true,
      sameSite: 'lax',
    });

    return res.json({ success: true });
  }

  @AllowAnonymous()
  @Get('me')
  @ApiOperation({ summary: "Récupérer le profil de l'utilisateur connecté" })
  @ApiResponse({ status: 200, description: 'Profil récupéré avec succès' })
  @ApiResponse({ status: 404, description: 'Session non trouvée' })
  async getProfile(@Req() req: ExpressRequest, @Res() res: Response) {
    const sessionToken = req.cookies['better-auth.session_token'];

    if (!sessionToken) {
      return res.json({ error: 'No session token found in cookies' });
    }

    // Récupère la session depuis Prisma
    const session = await this.prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });

    if (!session) {
      return res.json({ error: 'Session not found in database' });
    }

    await this.localAuthService.AddUserAgent({
      userAgent: req.headers['user-agent'] || '',
      userToken: session.token,
      userIpAddress: req.ip || '',
    });

    // Inclure les profils liés (eleve/professeur) pour éviter des appels supplémentaires
    const [eleve, professeur] = await Promise.all([
      this.prisma.eleve.findUnique({ where: { userId: session.userId } }),
      this.prisma.professeur.findUnique({ where: { userId: session.userId } }),
    ]);

    return res.json({ ...session, eleve, professeur });
  }
}
