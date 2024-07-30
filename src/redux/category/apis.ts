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

export const categoryApis = {
  getAllCategories: async (): Promise<GetAllCategoryResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + "/category", {
      ...getHeader(),
    });
    return response.data;
  },
  getCategoryDetail: async (
    payload: GetCategoryDetailRequest
  ): Promise<GetCategoryDetailResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + `/category/${payload.id}`, {
      ...getHeader()
    });
    return response.data;
  },
  createCategory: async (
    payload: CreateCategoryRequest
  ): Promise<CreateCategoryResponse | FailedResponse> => {
    const response = await axios.post(BASE_URL + `/category`, payload, {
      ...getHeader(),
    });
    return response.data;
  },
  updateCategory: async (
    payload: UpdateCategoryRequest
  ): Promise<UpdateCategoryResponse | FailedResponse> => {
    const response = await axios.put(BASE_URL + `/category/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
  deleteCategory: async (
    payload: DeleteCategoryRequest
  ): Promise<DeleteCategoryResponse | FailedResponse> => {
    const response = await axios.delete(BASE_URL + `/category/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
};
