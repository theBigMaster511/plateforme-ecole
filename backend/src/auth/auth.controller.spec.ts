import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService as LocalAuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from '@thallesp/nestjs-better-auth';

describe('AuthController', () => {
  let controller: AuthController;
  let localAuthService: LocalAuthService;
  let prisma: PrismaService;
  let betterAuthService: AuthService;

  const mockPrisma = {
    session: {
      findUnique: jest.fn(),
    },
  };

  const mockLocalAuthService = {
    ToogleAdminRole: jest.fn(),
    ToggleStudentRole: jest.fn(),
    ToggleTeacherRole: jest.fn(),
    ToggleParentRole: jest.fn(),
    AddUserAgent: jest.fn(),
  };

  const mockBetterAuthService = {
    api: {
      signUpEmail: jest.fn(),
      signInEmail: jest.fn(),
    },
  };

  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    cookie: jest.fn().mockReturnThis(),
  };

  const mockRequest = {
    cookies: {},
    headers: {},
    ip: '127.0.0.1',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: LocalAuthService, useValue: mockLocalAuthService },
        { provide: PrismaService, useValue: mockPrisma },
        { provide: AuthService, useValue: mockBetterAuthService },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    localAuthService = module.get<LocalAuthService>(LocalAuthService);
    prisma = module.get<PrismaService>(PrismaService);
    betterAuthService = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('SignUp', () => {
    it('should handle school sign-up successfully', async () => {
      const body = { email: 'admin@school.com', password: 'password', name: 'Admin' };
      const account = { user: { id: 'u1' }, token: 't1' };
      mockBetterAuthService.api.signUpEmail.mockResolvedValue(account);
      mockLocalAuthService.ToogleAdminRole.mockResolvedValue({});

      await controller.SignUp(body, mockRequest as any, mockResponse as any);

      expect(mockResponse.json).toHaveBeenCalledWith(account);
      expect(mockResponse.cookie).toHaveBeenCalled();
      expect(localAuthService.ToogleAdminRole).toHaveBeenCalledWith('u1');
    });

    it('should return 401 if sign-up fails', async () => {
      mockBetterAuthService.api.signUpEmail.mockResolvedValue(null);

      await controller.SignUp({}, mockRequest as any, mockResponse as any);
      expect(mockResponse.status).toHaveBeenCalledWith(401);
    });
  });

  describe('SignIn', () => {
    it('should handle school sign-in successfully', async () => {
      const body = { email: 'admin@school.com', password: 'password' };
      const account = { token: 't1' };
      mockBetterAuthService.api.signInEmail.mockResolvedValue(account);

      await controller.SignIn(body, mockResponse as any);
      expect(mockResponse.json).toHaveBeenCalledWith(account);
      expect(mockResponse.cookie).toHaveBeenCalled();
    });
  });

  describe('getProfile', () => {
    it('should return profile if session token exists', async () => {
      mockRequest.cookies['better-auth.session_token'] = 'token-1';
      const session = { token: 'token-1', user: { id: 'u1' } };
      mockPrisma.session.findUnique.mockResolvedValue(session);
      mockLocalAuthService.AddUserAgent.mockResolvedValue({});

      await controller.getProfile(mockRequest as any, mockResponse as any);
      expect(mockResponse.json).toHaveBeenCalledWith(session);
      expect(localAuthService.AddUserAgent).toHaveBeenCalled();
    });

    it('should return error if no token found', async () => {
      mockRequest.cookies = {};
      await controller.getProfile(mockRequest as any, mockResponse as any);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: "No session token found in cookies" });
    });
  });
});
