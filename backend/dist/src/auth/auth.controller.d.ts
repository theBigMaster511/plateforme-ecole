import { AuthService } from '@thallesp/nestjs-better-auth';
import type { Response, Request as ExpressRequest } from 'express';
import { AuthService as LocalAuthService } from './auth.service';
import { PrismaService } from "../prisma/prisma.service";
export declare class AuthController {
    private readonly authService;
    private readonly localAuthService;
    private readonly prisma;
    constructor(authService: AuthService, localAuthService: LocalAuthService, prisma: PrismaService);
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
