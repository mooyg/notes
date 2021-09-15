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
import { UserService } from 'src/user/user.service'
import { User } from 'src/decorators/user.decorator'
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  @Get('/me')
  @UseGuards(JwtGuard)
  async getUser(@User() userId) {
    console.log(await this.userService.getUser(userId))
    return await this.userService.getUser(userId)
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
