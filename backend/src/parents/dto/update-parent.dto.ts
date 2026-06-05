import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateParentDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: '+221 77 123 45 67', description: 'Numéro de téléphone du parent', required: false })
  telephone?: string;
}
