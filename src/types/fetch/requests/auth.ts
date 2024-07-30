export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  password: string;
}

export interface UpdateRequest {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
}
