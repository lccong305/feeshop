import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import cateReducer from "./cateSlice";
import productModalReducer from "./productModalSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import adminProductReducer from "./adminProductSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  cate: cateReducer,
  productModal: productModalReducer,
  auth: authReducer,
  user: userReducer,
  adminproduct: adminProductReducer,
});

export default rootReducer;
