import { Field, ObjectType } from '@nestjs/graphql'
import { Content } from './content.model'

@ObjectType()
export class Pages {
  @Field(() => String)
  name: string

  @Field(() => String)
  id: string

  @Field(() => String, { nullable: true })
  badge?: string

  @Field(() => [Content], { nullable: true })
  content?: Content

  @Field(() => String)
  templateId: string
}
