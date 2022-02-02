import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class CreateTemplateDto {
  @Field(() => String)
  templateName: string
}
