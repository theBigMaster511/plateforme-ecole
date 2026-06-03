import { IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';

export class UpdateNoteDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(20)
  valeur?: number;

  @IsString()
  @IsOptional()
  appreciation?: string;
}
