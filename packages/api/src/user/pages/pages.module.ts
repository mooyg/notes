import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PagesController } from './pages.controller'
import { PagesResolver } from './pages.resolver'
import { PagesService } from './pages.service'

@Module({
  providers: [PrismaService, PagesService, PagesResolver],
  controllers: [PagesController],
})
export class PagesModule {}
