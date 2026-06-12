//src/app/api/admin/events/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ ok: false, message: "Invalid id" }, { status: 400 });
  }

  const db = await getDb();
  const res = await db.collection("analytics_events").deleteOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json({
    ok: res.deletedCount === 1,
  });
}
