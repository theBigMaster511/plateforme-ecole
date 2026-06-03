import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateEleveDto {
  @IsString()
  @IsOptional()
  @IsDateString()
  dateNaissance?: string;
}
