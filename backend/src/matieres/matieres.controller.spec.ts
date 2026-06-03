import { Test, TestingModule } from '@nestjs/testing';
import { MatieresController } from './matieres.controller';
import { MatieresService } from './matieres.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';

describe('MatieresController', () => {
    let controller: MatieresController;
    let service: MatieresService;

    const mockMatieresService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MatieresController],
            providers: [{ provide: MatieresService, useValue: mockMatieresService }],
        }).compile();

        controller = module.get<MatieresController>(MatieresController);
        service = module.get<MatieresService>(MatieresService);
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should call service.create', async () => {
            const dto: CreateMatiereDto = { nom: 'Test Matiere', classeId: '1' };
            mockMatieresService.create.mockResolvedValue({ id: '1', ...dto });

            const result = await controller.create(dto);
            expect(result).toHaveProperty('id');
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findAll', () => {
        it('should call service.findAll', async () => {
            mockMatieresService.findAll.mockResolvedValue([]);

            const result = await controller.findAll();
            expect(result).toEqual([]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });
});
