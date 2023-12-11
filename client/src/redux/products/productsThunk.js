import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000";

export const getMenProducts = createAsyncThunk(
  "products/getMenProducts",
  async (page, { rejectWithValue }, gender = "men") => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/${gender}/${page}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getWomenProducts = createAsyncThunk(
  "products/getWomenProducts",
  async (page, { rejectWithValue }, gender = "women") => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/${gender}/${page}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
