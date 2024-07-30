import { Response } from "@/types/main";

export interface Category {
  id: number;
  name: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}

export interface GetAllCategoryResponse extends Response {
  data: Array<Category>;
}

export interface GetCategoryDetailResponse extends Response {
  data: Category;
}

export interface CreateCategoryResponse extends GetCategoryDetailResponse {}

export interface UpdateCategoryResponse extends GetCategoryDetailResponse {}

export interface DeleteCategoryResponse extends Response {}
