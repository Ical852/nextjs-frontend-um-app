export interface GetCategoryDetailRequest {
  id: number;
}

export interface CreateCategoryRequest {
  name: string;
  description: string;
}

export interface UpdateCategoryRequest extends CreateCategoryRequest {
  id: number;
}

export interface DeleteCategoryRequest {
  id: number;
}
