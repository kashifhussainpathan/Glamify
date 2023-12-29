import { createSlice } from "@reduxjs/toolkit";
import {
  getMenProducts,
  getProduct,
  getProducts,
  getSimilarProducts,
  getWomenProducts,
} from "./productsThunk";

const initialState = {
  error: "",
  product: {},
  products: [],
  status: "idle",
  totalProducts: "",
  menProducts: [],
  womenProducts: [],
  currentPage: 1,
  similarProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.totalProducts = action.payload?.pageInfo?.totalItems;
      state.error = "";
      state.status = "success";
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(getMenProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getMenProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.menProducts = action.payload.data;
    });

    builder.addCase(getMenProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(getWomenProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getWomenProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.womenProducts = action.payload.data;
    });

    builder.addCase(getWomenProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(getProduct.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.product = action.payload;
    });

    builder.addCase(getProduct.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(getSimilarProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getSimilarProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.similarProducts = action.payload?.data?.products;
    });

    builder.addCase(getSimilarProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;

export const { setCurrentPage } = productsSlice.actions;
