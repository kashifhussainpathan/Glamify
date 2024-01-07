import express from "express";
import { upload } from "../middlewares/multer.middlewares.js";

import { verifyToken } from "../utils/verifyToken.js";
import {
  getUser,
  manageCart,
  updateProfile,
  getCartProducts,
  updateUserAvatar,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", verifyToken, getUser);
router.post("/cart", verifyToken, manageCart);
router.get("/cart", verifyToken, getCartProducts);
router.post("/updateProfile", verifyToken, updateProfile);

router.patch("/avatar", verifyToken, upload.single("avatar"), updateUserAvatar);

export default router;
