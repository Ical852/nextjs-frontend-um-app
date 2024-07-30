import {
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  FailedResponse,
  GetAllProductResponse,
  GetProductDetailRequest,
  GetProductDetailResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "@/types";
import * as CONST from "./constants";

export const getAllProducts = () => {
  return {
    type: CONST.GET_ALL_PRODUCTS,
  };
};
export const getAllProductsSuccess = (payload: GetAllProductResponse) => {
  return {
    type: CONST.GET_ALL_PRODUCTS_SUCCESS,
    payload,
  };
};
export const getAllProductsFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_ALL_PRODUCTS_FAILED,
    payload,
  };
};
export const getAllProductsReset = () => {
  return {
    type: CONST.GET_ALL_PRODUCTS_RESET,
  };
};

export const getProductDetail = (payload: GetProductDetailRequest) => {
  return {
    type: CONST.GET_PRODUCT_DETAIL,
    payload,
  };
};
export const getProductDetailSuccess = (payload: GetProductDetailResponse) => {
  return {
    type: CONST.GET_PRODUCT_DETAIL_SUCCESS,
    payload,
  };
};
export const getProductDetailFailed = (payload: FailedResponse) => {
  return {
    type: CONST.GET_PRODUCT_DETAIL_FAILED,
    payload,
  };
};
export const getProductDetailReset = () => {
  return {
    type: CONST.GET_PRODUCT_DETAIL_RESET,
  };
};

export const createProduct = (payload: CreateProductRequest) => {
  return {
    type: CONST.CREATE_PRODUCT,
    payload,
  };
};
export const createProductSuccess = (payload: CreateProductResponse) => {
  return {
    type: CONST.CREATE_PRODUCT_SUCCESS,
    payload,
  };
};
export const createProductFailed = (payload: FailedResponse) => {
  return {
    type: CONST.CREATE_PRODUCT_FAILED,
    payload,
  };
};
export const createProductReset = () => {
  return {
    type: CONST.CREATE_PRODUCT_RESET,
  };
};

export const updateProduct = (payload: UpdateProductRequest) => {
  return {
    type: CONST.UPDATE_PRODUCT,
    payload,
  };
};
export const updateProductSuccess = (payload: UpdateProductResponse) => {
  return {
    type: CONST.UPDATE_PRODUCT_SUCCESS,
    payload,
  };
};
export const updateProductFailed = (payload: FailedResponse) => {
  return {
    type: CONST.UPDATE_PRODUCT_FAILED,
    payload,
  };
};
export const updateProductReset = () => {
  return {
    type: CONST.UPDATE_PRODUCT_RESET,
  };
};

export const deleteProduct = (payload: DeleteProductRequest) => {
  return {
    type: CONST.DELETE_PRODUCT,
    payload,
  };
};
export const deleteProductSuccess = (payload: DeleteProductResponse) => {
  return {
    type: CONST.DELETE_PRODUCT_SUCCESS,
    payload,
  };
};
export const deleteProductFailed = (payload: FailedResponse) => {
  return {
    type: CONST.DELETE_PRODUCT_FAILED,
    payload,
  };
};
export const deleteProductReset = () => {
  return {
    type: CONST.DELETE_PRODUCT_RESET,
  };
};