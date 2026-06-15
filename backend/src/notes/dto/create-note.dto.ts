import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(20)
  @ApiProperty({ example: 15.5, description: 'Valeur de la note (entre 0 et 20)' })
  valeur: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Bon travail, continuez ainsi', description: 'Appréciation du professeur', required: false })
  appreciation?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ele123456789', description: 'ID de l\'élève' })
  eleveId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'eval123456789', description: 'ID de l\'évaluation (optionnel si matiereNom fourni)' })
  evaluationId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mathématiques', description: 'Nom de la matière (utilisé si evaluationId non fourni)' })
  matiereNom?: string;
}
