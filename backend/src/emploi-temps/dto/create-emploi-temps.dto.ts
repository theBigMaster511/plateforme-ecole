import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';

enum Jour {
  LUNDI = 'LUNDI',
  MARDI = 'MARDI',
  MERCREDI = 'MERCREDI',
  JEUDI = 'JEUDI',
  VENDREDI = 'VENDREDI',
  SAMEDI = 'SAMEDI',
}

export class CreateEmploiTempsDto {
  @ApiProperty({ enum: Jour })
  @IsEnum(Jour)
  jour: Jour;

  @ApiProperty()
  @IsString()
  heureDebut: string;

  @ApiProperty()
  @IsString()
  heureFin: string;

  @ApiProperty()
  @IsString()
  classeId: string;

  @ApiProperty()
  @IsString()
  matiereId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  professeurId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  salle?: string;
}
