import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { User as IUser } from '.prisma/client';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    getUser(userId: IUser): Promise<IUser>;
    githubAuth(): Promise<void>;
    githubAuthCallback(request: Request & {
        user: any;
    }, res: Response): Promise<void>;
}
