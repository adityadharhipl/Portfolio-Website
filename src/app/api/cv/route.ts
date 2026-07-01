import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { CV } from "@/models/CV";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const cvs = await CV.find({}).sort({ updatedAt: -1 }).limit(1);
    const url = cvs.length > 0 ? cvs[0].url : "";
    return NextResponse.json({ success: true, data: { url } });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    await connectDB();
    
    // We only keep one CV record, update the first one or create if none exists
    const cvs = await CV.find({});
    let cv;
    if (cvs.length > 0) {
      cv = await CV.findByIdAndUpdate(cvs[0]._id, { url }, { new: true });
    } else {
      cv = await CV.create({ url });
    }
    
    return NextResponse.json({ success: true, data: cv });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
