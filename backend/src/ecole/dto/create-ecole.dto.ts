import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEcoleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Lycée National', description: 'Nom de l\'école' })
  nom: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123 Rue de la Paix', description: 'Adresse', required: false })
  adresse?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '+221 33 123 45 67', description: 'Numéro de téléphone', required: false })
  telephone?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'contact@ecole.sn', description: 'Email', required: false })
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://ecole.sn', description: 'Site Web', required: false })
  siteWeb?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://cdn.ecole.sn/logo.png', description: 'Logo URL', required: false })
  logo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Jean Dupont', description: 'Nom du directeur', required: false })
  directeur?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Dakar', description: 'Ville', required: false })
  ville?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Sénégal', description: 'Pays', required: false })
  pays?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '14000', description: 'Code postal', required: false })
  codePostal?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Une belle école...', description: 'Description', required: false })
  description?: string;
}
