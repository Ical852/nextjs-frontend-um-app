import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  GetAllTransactionResponse,
  GetDetailTransactionRequest,
  GetDetailTransactionResponse,
} from "../fetch";

export interface TransactionPageProps {
  getAllTransactions: () => void;
  getAllTransactionsLoading: boolean;
  getAllTransactionsError: boolean;
  getAllTransactionsResponse: GetAllTransactionResponse;

  getTransactionDetail: (payload: GetDetailTransactionRequest) => void;
  getTransactionDetailLoading: boolean;
  getTransactionDetailError: boolean;
  getTransactionDetailResponse: GetDetailTransactionResponse;

  deleteTransaction: (payload: DeleteTransactionRequest) => void;
  deleteTransactionLoading: boolean;
  deleteTransactionError: boolean;
  deleteTransactionResponse: DeleteTransactionResponse;
  deleteTransactionReset: () => void;

  session: any;
}

export interface CreateTransactionPageProps {
  createTransaction: (payload: CreateTransactionRequest) => void;
  createTransactionLoading: boolean;
  createTransactionError: boolean;
  createTransactionResponse: CreateTransactionResponse;
  createTransactionReset: () => void;

  session: any;
}
