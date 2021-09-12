import { PrismaService } from 'src/prisma.service';
import { IGithubUser } from 'src/types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    githubLogin(user: IGithubUser): Promise<{
        accessToken: string;
    }>;
    private createJwt;
}
