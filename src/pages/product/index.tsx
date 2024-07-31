import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import { AppDispatch, RootState } from "@/redux/store";

import {
  DeleteProductRequest,
  GetProductDetailRequest,
  ProductPageProps,
} from "@/types";
import {
  deleteProduct,
  deleteProductReset,
  getAllProducts,
  getProductDetail,
} from "@/redux/product/actions";

import { Navbar } from "@/components";
import { useProduct } from "./useProduct";
import { Product } from "@/types/fetch/responses/product";

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const product = useProduct(props);

  const _renderTableContent = useMemo(() => {
    if (product.loading) {
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

    return product.products?.map((prd: Product) => {
      const { name, description, imageUrl, category, stock } = prd;

      return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            <img src={imageUrl} className="w-20 h-20" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {category.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {stock}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button
              onClick={() => product.onEdit(prd)}
              type="button"
              className="mr-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 focus:outline-none focus:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:text-green-400"
            >
              Edit
            </button>
            <button
              onClick={() => product.onDelete(prd)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }, [product.loading, product.products, product.onEdit, product.onDelete]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center w-full my-5">
            <span className="my-5 text-black font-bold">Product Table</span>
            <button
              onClick={product.onCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            >
              Add Product
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
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Stok
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
  getAllProductsLoading: state.product.getAllProductsLoading,
  getAllProductsResponse: state.product.getAllProductsResponse,
  getAllProductsError: state.product.getAllProductsError,

  getProductDetailLoading: state.product.getProductDetailLoading,
  getProductDetailResponse: state.product.getProductDetailResponse,
  getProductDetailError: state.product.getProductDetailError,

  deleteProductLoading: state.product.deleteProductLoading,
  deleteProductResponse: state.product.deleteProductResponse,
  deleteProductError: state.product.deleteProductError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getProductDetail: (payload: GetProductDetailRequest) =>
    dispatch(getProductDetail(payload)),
  deleteProduct: (payload: DeleteProductRequest) =>
    dispatch(deleteProduct(payload)),
  deleteProductReset: () => dispatch(deleteProductReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
