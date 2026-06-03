import { IsString, IsOptional } from 'class-validator';

export class CreateParentDto {
  @IsString()
  @IsOptional()
  telephone?: string;
}
