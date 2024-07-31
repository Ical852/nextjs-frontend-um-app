import { Response } from "@/types/main";
import { UpdateRequest } from "./auth";

export interface UpdateAdminDataRequest extends UpdateRequest {
  id: number;
}

export interface DeleteAdminDataRequest {
  id: number;
}
