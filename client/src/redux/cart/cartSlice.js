import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts, manageCart } from "./cartThunk";

const initialState = {
  error: null,
  manageCartStatus: "idle",
  getCartProductsStatus: "idle",
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(manageCart.pending, (state) => {
      state.manageCartStatus = "loading";
    });

    builder.addCase(manageCart.fulfilled, (state, action) => {
      state.error = "";
      state.manageCartStatus = "success";
      state.cart = action.payload;
    });

    builder.addCase(manageCart.rejected, (state, action) => {
      state.manageCartStatus = "error";
      state.error = action.payload;
    });

    builder.addCase(getCartProducts.pending, (state) => {
      state.getCartProductsStatus = "loading";
    });

    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.error = "";
      state.getCartProductsStatus = "success";
      state.cart = action.payload;
    });

    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.getCartProductsStatus = "error";
    });
  },
});

export default cartSlice.reducer;
