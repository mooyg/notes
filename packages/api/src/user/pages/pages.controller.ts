import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { SaveContentDto } from './dto/saveContent.dto'
import { PagesService } from './pages.service'

@Controller('/pages')
export class PagesController {
  constructor(private _pageService: PagesService) {}

  @Post('/save/:pageId')
  async saveContent(@Param('pageId') pageId: string, @Body() saveContentDto: SaveContentDto) {
    console.log('pageID', pageId)
    console.log('content', saveContentDto.content)
    this._pageService.saveContent(pageId, saveContentDto.content)
  }

  @Get('/:pageId')
  async getPage(@Query('pageId') pageId: string) {
    return await this._pageService.getPage(pageId)
  }
}
