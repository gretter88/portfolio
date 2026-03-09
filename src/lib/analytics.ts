import { getDb } from "@/lib/mongodb";

export type AnalyticsEventType = "pageview" | "click";

export type AnalyticsEvent = {
  type: AnalyticsEventType;
  path: string;
  lang?: string | null;
  project?: string | null;
  visitorId?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  ip?: string | null;
  createdAt: Date;
};

export async function insertAnalyticsEvent(event: AnalyticsEvent) {
  const db = await getDb();
  return db.collection<AnalyticsEvent>("analytics_events").insertOne(event);
}

export async function getAnalyticsStats() {
  const db = await getDb();
  const col = db.collection<AnalyticsEvent>("analytics_events");

  const [
    totalEvents,
    pageViews,
    uniqueVisitors,
    esPageViews,
    enPageViews,
    cvClicks,
    linkedinClicks,
    githubClicks,
    museoDemoClicks,
    radarDemoClicks,
    requestAccessClicks,
    openVideoIntranet,
    latestEvents,
  ] = await Promise.all([
    col.countDocuments(),
    col.countDocuments({ type: "pageview" }),
    col.distinct("visitorId", {
      type: "pageview",
      visitorId: { $ne: null },
    }),
    col.countDocuments({ type: "pageview", path: "/es" }),
    col.countDocuments({ type: "pageview", path: "/en" }),
    col.countDocuments({ path: "/go/cv" }),
    col.countDocuments({ path: "/go/linkedin" }),
    col.countDocuments({ path: "/go/github" }),
    col.countDocuments({ path: "/go/demo/museo" }),
    col.countDocuments({ path: "/go/demo/radar" }),
    col.countDocuments({ path: { $regex: "^/go/request-access/" } }),
    col.countDocuments({ path: "/go/open-video/intranet" }),
    col.find().sort({ createdAt: -1 }).limit(20).toArray(),
  ]);

  return {
    totalEvents,
    pageViews,
    visitors: uniqueVisitors.length,
    esPageViews,
    enPageViews,
    cvClicks,
    linkedinClicks,
    githubClicks,
    museoDemoClicks,
    radarDemoClicks,
    requestAccessClicks,
    openVideoIntranet,
    latestEvents,
  };
}

