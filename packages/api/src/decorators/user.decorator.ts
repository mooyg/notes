import { createParamDecorator, ExecutionContext, Req } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request } from 'express'

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest()
  return request.user
})

export const GQLUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context)
  return ctx.getContext().req.user
})
