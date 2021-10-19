import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PagesResolver } from './pages.resolver'
import { PagesService } from './pages.service'

@Module({
  providers: [PrismaService, PagesService, PagesResolver],
})
export class PagesModule {}
