import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import filtersReducer from "./filters/filtersSlice";
import productsReducer from "./products/productsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  filters: filtersReducer,
  products: productsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
