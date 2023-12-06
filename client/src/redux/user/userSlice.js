import { createSlice } from "@reduxjs/toolkit";
import { signinAsync, signupAsync } from "./userThunk";

const initialState = {
  currentUser: null,
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(signupAsync.fulfilled, (state, action) => {
      state.status = "success";
      console.log(action.payload);
    });

    builder.addCase(signupAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.error.message;
    });

    builder.addCase(signinAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(signinAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.currentUser = action.payload.data;
      state.error = "";
    });

    builder.addCase(signinAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export default userSlice.reducer;
