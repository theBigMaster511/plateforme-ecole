import { Test, TestingModule } from '@nestjs/testing';
import { ClasseService } from './classe.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('ClasseService', () => {
  let service: ClasseService;
  let prisma: PrismaService;

  const mockPrisma = {
    classe: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClasseService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ClasseService>(ClasseService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const dto = { name: '6ème A', years: '2024-2025', level: '6ème' };

    it('should create a class successfully', async () => {
      mockPrisma.classe.findFirst.mockResolvedValue(null);
      mockPrisma.classe.create.mockResolvedValue({ id: '1', ...dto });

      const result = await service.create(dto);
      expect(result).toEqual({ id: '1', ...dto });
      expect(prisma.classe.create).toHaveBeenCalledWith({
        data: { nom: dto.name, annee: dto.years, niveau: dto.level },
      });
    });

    it('should throw ConflictException if class already exists', async () => {
      mockPrisma.classe.findFirst.mockResolvedValue({ id: '1', ...dto });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('finAll', () => {
    it('should return all classes', async () => {
      const classes = [{ id: '1', nom: '6ème A' }];
      mockPrisma.classe.findMany.mockResolvedValue(classes);

      const result = await service.finAll();
      expect(result).toEqual(classes);
      expect(prisma.classe.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a class if found', async () => {
      const classe = { id: '1', nom: '6ème A' };
      mockPrisma.classe.findUnique.mockResolvedValue(classe);

      const result = await service.findOne('1');
      expect(result).toEqual(classe);
    });

    it('should throw NotFoundException if class is not found', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue(null);

      await expect(service.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    const dto = { name: '6ème B', years: '2024-2025', level: '6ème' };

    it('should update a class successfully', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue({
        id: '1',
        nom: '6ème A',
      });
      mockPrisma.classe.update.mockResolvedValue({ id: '1', ...dto });

      const result = await service.update('1', dto);
      expect(result).toEqual({ id: '1', ...dto });
    });

    it('should throw NotFoundException if class to update is not found', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue(null);

      await expect(service.update('999', dto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove a class successfully', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue({
        id: '1',
        nom: '6ème A',
      });
      mockPrisma.classe.delete.mockResolvedValue({ id: '1' });

      const result = await service.remove('1');
      expect(result).toEqual({ id: '1' });
    });

    it('should throw NotFoundException if class to remove is not found', async () => {
      mockPrisma.classe.findUnique.mockResolvedValue(null);

      await expect(service.remove('999')).rejects.toThrow(NotFoundException);
    });
  });
});
