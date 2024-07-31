import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Select from "react-select";

import { UpdateProductPageProps, UpdateProductRequest } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { updateProduct, updateProductReset } from "@/redux/product/actions";
import { getAllCategories } from "@/redux/category/actions";
import { useUpdate } from "./useUpdate";

const UpdateProductPage: React.FC<UpdateProductPageProps> = (props) => {
  const update = useUpdate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Update Product</span>

        <form className="space-y-6" action="#" method="POST">
          <TextInput
            title="Name"
            placeholder="Input your name..."
            onChange={(e) => update.onChange(e, "name")}
            value={update.form.name}
          />
          <TextInput
            title="Description"
            placeholder="Input your description..."
            onChange={(e) => update.onChange(e, "description")}
            value={update.form.description}
          />
          <TextInput
            title="Image Url"
            placeholder="Input your image Url..."
            onChange={(e) => update.onChange(e, "imageUrl")}
            value={update.form.imageUrl}
          />
          <Select
            options={update.options}
            onChange={(e) => update.onSelect(e)}
            value={update.options.find(
              (opt) => opt.value === update.form.categoryId
            )}
          />
          <TextInput
            type="number"
            title="Stock"
            placeholder="Input your stock..."
            onChange={(e) => update.onChange(e, "stock")}
            value={update.form.stock}
          />
          <MainButton
            loading={update.loading}
            disabled={update.loading || update.disabled}
            title={"Update"}
            onClick={update.onUpdate}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  updateProductLoading: state.product.updateProductLoading,
  updateProductResponse: state.product.updateProductResponse,
  updateProductError: state.product.updateProductError,

  getAllCategoriesLoading: state.category.getAllCategoriesLoading,
  getAllCategoriesResponse: state.category.getAllCategoriesResponse,
  getAllCategoriesError: state.category.getAllCategoriesError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateProduct: (payload: UpdateProductRequest) =>
    dispatch(updateProduct(payload)),
  updateProductReset: () => dispatch(updateProductReset()),
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProductPage);
