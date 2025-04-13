import mongoose from "mongoose";
import Inquiry from "@/models/Inquiry";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("MONGODB_URI is missing in .env.local");

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
}

export async function saveInquiry(data) {
  await connectDB();
  const inquiry = new Inquiry(data);
  await inquiry.save();
}

export async function getInquiries() {
  await connectDB();
  return Inquiry.find().sort({ createdAt: -1 });
}
