import { Response } from "@/types/main";
import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
  category: Category;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllProductResponse extends Response {
  data: Array<Product>;
}

export interface GetProductDetailResponse extends Response {
  data: Product;
}

export interface CreateProductResponse extends GetProductDetailResponse {}

export interface UpdateProductResponse extends GetProductDetailResponse {}

export interface DeleteProductResponse extends Response {}
