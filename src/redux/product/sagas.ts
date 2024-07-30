import { takeLatest, call, put } from "redux-saga/effects";
import {
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetAllProductResponse,
  GetProductDetailRequest,
  GetProductDetailResponse,
  ReduxActionParams,
  UpdateProductRequest,
  UpdateProductResponse,
} from "@/types";
import { productApis } from "./apis";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "./constants";
import {
  getAllProductsSuccess,
  getAllProductsFailed,
  getProductDetailSuccess,
  getProductDetailFailed,
  createProductSuccess,
  createProductFailed,
  updateProductSuccess,
  updateProductFailed,
  deleteProductSuccess,
  deleteProductFailed,
} from "./actions";
import { RESPONSE_STATUS } from "../constants";

function* getAllProductsSaga(): Generator {
  try {
    const response: GetAllProductResponse = yield call(
      productApis.getAllProducts,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(getAllProductsSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getAllProductsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getAllProductsFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getAllProductsFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getAllProductsFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getAllProductsFailed({ message: `Error: ${error.message}` }));
  }
}

function* getProductDetailSaga(action: ReduxActionParams): Generator {
  try {
    const response: GetProductDetailResponse = yield call(
      productApis.getProductDetail,
      action.payload as GetProductDetailRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(getProductDetailSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getProductDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getProductDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getProductDetailFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getProductDetailFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getProductDetailFailed({ message: `Error: ${error.message}` }));
  }
}

function* createProductSaga(action: ReduxActionParams): Generator {
  try {
    const response: CreateProductResponse = yield call(
      productApis.createProduct,
      action.payload as CreateProductRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(createProductSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          createProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          createProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          createProductFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          createProductFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(createProductFailed({ message: `Error: ${error.message}` }));
  }
}

function* updateProductSaga(action: ReduxActionParams): Generator {
  try {
    const response: UpdateProductResponse = yield call(
      productApis.updateProduct,
      action.payload as UpdateProductRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(updateProductSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          updateProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          updateProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          updateProductFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          updateProductFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(updateProductFailed({ message: `Error: ${error.message}` }));
  }
}

function* deleteProductSaga(action: ReduxActionParams): Generator {
  try {
    const response: DeleteProductResponse = yield call(
      productApis.deleteProduct,
      action.payload as DeleteProductRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(deleteProductSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          deleteProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          deleteProductFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          deleteProductFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          deleteProductFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(deleteProductFailed({ message: `Error: ${error.message}` }));
  }
}

export function* productSaga() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllProductsSaga);
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga);
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(DELETE_PRODUCT, deleteProductSaga);
}
