// ✅ FILE: models/Inquiry.ts
import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
}, { timestamps: true });

export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
