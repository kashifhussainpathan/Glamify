import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupAsync = createAsyncThunk(
  "user/signup",
  async (userDetails) => {
    const response = await axios.post("/api/auth/signup", userDetails);
    return response.data;
  }
);

export const signinAsync = createAsyncThunk(
  "user/signin",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signin", userDetails);
      return response;
    } catch (error) {
      console.log({ error });
      return rejectWithValue(error.response.data);
    }
  }
);
