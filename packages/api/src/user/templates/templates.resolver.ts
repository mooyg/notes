import { User as IUser } from '.prisma/client'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { JwtGuard } from 'src/auth/guards/jwt-guard'
import { GQLUser, User } from 'src/decorators/user.decorator'
import { GqlAuthGuard } from 'src/guards/gql-auth-guard'
import { CreateTemplateDto } from './dto/create-template.dto'
import { Templates } from './models'
import { TemplatesService } from './templates.service'

@Resolver(() => Templates)
export class TemplatesResolver {
  constructor(private readonly templatesService: TemplatesService) {}
  @Mutation(() => Templates)
  @UseGuards(GqlAuthGuard)
  async createTemplate(@Args() { templateName }: CreateTemplateDto, @GQLUser() userId: IUser) {
    return this.templatesService.createTemplate({ userId, templateName })
  }

  @Query(() => [Templates])
  @UseGuards(GqlAuthGuard)
  async getTemplates(@GQLUser() userId: IUser) {
    return this.templatesService.getTemplates(userId)
  }
}
