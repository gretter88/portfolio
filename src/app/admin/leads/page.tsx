import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import AdminRefreshButton from "@/components/admin/AdminRefreshButton";
import AdminLeadsTable from "@/components/admin/AdminLeadsTable";
import { getLatestLeads, getLeadStats } from "@/lib/leads";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLeadsPage() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    redirect("/admin/login");
  }

  const leads = await getLatestLeads(200);
  const leadStats = await getLeadStats();

  const leadsSerialized = leads.map((lead: any) => ({
    _id: lead._id?.toString() || "",
    project: lead.project || null,
    interest: lead.interest || null,
    name: lead.name || null,
    email: lead.email || null,
    company: lead.company || null,
    country: lead.country || null,
    message: lead.message || null,
    sourcePath: lead.sourcePath || null,
    ip: lead.ip || null,
    status: lead.status || "new",
    internalNotes: lead.internalNotes || null,
    createdAt: lead.createdAt ? new Date(lead.createdAt).toISOString() : null,
  }));

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="text-sm underline underline-offset-4"
              style={{ color: "var(--muted)" }}
            >
              ← Volver al dashboard
            </Link>

            <h1 className="mt-4 text-3xl font-bold">Leads</h1>

            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Gestión de solicitudes comerciales recibidas desde el portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <AdminRefreshButton />
            <a
              href="/api/admin/leads/export"
              className="rounded-xl border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(34,197,94,0.35)",
                background: "rgba(34,197,94,0.10)",
              }}
            >
              Exportar leads CSV
            </a>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <AdminStatCard label="Total Leads" value={leadStats.totalLeads} hint="Todos" />
          <AdminStatCard label="Nuevos" value={leadStats.newLeads} hint="new" />
          <AdminStatCard label="Contactados" value={leadStats.contactedLeads} hint="contacted" />
          <AdminStatCard label="En conversación" value={leadStats.inConversationLeads} hint="in_conversation" />
          <AdminStatCard label="Cerrados" value={leadStats.closedLeads} hint="closed" />
        </div>

        <div
          className="mt-8 rounded-2xl border p-5"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-lg font-semibold">Leads por proyecto</h2>

          <div
            className="mt-5 overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--card-border)" }}
          >
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr style={{ textAlign: "left", color: "var(--muted-2)" }}>
                  <th className="px-4 py-3">Proyecto</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Nuevos</th>
                  <th className="px-4 py-3">Contactados</th>
                  <th className="px-4 py-3">En conversación</th>
                  <th className="px-4 py-3">Cerrados</th>
                </tr>
              </thead>

              <tbody>
                {leadStats.leadsByProject.length > 0 ? (
                  leadStats.leadsByProject.map((row: any) => (
                    <tr key={row.project}>
                      <td className="border-t px-4 py-3 font-medium" style={{ borderColor: "var(--card-border)" }}>
                        {row.project}
                      </td>
                      <td className="border-t px-4 py-3 font-semibold" style={{ borderColor: "var(--card-border)" }}>
                        {row.total}
                      </td>
                      <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                        {row.new}
                      </td>
                      <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                        {row.contacted}
                      </td>
                      <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                        {row.inConversation}
                      </td>
                      <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                        {row.closed}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="border-t px-4 py-5 text-sm" style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}>
                      Todavía no hay leads por proyecto.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="mt-8 rounded-2xl border p-5"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-lg font-semibold">Listado de leads</h2>

          <div className="mt-5">
            <AdminLeadsTable leads={leadsSerialized} />
          </div>
        </div>
      </div>
    </main>
  );
}