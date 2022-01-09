import { SaveContentDto } from './dto/saveContent.dto';
import { PagesService } from './pages.service';
export declare class PagesController {
    private _pageService;
    constructor(_pageService: PagesService);
    saveContent(pageId: string, saveContentDto: SaveContentDto): Promise<void>;
    getPage(pageId: string): Promise<import(".prisma/client").Pages>;
}
