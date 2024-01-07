import cors from "cors";
import db from "./db.js";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import productsRouter from "./routes/product.route.js";

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;

db.connect();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", //https://glamify-kp.vercel.app
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Glamify");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}! `);
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
