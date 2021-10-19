import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class CreatePageDto {
  @Field((type) => String)
  templateId: string

  @Field(() => String)
  pageName: string
}
