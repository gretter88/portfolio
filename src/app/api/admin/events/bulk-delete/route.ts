//src/app/api/admin/events/bulk-delete/route.ts

import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function DELETE(req: NextRequest) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: { ids?: unknown } = await req.json();
    const ids = Array.isArray(body?.ids) ? body.ids : [];

    const validIds: string[] = ids.filter(
      (id: unknown): id is string => typeof id === "string" && ObjectId.isValid(id)
    );

    if (validIds.length === 0) {
      return NextResponse.json(
        { ok: false, message: "No valid ids provided" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const objectIds = validIds.map((id: string) => new ObjectId(id));

    const res = await db.collection("analytics_events").deleteMany({
      _id: { $in: objectIds },
    });

    return NextResponse.json({
      ok: true,
      deletedCount: res.deletedCount,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Internal error" },
      { status: 500 }
    );
  }
}

