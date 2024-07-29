import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
import { LoginRequest, RegisterRequest, UpdateRequest } from "@/types";

export const userApi = {
  login: async (payload: LoginRequest) => {
    const response = await axios.post(BASE_URL + "/admin/login", payload);
    return response.data;
  },
  register: async (payload: RegisterRequest) => {
    const response = await axios.post(BASE_URL + "/admin/register", payload);
    return response.data;
  },
  fetch: async () => {
    const response = await axios.get(BASE_URL + "/admin/fetch", { ...getHeader() });
    return response.data;
  },
  update: async (payload: UpdateRequest) => {
    const response = await axios.post(BASE_URL + "/admin/update", payload, { ...getHeader() });
    return response.data;
  },
  logout: async () => {
    const response = await axios.post(BASE_URL + "/admin/logout", {}, { ...getHeader() });
    return response.data;
  },

};
