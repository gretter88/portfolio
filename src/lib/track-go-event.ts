import type { NextRequest } from "next/server";
import { insertAnalyticsEvent } from "@/lib/analytics";

type TrackGoEventInput = {
  req: NextRequest;
  path: string;
  lang?: string | null;
  project?: string | null;
};

export async function trackGoEvent({
  req,
  path,
  lang = null,
  project = null,
}: TrackGoEventInput) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || null;

  const referrer =
    req.headers.get("referer") ||
    req.headers.get("referrer") ||
    null;

  try {
    await insertAnalyticsEvent({
      type: "click",
      path,
      lang,
      project,
      referrer,
      userAgent: req.headers.get("user-agent"),
      ip,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("trackGoEvent error:", error);
  }
}