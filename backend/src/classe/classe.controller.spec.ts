import { Test, TestingModule } from '@nestjs/testing';
import { ClasseController } from './classe.controller';
import { ClasseService } from './classe.service';

describe('ClasseController', () => {
  let controller: ClasseController;
  let service: ClasseService;

  const mockClasseService = {
    create: jest.fn(),
    finAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasseController],
      providers: [{ provide: ClasseService, useValue: mockClasseService }],
    }).compile();

    controller = module.get<ClasseController>(ClasseController);
    service = module.get<ClasseService>(ClasseService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should call service.create', async () => {
      const dto = { name: '6ème A', years: '2024-2025', level: '6ème' };
      mockClasseService.create.mockResolvedValue({ id: '1', ...dto });

      const result = await controller.create(dto);
      expect(result).toEqual({ id: '1', ...dto });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should call service.finAll', async () => {
      const classes = [{ id: '1', nom: '6ème A' }];
      mockClasseService.finAll.mockResolvedValue(classes);

      const result = await controller.findAll();
      expect(result).toEqual(classes);
      expect(service.finAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call service.findOne', async () => {
      const classe = { id: '1', nom: '6ème A' };
      mockClasseService.findOne.mockResolvedValue(classe);

      const result = await controller.findOne('1');
      expect(result).toEqual(classe);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('update', () => {
    it('should call service.update', async () => {
      const dto = { name: '6ème B', years: '2024-2025', level: '6ème' };
      mockClasseService.update.mockResolvedValue({ id: '1', ...dto });

      const result = await controller.update('1', dto);
      expect(result).toEqual({ id: '1', ...dto });
      expect(service.update).toHaveBeenCalledWith('1', dto);
    });
  });

  describe('remove', () => {
    it('should call service.remove', async () => {
      mockClasseService.remove.mockResolvedValue({ id: '1' });

      const result = await controller.remove('1');
      expect(result).toEqual({ id: '1' });
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
});
