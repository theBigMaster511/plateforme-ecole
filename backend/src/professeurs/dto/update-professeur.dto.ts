import { IsString, IsOptional, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfesseurDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Jean Dupont', description: 'Nom du professeur', required: false })
  name?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'jean@ecole.fr', description: 'Email du professeur', required: false })
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mathématiques', description: 'Spécialité du professeur', required: false })
  specialite?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '0612345678', description: 'Téléphone du professeur', required: false })
  telephone?: string;
}
