export interface IGithubUser {
    username: string;
    avatar_url: string;
    emails: Email[];
}
export interface Email {
    value: string;
}
export interface Content {
    children: {
        text?: string;
        type?: string;
        src?: string;
        children?: {
            text: string;
        }[];
        shortName?: string;
    }[];
}
