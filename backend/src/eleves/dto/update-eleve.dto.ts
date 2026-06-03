import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateEleveDto {
  @IsString()
  @IsOptional()
  @IsDateString()
  dateNaissance?: string;
}
