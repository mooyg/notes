import { Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { PrismaService } from 'src/prisma.service'
import { MyUser } from 'src/typings/express'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private prisma: PrismaService) {}

  @Get()
  async getUser(@Req() req: Request): Promise<MyUser> {
    console.log(req.user)
    console.log(await this.prisma.user.findMany({}))
    return req.user
  }

  @Post('/template/create')
  async createTemplate(@Req() req: Request) {
    console.log(req.body)
    console.log(req.user)
    return this.userService.createTemplate(req.user, req.body)
  }

  @Get('/templates')
  async getTemplates(@Req() req: Request) {
    return this.userService.getTemplates(req.user)
  }
}
