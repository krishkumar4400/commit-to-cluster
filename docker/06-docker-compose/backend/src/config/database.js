import mongoose from "mongoose";
import env from "./env.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDB;
