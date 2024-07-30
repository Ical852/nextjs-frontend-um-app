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
import store from "../store";

export const transactionApis = {
  getAllTransactions: async (): Promise<GetAllTransactionResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + "/transaction", {
      ...getHeader(token),
    });
    return response.data;
  },
  getTransactionDetail: async (
    payload: GetDetailTransactionRequest
  ): Promise<GetProductDetailResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.get(BASE_URL + `/transaction/${payload.id}`, {
      ...getHeader(token)
    });
    return response.data;
  },
  createTransaction: async (
    payload: CreateTransactionRequest
  ): Promise<CreateTransactionResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.post(BASE_URL + `/transaction`, payload, {
      ...getHeader(token),
    });
    return response.data;
  },
  deleteTransaction: async (
    payload: DeleteTransactionRequest
  ): Promise<DeleteTransactionResponse | FailedResponse> => {
    const token = store?.getState()?.auth?.session?.token;
    const response = await axios.delete(BASE_URL + `/transaction/${payload.id}`, {
      ...getHeader(token),
    });
    return response.data;
  },
};
