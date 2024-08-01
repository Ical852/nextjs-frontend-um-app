import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Select from "react-select";

import { CreateProductPageProps, CreateProductRequest } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { createProduct, createProductReset } from "@/redux/product/actions";
import { getAllCategories } from "@/redux/category/actions";
import { useCreate } from "./useCreate";

const CreateProductPage: React.FC<CreateProductPageProps> = (props) => {
  const create = useCreate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Create Product</span>

        <form className="space-y-6" action="#" method="POST">
          <TextInput
            title="Name"
            placeholder="Input your name..."
            onChange={(e) => create.onChange(e, "name")}
            value={create.form.name}
          />
          <TextInput
            title="Description"
            placeholder="Input your description..."
            onChange={(e) => create.onChange(e, "description")}
            value={create.form.description}
          />
          <TextInput
            title="Image Url"
            placeholder="Input your image Url..."
            onChange={(e) => create.onChange(e, "imageUrl")}
            value={create.form.imageUrl}
          />
          <h5>Category</h5>
          <Select
            options={create.options}
            onChange={(e) => create.onSelect(e)}
            value={create.options.find(
              (opt) => opt.value === create.form.categoryId
            )}
          />
          <TextInput
            type="number"
            title="Stock"
            placeholder="Input your stock..."
            onChange={(e) => create.onChange(e, "stock")}
            value={create.form.stock}
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
  createProductLoading: state.product.createProductLoading,
  createProductResponse: state.product.createProductResponse,
  createProductError: state.product.createProductError,

  getAllCategoriesLoading: state.category.getAllCategoriesLoading,
  getAllCategoriesResponse: state.category.getAllCategoriesResponse,
  getAllCategoriesError: state.category.getAllCategoriesError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createProduct: (payload: CreateProductRequest) =>
    dispatch(createProduct(payload)),
  createProductReset: () => dispatch(createProductReset()),
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductPage);
