import { createSlice } from "@reduxjs/toolkit";
import { getFilters } from "./filtersThunk";

const initialState = {
  brands: [],
  colors: [],
  categories: [],

  filters: {
    rating: 0,
    sizes: [],
    brands: [],
    colors: [],
    categories: [],
    priceRange: { min: 0, max: 0 },
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { category, brand, color, size, rating, price } = action.payload;

      // Toggle category filter
      if (category) {
        const categoryIndex = state.filters.categories.indexOf(category);
        if (categoryIndex === -1) {
          state.filters.categories.push(category);
        } else {
          state.filters.categories.splice(categoryIndex, 1);
        }
      }

      // Toggle brand filter
      if (brand) {
        const brandIndex = state.filters.brands.indexOf(brand);
        if (brandIndex === -1) {
          state.filters.brands.push(brand);
        } else {
          state.filters.brands.splice(brandIndex, 1);
        }
      }

      // Toggle color filter
      if (color) {
        const colorIndex = state.filters.colors.indexOf(color);
        if (colorIndex === -1) {
          state.filters.colors.push(color);
        } else {
          state.filters.colors.splice(colorIndex, 1);
        }
      }

      // Toggle size filter
      if (size) {
        const sizeIndex = state.filters.sizes.indexOf(size);
        if (sizeIndex === -1) {
          state.filters.sizes.push(size);
        } else {
          state.filters.sizes.splice(sizeIndex, 1);
        }
      }

      // Toggle size filter
      if (rating) {
        console.log({ rating });
        state.filters.rating = rating;
      }

      if (price) {
        const { min, max } = price;
        state.filters.priceRange = {
          min: min !== undefined ? min : state.filters.priceRange.min,
          max: max !== undefined ? max : state.filters.priceRange.max,
        };
      }
    },

    removeFilters: (state, action) => {
      state.filters = {
        rating: 0,
        sizes: [],
        brands: [],
        colors: [],
        categories: [],
        priceRange: { min: 0, max: 0 },
      };
    },

    setFiltersData: (state, action) => {
      state.colors = action.payload.colors;
      state.brands = action.payload.brands;
      state.categories = action.payload.categories;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFilters.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getFilters.fulfilled, (state, action) => {
      state.error = "";
      state.status = "success";
      state.colors = action.payload.colors;
      state.brands = action.payload.brands;
      state.categories = action.payload.categories;
    });

    builder.addCase(getFilters.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default filtersSlice.reducer;

export const { setFilters, removeFilters, setFiltersData } =
  filtersSlice.actions;
