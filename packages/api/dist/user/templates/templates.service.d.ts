import { Templates, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class TemplatesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTemplate({ userId, templateName }: {
        userId: User;
        templateName: string;
    }): Promise<Templates>;
    getTemplates(userId: User): Promise<Templates[]>;
}
