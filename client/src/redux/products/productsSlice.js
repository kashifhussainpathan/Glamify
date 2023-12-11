import { createSlice } from "@reduxjs/toolkit";
import { getMenProducts } from "./productsThunk";

const initialState = {
  totalProducts: [],
  menProducts: [],
  womenProducts: [],
  status: "idle",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMenProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getMenProducts.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.totalProducts = action.payload?.pageInfo?.totalItems;
      state.menProducts = action.payload.data;
    });

    builder.addCase(getMenProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;

export const { setProducts } = productsSlice.actions;
