import {
  removeFilters,
  setFilters,
  setFiltersData,
} from "./filters/filtersSlice";
import {
  getProducts,
  getMenProducts,
  getWomenProducts,
  getSimilarProducts,
  searchProductsAsync,
  getNextProducts,
} from "./products/productsThunk";
import { setToggleAuth } from "./user/userSlice";
import { getFilters } from "./filters/filtersThunk";
import { updateUserDetails } from "./user/userThunk";
import { getProduct } from "./products/productsThunk";
import { getUser, signupAsync } from "./user/userThunk";
import { signinAsync, updateAvatar } from "./user/userThunk";
import { getCartProducts, manageCart } from "./cart/cartThunk";
import { setCurrentPage, setProducts } from "./products/productsSlice";

export {
  getUser,
  getProduct,
  setFilters,
  getFilters,
  manageCart,
  getProducts,
  setProducts,
  signupAsync,
  signinAsync,
  updateAvatar,
  removeFilters,
  setToggleAuth,
  setFiltersData,
  getMenProducts,
  getNextProducts,
  setCurrentPage,
  getCartProducts,
  getWomenProducts,
  updateUserDetails,
  getSimilarProducts,
  searchProductsAsync,
};
