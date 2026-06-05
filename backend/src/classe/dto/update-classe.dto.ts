import { CreateClasseDto } from './create-classe.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateClassDto extends PartialType(CreateClasseDto) {}
