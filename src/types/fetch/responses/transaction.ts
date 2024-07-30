import { Response } from "@/types/main";
import { Product } from "./product";

export interface Transaction {
  id: number;
  productId: number;
  quantity: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

export interface GetAllTransactionResponse extends Response {
  data: Array<Transaction>;
}

export interface GetDetailTransactionResponse extends Response {
  data: Transaction;
}

export interface CreateTransactionResponse
  extends GetDetailTransactionResponse {}

export interface DeleteTransactionResponse extends Response {}
