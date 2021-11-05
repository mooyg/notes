import { ArgsType, Field, InputType } from '@nestjs/graphql'
import { Content } from '../models/content.model'

@ArgsType()
export class SaveContentDto {
  @Field(() => [Content])
  content: Content
  @Field(() => String)
  pageId: string
}
