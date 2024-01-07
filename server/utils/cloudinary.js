import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { config } from "dotenv";
config({ path: "./config.env" });

cloudinary.config({
  cloud_name: "traderkp",
  api_key: "224372198776264",
  api_secret: "vq1i7Zx401uEXL1WkD_bS01bqDs",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
