import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "portfolio_admin_session";

export async function GET(req: NextRequest) {
  const session = req.cookies.get(ADMIN_COOKIE)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET || "portfolio-admin";

  return NextResponse.json({
    ok: session === secret,
  });
}