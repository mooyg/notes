import { Injectable, Req, Res } from '@nestjs/common'
import axios from 'axios'
import { Response } from 'express'
import { ConfigService } from 'nestjs-dotenv'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService
  ) {}
  async getAccessToken(code, res, session) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `https://github.com/login/oauth/access_token?client_id=${this.configService.get(
          'GITHUB_CLIENT_ID'
        )}&client_secret=${this.configService.get('GITHUB_CLIENT_SECRET')}&code=${code}`,
        headers: {
          accept: 'application/json',
        },
      })
      const { data: userData } = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${data.access_token}`,
        },
      })
      const user = await this.prismaService.user.findFirst({
        where: {
          username: userData.login,
        },
      })
      if (!user) {
        const newUser = await this.prismaService.user.create({
          data: {
            accessToken: data.access_token,
            userProfilePicture: userData.avatar_url,
            username: userData.login,
          },
        })
        res.redirect(`http://localhost:3000/?userId=${newUser.id}`)
      } else {
        res.redirect('http://localhost:8080/api/auth/exists')
      }
    } catch (err) {
      console.log(err)
    }
  }
}
