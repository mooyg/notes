import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { JwtGuard } from 'src/auth/guards/jwt-guard'
import { CreatePageDto } from './dto/create-page.dto'
import { PagesService } from './pages.service'
import { Pages } from './models'
import { User } from 'src/decorators/user.decorator'
import { GqlAuthGuard } from 'src/guards/gql-auth-guard'
import { SaveContentDto } from './dto/saveContent.dto'
@Resolver(() => Pages)
export class PagesResolver {
  constructor(private readonly pageService: PagesService) {}
  @Mutation(() => Pages)
  @UseGuards(GqlAuthGuard)
  async createPage(@Args() { templateId, pageName }: CreatePageDto) {
    return this.pageService.createPage({
      pageName,
      templateId,
    })
  }
  @Query(() => [Pages])
  @UseGuards(GqlAuthGuard)
  async getPagesByTemplateId(@Args('templateId') templateId: string) {
    return this.pageService.getPagesByTemplateId({ templateId })
  }
  @Query(() => Pages)
  @UseGuards(GqlAuthGuard)
  async getPage(@Args('pageId') pageId: string) {
    return await this.pageService.getPage(pageId)
  }
}
