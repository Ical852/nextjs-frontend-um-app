import { LoginRequest, LoginResponse, RegisterRequest } from "../fetch";

export interface LoginPageProps {
  login: (payload: LoginRequest) => void;
  loginReset: () => void;
  loginLoading: Boolean;
  loginResponse: LoginResponse;
  loginError: Boolean;
  session: any;
}

export interface RegisterPageProps {
  register: (payload: RegisterRequest) => void;
  registerReset: () => void;
  registerLoading: Boolean;
  registerResponse: LoginResponse;
  registerError: Boolean;
  session: any;
}