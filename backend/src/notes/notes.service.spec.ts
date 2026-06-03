import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('NotesService', () => {
  let service: NotesService;

  const mockPrisma = {
    eleve: {
      findUnique: jest.fn(),
    },
    evaluation: {
      findUnique: jest.fn(),
    },
    note: {
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
        NotesService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<NotesService>(NotesService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const dto = {
      valeur: 15,
      eleveId: '1',
      evaluationId: '1',
    };

    it('should create a note successfully', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.evaluation.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.note.findUnique.mockResolvedValue(null);
      mockPrisma.note.create.mockResolvedValue({ id: '1', ...dto });

      const result = await service.create(dto);
      expect(result).toHaveProperty('id');
    });

    it('should throw NotFoundException if eleve does not exist', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue(null);

      await expect(service.create(dto)).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException if note already exists', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.evaluation.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.note.findUnique.mockResolvedValue({ id: '1' });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('findByEleve', () => {
    it('should return notes for an eleve', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.note.findMany.mockResolvedValue([]);

      const result = await service.findByEleve('1');
      expect(result).toEqual([]);
    });

    it('should throw NotFoundException if eleve does not exist', async () => {
      mockPrisma.eleve.findUnique.mockResolvedValue(null);

      await expect(service.findByEleve('1')).rejects.toThrow(NotFoundException);
    });
  });
});
