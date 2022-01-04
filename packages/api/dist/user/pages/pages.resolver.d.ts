import { CreatePageDto } from './dto/create-page.dto';
import { PagesService } from './pages.service';
export declare class PagesResolver {
    private readonly pageService;
    constructor(pageService: PagesService);
    createPage({ templateId, pageName }: CreatePageDto): Promise<import("@prisma/client").Pages>;
    getPagesByTemplateId(templateId: string): Promise<import("@prisma/client").Pages[]>;
    getPage(pageId: string): Promise<import("@prisma/client").Pages>;
}
