// ✅ FILE: app/api/inquiry/route.js
import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db";

export async function POST(req) {
  const data = await req.json();
  try {
    await saveInquiry(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
