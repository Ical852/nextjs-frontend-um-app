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

export const productApis = {
  getAllProducts: async (): Promise<GetAllProductResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + "/product", {
      ...getHeader(),
    });
    return response.data;
  },
  getProductDetail: async (
    payload: GetProductDetailRequest
  ): Promise<GetProductDetailResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + `/product/${payload.id}`, {
      ...getHeader()
    });
    return response.data;
  },
  createProduct: async (
    payload: CreateProductRequest
  ): Promise<CreateProductResponse | FailedResponse> => {
    const response = await axios.post(BASE_URL + `/product`, payload, {
      ...getHeader(),
    });
    return response.data;
  },
  updateProduct: async (
    payload: UpdateProductRequest
  ): Promise<UpdateProductResponse | FailedResponse> => {
    const response = await axios.put(BASE_URL + `/product/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
  deleteProduct: async (
    payload: DeleteProductRequest
  ): Promise<DeleteProductResponse | FailedResponse> => {
    const response = await axios.delete(BASE_URL + `/product/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
};
