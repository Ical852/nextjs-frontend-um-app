import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
import {
  DeleteAdminDataRequest,
  DeleteAdminDataResponse,
  FailedResponse,
  GetAllAdminsResponse,
  UpdateAdminDataRequest,
  UpdateAdminDataResponse,
} from "@/types";
import store from "../store";

export const adminApis = {
  getAllAdmins: async (): Promise<GetAllAdminsResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + "/admin", {
      ...getHeader(token),
    });
    return response.data;
  },
  updateAdmin: async (
    payload: UpdateAdminDataRequest
  ): Promise<UpdateAdminDataResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.put(
      BASE_URL + `/admin/${payload.id}`,
      payload,
      {
        ...getHeader(token),
      }
    );
    return response.data;
  },
  deleteAdmin: async (
    payload: DeleteAdminDataRequest
  ): Promise<DeleteAdminDataResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.delete(BASE_URL + `/admin/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
};
