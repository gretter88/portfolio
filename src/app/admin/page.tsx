import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { getAnalyticsStats } from "@/lib/analytics";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    redirect("/admin/login");
  }

  const stats = await getAnalyticsStats();

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Portfolio Admin</h1>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Dashboard de analytics y conversiones.
            </p>
          </div>

          <AdminLogoutButton />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <AdminStatCard
            label="Visitors"
            value={stats.visitors}
            hint="Visitantes únicos"
          />
          <AdminStatCard
            label="Page Views"
            value={stats.pageViews}
            hint="Páginas vistas"
          />
          <AdminStatCard
            label="ES Views"
            value={stats.esPageViews}
            hint="/es"
          />
          <AdminStatCard
            label="EN Views"
            value={stats.enPageViews}
            hint="/en"
          />

          <AdminStatCard
            label="CV Clicks"
            value={stats.cvClicks}
            hint="/go/cv"
          />
          <AdminStatCard
            label="LinkedIn Clicks"
            value={stats.linkedinClicks}
            hint="/go/linkedin"
          />
          <AdminStatCard
            label="GitHub Clicks"
            value={stats.githubClicks}
            hint="/go/github"
          />
          <AdminStatCard
            label="Request Access"
            value={stats.requestAccessClicks}
            hint="/go/request-access/*"
          />

          <AdminStatCard
            label="Museo Demo"
            value={stats.museoDemoClicks}
            hint="/go/demo/museo"
          />
          <AdminStatCard
            label="Radar Demo"
            value={stats.radarDemoClicks}
            hint="/go/demo/radar"
          />
          <AdminStatCard
            label="Open Video Intranet"
            value={stats.openVideoIntranet}
            hint="/go/open-video/intranet"
          />
          <AdminStatCard
            label="Total Events"
            value={stats.totalEvents}
            hint="Todos los eventos guardados"
          />
        </div>

        <div
          className="mt-8 rounded-2xl border p-5"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-lg font-semibold">Últimos eventos</h2>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    textAlign: "left",
                    color: "var(--muted-2)",
                    borderBottom: "1px solid var(--card-border)",
                  }}
                >
                  <th className="py-2">Tipo</th>
                  <th className="py-2">Path</th>
                  <th className="py-2">Lang</th>
                  <th className="py-2">Proyecto</th>
                  <th className="py-2">Visitor ID</th>
                  <th className="py-2">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {stats.latestEvents.map((event: any) => (
                  <tr
                    key={event._id?.toString()}
                    style={{
                      borderBottom: "1px solid var(--card-border)",
                    }}
                  >
                    <td className="py-2">{event.type}</td>
                    <td className="py-2">{event.path}</td>
                    <td className="py-2">{event.lang || "-"}</td>
                    <td className="py-2">{event.project || "-"}</td>
                    <td className="py-2">
                      {event.visitorId ? String(event.visitorId).slice(0, 8) : "-"}
                    </td>
                    <td className="py-2">
                      {event.createdAt
                        ? new Date(event.createdAt).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

