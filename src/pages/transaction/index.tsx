import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import { AppDispatch, RootState } from "@/redux/store";

import {
  DeleteTransactionRequest,
  GetDetailTransactionRequest,
  TransactionPageProps,
} from "@/types";
import {
  deleteTransaction,
  deleteTransactionReset,
  getAllTransactions,
  getTransactionDetail,
} from "@/redux/transaction/actions";

import { Navbar } from "@/components";
import { useTrx } from "./useTrx";
import { Transaction } from "@/types/fetch/responses/transaction";

const TransactionPage: React.FC<TransactionPageProps> = (props) => {
  const transaction = useTrx(props);

  const _renderTableContent = useMemo(() => {
    if (transaction.loading) {
      return (
        <tr>
          <td colSpan={3} className="relative">
            <div className="inset-0 flex items-center justify-center">
              <Loading type="bars" color="blue" height={50} width={50} />
            </div>
          </td>
        </tr>
      );
    }

    if (transaction.trxs.length < 1) {
      return (
        <tr>
          <td colSpan={5} className="relative">
            <div className="inset-0 flex items-center justify-center my-5">
              <h5>No Data</h5>
            </div>
          </td>
        </tr>
      );
    }

    return transaction.trxs?.map((trx: Transaction) => {
      const { product, quantity, type } = trx;

      return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {product.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {product.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            <img src={product.imageUrl} className="w-20 h-20" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {quantity}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {type.toUpperCase()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
            <button
              onClick={() => transaction.onDelete(trx)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }, [transaction.loading, transaction.trxs, transaction.onDelete]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center w-full my-5">
            <span className="my-5 text-black font-bold">Transaction Table</span>
            <button
              onClick={transaction.onCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            >
              Create Transaction
            </button>
          </div>
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">{_renderTableContent}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  getAllTransactionsLoading: state.transaction.getAllTransactionsLoading,
  getAllTransactionsResponse: state.transaction.getAllTransactionsResponse,
  getAllTransactionsError: state.transaction.getAllTransactionsError,

  getTransactionDetailLoading: state.transaction.getTransactionDetailLoading,
  getTransactionDetailResponse: state.transaction.getTransactionDetailResponse,
  getTransactionDetailError: state.transaction.getTransactionDetailError,

  deleteTransactionLoading: state.transaction.deleteTransactionLoading,
  deleteTransactionResponse: state.transaction.deleteTransactionResponse,
  deleteTransactionError: state.transaction.deleteTransactionError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllTransactions: () => dispatch(getAllTransactions()),
  getTransactionDetail: (payload: GetDetailTransactionRequest) =>
    dispatch(getTransactionDetail(payload)),
  deleteTransaction: (payload: DeleteTransactionRequest) =>
    dispatch(deleteTransaction(payload)),
  deleteTransactionReset: () => dispatch(deleteTransactionReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
