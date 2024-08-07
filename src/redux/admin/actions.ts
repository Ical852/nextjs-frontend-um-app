import {
  DeleteAdminDataRequest,
  DeleteAdminDataResponse,
  FailedResponse,
  GetAllAdminsResponse,
  UpdateAdminDataRequest,
  UpdateAdminDataResponse,
} from "@/types";
import * as CONST from "./constants";

export const getAllAdmins = () => {
  return {
    type: CONST.GET_ALL_ADMINS,
  };
};
export const getAllAdminsSuccess = (payload: GetAllAdminsResponse) => {
  return {
    type: CONST.GET_ALL_ADMINS_SUCCESS,
    payload,
  };
};
export const getAllAdminsFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_ALL_ADMINS_FAILED,
    payload,
  };
};
export const getAllAdminsReset = () => {
  return {
    type: CONST.GET_ALL_ADMINS_RESET,
  };
};

export const updateAdmin = (payload: UpdateAdminDataRequest) => {
  return {
    type: CONST.UPDATE_ADMIN,
    payload,
  };
};
export const updateAdminSuccess = (payload: UpdateAdminDataResponse) => {
  return {
    type: CONST.UPDATE_ADMIN_SUCCESS,
    payload,
  };
};
export const updateAdminFailed = (payload: FailedResponse) => {
  return {
    type: CONST.UPDATE_ADMIN_FAILED,
    payload,
  };
};
export const updateAdminReset = () => {
  return {
    type: CONST.UPDATE_ADMIN_RESET,
  };
};

export const deleteAdmin = (payload: DeleteAdminDataRequest) => {
  return {
    type: CONST.DELETE_ADMIN,
    payload,
  };
};
export const deleteAdminSuccess = (payload: DeleteAdminDataResponse) => {
  return {
    type: CONST.DELETE_ADMIN_SUCCESS,
    payload,
  };
};
export const deleteAdminFailed = (payload: FailedResponse) => {
  return {
    type: CONST.DELETE_ADMIN_FAILED,
    payload,
  };
};
export const deleteAdminReset = () => {
  return {
    type: CONST.DELETE_ADMIN_RESET,
  };
};
