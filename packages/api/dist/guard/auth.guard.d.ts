import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
export declare class AuthGuard implements CanActivate {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
