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
	commercialSummaryByProject,
    latestCommercialEvents,
topPages,
topClicks,
topCommercialProjects,
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
        _id: "$project",
        pdfDownloads: {
          $sum: { $cond: [{ $eq: ["$type", "pdf_download"] }, 1, 0] },
        },
        demoRequests: {
          $sum: { $cond: [{ $eq: ["$type", "request_demo"] }, 1, 0] },
        },
        licenseRequests: {
          $sum: { $cond: [{ $eq: ["$type", "request_license"] }, 1, 0] },
        },
        partnershipRequests: {
          $sum: { $cond: [{ $eq: ["$type", "request_partnership"] }, 1, 0] },
        },
        infoRequests: {
          $sum: { $cond: [{ $eq: ["$type", "request_project_info"] }, 1, 0] },
        },
        total: { $sum: 1 },
      },
    },
    {
      $sort: {
        total: -1,
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
  
  col
  .aggregate([
    { $match: { type: "pageview" } },
    {
      $group: {
        _id: "$path",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ])
  .toArray(),

col
  .aggregate([
    { $match: { type: "click" } },
    {
      $group: {
        _id: "$path",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ])
  .toArray(),

   col
  .aggregate([
    {
      $match: {
        path: {
          $regex: "^/go/(request-access|open-modal|open-video)/",
        },
      },
    },
    {
      $addFields: {
        projectFromPath: {
          $arrayElemAt: [
            {
              $split: [
                {
                  $arrayElemAt: [
                    {
                      $split: ["$path", "?"],
                    },
                    0,
                  ],
                },
                "/",
              ],
            },
            3,
          ],
        },
      },
    },
    {
      $group: {
        _id: "$projectFromPath",
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $limit: 10,
    },
  ])
  .toArray(),

    col.find().sort({ createdAt: -1 }).limit(200).toArray(),
  ]);
  
  const serializedCommercialSummaryByProject =
  commercialSummaryByProject.map((row: any) => ({
    _id: String(row._id || ""),
    pdfDownloads: row.pdfDownloads || 0,
    demoRequests: row.demoRequests || 0,
    licenseRequests: row.licenseRequests || 0,
    partnershipRequests: row.partnershipRequests || 0,
    infoRequests: row.infoRequests || 0,
    total: row.total || 0,
  }));
  
const serializedTopPages = topPages.map((row: any) => ({
  _id: String(row._id || ""),
  count: row.count || 0,
}));

const serializedTopClicks = topClicks.map((row: any) => ({
  _id: String(row._id || ""),
  count: row.count || 0,
}));


const serializedTopCommercialProjects = topCommercialProjects.map((row: any) => ({
  _id: String(row._id || ""),
  count: row.count || 0,
}));


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
	commercialSummaryByProject: serializedCommercialSummaryByProject,
    latestCommercialEvents,
topPages: serializedTopPages,
topClicks: serializedTopClicks,
topCommercialProjects: serializedTopCommercialProjects,
    latestEvents,
  };
}