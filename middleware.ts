import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  console.log("HOST:", hostname);

  if (hostname.startsWith("admin.")) {
    return NextResponse.rewrite(
      new URL("/admin", request.url)
    );
  }

  if (hostname.startsWith("account.")) {
    return NextResponse.rewrite(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};