import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function PATCH(req: NextRequest) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const body = await req.json();

    const id = String(body.id || "");
    const internalNotes = String(body.internalNotes || "");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const db = await getDb();

    await db.collection("leads").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          internalNotes,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}