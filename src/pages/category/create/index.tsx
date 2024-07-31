import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { CreateCategoryPageProps, CreateCategoryRequest } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { createCategory, createCategoryReset } from "@/redux/category/actions";
import { useCreate } from "./useCreate";

const CreateCategoryPage: React.FC<CreateCategoryPageProps> = (props) => {
  const update = useCreate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Create Category</span>

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
          <MainButton
            loading={update.loading}
            disabled={update.loading || update.disabled}
            title={"Create"}
            onClick={update.onSubmit}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  createCategoryLoading: state.category.createCategoryLoading,
  createCategoryResponse: state.category.createCategoryResponse,
  createCategoryError: state.category.createCategoryError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createCategory: (payload: CreateCategoryRequest) =>
    dispatch(createCategory(payload)),
  createCategoryReset: () => dispatch(createCategoryReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryPage);
