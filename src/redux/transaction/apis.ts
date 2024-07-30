import axios from "axios";
import { BASE_URL, getHeader } from "../constants";
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  FailedResponse,
  GetAllTransactionResponse,
  GetDetailTransactionRequest,
  GetProductDetailResponse,
} from "@/types";

export const transactionApis = {
  getAllTransactions: async (): Promise<GetAllTransactionResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + "/transaction", {
      ...getHeader(),
    });
    return response.data;
  },
  getTransactionDetail: async (
    payload: GetDetailTransactionRequest
  ): Promise<GetProductDetailResponse | FailedResponse> => {
    const response = await axios.get(BASE_URL + `/transaction/${payload.id}`, {
      ...getHeader()
    });
    return response.data;
  },
  createTransaction: async (
    payload: CreateTransactionRequest
  ): Promise<CreateTransactionResponse | FailedResponse> => {
    const response = await axios.post(BASE_URL + `/transaction`, payload, {
      ...getHeader(),
    });
    return response.data;
  },
  deleteTransaction: async (
    payload: DeleteTransactionRequest
  ): Promise<DeleteTransactionResponse | FailedResponse> => {
    const response = await axios.delete(BASE_URL + `/transaction/${payload.id}`, {
      ...getHeader(),
    });
    return response.data;
  },
};
