import { combineReducers } from "redux";
import { authReducers } from "./auth/reducers";
import { adminReducers } from "./admin/reducers";
import { categoryReducers } from "./category/reducers";
import { productReducers } from "./product/reducers";
import { transactionReducers } from "./transaction/reducers";

const reducers = combineReducers({
  auth: authReducers,
  admin: adminReducers,
  category: categoryReducers,
  product: productReducers,
  transaction: transactionReducers,
});

export default reducers;
