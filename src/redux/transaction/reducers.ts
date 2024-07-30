import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "@/types";

const transactionInitialStates = {
  ...STATE.transactionInitialStates,
  action: "",
};

export const transactionReducers = (
  state = transactionInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // GET_ALL_TRANSACTIONS
    [CONST.GET_ALL_TRANSACTIONS]: () => ({
      ...state,
      getAllTransactionsLoading: true,
      getAllTransactionsError: false,
      getAllTransactionsResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_TRANSACTIONS_SUCCESS]: () => ({
      ...state,
      getAllTransactionsLoading: false,
      getAllTransactionsError: false,
      getAllTransactionsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_TRANSACTIONS_FAILED]: () => ({
      ...state,
      getAllTransactionsLoading: false,
      getAllTransactionsError: true,
      getAllTransactionsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_TRANSACTIONS_RESET]: () => ({
      ...state,
      getAllTransactionsLoading: false,
      getAllTransactionsError: false,
      getAllTransactionsResponse: {},
      action: type,
    }),
    // GET_ALL_TRANSACTIONS

    // GET_TRANSACTION_DETAIL
    [CONST.GET_TRANSACTION_DETAIL]: () => ({
      ...state,
      getTransactionDetailLoading: true,
      getTransactionDetailError: false,
      getTransactionDetailResponse: {},
      action: type,
    }),
    [CONST.GET_TRANSACTION_DETAIL_SUCCESS]: () => ({
      ...state,
      getTransactionDetailLoading: false,
      getTransactionDetailError: false,
      getTransactionDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_TRANSACTION_DETAIL_FAILED]: () => ({
      ...state,
      getTransactionDetailLoading: false,
      getTransactionDetailError: true,
      getTransactionDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_TRANSACTION_DETAIL_RESET]: () => ({
      ...state,
      getTransactionDetailLoading: false,
      getTransactionDetailError: false,
      getTransactionDetailResponse: {},
      action: type,
    }),
    // GET_TRANSACTION_DETAIL

    // CREATE_TRANSACTION
    [CONST.CREATE_TRANSACTION]: () => ({
      ...state,
      createTransactionLoading: true,
      createTransactionError: false,
      createTransactionResponse: {},
      action: type,
    }),
    [CONST.CREATE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      createTransactionLoading: false,
      createTransactionError: false,
      createTransactionResponse: payload,
      action: type,
    }),
    [CONST.CREATE_TRANSACTION_FAILED]: () => ({
      ...state,
      createTransactionLoading: false,
      createTransactionError: true,
      createTransactionResponse: payload,
      action: type,
    }),
    [CONST.CREATE_TRANSACTION_RESET]: () => ({
      ...state,
      createTransactionLoading: false,
      createTransactionError: false,
      createTransactionResponse: {},
      action: type,
    }),
    // CREATE_TRANSACTION

    // DELETE_TRANSACTION
    [CONST.DELETE_TRANSACTION]: () => ({
      ...state,
      deleteTransactionLoading: true,
      deleteTransactionError: false,
      deleteTransactionResponse: {},
      action: type,
    }),
    [CONST.DELETE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      deleteTransactionLoading: false,
      deleteTransactionError: false,
      deleteTransactionResponse: payload,
      action: type,
    }),
    [CONST.DELETE_TRANSACTION_FAILED]: () => ({
      ...state,
      deleteTransactionLoading: false,
      deleteTransactionError: true,
      deleteTransactionResponse: payload,
      action: type,
    }),
    [CONST.DELETE_TRANSACTION_RESET]: () => ({
      ...state,
      deleteTransactionLoading: false,
      deleteTransactionError: false,
      deleteTransactionResponse: {},
      action: type,
    }),
    // DELETE_TRANSACTION

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
