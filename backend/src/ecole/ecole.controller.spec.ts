import { Test, TestingModule } from '@nestjs/testing';
import { EcoleController } from './ecole.controller';
import { EcoleService } from './ecole.service';
import { CreateEcoleDto } from './dto/create-ecole.dto';
import { UpdateEcoleDto } from './dto/update-ecole.dto';

describe('EcoleController', () => {
    let controller: EcoleController;
    let service: EcoleService;

    const mockEcoleService = {
        create: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EcoleController],
            providers: [{ provide: EcoleService, useValue: mockEcoleService }],
        }).compile();

        controller = module.get<EcoleController>(EcoleController);
        service = module.get<EcoleService>(EcoleService);
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should call service.create', async () => {
            const dto: CreateEcoleDto = { nom: 'Test Ecole' };
            mockEcoleService.create.mockResolvedValue({ id: '1', ...dto });

            const result = await controller.create(dto);
            expect(result).toHaveProperty('id');
            expect(service.create).toHaveBeenCalledWith(dto);
        });
    });

    describe('findOne', () => {
        it('should call service.findOne', async () => {
            const ecoleData = { id: '1', nom: 'Test Ecole' };
            mockEcoleService.findOne.mockResolvedValue(ecoleData);

            const result = await controller.findOne();
            expect(result).toEqual(ecoleData);
            expect(service.findOne).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should call service.update', async () => {
            const dto: UpdateEcoleDto = { nom: 'Updated Ecole' };
            mockEcoleService.update.mockResolvedValue({ id: '1', ...dto });

            const result = await controller.update('1', dto);
            expect(result).toHaveProperty('nom', 'Updated Ecole');
            expect(service.update).toHaveBeenCalledWith('1', dto);
        });
    });

    describe('remove', () => {
        it('should call service.remove', async () => {
            mockEcoleService.remove.mockResolvedValue({ id: '1' });

            const result = await controller.remove('1');
            expect(result).toHaveProperty('id', '1');
            expect(service.remove).toHaveBeenCalledWith('1');
        });
    });
});
