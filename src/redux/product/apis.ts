import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
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
import store from "../store";

export const productApis = {
  getAllProducts: async (): Promise<GetAllProductResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + "/product", {
      ...getHeader(token),
    });
    return response.data;
  },
  getProductDetail: async (
    payload: GetProductDetailRequest
  ): Promise<GetProductDetailResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + `/product/${payload.id}`, {
      ...getHeader(token)
    });
    return response.data;
  },
  createProduct: async (
    payload: CreateProductRequest
  ): Promise<CreateProductResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.post(BASE_URL + `/product`, payload, {
      ...getHeader(token),
    });
    return response.data;
  },
  updateProduct: async (
    payload: UpdateProductRequest
  ): Promise<UpdateProductResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.put(BASE_URL + `/product/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
  deleteProduct: async (
    payload: DeleteProductRequest
  ): Promise<DeleteProductResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.delete(BASE_URL + `/product/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
};
