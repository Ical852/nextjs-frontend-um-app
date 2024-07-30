import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "@/types";

const productInitialStates = {
  ...STATE.productInitialStates,
  action: "",
};

export const productReducers = (
  state = productInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // GET_ALL_PRODUCTS
    [CONST.GET_ALL_PRODUCTS]: () => ({
      ...state,
      getAllProductsLoading: true,
      getAllProductsError: false,
      getAllProductsResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_PRODUCTS_SUCCESS]: () => ({
      ...state,
      getAllProductsLoading: false,
      getAllProductsError: false,
      getAllProductsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_PRODUCTS_FAILED]: () => ({
      ...state,
      getAllProductsLoading: false,
      getAllProductsError: true,
      getAllProductsResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_PRODUCTS_RESET]: () => ({
      ...state,
      getAllProductsLoading: false,
      getAllProductsError: false,
      getAllProductsResponse: {},
      action: type,
    }),
    // GET_ALL_PRODUCTS

    // GET_PRODUCT_DETAIL
    [CONST.GET_PRODUCT_DETAIL]: () => ({
      ...state,
      getProductDetailLoading: true,
      getProductDetailError: false,
      getProductDetailResponse: {},
      action: type,
    }),
    [CONST.GET_PRODUCT_DETAIL_SUCCESS]: () => ({
      ...state,
      getProductDetailLoading: false,
      getProductDetailError: false,
      getProductDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_PRODUCT_DETAIL_FAILED]: () => ({
      ...state,
      getProductDetailLoading: false,
      getProductDetailError: true,
      getProductDetailResponse: payload,
      action: type,
    }),
    [CONST.GET_PRODUCT_DETAIL_RESET]: () => ({
      ...state,
      getProductDetailLoading: false,
      getProductDetailError: false,
      getProductDetailResponse: {},
      action: type,
    }),
    // GET_PRODUCT_DETAIL

    // CREATE_PRODUCT
    [CONST.CREATE_PRODUCT]: () => ({
      ...state,
      createProductLoading: true,
      createProductError: false,
      createProductResponse: {},
      action: type,
    }),
    [CONST.CREATE_PRODUCT_SUCCESS]: () => ({
      ...state,
      createProductLoading: false,
      createProductError: false,
      createProductResponse: payload,
      action: type,
    }),
    [CONST.CREATE_PRODUCT_FAILED]: () => ({
      ...state,
      createProductLoading: false,
      createProductError: true,
      createProductResponse: payload,
      action: type,
    }),
    [CONST.CREATE_PRODUCT_RESET]: () => ({
      ...state,
      createProductLoading: false,
      createProductError: false,
      createProductResponse: {},
      action: type,
    }),
    // CREATE_PRODUCT

    // UPDATE_PRODUCT
    [CONST.UPDATE_PRODUCT]: () => ({
      ...state,
      updateProductLoading: true,
      updateProductError: false,
      updateProductResponse: {},
      action: type,
    }),
    [CONST.UPDATE_PRODUCT_SUCCESS]: () => ({
      ...state,
      updateProductLoading: false,
      updateProductError: false,
      updateProductResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_PRODUCT_FAILED]: () => ({
      ...state,
      updateProductLoading: false,
      updateProductError: true,
      updateProductResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_PRODUCT_RESET]: () => ({
      ...state,
      updateProductLoading: false,
      updateProductError: false,
      updateProductResponse: {},
      action: type,
    }),
    // UPDATE_PRODUCT

    // DELETE_PRODUCT
    [CONST.DELETE_PRODUCT]: () => ({
      ...state,
      deleteProductLoading: true,
      deleteProductError: false,
      deleteProductResponse: {},
      action: type,
    }),
    [CONST.DELETE_PRODUCT_SUCCESS]: () => ({
      ...state,
      deleteProductLoading: false,
      deleteProductError: false,
      deleteProductResponse: payload,
      action: type,
    }),
    [CONST.DELETE_PRODUCT_FAILED]: () => ({
      ...state,
      deleteProductLoading: false,
      deleteProductError: true,
      deleteProductResponse: payload,
      action: type,
    }),
    [CONST.DELETE_PRODUCT_RESET]: () => ({
      ...state,
      deleteProductLoading: false,
      deleteProductError: false,
      deleteProductResponse: {},
      action: type,
    }),
    // DELETE_PRODUCT

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
