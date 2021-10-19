import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUser(id: any): Promise<import(".prisma/client").User>;
    createTemplate(userId: any, details: any): Promise<import(".prisma/client").Templates>;
    getTemplates(userId: any): Promise<import(".prisma/client").Templates[]>;
    getPage(userId: any, pageId: any): Promise<import(".prisma/client").Pages>;
}
