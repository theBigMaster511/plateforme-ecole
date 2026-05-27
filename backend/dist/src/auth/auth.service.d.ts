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
        email: string;
        role: import("../generated/prisma/enums").Role;
        id: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ToggleStudentRole(userId: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        id: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ToggleTeacherRole(userId: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        id: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    ToggleParentRole(userId: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums").Role;
        id: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    AddUserAgent(userMetaDate: UserMetaDataType): Promise<void>;
}
export {};
