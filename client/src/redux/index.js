import {
  getProducts,
  getMenProducts,
  getWomenProducts,
  getSimilarProducts,
} from "./products/productsThunk";
import { signinAsync } from "./user/userThunk";
import { updateUserDetails } from "./user/userThunk";
import { getFilters } from "./filters/filtersThunk";
import { getProduct } from "./products/productsThunk";
import { getUser, signupAsync } from "./user/userThunk";
import { setCurrentPage } from "./products/productsSlice";
import { getCartProducts, manageCart } from "./cart/cartThunk";
import { removeFilters, setFilters } from "./filters/filtersSlice";

export {
  getUser,
  getProduct,
  setFilters,
  getFilters,
  manageCart,
  getProducts,
  signupAsync,
  signinAsync,
  removeFilters,
  getMenProducts,
  setCurrentPage,
  getCartProducts,
  getWomenProducts,
  updateUserDetails,
  getSimilarProducts,
};
