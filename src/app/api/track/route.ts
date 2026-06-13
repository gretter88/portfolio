import { NextRequest, NextResponse } from "next/server";
import { insertAnalyticsEvent } from "@/lib/analytics";

const allowedTypes = [
  "pageview",
  "click",
  "pdf_download",
  "request_demo",
  "request_license",
  "request_partnership",
  "request_project_info",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || null;

    const eventType = allowedTypes.includes(body.type)
      ? body.type
      : "pageview";

    await insertAnalyticsEvent({
      type: eventType,
      path: body.path || "/",
      lang: body.lang || null,
      project: body.project || null,
      visitorId: body.visitorId || null,
      referrer: body.referrer || null,
      userAgent: req.headers.get("user-agent"),
      ip,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}