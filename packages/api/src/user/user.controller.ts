import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { JwtGuard } from 'src/auth/guards/jwt-guard'
import { User } from 'src/decorators/user.decorator'
import { PrismaService } from 'src/prisma.service'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private prisma: PrismaService) {}

  @Post('/template/create')
  @UseGuards(JwtGuard)
  async createTemplate(@Req() req: Request, @User() userId) {
    return this.userService.createTemplate(userId, req.body)
  }

  @Get('/templates')
  @UseGuards(JwtGuard)
  async getTemplates(@User() userId) {
    return this.userService.getTemplates(userId)
  }

  @Post('/pages/create/:templateId')
  @UseGuards(JwtGuard)
  async createPage(@Req() req: Request, @Param('templateId') templateId) {
    return this.userService.createPage({
      details: req.body,
      templateId,
    })
  }

  @Get('/pages/:templateId')
  @UseGuards(JwtGuard)
  async getPagesByTemplateId(@Param('templateId') templateId) {
    return this.userService.getPagesByTemplateId({ templateId })
  }
}
