import {
  fetchProducts,
  handleResponse,
  validateGender,
  handleSingleProductResponse,
} from "../utils/helper.js";
import Product from "../models/product.model.js";
import buildQuery from "../utils/buildQuery.js";
import products from "../data.json" assert { type: "json" };

export const getProducts = async (req, res, next) => {
  try {
    const { page = 1, gender } = req.params;
    const perPage = 20;
    const skip = (page - 1) * perPage;

    validateGender(gender);

    const query = { gender };
    const { products, totalProductsCount } = await fetchProducts(
      query,
      skip,
      perPage
    );

    handleResponse(res, products, page, perPage, totalProductsCount);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    handleSingleProductResponse(res, product);
  } catch (error) {
    next(error);
  }
};

export const getSimilarProducts = async (req, res, next) => {
  try {
    const { gender, product_type } = req.params;
    const query = { gender, product_type };
    const products = await fetchProducts(query);

    handleResponse(res, products);
  } catch (error) {
    next(error);
  }
};

export const getFilteredProducts = async (req, res, next) => {
  try {
    const { page = 1, gender } = req.params;
    const perPage = 20;
    const skip = (page - 1) * perPage;

    validateGender(gender);

    const filterQuery = buildQuery(req.query.filters);
    const query = { gender, ...filterQuery };

    const { products, totalProductsCount } = await fetchProducts(
      query,
      skip,
      perPage
    );

    handleResponse(res, products, page, perPage, totalProductsCount);
  } catch (error) {
    next(error);
  }
};

export const getFilters = async (req, res, next) => {
  try {
    const gender = req.query.gender;

    validateGender(gender);

    const products = await Product.find({ gender });

    const uniqueCategories = [
      ...new Set(products.map((product) => product.product_type)),
    ];
    const uniqueBrands = [...new Set(products.map((product) => product.brand))];

    const uniqueColors = [
      ...new Set(products.map((product) => product.color.filter_group)),
    ];

    res.status(200).json({
      categories: uniqueCategories,
      brands: uniqueBrands,
      colors: uniqueColors,
    });
  } catch (error) {
    next(error);
  }
};

export const searchedProducts = async (req, res, next) => {
  try {
    const { searchValue } = req.query;

    const regex = new RegExp(searchValue, "i");

    if (searchValue.trim() === "") {
      res.status(200).json([]);
      return;
    }

    const products = await Product.find({
      product_type: { $regex: regex },
    });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const seedDatabase = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await mongoose.connection.close();
  }
};

export default seedDatabase;
