import { TransactionPageProps } from "@/types";

export const useTrx = (props: TransactionPageProps) => {
  const {
    getAllTransactions,
    getAllTransactionsLoading,
    getAllTransactionsError,
    getAllTransactionsResponse,

    getTransactionDetail,
    getTransactionDetailLoading,
    getTransactionDetailError,
    getTransactionDetailResponse,

    deleteTransaction,
    deleteTransactionLoading,
    deleteTransactionError,
    deleteTransactionResponse,
    deleteTransactionReset,

    session,
  } = props;

  return {};
};
