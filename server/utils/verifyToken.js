import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(errorHandler(401, "Unauthorized: No token provided"));
  }

  const tokenParts = token.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return next(errorHandler(401, "Unauthorized: Invalid token format"));
  }

  const accessToken = tokenParts[1];

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized: Invalid token"));
    }

    req.userId = decoded.id;
    next();
  });
};
