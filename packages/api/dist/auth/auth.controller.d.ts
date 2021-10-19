import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    getUser(userId: any): Promise<import(".prisma/client").User>;
    githubAuth(): Promise<void>;
    githubAuthCallback(request: Request & {
        user: any;
    }, res: Response): Promise<void>;
}
