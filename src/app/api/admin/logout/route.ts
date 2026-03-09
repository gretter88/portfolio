import { NextResponse } from "next/server";

const ADMIN_COOKIE = "portfolio_admin_session";

export async function POST() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return res;
}