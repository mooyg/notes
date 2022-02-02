interface JWTPayload {
    id: string;
    iat: number;
}
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ id }: JWTPayload): Promise<{
        id: string;
    }>;
}
export {};
