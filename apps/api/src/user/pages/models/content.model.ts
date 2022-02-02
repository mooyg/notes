import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType('ChildrenInput')
@ObjectType('Children')
class Children {
  @Field(() => String, { nullable: true })
  text?: string

  @Field(() => String, { nullable: true })
  type?: string

  @Field(() => String, { nullable: true })
  src?: string

  @Field(() => ChildChild, { nullable: true })
  children?: ChildChild[]
  @Field(() => String, { nullable: true })
  shortName?: string
}

@ObjectType('ChildChild')
@InputType('ChildChildInput')
class ChildChild {
  @Field(() => String, { nullable: true })
  text: string
}

@ObjectType('Content')
@InputType('ContentInput')
export class Content {
  @Field(() => [Children])
  children: Children[]
}
