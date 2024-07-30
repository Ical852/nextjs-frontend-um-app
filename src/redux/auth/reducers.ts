import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "@/types";

const authInitialStates = {
  ...STATE.authInitialStates,
  action: "",
};

export const authReducers = (
  state = authInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // LOGIN
    [CONST.LOGIN]: () => ({
      ...state,
      loginLoading: true,
      loginError: false,
      loginResponse: {},
      session: {},
      action: type,
    }),
    [CONST.LOGIN_SUCCESS]: () => ({
      ...state,
      loginLoading: false,
      loginError: false,
      loginResponse: payload,
      session: {
        ...payload?.data?.data,
        token: payload?.data?.token,
      },
      action: type,
    }),
    [CONST.LOGIN_FAILED]: () => ({
      ...state,
      loginLoading: false,
      loginError: true,
      loginResponse: payload,
      session: {},
      action: type,
    }),
    [CONST.LOGIN_RESET]: () => ({
      ...state,
      loginLoading: false,
      loginError: false,
      loginResponse: {},
      session: {},
      action: type,
    }),
    // LOGIN

    // REGISTER
    [CONST.REGISTER]: () => ({
      ...state,
      registerLoading: true,
      registerError: false,
      registerResponse: {},
      action: type,
    }),
    [CONST.REGISTER_SUCCESS]: () => ({
      ...state,
      registerLoading: false,
      registerError: false,
      registerResponse: payload,
      action: type,
    }),
    [CONST.REGISTER_FAILED]: () => ({
      ...state,
      registerLoading: false,
      registerError: true,
      registerResponse: payload,
      action: type,
    }),
    [CONST.REGISTER_RESET]: () => ({
      ...state,
      registerLoading: false,
      registerError: false,
      registerResponse: {},
      action: type,
    }),
    // REGISTER

    // ADMIN_FETCH
    [CONST.ADMIN_FETCH]: () => ({
      ...state,
      fetchLoading: true,
      fetchError: false,
      fetchResponse: {},
      action: type,
    }),
    [CONST.ADMIN_FETCH_SUCCESS]: () => ({
      ...state,
      fetchLoading: false,
      fetchError: false,
      fetchResponse: payload,
      action: type,
    }),
    [CONST.ADMIN_FETCH_FAILED]: () => ({
      ...state,
      fetchLoading: false,
      fetchError: true,
      fetchResponse: payload,
      action: type,
    }),
    [CONST.ADMIN_FETCH_RESET]: () => ({
      ...state,
      fetchLoading: false,
      fetchError: false,
      fetchResponse: {},
      action: type,
    }),
    // ADMIN_FETCH

    // ADMIN_UPDATE
    [CONST.ADMIN_UPDATE]: () => ({
      ...state,
      updateLoading: true,
      updateError: false,
      updateResponse: {},
      action: type,
    }),
    [CONST.ADMIN_UPDATE_SUCCESS]: () => ({
      ...state,
      updateLoading: false,
      updateError: false,
      updateResponse: payload,
      action: type,
    }),
    [CONST.ADMIN_UPDATE_FAILED]: () => ({
      ...state,
      updateLoading: false,
      updateError: true,
      updateResponse: payload,
      action: type,
    }),
    [CONST.ADMIN_UPDATE_RESET]: () => ({
      ...state,
      updateLoading: false,
      updateError: false,
      updateResponse: {},
      action: type,
    }),
    // ADMIN_UPDATE

    // LOGOUT
    [CONST.LOGOUT]: () => ({
      ...state,
      logoutLoading: true,
      logoutError: false,
      logoutResponse: {},
      action: type,
    }),
    [CONST.LOGOUT_SUCCESS]: () => ({
      ...state,
      logoutLoading: false,
      logoutError: false,
      logoutResponse: payload,
      session: {},
      action: type,
    }),
    [CONST.LOGOUT_FAILED]: () => ({
      ...state,
      logoutLoading: false,
      logoutError: true,
      logoutResponse: payload,
      action: type,
    }),
    [CONST.LOGOUT_RESET]: () => ({
      ...state,
      logoutLoading: false,
      logoutError: false,
      logoutResponse: {},
      action: type,
    }),
    // LOGOUT

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
