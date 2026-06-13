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

    const geo = (req as any).geo || {};

    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      geo.country ||
      null;

    const region =
      req.headers.get("x-vercel-ip-country-region") ||
      geo.region ||
      null;

    const city =
      req.headers.get("x-vercel-ip-city") ||
      geo.city ||
      null;

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
      country,
      region,
      city,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}