import {
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetAllProductResponse,
  GetProductDetailRequest,
  GetProductDetailResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../fetch";

export interface ProductPageProps {
  getAllProducts: () => void;
  getAllProductsLoading: boolean;
  getAllProductsError: boolean;
  getAllProductsResponse: GetAllProductResponse;

  getProductDetail: (payload: GetProductDetailRequest) => void;
  getProductDetailLoading: boolean;
  getProductDetailError: boolean;
  getProductDetailResponse: GetProductDetailResponse;

  deleteProduct: (payload: DeleteProductRequest) => void;
  deleteProductLoading: boolean;
  deleteProductError: boolean;
  deleteProductResponse: DeleteProductResponse;
  deleteProductReset: () => void;

  session: any;
}

export interface CreateProductPageProps {
  createProduct: (payload: CreateProductRequest) => void;
  createProductLoading: boolean;
  createProductError: boolean;
  createProductResponse: CreateProductResponse;
  createProductReset: () => void;

  session: any;
}

export interface UpdateProductPageProps {
  updateProduct: (payload: UpdateProductRequest) => void;
  updateProductLoading: boolean;
  updateProductError: boolean;
  updateProductResponse: UpdateProductResponse;
  updateProductReset: () => void;

  session: any;
}
