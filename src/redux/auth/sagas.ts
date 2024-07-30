import { takeLatest, call, put } from "redux-saga/effects";
import {
  FetchResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  ReduxActionParams,
  RegisterRequest,
  RegisterResponse,
  UpdateRequest,
  UpdateResponse,
} from "@/types";
import { authApis } from "./apis";
import {
  LOGIN,
  REGISTER,
  ADMIN_FETCH,
  ADMIN_UPDATE,
  LOGOUT,
} from "./constants";
import {
  loginSuccess,
  loginFailed,
  registerSuccess,
  registerFailed,
  fetchSuccess,
  fetchFailed,
  updateSuccess,
  updateFailed,
  logoutSuccess,
  logoutFailed,
} from "./actions";
import { RESPONSE_STATUS } from "../constants";

function* loginSaga(action: ReduxActionParams): Generator {
  try {
    const response: LoginResponse = yield call(
      authApis.login,
      action.payload as LoginRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.CREATED:
        return yield put(loginSuccess(response));
      case RESPONSE_STATUS.SUCCESS:
        return yield put(loginSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          loginFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          loginFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          loginFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          loginFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(loginFailed({ message: `Error: ${error.message}` }));
  }
}

function* registerSaga(action: ReduxActionParams): Generator {
  try {
    const response: RegisterResponse = yield call(
      authApis.register,
      action.payload as RegisterRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(registerSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(registerSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          registerFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          registerFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          registerFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          registerFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(registerFailed({ message: `Error: ${error.message}` }));
  }
}

function* fetchSaga(): Generator {
  try {
    const response: FetchResponse = yield call(authApis.fetch);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(fetchSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(fetchSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          fetchFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          fetchFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          fetchFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          fetchFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(fetchFailed({ message: `Error: ${error.message}` }));
  }
}

function* updateSaga(action: ReduxActionParams): Generator {
  try {
    const response: UpdateResponse = yield call(
      authApis.update,
      action.payload as UpdateRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(updateSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(updateSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          updateFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          updateFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          updateFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          updateFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(updateFailed({ message: `Error: ${error.message}` }));
  }
}

function* logoutSaga(): Generator {
  try {
    const response: LogoutResponse = yield call(authApis.logout);
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(logoutSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(logoutSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          logoutFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          logoutFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          logoutFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          logoutFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(logoutFailed({ message: `Error: ${error.message}` }));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(ADMIN_FETCH, fetchSaga);
  yield takeLatest(ADMIN_UPDATE, updateSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
