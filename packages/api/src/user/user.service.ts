import { Injectable, Req } from '@nestjs/common'
import { async } from 'rxjs'
import { PrismaService } from 'src/prisma.service'
import { MyUser } from 'src/typings/express'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  getUser(): string {
    return 'user'
  }
  async createTemplate(user: MyUser, details) {
    return await this.prisma.templates.create({
      data: {
        name: details.templateName,
        userId: user.id,
      },
    })
  }
  async getTemplates(user: MyUser) {
    const templates = await this.prisma.templates.findMany({
      where: {
        userId: user.id,
      },
    })
    if (!templates) return []
    return templates
  }
  async createPage({ details, templateId }) {
    if (!templateId) return 'No template Id provided'
    return await this.prisma.pages.create({
      data: {
        name: details.pageName,
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
    if (!pages) return 'No pages found for this template'
    return pages
  }
}
