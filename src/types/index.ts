export interface AuthState {
  isAuthenticated?: boolean;
  user: any;
}

export interface RootState {
  auth: AuthState;
}

export interface IAuthProps {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
}
