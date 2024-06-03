import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log("MOngodb connected: ", con.connection.name);
  } catch {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
