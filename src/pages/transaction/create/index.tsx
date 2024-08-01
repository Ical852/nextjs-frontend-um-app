import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Select from "react-select";

import { CreateTransactionPageProps, CreateTransactionRequest } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { createTransaction, createTransactionReset } from "@/redux/transaction/actions";
import { getAllProducts } from "@/redux/product/actions";
import { useCreate } from "./useCreate";

const CreateTransactionPage: React.FC<CreateTransactionPageProps> = (props) => {
  const create = useCreate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Create Transaction</span>

        <form className="space-y-6" action="#" method="POST">
          <h5>Select Product</h5>
          <Select
            options={create.options}
            onChange={(e) => create.onSelect(e, 'productId')}
            value={create.options.find(
              (opt) => opt.value === create.form.productId
            )}
          />
          <TextInput
            type="number"
            title="Quantity"
            placeholder="Input your Quantity..."
            onChange={(e) => create.onChange(e, "quantity")}
            value={create.form.quantity}
          />
          <h5>Select Type</h5>
          <Select
            options={create.types}
            onChange={(e) => create.onSelect(e, 'type')}
            value={create.types.find(
              (opt) => opt.value === create.form.type
            )}
          />
          <MainButton
            loading={create.loading}
            disabled={create.loading || create.disabled}
            title={"Create"}
            onClick={create.onSubmit}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  createTransactionLoading: state.transaction.createTransactionLoading,
  createTransactionResponse: state.transaction.createTransactionResponse,
  createTransactionError: state.transaction.createTransactionError,

  getAllProductsLoading: state.product.getAllProductsLoading,
  getAllProductsResponse: state.product.getAllProductsResponse,
  getAllProductsError: state.product.getAllProductsError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createTransaction: (payload: CreateTransactionRequest) =>
    dispatch(createTransaction(payload)),
  createTransactionReset: () => dispatch(createTransactionReset()),
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransactionPage);
