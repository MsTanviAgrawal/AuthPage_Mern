const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Dynamic fallback string processing if the env index evaluates blank
    const dbURI = process.env.MONGODB_URL;
    if (!dbURI) {
      throw new Error("MONGODB_URL variable is completely missing inside .env configuration file.");
    }

    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB Atlas Successfully");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err.message);
    process.exit(1); // Force terminate process instantly on lifecycle failures
  }
};

module.exports = connectDB;
