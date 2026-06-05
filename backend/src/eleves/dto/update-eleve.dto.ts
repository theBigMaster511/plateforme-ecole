import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEleveDto {
  @IsString()
  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: '2010-05-15', description: 'Date de naissance de l\'élève (YYYY-MM-DD)', required: false })
  dateNaissance?: string;
}
