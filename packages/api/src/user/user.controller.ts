import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { User } from 'src/decorators/user.decorator'
import { AuthGuard } from 'src/guard/auth.guard'
import { ReqBody } from 'src/guard/reqbody.guard'
import { PrismaService } from 'src/prisma.service'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private prisma: PrismaService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUser(@User() userId, @Req() req: Request) {
    return await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    })
  }

  @Post('/template/create')
  @UseGuards(AuthGuard, ReqBody)
  async createTemplate(@Req() req: Request, @User() userId) {
    return this.userService.createTemplate(userId, req.body)
  }

  @Get('/templates')
  @UseGuards(AuthGuard)
  async getTemplates(@User() userId) {
    return this.userService.getTemplates(userId)
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
