export interface IGithubUser {
  username: string
  avatar_url: string
  emails: Email[]
}

export interface Email {
  value: string
}
