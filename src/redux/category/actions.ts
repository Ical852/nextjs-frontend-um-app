import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  DeleteCategoryRequest,
  DeleteCategoryResponse,
  FailedResponse,
  GetAllCategoryResponse,
  GetCategoryDetailRequest,
  GetCategoryDetailResponse,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
} from "@/types";
import * as CONST from "./constants";

export const getAllCategories = () => {
  return {
    type: CONST.GET_ALL_CATEGORIES,
  };
};
export const getAllCategoriesSuccess = (payload: GetAllCategoryResponse) => {
  return {
    type: CONST.GET_ALL_CATEGORIES_SUCCESS,
    payload,
  };
};
export const getAllCategoriesFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_ALL_CATEGORIES_FAILED,
    payload,
  };
};
export const getAllCategoriesReset = () => {
  return {
    type: CONST.GET_ALL_CATEGORIES_RESET,
  };
};

export const getCategoryDetail = (payload: GetCategoryDetailRequest) => {
  return {
    type: CONST.GET_CATEGORY_DETAIL,
    payload,
  };
};
export const getCategoryDetailSuccess = (payload: GetCategoryDetailResponse) => {
  return {
    type: CONST.GET_CATEGORY_DETAIL_SUCCESS,
    payload,
  };
};
export const getCategoryDetailFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_CATEGORY_DETAIL_FAILED,
    payload,
  };
};
export const getCategoryDetailReset = () => {
  return {
    type: CONST.GET_CATEGORY_DETAIL_RESET,
  };
};

export const createCategory = (payload: CreateCategoryRequest) => {
  return {
    type: CONST.CREATE_CATEGORY,
    payload,
  };
};
export const createCategorySuccess = (payload: CreateCategoryResponse) => {
  return {
    type: CONST.CREATE_CATEGORY_SUCCESS,
    payload,
  };
};
export const createCategoryFailed = (payload: FailedResponse) => {
  return {
    type: CONST.CREATE_CATEGORY_FAILED,
    payload,
  };
};
export const createCategoryReset = () => {
  return {
    type: CONST.CREATE_CATEGORY_RESET,
  };
};

export const updateCategory = (payload: UpdateCategoryRequest) => {
  return {
    type: CONST.UPDATE_CATEGORY,
    payload,
  };
};
export const updateCategorySuccess = (payload: UpdateCategoryResponse) => {
  return {
    type: CONST.UPDATE_CATEGORY_SUCCESS,
    payload,
  };
};
export const updateCategoryFailed = (payload: FailedResponse) => {
  return {
    type: CONST.UPDATE_CATEGORY_FAILED,
    payload,
  };
};
export const updateCategoryReset = () => {
  return {
    type: CONST.UPDATE_CATEGORY_RESET,
  };
};

export const deleteCategory = (payload: DeleteCategoryRequest) => {
  return {
    type: CONST.DELETE_CATEGORY,
    payload,
  };
};
export const deleteCategorySuccess = (payload: DeleteCategoryResponse) => {
  return {
    type: CONST.DELETE_CATEGORY_SUCCESS,
    payload,
  };
};
export const deleteCategoryFailed = (payload: FailedResponse) => {
  return {
    type: CONST.DELETE_CATEGORY_FAILED,
    payload,
  };
};
export const deleteCategoryReset = () => {
  return {
    type: CONST.DELETE_CATEGORY_RESET,
  };
};