import { getDb } from "@/lib/mongodb";

export type LeadInterest =
  | "demo"
  | "license"
  | "partnership"
  | "deployment"
  | "info";

export type Lead = {
  project: string;
  interest: LeadInterest;
  name: string;
  email: string;
  company?: string | null;
  country?: string | null;
  message?: string | null;
  sourcePath?: string | null;
  ip?: string | null;
  userAgent?: string | null;
status?: "new" | "contacted" | "in_conversation" | "closed";
internalNotes?: string | null;
  createdAt: Date;
};

export async function insertLead(lead: Lead) {
  const db = await getDb();
  return db.collection<Lead>("leads").insertOne(lead);
}

export async function getLatestLeads(limit = 50) {
  const db = await getDb();

  return db
    .collection<Lead>("leads")
    .find()
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}


export async function getLeadStats() {
  const db = await getDb();
  const col = db.collection<Lead>("leads");

  const [
    totalLeads,
    newLeads,
    contactedLeads,
    inConversationLeads,
    closedLeads,
    leadsByProject,
  ] = await Promise.all([
    col.countDocuments(),
    col.countDocuments({ status: "new" }),
    col.countDocuments({ status: "contacted" }),
    col.countDocuments({ status: "in_conversation" }),
    col.countDocuments({ status: "closed" }),

    col
      .aggregate([
        {
          $group: {
            _id: "$project",
            total: { $sum: 1 },
            new: {
              $sum: { $cond: [{ $eq: ["$status", "new"] }, 1, 0] },
            },
            contacted: {
              $sum: { $cond: [{ $eq: ["$status", "contacted"] }, 1, 0] },
            },
            inConversation: {
              $sum: { $cond: [{ $eq: ["$status", "in_conversation"] }, 1, 0] },
            },
            closed: {
              $sum: { $cond: [{ $eq: ["$status", "closed"] }, 1, 0] },
            },
          },
        },
        { $sort: { total: -1 } },
      ])
      .toArray(),
  ]);

  return {
    totalLeads,
    newLeads,
    contactedLeads,
    inConversationLeads,
    closedLeads,
    leadsByProject: leadsByProject.map((row: any) => ({
      project: String(row._id || "-"),
      total: row.total || 0,
      new: row.new || 0,
      contacted: row.contacted || 0,
      inConversation: row.inConversation || 0,
      closed: row.closed || 0,
    })),
  };
}