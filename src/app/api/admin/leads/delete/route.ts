import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function DELETE(req: NextRequest) {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const body = await req.json();
    const id = String(body.id || "");

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const db = await getDb();

    await db.collection("leads").deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}