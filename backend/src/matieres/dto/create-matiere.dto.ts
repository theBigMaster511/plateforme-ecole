import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateMatiereDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  coefficient?: number;

  @IsString()
  @IsNotEmpty()
  classeId: string;
}
