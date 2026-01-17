import mongoose from "mongoose"


export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connection established successfully");
    } catch {
        console.log("Error connecting to MongoDB");
        process.exit(1);
    }
}