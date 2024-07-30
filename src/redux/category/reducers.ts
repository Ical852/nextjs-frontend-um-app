import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "@/types";

const categoryInitialStates = {
  ...STATE.categoryInitialStates,
  action: "",
};

export const categoryReducers = (
  state = categoryInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // GET_ALL_CATEGORIES
    [CONST.GET_ALL_CATEGORIES]: () => ({
      ...state,
      getAllCategoriesLoading: true,
      getAllCategoriesError: false,
      getAllCategoriesResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_CATEGORIES_SUCCESS]: () => ({
      ...state,
      getAllCategoriesLoading: false,
      getAllCategoriesError: false,
      getAllCategoriesResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_CATEGORIES_FAILED]: () => ({
      ...state,
      getAllCategoriesLoading: false,
      getAllCategoriesError: true,
      getAllCategoriesResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_CATEGORIES_RESET]: () => ({
      ...state,
      getAllCategoriesLoading: false,
      getAllCategoriesError: false,
      getAllCategoriesResponse: {},
      action: type,
    }),
    // GET_ALL_CATEGORIES

    // GET_CATEGORY_DETAIL
    [CONST.GET_CATEGORY_DETAIL]: () => ({
      ...state,
      getCategoryDetailLoading: true,
      getCategoryDetailError: false,
      getCategoryDetailResponse: {},
      action: type,
    }),
    [CONST.GET_CATEGORY_DETAIL_SUCCESS]: () => ({
      ...state,
      getCategoryDetailLoading: false,
      getCategoryDetailError: false,
      getCategoryDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_CATEGORY_DETAIL_FAILED]: () => ({
      ...state,
      getCategoryDetailLoading: false,
      getCategoryDetailError: true,
      getCategoryDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_CATEGORY_DETAIL_RESET]: () => ({
      ...state,
      getCategoryDetailLoading: false,
      getCategoryDetailError: false,
      getCategoryDetailResponse: {},
      action: type,
    }),
    // GET_CATEGORY_DETAIL

    // CREATE_CATEGORY
    [CONST.CREATE_CATEGORY]: () => ({
      ...state,
      createCategoryLoading: true,
      createCategoryError: false,
      createCategoryResponse: {},
      action: type,
    }),
    [CONST.CREATE_CATEGORY_SUCCESS]: () => ({
      ...state,
      createCategoryLoading: false,
      createCategoryError: false,
      createCategoryResponse: payload,
      action: type,
    }),
    [CONST.CREATE_CATEGORY_FAILED]: () => ({
      ...state,
      createCategoryLoading: false,
      createCategoryError: true,
      createCategoryResponse: payload,
      action: type,
    }),
    [CONST.CREATE_CATEGORY_RESET]: () => ({
      ...state,
      createCategoryLoading: false,
      createCategoryError: false,
      createCategoryResponse: {},
      action: type,
    }),
    // CREATE_CATEGORY

    // UPDATE_CATEGORY
    [CONST.UPDATE_CATEGORY]: () => ({
      ...state,
      updateCategoryLoading: true,
      updateCategoryError: false,
      updateCategoryResponse: {},
      action: type,
    }),
    [CONST.UPDATE_CATEGORY_SUCCESS]: () => ({
      ...state,
      updateCategoryLoading: false,
      updateCategoryError: false,
      updateCategoryResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_CATEGORY_FAILED]: () => ({
      ...state,
      updateCategoryLoading: false,
      updateCategoryError: true,
      updateCategoryResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_CATEGORY_RESET]: () => ({
      ...state,
      updateCategoryLoading: false,
      updateCategoryError: false,
      updateCategoryResponse: {},
      action: type,
    }),
    // UPDATE_CATEGORY

    // DELETE_CATEGORY
    [CONST.DELETE_CATEGORY]: () => ({
      ...state,
      deleteCategoryLoading: true,
      deleteCategoryError: false,
      deleteCategoryResponse: {},
      action: type,
    }),
    [CONST.DELETE_CATEGORY_SUCCESS]: () => ({
      ...state,
      deleteCategoryLoading: false,
      deleteCategoryError: false,
      deleteCategoryResponse: payload,
      action: type,
    }),
    [CONST.DELETE_CATEGORY_FAILED]: () => ({
      ...state,
      deleteCategoryLoading: false,
      deleteCategoryError: true,
      deleteCategoryResponse: payload,
      action: type,
    }),
    [CONST.DELETE_CATEGORY_RESET]: () => ({
      ...state,
      deleteCategoryLoading: false,
      deleteCategoryError: false,
      deleteCategoryResponse: {},
      action: type,
    }),
    // DELETE_CATEGORY

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
