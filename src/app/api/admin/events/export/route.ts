import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

function escapeCsv(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const db = await getDb();

  const events = await db
    .collection("analytics_events")
    .find()
    .sort({ createdAt: -1 })
    .limit(10000)
    .toArray();

  const headers = [
    "Fecha",
    "Tipo",
    "Proyecto",
    "Path",
    "Idioma",
    "Pais",
    "Region",
    "Ciudad",
    "IP",
    "VisitorId",
    "Referrer",
    "UserAgent",
  ];

  const rows = events.map((event: any) =>
    [
      event.createdAt ? new Date(event.createdAt).toISOString() : "",
      event.type || "",
      event.project || "",
      event.path || "",
      event.lang || "",
      event.country || "",
      event.region || "",
      event.city || "",
      event.ip || "",
      event.visitorId || "",
      event.referrer || "",
      event.userAgent || "",
    ]
      .map(escapeCsv)
      .join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="all-events.csv"',
    },
  });
}