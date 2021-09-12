import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { PrismaService } from 'src/prisma.service'
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    console.log(request.headers)
    const verifyUser = await this.prismaService.user.findFirst({
      where: {
        id: request.headers.authorization,
      },
    })
    if (verifyUser.id === request.headers.authorization) {
      return true
    }
    return false
  }
}
