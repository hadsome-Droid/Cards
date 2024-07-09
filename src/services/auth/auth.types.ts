export type UserData = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type CreateUserArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: string
  subject?: string
}
