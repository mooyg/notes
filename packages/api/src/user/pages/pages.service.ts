import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreatePageDto } from './dto/create-page.dto'
import { JsonArray } from 'prisma'
import { Content } from './models/content.model'
@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}
  async createPage({ pageName, templateId }: CreatePageDto) {
    return await this.prisma.pages.create({
      data: {
        name: pageName,
        templateId,
      },
    })
  }
  async getPagesByTemplateId({ templateId }: { templateId: string }) {
    const pages = await this.prisma.pages.findMany({
      where: {
        templateId,
      },
    })

    return pages
  }
  async getPage(pageId: string) {
    const page = await this.prisma.pages.findFirst({
      where: {
        id: pageId,
      },
    })
    return page
  }
  async saveContent(pageId: string, content: Content) {
    return await this.prisma.pages.update({
      where: {
        id: pageId,
      },
      data: {
        content: content as JsonArray,
      },
    })
  }
}
