import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  DeleteCategoryRequest,
  DeleteCategoryResponse,
  GetAllCategoryResponse,
  GetCategoryDetailRequest,
  GetCategoryDetailResponse,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
} from "../fetch";

export interface CategoryPageProps {
  getAllCategories: () => void;
  getAllCategoriesLoading: boolean;
  getAllCategoriesError: boolean;
  getAllCategoriesResponse: GetAllCategoryResponse;

  getCategoryDetail: (payload: GetCategoryDetailRequest) => void;
  getCategoryDetailLoading: boolean;
  getCategoryDetailError: boolean;
  getCategoryDetailResponse: GetCategoryDetailResponse;

  deleteCategory: (payload: DeleteCategoryRequest) => void;
  deleteCategoryLoading: boolean;
  deleteCategoryError: boolean;
  deleteCategoryResponse: DeleteCategoryResponse;
  deleteCategoryReset: () => void;

  session: any;
}

export interface CreateCategoryPageProps {
  createCategory: (payload: CreateCategoryRequest) => void;
  createCategoryLoading: boolean;
  createCategoryError: boolean;
  createCategoryResponse: CreateCategoryResponse;
  createCategoryReset: () => void;

  session: any;
}

export interface UpdateCategoryPageProps {
  updateCategory: (payload: UpdateCategoryRequest) => void;
  updateCategoryLoading: boolean;
  updateCategoryError: boolean;
  updateCategoryResponse: UpdateCategoryResponse;
  updateCategoryReset: () => void;

  session: any;
}
