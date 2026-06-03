import { Test, TestingModule } from '@nestjs/testing';
import { ParentsService } from './parents.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('ParentsService', () => {
  let service: ParentsService;

  const mockPrisma = {
    parent: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    eleve: {
      findUnique: jest.fn(),
    },
    parentEleve: {
      findUnique: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParentsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ParentsService>(ParentsService);
    jest.clearAllMocks();
  });

  describe('findOne', () => {
    it('should return a parent', async () => {
      const parentData = { id: '1', userId: 'user1', telephone: '771234567' };
      mockPrisma.parent.findUnique.mockResolvedValue(parentData);

      const result = await service.findOne('1');
      expect(result).toEqual(parentData);
    });

    it('should throw NotFoundException if parent does not exist', async () => {
      mockPrisma.parent.findUnique.mockResolvedValue(null);

      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('linkEnfant', () => {
    it('should link an eleve to a parent', async () => {
      mockPrisma.parent.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.parentEleve.findUnique.mockResolvedValue(null);
      mockPrisma.parentEleve.create.mockResolvedValue({
        parentId: '1',
        eleveId: '1',
      });

      const result = await service.linkEnfant('1', '1');
      expect(result).toHaveProperty('parentId', '1');
    });

    it('should throw ConflictException if liaison already exists', async () => {
      mockPrisma.parent.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.eleve.findUnique.mockResolvedValue({ id: '1' });
      mockPrisma.parentEleve.findUnique.mockResolvedValue({
        parentId: '1',
        eleveId: '1',
      });

      await expect(service.linkEnfant('1', '1')).rejects.toThrow(
        ConflictException,
      );
    });
  });
});
