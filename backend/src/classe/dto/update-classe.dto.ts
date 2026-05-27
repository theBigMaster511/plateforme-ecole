import { CreateClasseDto } from "./create-classe.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateClassDto extends PartialType(CreateClasseDto){}
