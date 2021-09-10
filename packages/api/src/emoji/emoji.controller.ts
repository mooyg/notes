import { Controller, Get, Param, Res } from '@nestjs/common'
import { EmojiService } from './emoji.service'
import * as path from 'path'
import { Response } from 'express'

@Controller('emoji')
export class EmojiController {
  constructor(private readonly userService: EmojiService) {}

  @Get('/:emojiId')
  getUser(@Res() res: Response, @Param('emojiId') emojiId) {
    return res.sendFile(
      path.join(__dirname, '../../node_modules', `emoji-datasource-apple/img/apple/64/${emojiId}`)
    )
  }
}
