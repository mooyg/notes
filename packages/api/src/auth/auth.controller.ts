import { Controller, Get, Query, Req, Res, Session, UseGuards } from '@nestjs/common'
import { Request, Response } from 'express'
import { LocalAuthGuard } from './local-auth-guard'
import axios from 'axios'
import { ConfigService } from 'nestjs-dotenv'
import { AuthService } from './auth.service'
import { User } from 'src/decorators/user.decorator'
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {}
  @Get('/github')
  async loginIntoGithub(@Res() res: Response) {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${this.configService.get(
        'GITHUB_CLIENT_ID'
      )}&redirect_uri=http://localhost:8080/api/auth/callback&scope=user&state=dsbjdbads`
    )
  }
  @Get('/callback')
  async githubCallback(@Req() req: Request, @Res() res: Response, @Session() session) {
    await this.authService.getAccessToken(req.query.code, res, session)
  }
  @Get('/exists')
  async userExists(@Session() session) {
    console.log(session)
    return 'User already Exists'
  }
  @Get('/success')
  async userSuccess(@User() user) {
    return 'Give a popup to open the app again'
  }
}
