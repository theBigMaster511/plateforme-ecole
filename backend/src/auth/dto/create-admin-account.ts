import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/generated/prisma/enums";

export class CreateAdminAccount {
    @ApiProperty()
    email: string;
    @ApiProperty()
    role: Role;



}