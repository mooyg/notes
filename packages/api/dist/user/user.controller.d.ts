import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
import { MyUser } from 'src/typings/express';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private prisma;
    constructor(userService: UserService, prisma: PrismaService);
    getUser(req: Request): Promise<MyUser>;
    createTemplate(req: Request): Promise<import(".prisma/client").Templates>;
    getTemplates(req: Request): Promise<import(".prisma/client").Templates[]>;
    createPage(req: Request, templateId: any): Promise<import(".prisma/client").Pages>;
    getPagesByTemplateId(templateId: any): Promise<import(".prisma/client").Pages[]>;
}
