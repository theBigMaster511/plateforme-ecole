import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClasseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '6ème A', description: 'Nom de la classe' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '6ème', description: 'Niveau scolaire' })
  level: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'id professeurs', description: "L'identifiant professeurs", required: false })
  profId?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '2024-2025', description: 'Année scolaire' })
  years: string;
}
