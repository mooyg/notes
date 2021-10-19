import { User as IUser } from '.prisma/client';
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplatesService } from './templates.service';
export declare class TemplatesResolver {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    createTemplate({ templateName }: CreateTemplateDto, userId: IUser): Promise<import(".prisma/client").Templates>;
    getTemplates(userId: IUser): Promise<import(".prisma/client").Templates[]>;
}
