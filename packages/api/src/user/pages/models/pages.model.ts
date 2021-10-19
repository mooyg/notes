import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Pages {
  @Field(() => String)
  name: string

  @Field(() => String)
  id: string

  @Field(() => String, { nullable: true })
  badge?: string

  @Field(() => String, { nullable: true })
  content?: string

  @Field(() => String)
  templateId: string
}
