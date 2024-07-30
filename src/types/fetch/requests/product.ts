export interface GetProductDetailRequest {
  id: number;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
  stock: number;
}

export interface UpdateProductRequest extends CreateProductRequest {
  id: number;
}

export interface DeleteProductRequest {
  id: number;
}
