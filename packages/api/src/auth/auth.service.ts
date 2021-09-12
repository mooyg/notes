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

  public async githubLogin(user: IGithubUser) {
    const createdUser = await this.prismaService.user.create({
      data: {
        username: user.username,
        userProfilePicture: user.profileUrl,
      },
    })

    return this.createJwt(createdUser)
  }

  private createJwt({ id }: Partial<User>) {
    return {
      accessToken: this.jwtService.sign({ id }),
    }
  }
}
