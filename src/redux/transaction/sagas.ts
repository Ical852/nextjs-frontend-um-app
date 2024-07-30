import { takeLatest, call, put } from "redux-saga/effects";
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  GetAllTransactionResponse,
  GetDetailTransactionRequest,
  GetDetailTransactionResponse,
  ReduxActionParams,
} from "@/types";
import { transactionApis } from "./apis";
import {
  GET_ALL_TRANSACTIONS,
  GET_TRANSACTION_DETAIL,
  CREATE_TRANSACTION,
  DELETE_TRANSACTION
} from "./constants";
import {
  getAllTransactionsSuccess,
  getAllTransactionsFailed,
  getTransactionDetailSuccess,
  getTransactionDetailFailed,
  createTransactionSuccess,
  createTransactionFailed,
  deleteTransactionSuccess,
  deleteTransactionFailed,
} from "./actions";
import { RESPONSE_STATUS } from "../constants";

function* getAllTransactionsSaga(): Generator {
  try {
    const response: GetAllTransactionResponse = yield call(
      transactionApis.getAllTransactions,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(getAllTransactionsSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(getAllTransactionsSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getAllTransactionsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getAllTransactionsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getAllTransactionsFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getAllTransactionsFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getAllTransactionsFailed({ message: `Error: ${error.message}` }));
  }
}

function* getTransactionDetailSaga(action: ReduxActionParams): Generator {
  try {
    const response: GetDetailTransactionResponse = yield call(
      transactionApis.getTransactionDetail,
      action.payload as GetDetailTransactionRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(getTransactionDetailSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(getTransactionDetailSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getTransactionDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getTransactionDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getTransactionDetailFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getTransactionDetailFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getTransactionDetailFailed({ message: `Error: ${error.message}` }));
  }
}

function* createTransactionSaga(action: ReduxActionParams): Generator {
  try {
    const response: CreateTransactionResponse = yield call(
      transactionApis.createTransaction,
      action.payload as CreateTransactionRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(createTransactionSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(createTransactionSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          createTransactionFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          createTransactionFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          createTransactionFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          createTransactionFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(createTransactionFailed({ message: `Error: ${error.message}` }));
  }
}

function* deleteTransactionSaga(action: ReduxActionParams): Generator {
  try {
    const response: DeleteTransactionResponse = yield call(
      transactionApis.deleteTransaction,
      action.payload as DeleteTransactionRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        return yield put(deleteTransactionSuccess(response));
      case RESPONSE_STATUS.CREATED:
        return yield put(deleteTransactionSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          deleteTransactionFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          deleteTransactionFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          deleteTransactionFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          deleteTransactionFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(deleteTransactionFailed({ message: `Error: ${error.message}` }));
  }
}

export function* transactionSaga() {
  yield takeLatest(GET_ALL_TRANSACTIONS, getAllTransactionsSaga);
  yield takeLatest(GET_TRANSACTION_DETAIL, getTransactionDetailSaga);
  yield takeLatest(CREATE_TRANSACTION, createTransactionSaga);
  yield takeLatest(DELETE_TRANSACTION, deleteTransactionSaga);
}
