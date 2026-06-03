import { IsString, IsOptional } from 'class-validator';

export class UpdateParentDto {
  @IsString()
  @IsOptional()
  telephone?: string;
}
