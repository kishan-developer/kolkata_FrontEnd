export interface UserType {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: UserType;
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}