import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
