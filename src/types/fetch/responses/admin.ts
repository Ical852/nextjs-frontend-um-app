import { Response, UserData } from "@/types/main";

export interface GetAllAdminsResponse extends Response {
  data: Array<UserData>;
}

export interface UpdateAdminDataResponse extends Response {
  data: UserData;
}

export interface DeleteAdminDataResponse extends Response {}
