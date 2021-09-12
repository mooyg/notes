import { Request, Response } from 'express';
import { ConfigService } from 'nestjs-dotenv';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly configService;
    private readonly authService;
    constructor(configService: ConfigService, authService: AuthService);
    loginIntoGithub(res: Response): Promise<void>;
    githubCallback(req: Request, res: Response, session: any): Promise<void>;
    userExists(session: any): Promise<string>;
    userSuccess(user: any): Promise<string>;
}
