import { Test, TestingModule } from '@nestjs/testing';
import { ProfesseursService } from './professeurs.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('ProfesseursService', () => {
  let service: ProfesseursService;

  const mockPrisma = {
    professeur: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
    matiere: {
      findUnique: jest.fn(),
    },
    professeurMatiere: {
      findUnique: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfesseursService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ProfesseursService>(ProfesseursService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    it('should return a professeur', async () => {
      const profData = {
        id: '1',
        userId: 'user1',
        specialite: 'Mathématiques',
      };
      mockPrisma.professeur.findUnique.mockResolvedValue(profData);

      const result = await service.findOne('1');
      expect(result).toEqual(profData);
    });

    it('should throw NotFoundException if professeur does not exist', async () => {
      mockPrisma.professeur.findUnique.mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('assignMatiere', () => {
    it('should assign a matiere to a professeur', async () => {
      mockPrisma.professeur.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.matiere.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.professeurMatiere.findUnique.mockResolvedValue(null);
      mockPrisma.professeurMatiere.create.mockResolvedValue({
        professeurId: '1',
        matiereId: '1',
      });

      const result = await service.assignMatiere('1', '1');
      expect(result).toHaveProperty('professeurId', '1');
    });

    it('should throw NotFoundException if professeur does not exist', async () => {
      mockPrisma.professeur.findUnique.mockResolvedValue(null);

      await expect(service.assignMatiere('1', '1')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException if assignation already exists', async () => {
      mockPrisma.professeur.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.matiere.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.professeurMatiere.findUnique.mockResolvedValue({
        professeurId: '1',
        matiereId: '1',
      });

      await expect(service.assignMatiere('1', '1')).rejects.toThrow(
        ConflictException,
      );
    });
  });
});
