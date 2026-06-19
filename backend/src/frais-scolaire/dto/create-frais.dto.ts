import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFraisDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ele123456', description: 'ID de l\'élève' })
  eleveId: string;

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
