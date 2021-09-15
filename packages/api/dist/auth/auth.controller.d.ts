import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    private readonly userService;
    constructor(authService: AuthService, jwtService: JwtService, userService: UserService);
    getUser(userId: any): Promise<import(".prisma/client").User>;
    githubAuth(): Promise<void>;
    githubAuthCallback(request: Request & {
        user: any;
    }, res: Response): Promise<void>;
}
