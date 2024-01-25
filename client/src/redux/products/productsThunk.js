import axios from "axios";
import memoizeData from "@utils/memoizeData";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://glamify-backend.vercel.app";

export const searchProductsAsync = createAsyncThunk(
  "products/searchProductsAsync",
  async (searchValue, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/searchProducts`,
        {
          params: { searchValue },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ page, gender, filters }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/filteredProducts/${gender}/${page}`,
        { params: { filters } }
      );

      memoizeData(page, gender, filters, response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMenProducts = createAsyncThunk(
  "products/getMenProducts",
  async ({ page, gender = "men" }, { rejectWithValue }) => {
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
  async ({ page, gender = "women" }, { rejectWithValue }) => {
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

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSimilarProducts = createAsyncThunk(
  "products/getSimilarProducts",
  async ({ gender, product_type }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/similarProducts/${gender}/${product_type}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNextProducts = createAsyncThunk(
  "products/getNextProducts",
  async ({ page, gender, filters }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/filteredProducts/${gender}/${page}`,
        { params: { filters } }
      );

      memoizeData(page, gender, filters, response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
