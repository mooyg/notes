import { CreatePageDto } from './dto/create-page.dto';
import { PagesService } from './pages.service';
import { Pages } from './types';
export declare class PagesResolver {
    private readonly pageService;
    constructor(pageService: PagesService);
    createPage({ templateId, pageName }: CreatePageDto): Promise<import(".prisma/client").Pages>;
    getPagesByTemplateId(templateId: string): Promise<Pages[]>;
}
