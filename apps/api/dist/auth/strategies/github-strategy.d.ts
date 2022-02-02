import 'dotenv/config';
import { IGithubUser } from 'src/types';
declare const GithubStrategy_base: new (...args: any[]) => any;
export declare class GithubStrategy extends GithubStrategy_base {
    constructor();
    validate(_: string, __: any, user: IGithubUser): Promise<IGithubUser>;
}
export {};
