import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
import { MyUser } from 'src/typings/express';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private prisma;
    constructor(userService: UserService, prisma: PrismaService);
    getUser(user: MyUser, req: Request): Promise<MyUser>;
    createTemplate(req: Request, user: MyUser): Promise<import(".prisma/client").Templates>;
    getTemplates(user: MyUser): Promise<import(".prisma/client").Templates[]>;
    createPage(req: Request, templateId: any): Promise<"No template Id provided" | import(".prisma/client").Pages>;
    getPagesByTemplateId(templateId: any): Promise<"No pages found for this template" | import(".prisma/client").Pages[]>;
}
