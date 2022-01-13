/** @format */

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import cartReducer from "./slices/AddToCart";
import authReducer from "./slices/Auth";
import paymentReducer from "./slices/Payment";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  cartItems: cartReducer,
  auth: authReducer,
  payment: paymentReducer,
});

export { rootPersistConfig, rootReducer };
