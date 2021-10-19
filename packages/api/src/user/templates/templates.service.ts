import { Templates, User } from '.prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class TemplatesService {
  constructor(private readonly prisma: PrismaService) {}
  async createTemplate({ userId, templateName }: { userId: User; templateName: string }) {
    return await this.prisma.templates.create({
      data: {
        name: templateName,
        userId: userId.id,
      },
    })
  }
  async getTemplates(userId: User): Promise<Templates[]> {
    const templates = await this.prisma.templates.findMany({
      where: {
        userId: userId.id,
      },
    })
    if (!templates) return []
    return templates
  }
}
