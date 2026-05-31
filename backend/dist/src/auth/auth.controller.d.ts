import { AuthService } from '@thallesp/nestjs-better-auth';
import type { Response, Request as ExpressRequest } from 'express';
import { PrismaService } from "../prisma/prisma.service";
import { AuthService as LocalAuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly prisma;
    private readonly localAuthService;
    constructor(authService: AuthService, prisma: PrismaService, localAuthService: LocalAuthService);
    SignUp(body: any, req: ExpressRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    SignIn(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    SignUpStudent(body: any, req: ExpressRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    SignInStudent(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    SignUpParent(body: any, req: ExpressRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    SignInParent(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    SignUpTeacher(body: any, req: ExpressRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    SignInTeacher(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getProfile(req: ExpressRequest, res: Response): Promise<Response<any, Record<string, any>>>;
}
