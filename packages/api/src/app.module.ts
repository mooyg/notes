import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmojiModule } from './emoji/emoji.module'
import { ConfigModule } from 'nestjs-dotenv'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from './prisma.service'
import * as session from 'express-session'
import { SessionModule } from 'nestjs-session'
import * as connectRedis from 'connect-redis'
import { redis } from './redis/redis'

const RedisStore = connectRedis(session)
@Module({
  imports: [
    EmojiModule,
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'github',
      session: true,
    }),
    SessionModule.forRoot({
      session: {
        store: new RedisStore({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          client: redis as any,
        }),
        name: 'qid',
        secret: 'shsaudasiua',
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
