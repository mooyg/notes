import {
  Controller,
  Get,
  NotFoundException,
  Query,
  Req,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'
import { IGithubUser } from 'src/types'
import { JwtService } from '@nestjs/jwt'
import { JwtGuard } from './guards/jwt-guard'
import { User } from 'src/decorators/user.decorator'
import { User as IUser } from '.prisma/client'
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @Get('/me')
  @UseGuards(JwtGuard)
  async getUser(@User() userId: IUser) {
    return await this.authService.getUser(userId)
  }

  @Get()
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @Get('/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthCallback(@Req() request: Request & { user }, @Res() res: Response) {
    const { user } = request

    if (!user) {
      throw new NotFoundException('No user found')
    }

    const { accessToken } = await this.authService.githubLogin(user)

    const params = new URLSearchParams({ accessToken })

    res.redirect(`http://localhost:3000?${params.toString()}`)
  }
}
