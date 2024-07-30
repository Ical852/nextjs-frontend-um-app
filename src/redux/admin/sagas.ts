import { takeLatest, call, put } from "redux-saga/effects";
import {
  DeleteAdminDataRequest,
  DeleteAdminDataResponse,
  GetAllAdminsResponse,
  ReduxActionParams,
  UpdateAdminDataRequest,
  UpdateAdminDataResponse,
} from "@/types";
import { adminApis } from "./apis";
import {
  GET_ALL_ADMINS,
  UPDATE_ADMIN,
  DELETE_ADMIN,
} from "./constants";
import {
  getAllAdminsSuccess,
  getAllAdminsFailed,
  updateAdminSuccess,
  updateAdminFailed,
  deleteAdminSuccess,
  deleteAdminFailed,
} from "./actions";
import { RESPONSE_STATUS } from "../constants";

function* getAllAdminsSaga(): Generator {
  try {
    const response: GetAllAdminsResponse = yield call(
      adminApis.getAllAdmins,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(getAllAdminsSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(getAllAdminsSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getAllAdminsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getAllAdminsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getAllAdminsFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getAllAdminsFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getAllAdminsFailed({ message: `Error: ${error.message}` }));
  }
}

function* updateAdminSaga(action: ReduxActionParams): Generator {
  try {
    const response: UpdateAdminDataResponse = yield call(
      adminApis.updateAdmin,
      action.payload as UpdateAdminDataRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(updateAdminSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(updateAdminSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          updateAdminFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          updateAdminFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          updateAdminFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          updateAdminFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(updateAdminFailed({ message: `Error: ${error.message}` }));
  }
}

function* deleteAdminSaga(action: ReduxActionParams): Generator {
  try {
    const response: DeleteAdminDataResponse = yield call(
      adminApis.deleteAdmin,
      action.payload as DeleteAdminDataRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(deleteAdminSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(deleteAdminSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          deleteAdminFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          deleteAdminFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          deleteAdminFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          deleteAdminFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(deleteAdminFailed({ message: `Error: ${error.message}` }));
  }
}

export function* adminSaga() {
  yield takeLatest(GET_ALL_ADMINS, getAllAdminsSaga);
  yield takeLatest(UPDATE_ADMIN, updateAdminSaga);
  yield takeLatest(DELETE_ADMIN, deleteAdminSaga);
}
