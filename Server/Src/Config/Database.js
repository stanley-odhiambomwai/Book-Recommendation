import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { 
            
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("  There was an error for connecting MongoDB");
        process.exit(1);
    }
};

export default connectDB;
