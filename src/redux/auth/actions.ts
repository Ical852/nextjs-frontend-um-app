import { LoginRequest } from "@/types";
import * as CONST from "./constants";

export const login = (payload: LoginRequest) => {
  return {
    type: CONST.LOGIN,
    payload,
  }
}
export const loginSuccess = (payload: any) => {

}