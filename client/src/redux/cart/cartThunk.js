import axios from "axios";
import { useToken } from "../../hooks";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:4000";

export const manageCart = createAsyncThunk(
  "user/manageCart ",
  async (productId, { rejectWithValue }) => {
    try {
      const { token } = useToken();

      const response = await axios.post(
        `${BASE_URL}/api/user/cart`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCartProducts = createAsyncThunk(
  "user/getCartProducts ",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
