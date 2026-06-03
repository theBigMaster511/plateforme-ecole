import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationsService } from './evaluations.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('EvaluationsService', () => {
  let service: EvaluationsService;

  const mockPrisma = {
    matiere: {
      findUnique: jest.fn(),
    },
    professeur: {
      findUnique: jest.fn(),
    },
    evaluation: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluationsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<EvaluationsService>(EvaluationsService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const dto = {
      titre: 'Devoir 1',
      type: 'DEVOIR',
      date: '2024-12-01',
      matiereId: '1',
      professeurId: '1',
    };

    it('should create an evaluation successfully', async () => {
      mockPrisma.matiere.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.professeur.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.evaluation.create.mockResolvedValue({ id: '1', ...dto });

      const result = await service.create(dto);
      expect(result).toHaveProperty('id');
    });

    it('should throw NotFoundException if matiere does not exist', async () => {
      mockPrisma.matiere.findUnique.mockResolvedValue(null);

      await expect(service.create(dto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return an evaluation', async () => {
      const evalData = { id: '1', titre: 'Devoir 1' };
      mockPrisma.evaluation.findUnique.mockResolvedValue(evalData);

      const result = await service.findOne('1');
      expect(result).toEqual(evalData);
    });

    it('should throw NotFoundException if evaluation does not exist', async () => {
      mockPrisma.evaluation.findUnique.mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });
});
