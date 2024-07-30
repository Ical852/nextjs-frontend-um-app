import store from "./store";

export const BASE_URL = "http://localhost:5000/api";
export const RESPONSE_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  NEED_ACTION: 300,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  ERROR: 500,
  FAILED: 501,
};
const state = store.getState();
const token = state.auth?.session?.token;
export const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
