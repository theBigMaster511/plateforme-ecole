import { IsString, IsNotEmpty } from "class-validator"

export class CreateClasseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  level: string;

  @IsString()
  @IsNotEmpty()
  years: string;
}
