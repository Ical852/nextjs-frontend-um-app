export interface ReduxActionParams {
  payload: any;
  type: string;
}

export interface Response {
  status: number;
  message: string;
}

export interface FailedResponse {
  message: string;
}

export interface UserData {
  id: number;
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  updatedAt: string;
  createdAt: string;
}
