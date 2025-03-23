import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/profile"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isProtectedRoute = PROTECTED_ROUTES.includes(req.nextUrl.pathname);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
