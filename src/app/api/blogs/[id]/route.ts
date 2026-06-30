import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Blog } from "@/models/Blog";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { title, content, imageUrl } = await req.json();
    await connectDB();
    const blog = await Blog.findByIdAndUpdate(id, { title, content, imageUrl }, { new: true, runValidators: true });
    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
