import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";
import products from "../data.json" assert { type: "json" };

export const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.params.page) || 1;
    const perPage = 20;
    const gender = req.params.gender;

    const skip = (page - 1) * perPage;

    if (!["men", "women"].includes(gender)) {
      return next(errorHandler(400, "Invalid gender specified"));
    }

    const query = { gender };

    const products = await Product.find(query).skip(skip).limit(perPage);

    const totalProductsCount = await Product.countDocuments(query);

    if (products.length === 0) {
      return next(errorHandler(404, `No products found for ${gender}`));
    }

    res.status(200).json({
      data: products,
      pageInfo: {
        currentPage: page,
        itemsPerPage: perPage,
        totalItems: totalProductsCount,
      },
    });
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
