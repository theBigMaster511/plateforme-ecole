import { IsString, IsOptional } from 'class-validator';

export class CreateProfesseurDto {
  @IsString()
  @IsOptional()
  specialite?: string;

  @IsString()
  @IsOptional()
  telephone?: string;
  @IsString()
  @IsOptional()
  ecoleId?: string;
  @IsString()
  @IsOptional()
  email?: string;
}
