import { Test, TestingModule } from '@nestjs/testing';
import { ElevesController } from './eleves.controller';
import { ElevesService } from './eleves.service';

describe('ElevesController', () => {
  let controller: ElevesController;
  let service: ElevesService;

  const mockElevesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    assignClasse: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElevesController],
      providers: [{ provide: ElevesService, useValue: mockElevesService }],
    }).compile();

    controller = module.get<ElevesController>(ElevesController);
    service = module.get<ElevesService>(ElevesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      mockElevesService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();
      expect(result).toEqual([]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
