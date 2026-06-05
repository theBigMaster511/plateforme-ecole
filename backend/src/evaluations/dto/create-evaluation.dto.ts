import { IsString, IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum EvalType {
  DEVOIR = 'DEVOIR',
  INTERROGATION = 'INTERROGATION',
  EXAMEN = 'EXAMEN',
  RATTRAPAGE = 'RATTRAPAGE',
}

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Contrôle Trimestriel 1', description: 'Titre de l\'évaluation' })
  titre: string;

  @IsEnum(EvalType)
  @IsNotEmpty()
  @ApiProperty({ enum: EvalType, example: EvalType.DEVOIR, description: 'Type d\'évaluation' })
  type: EvalType;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ example: '2024-10-15', description: 'Date de l\'évaluation (YYYY-MM-DD)' })
  date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'mat123456789', description: 'ID de la matière associée' })
  matiereId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'prof123456789', description: 'ID du professeur créateur' })
  professeurId: string;
}
