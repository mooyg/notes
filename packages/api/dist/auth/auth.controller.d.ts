import { Request, Response } from 'express';
export declare class AuthController {
    authRoutes(): string;
    githubAuth(): void;
    githubAuthCallback(res: Response): void;
    logout(req: Request, res: Response): void;
}
