import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "./config.env" });

const mongoURL = process.env.MONGODB;

const connect = async () => {
  try {
    await mongoose.connect(mongoURL, {
      dbName: "Glamify",
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default { connect };
