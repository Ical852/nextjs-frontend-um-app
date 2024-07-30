import { takeLatest, call, put } from "redux-saga/effects";
import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  DeleteCategoryRequest,
  DeleteCategoryResponse,
  GetAllCategoryResponse,
  GetCategoryDetailRequest,
  GetCategoryDetailResponse,
  ReduxActionParams,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
} from "@/types";
import { categoryApis } from "./apis";
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_DETAIL,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from "./constants";
import {
  getAllCategoriesSuccess,
  getAllCategoriesFailed,
  getCategoryDetailSuccess,
  getCategoryDetailFailed,
  createCategorySuccess,
  createCategoryFailed,
  updateCategorySuccess,
  updateCategoryFailed,
  deleteCategorySuccess,
  deleteCategoryFailed,
} from "./actions";
import { RESPONSE_STATUS } from "../constants";

function* getAllCategoriesSaga(): Generator {
  try {
    const response: GetAllCategoryResponse = yield call(
      categoryApis.getAllCategories,
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(getAllCategoriesSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getAllCategoriesFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getAllCategoriesFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getAllCategoriesFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getAllCategoriesFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getAllCategoriesFailed({ message: `Error: ${error.message}` }));
  }
}

function* getCategoryDetailSaga(action: ReduxActionParams): Generator {
  try {
    const response: GetCategoryDetailResponse = yield call(
      categoryApis.getCategoryDetail,
      action.payload as GetCategoryDetailRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(getCategoryDetailSuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          getCategoryDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          getCategoryDetailFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          getCategoryDetailFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          getCategoryDetailFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(getCategoryDetailFailed({ message: `Error: ${error.message}` }));
  }
}

function* createCategorySaga(action: ReduxActionParams): Generator {
  try {
    const response: CreateCategoryResponse = yield call(
      categoryApis.createCategory,
      action.payload as CreateCategoryRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(createCategorySuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          createCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          createCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          createCategoryFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          createCategoryFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(createCategoryFailed({ message: `Error: ${error.message}` }));
  }
}

function* updateCategorySaga(action: ReduxActionParams): Generator {
  try {
    const response: UpdateCategoryResponse = yield call(
      categoryApis.updateCategory,
      action.payload as UpdateCategoryRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(updateCategorySuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          updateCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          updateCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          updateCategoryFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          updateCategoryFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(updateCategoryFailed({ message: `Error: ${error.message}` }));
  }
}

function* deleteCategorySaga(action: ReduxActionParams): Generator {
  try {
    const response: DeleteCategoryResponse = yield call(
      categoryApis.deleteCategory,
      action.payload as DeleteCategoryRequest
    );
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS || RESPONSE_STATUS.CREATED:
        return yield put(deleteCategorySuccess(response));
      case RESPONSE_STATUS.BAD_REQUEST:
        return yield put(
          deleteCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.UNAUTHORIZED:
        return yield put(
          deleteCategoryFailed({ message: `Error: ${response.message}` })
        );
      case RESPONSE_STATUS.ERROR:
        return yield put(
          deleteCategoryFailed({ message: `Error: ${response.message}` })
        );
      default:
        return yield put(
          deleteCategoryFailed({ message: `Error: Something went wrong` })
        );
    }
  } catch (error: any) {
    yield put(deleteCategoryFailed({ message: `Error: ${error.message}` }));
  }
}

export function* categorySaga() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategoriesSaga);
  yield takeLatest(GET_CATEGORY_DETAIL, getCategoryDetailSaga);
  yield takeLatest(CREATE_CATEGORY, createCategorySaga);
  yield takeLatest(UPDATE_CATEGORY, updateCategorySaga);
  yield takeLatest(DELETE_CATEGORY, deleteCategorySaga);
}
