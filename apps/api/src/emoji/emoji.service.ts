import { Injectable } from '@nestjs/common'

@Injectable()
export class EmojiService {
  getUser(): string {
    return 'get users'
  }
}
