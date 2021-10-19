import { CreatePageDto } from './dto/create-page.dto';
import { PagesService } from './pages.service';
import { Pages } from './models';
export declare class PagesResolver {
    private readonly pageService;
    constructor(pageService: PagesService);
    createPage({ templateId, pageName }: CreatePageDto): Promise<Pages>;
    getPagesByTemplateId(templateId: string): Promise<Pages[]>;
    getPage(pageId: string): Promise<Pages>;
}
