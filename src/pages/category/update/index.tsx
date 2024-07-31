import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { UpdateCategoryPageProps, UpdateCategoryRequest } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { updateCategory, updateCategoryReset } from "@/redux/category/actions";
import { useUpdate } from "./useUpdate";

const updateCategoryPage: React.FC<UpdateCategoryPageProps> = (props) => {
  const update = useUpdate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Admin Table</span>

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
            title={"Update"}
            onClick={update.onUpdate}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  updateCategoryLoading: state.category.updateCategoryLoading,
  updateCategoryResponse: state.category.updateCategoryResponse,
  updateCategoryError: state.category.updateCategoryError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateCategory: (payload: UpdateCategoryRequest) =>
    dispatch(updateCategory(payload)),
  updateCategoryReset: () => dispatch(updateCategoryReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(updateCategoryPage);
