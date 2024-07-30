import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
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
import store from "../store";

export const categoryApis = {
  getAllCategories: async (): Promise<GetAllCategoryResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + "/category", {
      ...getHeader(token),
    });
    return response.data;
  },
  getCategoryDetail: async (
    payload: GetCategoryDetailRequest
  ): Promise<GetCategoryDetailResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + `/category/${payload.id}`, {
      ...getHeader(token)
    });
    return response.data;
  },
  createCategory: async (
    payload: CreateCategoryRequest
  ): Promise<CreateCategoryResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.post(BASE_URL + `/category`, payload, {
      ...getHeader(token),
    });
    return response.data;
  },
  updateCategory: async (
    payload: UpdateCategoryRequest
  ): Promise<UpdateCategoryResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.put(BASE_URL + `/category/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
  deleteCategory: async (
    payload: DeleteCategoryRequest
  ): Promise<DeleteCategoryResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.delete(BASE_URL + `/category/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
};
