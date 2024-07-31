import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { TransactionPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";
import { Transaction } from "@/types/fetch/responses/transaction";

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
  const router = useRouter();

  const onCreate = useCallback(() => {
    return router.push("/transaction/create");
  }, []);

  const onDelete = useCallback((trx: Transaction) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (confirmed) {
      deleteTransaction({ id: trx.id });
    }
  }, []);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllTransactions();
  }, [session]);

  useEffect(() => {
    if (deleteTransactionResponse.status === RESPONSE_STATUS.CREATED) {
      deleteTransactionReset();
      getAllTransactions();
      alert("Delete transaction data success");
    }
    if (deleteTransactionError) {
      deleteTransactionReset();
      alert("Delete transaction data failed");
    }
  }, [deleteTransactionResponse]);

  return {
    loading: getAllTransactionsLoading,
    deleting: deleteTransactionLoading,
    trxs: getAllTransactionsResponse?.data || [],
    onCreate,
    onDelete,
  };
};
