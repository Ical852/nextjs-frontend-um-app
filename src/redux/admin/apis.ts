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

export const adminApis = {
  getAllAdmins: async (): Promise<GetAllAdminsResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + "/admin", {
      ...getHeader(),
    });
    return response.data;
  },
  updateAdmin: async (
    payload: UpdateAdminDataRequest
  ): Promise<UpdateAdminDataResponse | FailedResponse> => {
    const response = await axios.put(BASE_URL + `/admin/${payload.id}`, payload, {
      ...getHeader()
    });
    return response.data;
  },
  deleteAdmin: async (
    payload: DeleteAdminDataRequest
  ): Promise<DeleteAdminDataResponse | FailedResponse> => {
    const response = await axios.delete(BASE_URL + `/admin/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
};
