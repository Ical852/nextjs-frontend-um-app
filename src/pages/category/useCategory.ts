import { CategoryPageProps } from "@/types";
import { useCallback, useEffect } from "react";

export const useCategory = (props: CategoryPageProps) => {
  const {
    getAllCategories,
    getAllCategoriesLoading,
    getAllCategoriesError,
    getAllCategoriesResponse,

    getCategoryDetail,
    getCategoryDetailLoading,
    getCategoryDetailError,
    getCategoryDetailResponse,

    deleteCategory,
    deleteCategoryLoading,
    deleteCategoryError,
    deleteCategoryResponse,

    session,
  } = props;

  const onEdit = useCallback(() => {}, []);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/";
    }

    getAllCategories();
  }, [session]);

  return {
    loading: getAllCategoriesLoading,
    deleting: deleteCategoryLoading,
    categories: getAllCategoriesResponse?.data || [],
  };
};
