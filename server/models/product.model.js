import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: "" },
  slug: { type: String },
  brand: { type: String },
  gender: { type: String, enum: ["men", "women"], required: true },
  hierarchical_categories: {
    lvl0: { type: String },
    lvl1: { type: String },
    lvl2: { type: String },
  },
  list_categories: { type: [String] },
  category_page_id: { type: [String] },
  image_urls: { type: [String] },
  reviews: {
    rating: { type: Number },
    count: { type: Number },
    bayesian_avg: { type: Number },
  },
  available_sizes: { type: [String] },
  price: {
    currency: { type: String },
    value: { type: Number },
    discounted_value: { type: Number, default: 0 },
    discount_level: { type: Number, default: -100 },
    on_sales: { type: Boolean, default: false },
  },
  color: {
    filter_group: { type: String },
    original_name: { type: String },
  },
  product_type: { type: String },
  units_in_stock: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
