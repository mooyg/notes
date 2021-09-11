import { PrismaService } from 'src/prisma.service';
import { MyUser } from 'src/typings/express';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(): string;
    createTemplate(user: MyUser, details: any): Promise<import(".prisma/client").Templates>;
    getTemplates(user: MyUser): Promise<import(".prisma/client").Templates[]>;
    createPage({ details, templateId }: {
        details: any;
        templateId: any;
    }): Promise<"No template Id provided" | import(".prisma/client").Pages>;
    getPagesByTemplateId({ templateId }: {
        templateId: any;
    }): Promise<"No pages found for this template" | import(".prisma/client").Pages[]>;
}
