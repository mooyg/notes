import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(id: any): Promise<import(".prisma/client").User>;
    createTemplate(userId: any, details: any): Promise<import(".prisma/client").Templates>;
    getTemplates(userId: any): Promise<import(".prisma/client").Templates[]>;
    createPage({ details, templateId }: {
        details: any;
        templateId: any;
    }): Promise<"No template Id provided" | import(".prisma/client").Pages>;
    getPagesByTemplateId({ templateId }: {
        templateId: any;
    }): Promise<import(".prisma/client").Pages[] | "No pages found for this template">;
}
