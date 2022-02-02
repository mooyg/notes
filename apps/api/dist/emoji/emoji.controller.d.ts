import { EmojiService } from './emoji.service';
import { Response } from 'express';
export declare class EmojiController {
    private readonly userService;
    constructor(userService: EmojiService);
    getUser(res: Response, emojiId: any): void;
}
