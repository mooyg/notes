import { Injectable, Req } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
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

  async getPage(userId, pageId) {
    const page = await this.prisma.pages.findFirst({
      where: {
        id: pageId,
      },
    })
    return page
  }
}
