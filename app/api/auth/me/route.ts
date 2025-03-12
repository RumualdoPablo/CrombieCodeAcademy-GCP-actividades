import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ isAuthenticated: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!); // Verificar si el token es válido
    return NextResponse.json({ isAuthenticated: true });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false });
  }
}
