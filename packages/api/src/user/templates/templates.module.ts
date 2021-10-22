import { Module } from '@nestjs/common'
import { TemplatesService } from './templates.service'
import { TemplatesResolver } from './templates.resolver'
import { PrismaService } from 'src/prisma.service'

@Module({
  providers: [TemplatesService, TemplatesResolver, PrismaService],
})
export class TemplatesModule {}
