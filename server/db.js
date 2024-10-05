const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
console.log("MongoDB URI:", MONGO_URI);
const connectDB = async () => {
   try {
      console.log("Attempting to connect to MongoDB...");
      await mongoose.connect(MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log(`MongoDB connected successfully to: ${MONGO_URI}`);
   } catch (error) {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
   }
};
module.exports = connectDB;
