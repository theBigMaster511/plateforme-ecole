import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateNoteDto } from './create-note.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotesBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNoteDto)
  @IsNotEmpty()
  @ApiProperty({ type: [CreateNoteDto], description: 'Liste de notes à saisir en masse' })
  notes: CreateNoteDto[];
}
