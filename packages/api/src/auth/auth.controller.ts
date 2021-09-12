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
import axios from 'axios'
import { ConfigService } from 'nestjs-dotenv'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'
import { IGithubUser } from 'src/types'
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {}
  @Get()
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @Get('/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthCallback(@Req() request: Request & { user: IGithubUser }, @Res() res: Response) {
    const { user } = request

    if (!user) {
      throw new NotFoundException('No user found')
    }

    const { accessToken } = await this.authService.githubLogin(user)

    const params = new URLSearchParams({ accessToken })

    res.redirect(`http://localhost:3000?${params.toString()}`)
  }
}
