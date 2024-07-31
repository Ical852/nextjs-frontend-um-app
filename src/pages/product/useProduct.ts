import { ProductPageProps } from "@/types";

export const useProduct = (props: ProductPageProps) => {
  const {
    getAllProducts,
    getAllProductsLoading,
    getAllProductsError,
    getAllProductsResponse,

    getProductDetail,
    getProductDetailLoading,
    getProductDetailError,
    getProductDetailResponse,

    deleteProduct,
    deleteProductLoading,
    deleteProductError,
    deleteProductResponse,
    deleteProductReset,

    session,
  } = props;

  return {};
};
