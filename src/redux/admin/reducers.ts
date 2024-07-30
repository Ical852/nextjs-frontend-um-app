import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "@/types";

const adminInitialStates = {
  ...STATE.adminInitialStates,
  action: "",
};

export const adminReducers = (
  state = adminInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // GET_ALL_ADMINS
    [CONST.GET_ALL_ADMINS]: () => ({
      ...state,
      getAllAdminsLoading: true,
      getAllAdminsError: false,
      getAllAdminsResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_ADMINS_SUCCESS]: () => ({
      ...state,
      getAllAdminsLoading: false,
      getAllAdminsError: false,
      getAllAdminsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_ADMINS_FAILED]: () => ({
      ...state,
      getAllAdminsLoading: false,
      getAllAdminsError: true,
      getAllAdminsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_ADMINS_RESET]: () => ({
      ...state,
      getAllAdminsLoading: false,
      getAllAdminsError: false,
      getAllAdminsResponse: {},
      action: type,
    }),
    // GET_ALL_ADMINS

    // UPDATE_ADMIN
    [CONST.UPDATE_ADMIN]: () => ({
      ...state,
      updateAdminLoading: true,
      updateAdminError: false,
      updateAdminResponse: {},
      action: type,
    }),
    [CONST.UPDATE_ADMIN_SUCCESS]: () => ({
      ...state,
      updateAdminLoading: false,
      updateAdminError: false,
      updateAdminResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_ADMIN_FAILED]: () => ({
      ...state,
      updateAdminLoading: false,
      updateAdminError: true,
      updateAdminResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_ADMIN_RESET]: () => ({
      ...state,
      updateAdminLoading: false,
      updateAdminError: false,
      updateAdminResponse: {},
      action: type,
    }),
    // UPDATE_ADMIN

    // DELETE_ADMIN
    [CONST.DELETE_ADMIN]: () => ({
      ...state,
      deleteAdminLoading: true,
      deleteAdminError: false,
      deleteAdminResponse: {},
      action: type,
    }),
    [CONST.DELETE_ADMIN_SUCCESS]: () => ({
      ...state,
      deleteAdminLoading: false,
      deleteAdminError: false,
      deleteAdminResponse: payload,
      action: type,
    }),
    [CONST.DELETE_ADMIN_FAILED]: () => ({
      ...state,
      deleteAdminLoading: false,
      deleteAdminError: true,
      deleteAdminResponse: payload,
      action: type,
    }),
    [CONST.DELETE_ADMIN_RESET]: () => ({
      ...state,
      deleteAdminLoading: false,
      deleteAdminError: false,
      deleteAdminResponse: {},
      action: type,
    }),
    // DELETE_ADMIN

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
