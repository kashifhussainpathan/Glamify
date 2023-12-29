import express from "express";
import {
  getProduct,
  getFilters,
  getProducts,
  getSimilarProducts,
  getFilteredProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/filters", getFilters);
router.get("/:productId", getProduct);
router.get("/:gender/:page", getProducts);
router.get("/filteredProducts/:gender/:page", getFilteredProducts);
router.get("/similarProducts/:gender/:product_type", getSimilarProducts);

export default router;
