import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfesseurDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mathématiques', description: 'Spécialité du professeur', required: false })
  specialite?: string;
}
