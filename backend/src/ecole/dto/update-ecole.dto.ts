import { IsString, IsOptional, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEcoleDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Lycée National Mis à jour', description: 'Nom de l\'école', required: false })
  nom?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '456 Avenue des Arts', description: 'Adresse', required: false })
  adresse?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '+221 33 000 00 00', description: 'Numéro de téléphone', required: false })
  telephone?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'admin@ecole.sn', description: 'Email', required: false })
  email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://ecole-updated.sn', description: 'Site Web', required: false })
  siteWeb?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://cdn.ecole.sn/logo-new.png', description: 'Logo URL', required: false })
  logo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mme. Sophie Touré', description: 'Nom du directeur', required: false })
  directeur?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Thiès', description: 'Ville', required: false })
  ville?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Sénégal', description: 'Pays', required: false })
  pays?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '10100', description: 'Code postal', required: false })
  codePostal?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Une description mise à jour...', description: 'Description', required: false })
  description?: string;
}
