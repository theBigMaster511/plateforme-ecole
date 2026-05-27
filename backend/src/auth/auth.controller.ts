import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Res, Req, Logger } from '@nestjs/common';

import { AuthService, AllowAnonymous } from '@thallesp/nestjs-better-auth';
import type { Response, Request as ExpressRequest } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService as LocalAuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
    private readonly localAuthService: LocalAuthService
  ) { }



    //*
    // Ces Fonction d'authenfication sont faites pour les admins ou l'administration de l'ecole
    // //*
    @AllowAnonymous()
    @Post("sign-up/school")
  async SignUp(@Body() body: any, @Req() req: ExpressRequest, @Res() res: Response) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || "",
        password: body.password || "",
        name: body.name || ""
      }
    })

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription"
      })
    }


    await this.localAuthService.ToogleAdminRole(account.user.id)



    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })
    return res.json(account)
  }

  @AllowAnonymous()
  @Post("sign-in/school")
  async SignIn(@Body() body: any, @Res() res: Response) {
    const { email, password } = body

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password
      }
    })

    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })


    return res.json(account)
  }


  /*
    Ces fonctions d'authentification sont faites pour les eleves
  */
  @AllowAnonymous()
  @Post("sign-up/student")
  async SignUpStudent(@Body() body: any, @Req() req: ExpressRequest, @Res() res: Response) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || "",
        password: body.password || "",
        name: body.name || ""
      }
    })

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription"
      })
    }


    await this.localAuthService.ToggleStudentRole(account.user.id)



    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })
    return res.json(account)
  }

  @AllowAnonymous()
  @Post("sign-in/student")
  async SignInStudent(@Body() body: any, @Res() res: Response) {
    const { email, password } = body

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password
      }
    })

    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })


    return res.json(account)
  }



  /*
    Ces fonctions d'authentification sont faites pour les Parent
  */
  @AllowAnonymous()
  @Post("sign-up/parent")
  async SignUpParent(@Body() body: any, @Req() req: ExpressRequest, @Res() res: Response) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || "",
        password: body.password || "",
        name: body.name || ""
      }
    })

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription"
      })
    }


    await this.localAuthService.ToggleParentRole(account.user.id)



    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })
    return res.json(account)
  }

  @AllowAnonymous()
  @Post("sign-in/parent")
  async SignInParent(@Body() body: any, @Res() res: Response) {
    const { email, password } = body

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password
      }
    })

    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })


    return res.json(account)
  }

  /*
    Ces fonctions d'authentification sont faites pour les eleves
  */
  @AllowAnonymous()
  @Post("sign-up/teacher")
  async SignUpTeacher(@Body() body: any, @Req() req: ExpressRequest, @Res() res: Response) {
    console.log(body);

    const account = await this.authService.api.signUpEmail({
      body: {
        email: body.email || "",
        password: body.password || "",
        name: body.name || ""
      }
    })

    if (!account) {
      return res.status(401).json({
        error: "Une erreur est survenue a l'inscription"
      })
    }


    await this.localAuthService.ToggleTeacherRole(account.user.id)



    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })
    return res.json(account)
  }

  @AllowAnonymous()
  @Post("sign-in/teacher")
  async SignInTeacher(@Body() body: any, @Res() res: Response) {
    const { email, password } = body

    const account = await this.authService.api.signInEmail({
      body: {
        email,
        password
      }
    })

    res.cookie("better-auth.session_token", account.token, {
      httpOnly: true,
      sameSite: "lax"
    })


    return res.json(account)
  }

  @AllowAnonymous()
  @Get("me")
  async getProfile(@Req() req: ExpressRequest, @Res() res: Response) {

    const sessionToken = req.cookies['better-auth.session_token'];

    if (!sessionToken) {
      return res.json({ error: "No session token found in cookies" });
    }

    // Récupère la session depuis Prisma
    const session = await this.prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true }
    });


    if (!session) {
      return res.json({ error: "Session not found in database" });
    }

    await this.localAuthService.AddUserAgent({
      userAgent: req.headers['user-agent'] || "",
      userToken: session.token,
      userIpAddress: req.ip || ""
    })

    return res.json(session)

  }
}
