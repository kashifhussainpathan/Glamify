import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const BASE_URL = "https://glamify-backend.vercel.app";

export const signupAsync = createAsyncThunk(
  "user/signup",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        userDetails
      );

      toast.success("Registration successful! Welcome to Glamify!");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signinAsync = createAsyncThunk(
  "user/signin",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/signin`,
        userDetails
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ token, updatedDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/updateProfile`,
        { updatedDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ avatar, token }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const response = await axios.patch(
        `${BASE_URL}/api/user/avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
