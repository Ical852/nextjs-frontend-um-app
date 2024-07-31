import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import { AppDispatch, RootState } from "@/redux/store";

import {
  CategoryPageProps,
  DeleteCategoryRequest,
  GetCategoryDetailRequest,
} from "@/types";
import {
  deleteCategory,
  deleteCategoryReset,
  getAllCategories,
  getCategoryDetail,
} from "@/redux/category/actions";

import { Navbar } from "@/components";
import { Category } from "@/types/fetch/responses/category";
import { useCategory } from "./useCategory";

const CategoryDashboard: React.FC<CategoryPageProps> = (props) => {
  const cat = useCategory(props);

  const _renderTableContent = useMemo(() => {
    if (cat.loading) {
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

    return cat.categories.map((category: Category) => {
      const { name, description } = category;

      return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button
              onClick={() => cat.onEdit(category)}
              type="button"
              className="mr-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 focus:outline-none focus:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:text-green-400"
            >
              Edit
            </button>
            <button
              onClick={() => cat.onDelete(category)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }, [cat.loading, cat.categories, cat.onEdit, cat.onDelete]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center w-full my-5">
            <span className="my-5 text-black font-bold">Category Table</span>
            <button
              onClick={cat.onCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            >
              Add Category
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
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
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
  getAllCategoriesLoading: state.category.getAllCategoriesLoading,
  getAllCategoriesResponse: state.category.getAllCategoriesResponse,
  getAllCategoriesError: state.category.getAllCategoriesError,

  getCategoryDetailLoading: state.category.getCategoryDetailLoading,
  getCategoryDetailResponse: state.category.getCategoryDetailResponse,
  getCategoryDetailError: state.category.getCategoryDetailError,

  deleteCategoryLoading: state.category.deleteCategoryLoading,
  deleteCategoryResponse: state.category.deleteCategoryResponse,
  deleteCategoryError: state.category.deleteCategoryError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllCategories: () => dispatch(getAllCategories()),
  getCategoryDetail: (payload: GetCategoryDetailRequest) =>
    dispatch(getCategoryDetail(payload)),
  deleteCategory: (payload: DeleteCategoryRequest) =>
    dispatch(deleteCategory(payload)),
  deleteCategoryReset: () => dispatch(deleteCategoryReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard);
