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
export const getHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
