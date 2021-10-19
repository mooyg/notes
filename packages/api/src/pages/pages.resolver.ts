import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { JwtGuard } from 'src/auth/guards/jwt-guard'
import { CreatePageDto } from './dto/create-page.dto'
import { PagesService } from './pages.service'
import { Pages } from './types'
@Resolver()
export class PagesResolver {
  constructor(private readonly pageService: PagesService) {}
  @Mutation(() => Pages)
  @UseGuards(JwtGuard)
  async createPage(@Args() { templateId, pageName }: CreatePageDto) {
    return this.pageService.createPage({
      pageName,
      templateId,
    })
  }
  @Query((returns) => [Pages])
  @UseGuards(JwtGuard)
  async getPagesByTemplateId(@Args('templateId') templateId: string): Promise<Pages[]> {
    return this.pageService.getPagesByTemplateId({ templateId })
  }
}
