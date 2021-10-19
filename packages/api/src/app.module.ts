import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmojiModule } from './emoji/emoji.module'
import { ConfigModule } from 'nestjs-dotenv'
import { AuthModule } from './auth/auth.module'
import { PassportModule } from '@nestjs/passport'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path/posix'
import { PagesResolver } from './user/pages/pages.resolver'
import { PagesService } from './user/pages/pages.service'
import { PagesModule } from './user/pages/pages.module'
import { PrismaService } from './prisma.service'
import { TemplatesModule } from './user/templates/templates.module'

@Module({
  imports: [
    EmojiModule,
    ConfigModule.forRoot(),
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'github',
      session: false,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: join(process.cwd(), 'src/schema.gql') }),
    PagesModule,
    TemplatesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PagesResolver, PagesService, PrismaService],
})
export class AppModule {}
