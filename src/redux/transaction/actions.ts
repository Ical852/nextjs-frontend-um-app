import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  FailedResponse,
  GetAllTransactionResponse,
  GetDetailTransactionRequest,
  GetDetailTransactionResponse,
} from "@/types";
import * as CONST from "./constants";

export const getAllTransactions = () => {
  return {
    type: CONST.GET_ALL_TRANSACTIONS,
  };
};
export const getAllTransactionsSuccess = (payload: GetAllTransactionResponse) => {
  return {
    type: CONST.GET_ALL_TRANSACTIONS_SUCCESS,
    payload,
  };
};
export const getAllTransactionsFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_ALL_TRANSACTIONS_FAILED,
    payload,
  };
};
export const getAllTransactionsReset = () => {
  return {
    type: CONST.GET_ALL_TRANSACTIONS_RESET,
  };
};

export const getTransactionDetail = (payload: GetDetailTransactionRequest) => {
  return {
    type: CONST.GET_TRANSACTION_DETAIL,
    payload,
  };
};
export const getTransactionDetailSuccess = (payload: GetDetailTransactionResponse) => {
  return {
    type: CONST.GET_TRANSACTION_DETAIL_SUCCESS,
    payload,
  };
};
export const getTransactionDetailFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_TRANSACTION_DETAIL_FAILED,
    payload,
  };
};
export const getTransactionDetailReset = () => {
  return {
    type: CONST.GET_TRANSACTION_DETAIL_RESET,
  };
};

export const createTransaction = (payload: CreateTransactionRequest) => {
  return {
    type: CONST.CREATE_TRANSACTION,
    payload,
  };
};
export const createTransactionSuccess = (payload: CreateTransactionResponse) => {
  return {
    type: CONST.CREATE_TRANSACTION_SUCCESS,
    payload,
  };
};
export const createTransactionFailed = (payload: FailedResponse) => {
  return {
    type: CONST.CREATE_TRANSACTION_FAILED,
    payload,
  };
};
export const createTransactionReset = () => {
  return {
    type: CONST.CREATE_TRANSACTION_RESET,
  };
};

export const deleteTransaction = (payload: DeleteTransactionRequest) => {
  return {
    type: CONST.DELETE_TRANSACTION,
    payload,
  };
};
export const deleteTransactionSuccess = (payload: DeleteTransactionResponse) => {
  return {
    type: CONST.DELETE_TRANSACTION_SUCCESS,
    payload,
  };
};
export const deleteTransactionFailed = (payload: FailedResponse) => {
  return {
    type: CONST.DELETE_TRANSACTION_FAILED,
    payload,
  };
};
export const deleteTransactionReset = () => {
  return {
    type: CONST.DELETE_TRANSACTION_RESET,
  };
};