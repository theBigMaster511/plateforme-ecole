import { IsString, IsOptional, IsDateString, IsEnum, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum EvalType {
  DEVOIR = 'DEVOIR',
  INTERROGATION = 'INTERROGATION',
  EXAMEN = 'EXAMEN',
  RATTRAPAGE = 'RATTRAPAGE',
}

export class UpdateEvaluationDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Nouveau Titre', description: 'Nouveau titre de l\'évaluation', required: false })
  titre?: string;

  @IsEnum(EvalType)
  @IsOptional()
  @ApiProperty({ enum: EvalType, example: EvalType.EXAMEN, description: 'Nouveau type d\'évaluation', required: false })
  type?: EvalType;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ example: '2024-10-20', description: 'Nouvelle date (YYYY-MM-DD)', required: false })
  date?: string;

  @IsInt()
  @Min(1)
  @Max(2)
  @IsOptional()
  @ApiProperty({ example: 2, description: 'Semestre (1 ou 2)', required: false })
  semestre?: number;
}