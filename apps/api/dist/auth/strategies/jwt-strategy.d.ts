interface JWTPayload {
    id: string;
    iat: number;
}
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ id }: JWTPayload): Promise<{
        id: string;
    }>;
}
export {};
