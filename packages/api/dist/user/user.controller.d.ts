import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private prisma;
    constructor(userService: UserService, prisma: PrismaService);
    createTemplate(req: Request, userId: any): Promise<import(".prisma/client").Templates>;
    getTemplates(userId: any): Promise<import(".prisma/client").Templates[]>;
    getPage(userId: any, pageId: any): Promise<import(".prisma/client").Pages>;
}
