export interface IGithubUser {
    username: string;
    profileUrl: string;
    emails: Email[];
}
export interface Email {
    value: string;
}
