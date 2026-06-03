import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateNoteDto } from './create-note.dto';

export class CreateNotesBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNoteDto)
  @IsNotEmpty()
  notes: CreateNoteDto[];
}
