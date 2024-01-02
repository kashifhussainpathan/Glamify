import { createSlice } from "@reduxjs/toolkit";
import {
  getMenProducts,
  getProduct,
  getProducts,
  getSimilarProducts,
  getWomenProducts,
  searchProductsAsync,
} from "./productsThunk";

const initialState = {
  error: "",
  product: {},
  products: [],
  totalProducts: "",
  menProducts: [],
  womenProducts: [],
  currentPage: 1,
  similarProducts: [],
  searchedProducts: [],
  productStatus: "idle",
  productsStatus: "idle",
  menProductsStatus: "idle",
  womenProductsStatus: "idle",
  similarProductsStatus: "idle",
  searchedProductsStatus: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload.data;
      state.totalProducts = action.payload?.pageInfo?.totalItems;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsStatus = "loading";
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.totalProducts = action.payload?.pageInfo?.totalItems;
      state.error = "";
      state.productsStatus = "success";
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(getMenProducts.pending, (state) => {
      state.menProductsStatus = "loading";
    });

    builder.addCase(getMenProducts.fulfilled, (state, action) => {
      state.error = "";
      state.menProductsStatus = "success";
      state.menProducts = action.payload.data;
    });

    builder.addCase(getMenProducts.rejected, (state, action) => {
      state.menProductsStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(getWomenProducts.pending, (state) => {
      state.womenProductsStatus = "loading";
    });

    builder.addCase(getWomenProducts.fulfilled, (state, action) => {
      state.error = "";
      state.womenProductsStatus = "success";
      state.womenProducts = action.payload.data;
    });

    builder.addCase(getWomenProducts.rejected, (state, action) => {
      state.womenProductsStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(getProduct.pending, (state) => {
      state.productStatus = "loading";
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.error = "";
      state.productStatus = "success";
      state.product = action.payload;
    });

    builder.addCase(getProduct.rejected, (state, action) => {
      state.productStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(getSimilarProducts.pending, (state) => {
      state.similarProductsStatus = "loading";
    });

    builder.addCase(getSimilarProducts.fulfilled, (state, action) => {
      state.error = "";
      state.similarProductsStatus = "success";
      state.similarProducts = action.payload?.data?.products;
    });

    builder.addCase(getSimilarProducts.rejected, (state, action) => {
      state.similarProductsStatus = "error";
    });

    builder.addCase(searchProductsAsync.pending, (state) => {
      state.searchedProductsStatus = "loading";
    });

    builder.addCase(searchProductsAsync.fulfilled, (state, action) => {
      state.error = "";
      state.searchedProductsStatus = "success";
      state.searchedProducts = action.payload;
    });

    builder.addCase(searchProductsAsync.rejected, (state, action) => {
      state.searchedProductsStatus = "error";
      state.error = action.payload.message;
    });
  },
});

export default productsSlice.reducer;

export const { setProducts, setCurrentPage } = productsSlice.actions;
