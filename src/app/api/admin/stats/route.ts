import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAnalyticsStats } from "@/lib/analytics";

export async function GET() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const stats = await getAnalyticsStats();

  return NextResponse.json({ ok: true, stats });
}