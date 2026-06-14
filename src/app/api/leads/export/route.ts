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

  const leads = await db
    .collection("leads")
    .find()
    .sort({ createdAt: -1 })
    .limit(10000)
    .toArray();

  const headers = [
    "Fecha",
    "Proyecto",
    "Interes",
    "Nombre",
    "Email",
    "Empresa",
    "Pais",
    "Mensaje",
    "Origen",
    "IP",
  ];

  const rows = leads.map((lead: any) =>
    [
      lead.createdAt ? new Date(lead.createdAt).toISOString() : "",
      lead.project || "",
      lead.interest || "",
      lead.name || "",
      lead.email || "",
      lead.company || "",
      lead.country || "",
      lead.message || "",
      lead.sourcePath || "",
      lead.ip || "",
    ]
      .map(escapeCsv)
      .join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="leads.csv"',
    },
  });
}