import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { getAnalyticsStats } from "@/lib/analytics";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import DeleteEventButton from "@/components/admin/DeleteEventButton";
import AdminRefreshButton from "@/components/admin/AdminRefreshButton";
import DeleteOldEventsButton from "@/components/admin/DeleteOldEventsButton";
import AdminEventsTable from "@/components/admin/AdminEventsTable";
import AdminCommercialEventsTable from "@/components/admin/AdminCommercialEventsTable";

export default async function AdminPage() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    redirect("/admin/login");
  }

  const stats = await getAnalyticsStats();
  
const latestEventsSerialized = stats.latestEvents.map((event: any) => ({
  _id: event._id?.toString() || "",
  type: event.type || null,
  path: event.path || null,
  lang: event.lang || null,
  project: event.project || null,
  visitorId: event.visitorId || null,
  referrer: event.referrer || null,
  userAgent: event.userAgent || null,
  ip: event.ip || null,
  country: event.country || null,
  region: event.region || null,
  city: event.city || null,
  createdAt: event.createdAt ? new Date(event.createdAt).toISOString() : null,
}));

  const latestCommercialEventsSerialized = stats.latestCommercialEvents.map(
  (event: any) => ({
    _id: event._id?.toString() || "",
    type: event.type || null,
    path: event.path || null,
    lang: event.lang || null,
    project: event.project || null,
    visitorId: event.visitorId || null,
	country: event.country || null,
region: event.region || null,
city: event.city || null,
ip: event.ip || null,
    createdAt: event.createdAt ? new Date(event.createdAt).toISOString() : null,
  })
);

  function getProjectLabel(event: {
  project?: string | null;
  path?: string | null;
}) {
  const project = (event.project || "").toLowerCase();
  const path = (event.path || "").toLowerCase();

  if (project === "kiosco" || path.includes("/kiosco")) return "Kiosco";
  if (project === "intranet" || path.includes("/intranet")) return "Intranet";
  if (project === "museo" || path.includes("/museo")) return "Museo";
  if (project === "radar" || path.includes("/radar")) return "RadarSocial";

  return "-";
}






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

          <div className="flex flex-wrap items-center gap-3">
  <AdminRefreshButton />
  <DeleteOldEventsButton days={30} />
  <AdminLogoutButton />
</div>

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
  label="Nav Projects"
  value={stats.navProjectsClicks}
  hint="/nav/projects"
/>
<AdminStatCard
  label="Nav Contact"
  value={stats.navContactClicks}
  hint="/nav/contact"
/>
<AdminStatCard
  label="Nav Experience"
  value={stats.navExperienceClicks}
  hint="/nav/experience"
/>
<AdminStatCard
  label="Nav LinkedIn"
  value={stats.navLinkedinClicks}
  hint="/nav/linkedin"
/>
<AdminStatCard
  label="Nav GitHub"
  value={stats.navGithubClicks}
  hint="/nav/github"
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
  label="Screenshot Prev"
  value={stats.screenshotPrevClicks}
  hint="/modal/screenshot-prev"
/>
<AdminStatCard
  label="Screenshot Next"
  value={stats.screenshotNextClicks}
  hint="/modal/screenshot-next"
/>
<AdminStatCard
  label="Screenshot Dot"
  value={stats.screenshotDotClicks}
  hint="/modal/screenshot-dot"
/>

          <AdminStatCard
            label="Total Events"
            value={stats.totalEvents}
            hint="Todos los eventos guardados"
          />
        </div>
<div
  className="mt-10 rounded-2xl border p-5"
  style={{
    background: "var(--card)",
    borderColor: "var(--card-border)",
  }}
>
  <h2 className="text-lg font-semibold">Commercial Analytics</h2>
  <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
    Eventos comerciales de PDFs, demos, licencias y partnerships.
  </p>

  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
    <AdminStatCard label="PDF Downloads" value={stats.pdfDownloads} hint="pdf_download" />
    <AdminStatCard label="Demo Requests" value={stats.requestDemo} hint="request_demo" />
    <AdminStatCard label="License Requests" value={stats.requestLicense} hint="request_license" />
    <AdminStatCard label="Partnership" value={stats.requestPartnership} hint="request_partnership" />
    <AdminStatCard label="Project Info" value={stats.requestProjectInfo} hint="request_project_info" />
  </div>

  <div className="mt-6 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr style={{ color: "var(--muted-2)" }}>
          <th className="border-b px-3 py-2 text-left" style={{ borderColor: "var(--card-border)" }}>
            Project
          </th>
          <th className="border-b px-3 py-2 text-left" style={{ borderColor: "var(--card-border)" }}>
            Event
          </th>
          <th className="border-b px-3 py-2 text-left" style={{ borderColor: "var(--card-border)" }}>
            Count
          </th>
        </tr>
      </thead>

      <tbody>
        {stats.commercialByProject.length > 0 ? (
          stats.commercialByProject.map((row: any) => (
            <tr key={`${row._id?.project}-${row._id?.type}`}>
              <td className="border-b px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
                {row._id?.project || "-"}
              </td>
              <td className="border-b px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
                {row._id?.type || "-"}
              </td>
              <td className="border-b px-3 py-2 font-semibold" style={{ borderColor: "var(--card-border)" }}>
                {row.count || 0}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-3 py-4 text-sm" style={{ color: "var(--muted)" }} colSpan={3}>
              Todavía no hay eventos comerciales.
            </td>
          </tr>
        )}
      </tbody>
    </table>
	<div className="mt-10">
  <h3 className="text-base font-semibold">Últimos eventos comerciales</h3>

  <div className="mt-4">
    <AdminCommercialEventsTable events={latestCommercialEventsSerialized} />
  </div>
</div>
  </div>
</div>


        <div
          className="mt-10 rounded-2xl border p-5"
          style={{
            background: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <h2 className="text-lg font-semibold">Últimos eventos</h2>

         <div className="mt-4">
 <AdminEventsTable events={latestEventsSerialized} />


</div>

        </div>
      </div>
    </main>
  );
}

