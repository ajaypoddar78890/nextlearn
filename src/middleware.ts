import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered:", request.url);
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/profile", // Adjust this if needed
};
