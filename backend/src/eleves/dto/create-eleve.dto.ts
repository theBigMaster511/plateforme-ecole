import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateEleveDto {
  @IsString()
  @IsDateString()
  dateNaissance!: string;



  @IsString()
  @IsOptional()
  adresse?: string;

  @IsString()
  Nom: string;

  @IsString()
  email: string;

  @IsString()
  Matricule: string;

  @IsString()
  MotDePasse: string;
  

  @IsString()
  ClasseId: string;


}
