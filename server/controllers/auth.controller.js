import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

dotenv.config({ path: "./config.env" });

export const signup = async (req, res, next) => {
  const { username, email, password, avatar } = req.body;

  try {
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist)
      return next(
        errorHandler(
          400,
          "This email is already associated with an existing account. Please use a different email address."
        )
      );

    const isUsernameExist = await User.findOne({ username });

    if (isUsernameExist)
      return next(
        errorHandler(
          400,
          "This username is already taken. Please choose a different username."
        )
      );

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      avatar,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found!"));

    const validPassword = await bcryptjs.compare(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Invalid credentials!"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res.status(200).json({ user: rest, token });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};
