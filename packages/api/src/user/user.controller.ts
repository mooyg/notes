import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { User } from 'src/decorators/user.decorator'
import { ReqBody } from 'src/guard/reqbody.guard'
import { PrismaService } from 'src/prisma.service'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private prisma: PrismaService) {}

  @Get()
  async getUser(@User() userId, @Req() req: Request) {
    return await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    })
  }

  @Post('/template/create')
  async createTemplate(@Req() req: Request, @User() userId) {
    return this.userService.createTemplate(userId, req.body)
  }

  @Get('/templates')
  async getTemplates(@User() userId) {
    return this.userService.getTemplates(userId)
  }

  @Post('/pages/create/:templateId')
  async createPage(@Req() req: Request, @Param('templateId') templateId) {
    return this.userService.createPage({
      details: req.body,
      templateId,
    })
  }

  @Get('/pages/:templateId')
  async getPagesByTemplateId(@Param('templateId') templateId) {
    return this.userService.getPagesByTemplateId({ templateId })
  }
}
