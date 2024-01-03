import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  signinAsync,
  signupAsync,
  updateUserDetails,
} from "./userThunk";

const initialState = {
  error: null,
  signupStatus: "idle",
  signinStatus: "idle",
  getUserStatus: "idle",
  updateUserDetailsStatus: "idle",
  currentUser: null,
  toggleAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToggleAuth: (state, action) => {
      state.toggleAuth = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signupAsync.pending, (state) => {
      state.signupStatus = "loading";
    });

    builder.addCase(signupAsync.fulfilled, (state, action) => {
      state.signupStatus = "success";
      state.error = "";
      state.toggleAuth = !state.toggleAuth;
    });

    builder.addCase(signupAsync.rejected, (state, action) => {
      state.signupStatus = "error";
      state.error = action.payload.message;
    });

    builder.addCase(signinAsync.pending, (state) => {
      state.signinStatus = "loading";
    });

    builder.addCase(signinAsync.fulfilled, (state, action) => {
      const user = action.payload.user;
      const token = action.payload.token;

      state.error = "";
      state.signinStatus = "success";
      state.currentUser = user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    });

    builder.addCase(signinAsync.rejected, (state, action) => {
      state.signinStatus = "error";
      state.error = action.payload.message;
    });

    builder.addCase(getUser.pending, (state) => {
      state.getUserStatus = "loading";
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.error = "";
      state.getUserStatus = "success";
      state.currentUser = action.payload;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.getUserStatus = "error";
      localStorage.removeItem("token");
    });

    builder.addCase(updateUserDetails.pending, (state) => {
      state.updateUserDetailsStatus = "loading";
    });

    builder.addCase(updateUserDetails.fulfilled, (state, action) => {
      state.error = "";
      state.updateUserDetailsStatus = "success";
      state.currentUser = action.payload;
    });

    builder.addCase(updateUserDetails.rejected, (state, action) => {
      state.updateUserDetailsStatus = "error";
      alert(action.payload.message);
    });
  },
});

export default userSlice.reducer;

export const { setToggleAuth } = userSlice.actions;
