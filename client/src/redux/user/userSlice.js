import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  signinAsync,
  signupAsync,
  updateUserDetails,
} from "./userThunk";

const initialState = {
  error: null,
  status: "idle",
  currentUser: null,
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
      state.error = "";
    });

    builder.addCase(signupAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });

    builder.addCase(signinAsync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(signinAsync.fulfilled, (state, action) => {
      const user = action.payload.user;
      const token = action.payload.token;
      state.error = "";
      state.status = "success";
      state.currentUser = user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    });

    builder.addCase(signinAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });

    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.currentUser = action.payload;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.status = "error";
      localStorage.removeItem("token");
    });

    builder.addCase(updateUserDetails.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(updateUserDetails.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.currentUser = action.payload;
    });

    builder.addCase(updateUserDetails.rejected, (state, action) => {
      state.status = "error";
      alert(action.payload.message);
    });
  },
});

export default userSlice.reducer;
