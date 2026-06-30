import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (email === "aditya16@gmail.com" && password === "Aditya@123") {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "admin_token",
        value: "authenticated",
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
