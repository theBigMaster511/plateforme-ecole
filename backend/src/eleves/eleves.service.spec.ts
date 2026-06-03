import { Test, TestingModule } from '@nestjs/testing';
import { ElevesService } from './eleves.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('ElevesService', () => {
  let service: ElevesService;

  const mockPrisma = {
    eleve: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    classe: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElevesService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ElevesService>(ElevesService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    it('should return an eleve', async () => {
      const eleveData = { id: '1', userId: 'user1', matricule: 'MAT001' };
      mockPrisma.eleve.findUnique.mockResolvedValue(eleveData);

      const result = await service.findOne('1');
      expect(result).toEqual(eleveData);
    });

    it('should throw NotFoundException if eleve does not exist', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('assignClasse', () => {
    it('should assign a classe to an eleve', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.classe.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.eleve.update.mockResolvedValue({ id: '1', classeId: '1' });

      const result = await service.assignClasse('1', '1');
      expect(result).toHaveProperty('classeId', '1');
    });

    it('should throw NotFoundException if eleve does not exist', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue(null);

      await expect(service.assignClasse('1', '1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
