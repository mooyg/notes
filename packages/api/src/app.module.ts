import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmojiModule } from './emoji/emoji.module'
import { ConfigModule } from 'nestjs-dotenv'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from './prisma.service'

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
