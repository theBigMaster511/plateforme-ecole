import { Test, TestingModule } from '@nestjs/testing';
import { MatieresService } from './matieres.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('MatieresService', () => {
  let service: MatieresService;

  const mockPrisma = {
    classe: {
      findUnique: jest.fn(),
    },
    matiere: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MatieresService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<MatieresService>(MatieresService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const dto = { nom: 'Mathématiques', coefficient: 2, classeId: '1' };

    it('should create a matiere successfully', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue({
        id: '1',
        nom: '6ème A',
      });
      mockPrisma.matiere.findFirst.mockResolvedValue(null);
      mockPrisma.matiere.create.mockResolvedValue({ id: '1', ...dto });

      const result = await service.create(dto);
      expect(result).toHaveProperty('id');
    });

    it('should throw NotFoundException if classe does not exist', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue(null);

      await expect(service.create(dto)).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException if matiere already exists for the classe', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.matiere.findFirst.mockResolvedValue({ id: '1', nom: dto.nom });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('findOne', () => {
    it('should return a matiere', async () => {
      const matiereData = { id: '1', nom: 'Mathématiques' };
      mockPrisma.matiere.findUnique.mockResolvedValue(matiereData);

      const result = await service.findOne('1');
      expect(result).toEqual(matiereData);
    });

    it('should throw NotFoundException if matiere does not exist', async () => {
      mockPrisma.matiere.findUnique.mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });
});
