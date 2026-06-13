import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const COMMERCIAL_TYPES = [
  "pdf_download",
  "request_demo",
  "request_license",
  "request_partnership",
  "request_project_info",
];

function escapeCsv(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const db = await getDb();

  const events = await db
    .collection("analytics_events")
    .find({
      type: {
        $in: COMMERCIAL_TYPES,
      },
    })
    .sort({ createdAt: -1 })
    .limit(5000)
    .toArray();

  const headers = [
    "Fecha",
    "Tipo",
    "Proyecto",
    "Pais",
    "Region",
    "Ciudad",
    "IP",
    "VisitorId",
    "Path",
    "Idioma",
  ];

  const rows = events.map((event: any) =>
    [
      event.createdAt
        ? new Date(event.createdAt).toISOString()
        : "",

      event.type || "",
      event.project || "",
      event.country || "",
      event.region || "",
      event.city || "",
      event.ip || "",
      event.visitorId || "",
      event.path || "",
      event.lang || "",
    ]
      .map(escapeCsv)
      .join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="commercial-events.csv"',
    },
  });
}