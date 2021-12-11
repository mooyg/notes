import { PrismaService } from 'src/prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
export declare class PagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPage({ pageName, templateId }: CreatePageDto): Promise<import(".prisma/client").Pages>;
    getPagesByTemplateId({ templateId }: {
        templateId: string;
    }): Promise<import(".prisma/client").Pages[]>;
    getPage(pageId: string): Promise<import(".prisma/client").Pages>;
    saveContent(pageId: string, content: object[]): Promise<import(".prisma/client").Pages>;
}
