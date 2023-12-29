import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

export const getUser = async (req, res) => {
  const userId = req.userId;
  const user = await User.findOne({ _id: userId });
  res.status(200).json(user);
};

export const manageCart = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    const user = await User.findOne({ _id: userId });

    if (user) {
      const indexOfProduct = user.cart.indexOf(productId);

      if (indexOfProduct !== -1) {
        user.cart.splice(indexOfProduct, 1);
      } else {
        user.cart.push(productId);
      }

      await user.save();

      const productsInCart = await Product.find({ _id: { $in: user.cart } });

      res.status(201).json(productsInCart);
    } else {
      next(errorHandler(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};

export const getCartProducts = async (req, res, next) => {
  try {
    const userId = req.userId;

    const user = await User.findOne({ _id: userId });

    if (user) {
      const productsInCart = await Product.find({ _id: { $in: user.cart } });

      res.status(200).json(productsInCart);
    } else {
      next(errorHandler(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { updatedDetails } = req.body;

    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $set: { ...updatedDetails } },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
