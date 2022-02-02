import { CreatePageDto } from './dto/create-page.dto';
import { PagesService } from './pages.service';
import { LockPageDto } from './dto/lock-page.dto';
export declare class PagesResolver {
    private readonly pageService;
    constructor(pageService: PagesService);
    createPage({ templateId, pageName }: CreatePageDto): Promise<import("@prisma/client").Pages>;
    getPagesByTemplateId(templateId: string): Promise<import("@prisma/client").Pages[]>;
    getPage(pageId: string): Promise<import("@prisma/client").Pages>;
    lockPage({ password, pageId }: LockPageDto): Promise<import("@prisma/client").Pages>;
    verifyPagePassword({ password, pageId }: LockPageDto): Promise<boolean>;
}
