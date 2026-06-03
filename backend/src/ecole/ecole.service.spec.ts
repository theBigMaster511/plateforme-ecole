import { Test, TestingModule } from '@nestjs/testing';
import { EcoleService } from './ecole.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('EcoleService', () => {
  let service: EcoleService;
  let prisma: PrismaService;

  const mockPrisma = {
    ecole: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EcoleService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<EcoleService>(EcoleService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const dto = {
      nom: 'Lycée Saint Louis',
      adresse: '123 Rue de Dakar',
      ville: 'Dakar',
      email: 'contact@lycee.sn',
    };

    it('should create an ecole successfully', async () => {
      mockPrisma.ecole.findFirst.mockResolvedValue(null);
      mockPrisma.ecole.findUnique.mockResolvedValue(null);
      mockPrisma.ecole.create.mockResolvedValue({
        id: '1',
        ...dto,
        createdAt: new Date(),
        updatedAt: new Date(),
        telephone: null,
        siteWeb: null,
        logo: null,
        directeur: null,
        pays: 'Sénégal',
        codePostal: null,
        description: null,
      });

      const result = await service.create(dto);
      expect(result).toHaveProperty('id');
      expect(prisma.ecole.create).toHaveBeenCalled();
    });

    it('should throw ConflictException if an ecole already exists', async () => {
      mockPrisma.ecole.findFirst.mockResolvedValue({
        id: '1',
        nom: 'Existing',
      });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException if email already exists', async () => {
      mockPrisma.ecole.findFirst.mockResolvedValue(null);
      mockPrisma.ecole.findUnique.mockResolvedValue({
        id: '1',
        email: dto.email,
      });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('findOne', () => {
    it('should return an ecole', async () => {
      const ecoleData = { id: '1', nom: 'Test Ecole', email: 'test@ecole.sn' };
      mockPrisma.ecole.findFirst.mockResolvedValue(ecoleData);

      const result = await service.findOne();
      expect(result).toEqual(ecoleData);
    });

    it('should throw NotFoundException if no ecole exists', async () => {
      mockPrisma.ecole.findFirst.mockResolvedValue(null);

      await expect(service.findOne()).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    const updateDto = { nom: 'Updated Ecole' };

    it('should update an ecole successfully', async () => {
      const existing = { id: '1', nom: 'Old Name', email: null };
      // Premier appel à findUnique dans findOne
      mockPrisma.ecole.findUnique.mockImplementationOnce(async () => {
        return existing;
      });
      // Deuxième appel à findUnique pour vérifier le nouveau nom
      mockPrisma.ecole.findUnique.mockImplementationOnce(
        async ({ where }: any) => {
          if (where.nom) return null; // le nouveau nom n'existe pas
          return existing;
        },
      );
      mockPrisma.ecole.update.mockResolvedValue({ ...existing, ...updateDto });

      const result = await service.update('1', updateDto);
      expect(result).toHaveProperty('nom', 'Updated Ecole');
    });

    it('should throw NotFoundException if ecole does not exist', async () => {
      mockPrisma.ecole.findUnique.mockResolvedValue(null);

      await expect(service.update('1', updateDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should delete an ecole successfully', async () => {
      mockPrisma.ecole.findUnique.mockResolvedValue({ id: '1', nom: 'Test' });
      mockPrisma.ecole.delete.mockResolvedValue({ id: '1', nom: 'Test' });

      const result = await service.remove('1');
      expect(result).toHaveProperty('id', '1');
    });

    it('should throw NotFoundException if ecole does not exist', async () => {
      mockPrisma.ecole.findUnique.mockResolvedValue(null);

      await expect(service.remove('1')).rejects.toThrow(NotFoundException);
    });
  });
});
