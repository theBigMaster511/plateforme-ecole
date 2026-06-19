import { PartialType } from '@nestjs/swagger';
import { CreateEmploiTempsDto } from './create-emploi-temps.dto';

export class UpdateEmploiTempsDto extends PartialType(CreateEmploiTempsDto) {}
