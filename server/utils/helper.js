import { errorHandler } from "./error.js";
import Product from "../models/product.model.js";

export const validateGender = (gender) => {
  if (!["men", "women"].includes(gender)) {
    throw errorHandler(400, "Invalid gender specified");
  }
};

export const fetchProducts = async (query, skip = 0, limit = 20) => {
  const products = await Product.find(query).skip(skip).limit(limit);
  const totalProductsCount = await Product.countDocuments(query);

  return { products, totalProductsCount };
};

export const handleResponse = (
  res,
  data,
  currentPage,
  itemsPerPage,
  totalItems
) => {
  if (data.length === 0) {
    return next(errorHandler(404, `No products found`));
  }

  res.status(200).json({
    data,
    pageInfo: {
      currentPage,
      itemsPerPage,
      totalItems,
    },
  });
};

export const handleSingleProductResponse = (res, product) => {
  if (!product) {
    return next(errorHandler(404, `Product not found`));
  }

  res.status(200).json(product);
};
