import { ConfigService } from 'nestjs-dotenv';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private readonly configService;
    private readonly prismaService;
    constructor(configService: ConfigService, prismaService: PrismaService);
    getAccessToken(code: any, res: any, session: any): Promise<void>;
}
