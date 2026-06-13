import { getDb } from "@/lib/mongodb";

export type AnalyticsEventType =
  | "pageview"
  | "click"
  | "pdf_download"
  | "request_demo"
  | "request_license"
  | "request_partnership"
  | "request_project_info";

export type AnalyticsEvent = {
  type: AnalyticsEventType;
  path: string;
  lang?: string | null;
  project?: string | null;
  visitorId?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  ip?: string | null;
  country?: string | null;
region?: string | null;
city?: string | null;
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

    navProjectsClicks,
    navContactClicks,
    navExperienceClicks,
    navLinkedinClicks,
    navGithubClicks,

    cvClicks,
    linkedinClicks,
    githubClicks,
    museoDemoClicks,
    radarDemoClicks,
    requestAccessClicks,
    openVideoIntranet,

    screenshotPrevClicks,
    screenshotNextClicks,
    screenshotDotClicks,

    pdfDownloads,
    requestDemo,
    requestLicense,
    requestPartnership,
    requestProjectInfo,
    commercialByProject,
    latestCommercialEvents,

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

    col.countDocuments({ path: "/nav/projects" }),
    col.countDocuments({ path: "/nav/contact" }),
    col.countDocuments({ path: "/nav/experience" }),
    col.countDocuments({ path: "/nav/linkedin" }),
    col.countDocuments({ path: "/nav/github" }),

    col.countDocuments({ path: "/go/cv" }),
    col.countDocuments({ path: "/go/linkedin" }),
    col.countDocuments({ path: "/go/github" }),
    col.countDocuments({ path: "/go/demo/museo" }),
    col.countDocuments({ path: "/go/demo/radar" }),
    col.countDocuments({ path: { $regex: "^/go/request-access/" } }),
    col.countDocuments({ path: "/go/open-video/intranet" }),

    col.countDocuments({ path: "/modal/screenshot-prev" }),
    col.countDocuments({ path: "/modal/screenshot-next" }),
    col.countDocuments({ path: "/modal/screenshot-dot" }),

    col.countDocuments({ type: "pdf_download" }),
    col.countDocuments({ type: "request_demo" }),
    col.countDocuments({ type: "request_license" }),
    col.countDocuments({ type: "request_partnership" }),
    col.countDocuments({ type: "request_project_info" }),

    col
      .aggregate([
        {
          $match: {
            type: {
              $in: [
                "pdf_download",
                "request_demo",
                "request_license",
                "request_partnership",
                "request_project_info",
              ],
            },
          },
        },
        {
          $group: {
            _id: {
              project: "$project",
              type: "$type",
            },
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            "_id.project": 1,
            "_id.type": 1,
          },
        },
      ])
      .toArray(),

    col
      .find({
        type: {
          $in: [
            "pdf_download",
            "request_demo",
            "request_license",
            "request_partnership",
            "request_project_info",
          ],
        },
      })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray(),

    col.find().sort({ createdAt: -1 }).limit(200).toArray(),
  ]);

  return {
    totalEvents,
    pageViews,
    visitors: uniqueVisitors.length,
    esPageViews,
    enPageViews,

    navProjectsClicks,
    navContactClicks,
    navExperienceClicks,
    navLinkedinClicks,
    navGithubClicks,

    cvClicks,
    linkedinClicks,
    githubClicks,
    museoDemoClicks,
    radarDemoClicks,
    requestAccessClicks,
    openVideoIntranet,

    screenshotPrevClicks,
    screenshotNextClicks,
    screenshotDotClicks,

    pdfDownloads,
    requestDemo,
    requestLicense,
    requestPartnership,
    requestProjectInfo,
    commercialByProject,
    latestCommercialEvents,

    latestEvents,
  };
}