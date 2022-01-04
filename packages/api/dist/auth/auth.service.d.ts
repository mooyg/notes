import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    getUser(id: any): Promise<User>;
    githubLogin(user: any): Promise<{
        accessToken: string;
    }>;
    private createJwt;
}
