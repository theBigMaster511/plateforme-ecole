import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  const mockPrisma = {
    user: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    session: {
      update: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  describe('ToogleAdminRole', () => {
    it('should set role to ADMIN for existing user', async () => {
      const userId = 'user-1';
      mockPrisma.user.findFirst.mockResolvedValue({ id: userId, role: 'USER' });
      mockPrisma.user.update.mockResolvedValue({ id: userId, role: 'ADMIN' });

      const result = await service.ToogleAdminRole(userId);
      expect(result.role).toBe('ADMIN');
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: userId },
        data: { role: 'ADMIN' },
      });
    });

    it('should throw error if user not found', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      await expect(service.ToogleAdminRole('unknown')).rejects.toThrow('UnAuthorize');
    });
  });

  describe('ToggleStudentRole', () => {
    it('should set role to ELEVE for existing user', async () => {
      const userId = 'user-1';
      mockPrisma.user.findFirst.mockResolvedValue({ id: userId, role: 'USER' });
      mockPrisma.user.update.mockResolvedValue({ id: userId, role: 'ELEVE' });

      const result = await service.ToggleStudentRole(userId);
      expect(result.role).toBe('ELEVE');
    });
  });

  describe('ToggleTeacherRole', () => {
    it('should set role to PROFESSEUR for existing user', async () => {
      const userId = 'user-1';
      mockPrisma.user.findFirst.mockResolvedValue({ id: userId, role: 'USER' });
      mockPrisma.user.update.mockResolvedValue({ id: userId, role: 'PROFESSEUR' });

      const result = await service.ToggleTeacherRole(userId);
      expect(result.role).toBe('PROFESSEUR');
    });
  });

  describe('ToggleParentRole', () => {
    it('should set role to PARENT for existing user', async () => {
      const userId = 'user-1';
      mockPrisma.user.findFirst.mockResolvedValue({ id: userId, role: 'USER' });
      mockPrisma.user.update.mockResolvedValue({ id: userId, role: 'PARENT' });

      const result = await service.ToggleParentRole(userId);
      expect(result.role).toBe('PARENT');
    });
  });

  describe('AddUserAgent', () => {
    it('should update session metadata successfully', async () => {
      const metaData = {
        userAgent: 'Mozilla/5.0',
        userToken: 'token-1',
        userIpAddress: '127.0.0.1',
      };
      mockPrisma.session.update.mockResolvedValue({});

      await service.AddUserAgent(metaData);
      expect(prisma.session.update).toHaveBeenCalledWith({
        where: { token: metaData.userToken },
        data: {
          userAgent: metaData.userAgent,
          ipAddress: metaData.userIpAddress,
        },
      });
    });

    it('should throw error when prisma update fails', async () => {
      mockPrisma.session.update.mockRejectedValue(new Error('DB Error'));
      await expect(service.AddUserAgent({ userAgent: 'a', userToken: 'b', userIpAddress: 'c' }))
        .rejects.toThrow('Une erreur est survenue lors de la mise a jour des metadata');
    });
  });
});
