// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["es", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (SUPPORTED.includes(first as (typeof SUPPORTED)[number])) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
