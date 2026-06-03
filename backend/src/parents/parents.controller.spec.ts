import { Test, TestingModule } from '@nestjs/testing';
import { ParentsController } from './parents.controller';
import { ParentsService } from './parents.service';

describe('ParentsController', () => {
  let controller: ParentsController;
  let service: ParentsService;

  const mockParentsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    linkEnfant: jest.fn(),
    unlinkEnfant: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentsController],
      providers: [{ provide: ParentsService, useValue: mockParentsService }],
    }).compile();

    controller = module.get<ParentsController>(ParentsController);
    service = module.get<ParentsService>(ParentsService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      mockParentsService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();
      expect(result).toEqual([]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
