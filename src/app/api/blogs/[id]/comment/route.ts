import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Blog } from "@/models/Blog";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { name, text } = await req.json();
    
    if (!name || !text) {
      return NextResponse.json({ success: false, error: "Name and text are required" }, { status: 400 });
    }
    
    await connectDB();
    
    // Push the new comment to the comments array
    const blog = await Blog.findByIdAndUpdate(
      id,
      { 
        $push: { 
          comments: { 
            name, 
            text, 
            createdAt: new Date() 
          } 
        } 
      },
      { new: true }
    );
    
    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }
    
    // Return the newly added comment (which is the last one in the array)
    const newComment = blog.comments[blog.comments.length - 1];
    
    return NextResponse.json({ success: true, data: newComment });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
