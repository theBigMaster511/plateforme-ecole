import { Test, TestingModule } from '@nestjs/testing';
import { ProfesseursController } from './professeurs.controller';
import { ProfesseursService } from './professeurs.service';

describe('ProfesseursController', () => {
  let controller: ProfesseursController;
  let service: ProfesseursService;

  const mockProfesseursService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    assignMatiere: jest.fn(),
    removeMatiere: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesseursController],
      providers: [
        { provide: ProfesseursService, useValue: mockProfesseursService },
      ],
    }).compile();

    controller = module.get<ProfesseursController>(ProfesseursController);
    service = module.get<ProfesseursService>(ProfesseursService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      mockProfesseursService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();
      expect(result).toEqual([]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
