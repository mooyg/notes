import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { User } from 'src/decorators/user.decorator'
import { AuthGuard } from 'src/guard/auth.guard'
import { ReqBody } from 'src/guard/reqbody.guard'
import { PrismaService } from 'src/prisma.service'
import { MyUser } from 'src/typings/express'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private prisma: PrismaService) {}

  @Get()
  async getUser(@User() user: MyUser, @Req() req: Request): Promise<MyUser> {
    console.log(user)
    return req.user
  }

  @Post('/template/create')
  @UseGuards(AuthGuard, ReqBody)
  async createTemplate(@Req() req: Request, @User() user: MyUser) {
    console.log(req.body)
    return this.userService.createTemplate(user, req.body)
  }

  @Get('/templates')
  @UseGuards(AuthGuard)
  async getTemplates(@User() user: MyUser) {
    return this.userService.getTemplates(user)
  }
  @Post('/pages/create/:templateId')
  @UseGuards(AuthGuard, ReqBody)
  async createPage(@Req() req: Request, @Param('templateId') templateId) {
    return this.userService.createPage({
      details: req.body,
      templateId,
    })
  }

  @Get('/pages/:templateId')
  @UseGuards(AuthGuard)
  async getPagesByTemplateId(@Param('templateId') templateId) {
    return this.userService.getPagesByTemplateId({ templateId })
  }
}
