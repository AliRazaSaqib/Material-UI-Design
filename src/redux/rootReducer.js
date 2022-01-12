/** @format */

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import cartReducer from "./slices/AddToCart";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  cartItems: cartReducer,
});

export { rootPersistConfig, rootReducer };
