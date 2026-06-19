import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEleveDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Jean Dupont', description: 'Nom de l\'élève', required: false })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'jean@example.com', description: 'Email de l\'élève', required: false })
  email?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: '2010-05-15', description: 'Date de naissance de l\'élève (YYYY-MM-DD)', required: false })
  dateNaissance?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'cl123456789', description: 'ID de la classe', required: false })
  classeId?: string;
}
