export interface IUser {
  id: string
  email: string
  name: string
  created_at: number
}

export interface UserWithPassword extends IUser {
  password: string
}

export interface AuthException {
  message: string
}
