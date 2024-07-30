import { all } from "redux-saga/effects";
import { authSaga } from "./auth/sagas";
import { adminSaga } from "./admin/sagas";
import { categorySaga } from "./category/sagas";
import { productSaga } from "./product/sagas";
import { transactionSaga } from "./transaction/sagas";

export default function* rootSaga() {
  yield all([
    authSaga(),
    adminSaga(),
    categorySaga(),
    productSaga(),
    transactionSaga(),
  ]);
}
