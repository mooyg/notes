import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}
  async createPage({ pageName, templateId }) {
    return await this.prisma.pages.create({
      data: {
        name: pageName,
        templateId,
      },
    })
  }
  async getPagesByTemplateId({ templateId }) {
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
}
