import { IsString, IsOptional } from 'class-validator';

export class CreateProfesseurDto {
  @IsString()
  @IsOptional()
  specialite?: string;
}
