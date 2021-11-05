import { Content } from 'api'

export interface IUser {
  id: string
  userProfilePicture: string
  username: string
}

export interface ITemplate {
  id: string
  name: string
}

export interface IPage {
  badge?: string
  content?: Content
  id: string
  name: string
  templateId: string
}
