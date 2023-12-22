import mongoose from "mongoose";

const { MONGODB_USERURL } = process.env;

if (!MONGODB_USERURL) {
  throw new Error("Invalid environment variable: MONGODB_NEXT");
}

export const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_USERURL);

    if (connection.readyState === 1) {
      console.log("Connected to MongoDB");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Promise.reject(error);
  }
};
