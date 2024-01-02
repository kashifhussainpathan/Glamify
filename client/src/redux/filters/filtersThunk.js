import axios from "axios";
import memoizeData from "@utils/memoizeData";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000";

export const getFilters = createAsyncThunk(
  "prodducts/getFilters",
  async ({ gender }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/products/filters`, {
        params: { gender },
      });

      memoizeData("filter", gender, "filters", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
