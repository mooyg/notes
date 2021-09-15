import { Injectable, Req } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { async } from 'rxjs'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUser(id) {
    return await this.prisma.user.findFirst({
      where: {
        id: id.id,
      },
    })
  }
  async createTemplate(userId, details) {
    return await this.prisma.templates.create({
      data: {
        name: details.templateName,
        userId: userId.id,
      },
    })
  }
  async getTemplates(userId) {
    const templates = await this.prisma.templates.findMany({
      where: {
        userId: userId.id,
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
