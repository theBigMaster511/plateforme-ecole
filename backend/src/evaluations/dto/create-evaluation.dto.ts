import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';

enum EvalType {
  DEVOIR = 'DEVOIR',
  INTERROGATION = 'INTERROGATION',
  EXAMEN = 'EXAMEN',
  RATTRAPAGE = 'RATTRAPAGE',
}

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsEnum(EvalType)
  @IsNotEmpty()
  type: EvalType;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  matiereId: string;

  @IsString()
  @IsNotEmpty()
  professeurId: string;
}
