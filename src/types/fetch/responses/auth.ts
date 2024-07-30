import { UserData, Response } from "@/types/main";

export interface LoginResponse extends Response {
  data: UserData;
  token: string;
}

export interface RegisterResponse extends Response {
  data: UserData;
}

export interface FetchResponse extends Response {
  data: UserData;
}

export interface LogoutResponse extends Response {}

export interface UpdateResponse extends Response {
  data: UserData;
}
