import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class LockPageDto {
  @Field((type) => String)
  pageId: string
  @Field(() => String)
  password: string
}
