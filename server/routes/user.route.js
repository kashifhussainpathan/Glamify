import express from "express";

import { verifyToken } from "../utils/verifyToken.js";
import {
  getUser,
  manageCart,
  updateProfile,
  getCartProducts,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", verifyToken, getUser);
router.post("/cart", verifyToken, manageCart);
router.get("/cart", verifyToken, getCartProducts);
router.post("/updateProfile", verifyToken, updateProfile);

export default router;
