import { Injectable, Req, Res } from '@nestjs/common'
import axios from 'axios'
import { Response } from 'express'
import { PrismaService } from 'src/prisma.service'
import { IGithubUser } from 'src/types'
import { User } from '.prisma/client'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}
  async getUser(id) {
    return await this.prismaService.user.findFirst({
      where: {
        id: id.id,
      },
    })
  }
  public async githubLogin(user) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        username: user.username,
      },
    })
    if (userExists) {
      return this.createJwt(userExists)
    } else {
      console.log(user)
      const createdUser = await this.prismaService.user.create({
        data: { userProfilePicture: user._json.avatar_url, username: user.username },
      })
      return this.createJwt(createdUser)
    }
  }

  private createJwt({ id }: Partial<User>) {
    return {
      accessToken: this.jwtService.sign({ id }),
    }
  }
}
