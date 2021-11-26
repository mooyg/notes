import { ArgsType, Field, InputType } from '@nestjs/graphql'
import { Content } from '../models/content.model'

export class SaveContentDto {
  content: object[]
}
