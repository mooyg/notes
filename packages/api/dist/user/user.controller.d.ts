import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private prisma;
    constructor(userService: UserService, prisma: PrismaService);
    getUser(userId: any, req: Request): Promise<import(".prisma/client").User>;
    createTemplate(req: Request, userId: any): Promise<import(".prisma/client").Templates>;
    getTemplates(userId: any): Promise<import(".prisma/client").Templates[]>;
    createPage(req: Request, templateId: any): Promise<"No template Id provided" | import(".prisma/client").Pages>;
    getPagesByTemplateId(templateId: any): Promise<"No pages found for this template" | import(".prisma/client").Pages[]>;
}
