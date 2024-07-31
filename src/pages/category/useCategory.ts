import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { CategoryPageProps } from "@/types";
import { Category } from "@/types/fetch/responses/category";
import { RESPONSE_STATUS } from "@/redux/constants";

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
    deleteCategoryReset,

    session,
  } = props;
  const router = useRouter();

  const onCreate = useCallback(() => {
    return router.push("/category/create");
  }, []);

  const onEdit = useCallback((category: Category) => {
    router.push({
      pathname: "/category/update",
      query: { data: JSON.stringify({ category }) },
    });
  }, []);

  const onDelete = useCallback((category: Category) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmed) {
      deleteCategory({ id: category.id });
    }
  }, []);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllCategories();
  }, [session]);

  useEffect(() => {
    if (deleteCategoryResponse.status === RESPONSE_STATUS.SUCCESS) {
      deleteCategoryReset();
      getAllCategories();
      alert("Delete category data success");
    }
    if (deleteCategoryError) {
      deleteCategoryReset();
      alert("Delete category failed");
    }
  }, [deleteCategoryResponse]);

  return {
    loading: getAllCategoriesLoading,
    deleting: deleteCategoryLoading,
    categories: getAllCategoriesResponse?.data || [],
    onCreate,
    onEdit,
    onDelete,
  };
};
