import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class CreateEcoleDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsOptional()
  adresse?: string;

  @IsString()
  @IsOptional()
  telephone?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  siteWeb?: string;

  @IsString()
  @IsOptional()
  logo?: string;

  @IsString()
  @IsOptional()
  directeur?: string;

  @IsString()
  @IsOptional()
  ville?: string;

  @IsString()
  @IsOptional()
  pays?: string;

  @IsString()
  @IsOptional()
  codePostal?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
