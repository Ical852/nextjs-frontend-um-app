export interface GetDetailTransactionRequest {
  id: number;
}

export interface CreateTransactionRequest {
  productId: number;
  quantity: number;
  type: string;
}

export interface DeleteTransactionRequest {
  id: number;
}
