import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class UpdateMatiereDto {
  @IsString()
  @IsOptional()
  nom?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  coefficient?: number;
}
