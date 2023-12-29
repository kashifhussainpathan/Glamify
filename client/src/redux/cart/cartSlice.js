import { createSlice } from "@reduxjs/toolkit";
import { getCartProducts, manageCart } from "./cartThunk";

const initialState = {
  error: null,
  status: "idle",
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(manageCart.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(manageCart.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.cart = action.payload;
    });

    builder.addCase(manageCart.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(getCartProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.cart = action.payload;
    });

    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action.payload);
    });
  },
});

export default cartSlice.reducer;
