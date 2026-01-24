import mongoose from "mongoose"
import { Note } from "../models/note.js";


export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connection established successfully");
        await Note.syncIndexes();
    } catch {
        console.log("Error connecting to MongoDB");
        process.exit(1);
    }
}