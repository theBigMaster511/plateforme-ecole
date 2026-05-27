import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminAccount } from './dto/create-admin-account';

type UserMetaDataType = {
  userAgent: string,
  userToken: string,
  userIpAddress: string
}


@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    // Donner le role ADMIN
    async ToogleAdminRole(userId: string) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            })

            if (!toggleAdmin) {
                throw new Error("UnAuthorize")
            }

            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "ADMIN"
                }
            })

            return admin

        } catch (error: any) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`)
        }
    }
    // Donenr le role ELEVE
    async ToggleStudentRole(userId: string) {
        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            })

            if (!toggleAdmin) {
                throw new Error("UnAuthorize")
            }

            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "ELEVE"
                }
            })

            return admin

        } catch (error: any) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`)
        }
    }
    // Donenr le role PROF
    async ToggleTeacherRole(userId: string) {

        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            })

            if (!toggleAdmin) {
                throw new Error("UnAuthorize")
            }

            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "PROFESSEUR"
                }
            })

            return admin

        } catch (error: any) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`)
        }
    }
    // Donenr le role PARENT
    async ToggleParentRole(userId: string) {

        try {
            const toggleAdmin = await this.prisma.user.findFirst({
                where: {
                    id: userId
                }
            })

            if (!toggleAdmin) {
                throw new Error("UnAuthorize")
            }

            const admin = await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    role: "PARENT"
                }
            })

            return admin

        } catch (error: any) {
            throw new Error(`Une erreur est survenue au changement de role du compte ${error.message}`)
        }
    }

  // Ajout des MetaDonner
  async AddUserAgent(userMetaDate: UserMetaDataType) {
    try {
      await this.prisma.session.update({
        where: {
          token: userMetaDate.userToken
        },

        data: {
          userAgent: userMetaDate.userAgent,
          ipAddress: userMetaDate.userIpAddress
        },

      })
    } catch (error) {
      Logger.error(error)
      throw new Error("Une erreur est survenue lors de la mise a jour des metadata")
      }
  }


}
