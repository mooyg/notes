import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmojiModule } from './emoji/emoji.module'
import { ConfigModule } from 'nestjs-dotenv'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { PassportModule } from '@nestjs/passport'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path/posix'
import { PagesResolver } from './pages/pages.resolver'
import { PagesService } from './pages/pages.service'
import { PagesModule } from './pages/pages.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [
    EmojiModule,
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'github',
      session: false,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: join(process.cwd(), 'src/schema.gql') }),
    PagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PagesResolver, PagesService, PrismaService],
})
export class AppModule {}
