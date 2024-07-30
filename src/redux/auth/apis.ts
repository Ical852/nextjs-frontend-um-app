import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
import {
  FailedResponse,
  FetchResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RegisterRequest,
  RegisterResponse,
  UpdateRequest,
  UpdateResponse,
} from "@/types";
import store from "../store";

export const authApis = {
  login: async (
    payload: LoginRequest
  ): Promise<LoginResponse | FailedResponse> => {
    const response = await axios.post(BASE_URL + "/admin/login", payload);
    return response.data;
  },
  register: async (
    payload: RegisterRequest
  ): Promise<RegisterResponse | FailedResponse> => {
    const response = await axios.post(BASE_URL + "/admin/register", payload);
    return response.data;
  },
  fetch: async (): Promise<FetchResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + "/admin/fetch", {
      ...getHeader(token),
    });
    return response.data;
  },
  update: async (
    payload: UpdateRequest
  ): Promise<UpdateResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.post(BASE_URL + "/admin/update", payload, {
      ...getHeader(token),
    });
    return response.data;
  },
  logout: async (): Promise<LogoutResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.post(
      BASE_URL + "/admin/logout",
      {},
      { ...getHeader(token) }
    );
    return response.data;
  },
};
