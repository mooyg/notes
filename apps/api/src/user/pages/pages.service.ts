import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreatePageDto } from './dto/create-page.dto'
import { JsonArray } from 'prisma'
import { Content } from './models/content.model'
import { LockPageDto } from './dto/lock-page.dto'
import { compare, hash } from 'bcrypt'
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
    delete page.password
    return page
  }
  async saveContent(pageId: string, content: object[]) {
    return await this.prisma.pages.update({
      where: {
        id: pageId,
      },
      data: {
        content: content as JsonArray,
      },
    })
  }
  async lockPage({ pageId, password }: LockPageDto) {
    const hasedPassword = await hash(password, 8)
    return await this.prisma.pages.update({
      where: {
        id: pageId,
      },
      data: {
        locked: true,
        password: hasedPassword,
      },
    })
  }
  async verifyPagePassword({ pageId, password }: LockPageDto) {
    const page = await this.prisma.pages.findFirst({
      where: {
        id: pageId,
      },
    })
    const validate = await compare(password, page.password)
    if (!validate) throw new UnauthorizedException()
    return true
  }
}
