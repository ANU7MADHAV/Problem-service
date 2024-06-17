import mongoose from "mongoose";
import { ATLAS_DB_URL } from "./config.server.js";

const connectDB = async () => {
  try {
    await mongoose.connect(ATLAS_DB_URL);
  } catch (error) {
    console.log("Unable to connect");
    console.log(error);
  }
};

export default connectDB;
