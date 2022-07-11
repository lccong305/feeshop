import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import productModalReducer from "./productModalSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import adminProductReducer from "./adminProductSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productModal: productModalReducer,
  auth: authReducer,
  user: userReducer,
  adminproduct: adminProductReducer,
});

export default rootReducer;
