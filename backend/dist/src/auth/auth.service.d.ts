import { PrismaService } from "../prisma/prisma.service";
type UserMetaDataType = {
    userAgent: string;
    userToken: string;
    userIpAddress: string;
};
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    ToogleAdminRole(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("../generated/prisma/enums").Role;
    }>;
    ToggleStudentRole(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("../generated/prisma/enums").Role;
    }>;
    ToggleTeacherRole(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("../generated/prisma/enums").Role;
    }>;
    ToggleParentRole(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("../generated/prisma/enums").Role;
    }>;
    AddUserAgent(userMetaDate: UserMetaDataType): Promise<void>;
}
export {};
