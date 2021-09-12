import { Request, Response } from 'express';
import { ConfigService } from 'nestjs-dotenv';
import { AuthService } from './auth.service';
import { IGithubUser } from 'src/types';
export declare class AuthController {
    private readonly configService;
    private readonly authService;
    constructor(configService: ConfigService, authService: AuthService);
    githubAuth(): Promise<void>;
    githubAuthCallback(request: Request & {
        user: IGithubUser;
    }, res: Response): Promise<void>;
}
