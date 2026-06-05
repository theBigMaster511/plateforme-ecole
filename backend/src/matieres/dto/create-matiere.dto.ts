import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatiereDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Mathématiques', description: 'Nom de la matière' })
  nom: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @ApiProperty({ example: 3, description: 'Coefficient de la matière', required: false })
  coefficient?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'cl1234567890', description: 'ID de la classe' })
  classeId: string;
}
