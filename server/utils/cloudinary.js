import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { config } from "dotenv";
config({ path: "./config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const uploadOptions = {
      resource_type: "auto",
      upload_preset: "glamify",
      folder: "Glamify",
    };

    const response = await cloudinary.uploader.upload(
      localFilePath,
      uploadOptions
    );

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
