import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { CookieSerializer } from 'src/cookie-serializer'
import { PrismaService } from 'src/prisma.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GithubStrategy } from './strategies/github-strategy'
import { JwtStrategy } from './strategies/jwt-strategy'

@Module({
  providers: [AuthService, PrismaService, CookieSerializer, GithubStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
})
export class AuthModule {}
