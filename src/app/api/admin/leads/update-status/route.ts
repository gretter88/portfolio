import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const VALID_STATUS = new Set([
  "new",
  "contacted",
  "in_conversation",
  "closed",
]);

export async function PATCH(req: NextRequest) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const body = await req.json();

    const id = String(body.id || "");
    const status = String(body.status || "");

    if (!ObjectId.isValid(id) || !VALID_STATUS.has(status)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const db = await getDb();

    await db.collection("leads").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}