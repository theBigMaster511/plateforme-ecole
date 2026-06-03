import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';

enum EvalType {
  DEVOIR = 'DEVOIR',
  INTERROGATION = 'INTERROGATION',
  EXAMEN = 'EXAMEN',
  RATTRAPAGE = 'RATTRAPAGE',
}

export class UpdateEvaluationDto {
  @IsString()
  @IsOptional()
  titre?: string;

  @IsEnum(EvalType)
  @IsOptional()
  type?: EvalType;

  @IsDateString()
  @IsOptional()
  date?: string;
}
