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
import * as CONST from "./constants";

export const login = (payload: LoginRequest) => {
  return {
    type: CONST.LOGIN,
    payload,
  };
};
export const loginSuccess = (payload: LoginResponse) => {
  return {
    type: CONST.LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailed = (payload: FailedResponse) => {
  return {
    type: CONST.LOGIN_FAILED,
    payload,
  };
};
export const loginReset = () => {
  return {
    type: CONST.LOGIN_RESET,
  };
};

export const register = (payload: RegisterRequest) => {
  return {
    type: CONST.REGISTER,
    payload,
  };
};
export const registerSuccess = (payload: RegisterResponse) => {
  return {
    type: CONST.REGISTER_SUCCESS,
    payload,
  };
};
export const registerFailed = (payload: FailedResponse) => {
  return {
    type: CONST.REGISTER_FAILED,
    payload,
  };
};
export const registerReset = () => {
  return {
    type: CONST.REGISTER_RESET,
  };
};

export const fetch = () => {
  return {
    type: CONST.ADMIN_FETCH,
  };
};
export const fetchSuccess = (payload: FetchResponse) => {
  return {
    type: CONST.ADMIN_FETCH_SUCCESS,
    payload,
  };
};
export const fetchFailed = (payload: FailedResponse) => {
  return {
    type: CONST.ADMIN_FETCH_FAILED,
    payload,
  };
};
export const fetchReset = () => {
  return {
    type: CONST.ADMIN_FETCH_RESET,
  };
};

export const update = (payload: UpdateRequest) => {
  return {
    type: CONST.ADMIN_UPDATE,
    payload,
  };
};
export const updateSuccess = (payload: UpdateResponse) => {
  return {
    type: CONST.ADMIN_UPDATE_SUCCESS,
    payload,
  };
};
export const updateFailed = (payload: FailedResponse) => {
  return {
    type: CONST.ADMIN_UPDATE_FAILED,
    payload,
  };
};
export const updateReset = () => {
  return {
    type: CONST.ADMIN_UPDATE_RESET,
  };
};

export const logout = () => {
  return {
    type: CONST.LOGOUT,
  };
};
export const logoutSuccess = (payload: LogoutResponse) => {
  return {
    type: CONST.LOGOUT_SUCCESS,
    payload,
  };
};
export const logoutFailed = (payload: FailedResponse) => {
  return {
    type: CONST.LOGOUT_FAILED,
    payload,
  };
};
export const logoutReset = () => {
  return {
    type: CONST.LOGOUT_RESET,
  };
};
