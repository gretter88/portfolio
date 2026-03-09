//src/app/api/admin/events/cleanup/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function DELETE(req: NextRequest) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const daysParam = req.nextUrl.searchParams.get("days");
  const days = Number(daysParam || "30");

  if (!Number.isFinite(days) || days <= 0) {
    return NextResponse.json({ ok: false, message: "Invalid days" }, { status: 400 });
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  const db = await getDb();
  const res = await db.collection("analytics_events").deleteMany({
    createdAt: { $lt: cutoff },
  });

  return NextResponse.json({
    ok: true,
    deletedCount: res.deletedCount,
  });
}
