import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Templates {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  userId: string

  @Field(() => String)
  badge: string
}
