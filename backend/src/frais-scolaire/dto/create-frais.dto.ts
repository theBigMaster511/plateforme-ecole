import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFraisDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'ele123456', description: 'ID de l\'élève (optionnel si classeId fourni)' })
  eleveId?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'classe123456', description: 'ID de la classe (applique le frais à tous les élèves de la classe)' })
  classeId?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Frais de scolarité 2024-2025', description: 'Libellé du frais' })
  libelle: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 150000, description: 'Montant total du frais' })
  montant: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '2025-09-30', description: 'Date d\'échéance (ISO 8601)' })
  echeance: string;
}
