import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { ProductPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";
import { Product } from "@/types/fetch/responses/product";

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
  const router = useRouter();

  const onCreate = useCallback(() => {
    return router.push("/product/create");
  }, []);

  const onEdit = useCallback((product: Product) => {
    router.push({
      pathname: "/product/update",
      query: { data: JSON.stringify({ product }) },
    });
  }, []);

  const onDelete = useCallback((product: Product) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      deleteProduct({ id: product.id });
    }
  }, []);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllProducts();
  }, [session]);

  useEffect(() => {
    if (deleteProductResponse.status === RESPONSE_STATUS.SUCCESS) {
      deleteProductReset();
      getAllProducts();
      alert("Delete product data success");
    }
    if (deleteProductError) {
      deleteProductReset();
      alert("Delete product data failed");
    }
  }, [deleteProductResponse]);

  return {
    loading: getAllProductsLoading,
    deleting: deleteProductLoading,
    products: getAllProductsResponse?.data || [],
    onCreate,
    onEdit,
    onDelete,
  };
};
