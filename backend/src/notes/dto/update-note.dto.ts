import { IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(20)
  @ApiProperty({ example: 16, description: 'Nouvelle valeur de la note (0-20)', required: false })
  valeur?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "S'est beaucoup amélioré", description: 'Nouvelle appréciation', required: false })
  appreciation?: string;
}
