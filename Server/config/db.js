import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    const dbURI = process.env.MONGODB_URL;
    if (!dbURI) {
      throw new Error("MONGODB_URL variable is completely missing inside .env configuration file.");
    }

    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB Atlas Successfully");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err.message);
    process.exit(1); 
  }
};
export default connectDB;

