import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
  Min,
  Max,
} from 'class-validator';

export class CreateNoteDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(20)
  valeur: number;

  @IsString()
  @IsOptional()
  appreciation?: string;

  @IsString()
  @IsNotEmpty()
  eleveId: string;

  @IsString()
  @IsNotEmpty()
  evaluationId: string;
}
