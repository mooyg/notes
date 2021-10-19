import { PrismaService } from 'src/prisma.service';
export declare class PagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPage({ pageName, templateId }: {
        pageName: any;
        templateId: any;
    }): Promise<import(".prisma/client").Pages>;
    getPagesByTemplateId({ templateId }: {
        templateId: any;
    }): Promise<import(".prisma/client").Pages[]>;
    getPage(pageId: string): Promise<import(".prisma/client").Pages>;
}
