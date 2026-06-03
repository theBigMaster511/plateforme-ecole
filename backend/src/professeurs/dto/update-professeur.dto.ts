import { IsString, IsOptional } from 'class-validator';

export class UpdateProfesseurDto {
  @IsString()
  @IsOptional()
  specialite?: string;
}
