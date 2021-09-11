import { createParamDecorator, ExecutionContext, Req } from '@nestjs/common'
import { Request } from 'express'
import { MyUser } from 'src/typings/express'

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext): MyUser => {
  const request: Request = ctx.switchToHttp().getRequest()
  return request.user
})
