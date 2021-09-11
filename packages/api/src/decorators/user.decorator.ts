import { createParamDecorator, ExecutionContext, Req } from '@nestjs/common'
import { Request } from 'express'

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest()
  return request.session.user
})
