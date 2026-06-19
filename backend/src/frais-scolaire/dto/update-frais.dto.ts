import { PartialType } from '@nestjs/swagger';
import { CreateFraisDto } from './create-frais.dto';

export class UpdateFraisDto extends PartialType(CreateFraisDto) {}
