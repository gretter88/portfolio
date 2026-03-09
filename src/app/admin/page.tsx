import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { getAnalyticsStats } from "@/lib/analytics";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import DeleteEventButton from "@/components/admin/DeleteEventButton";
import AdminRefreshButton from "@/components/admin/AdminRefreshButton";
import DeleteOldEventsButton from "@/components/admin/DeleteOldEventsButton";
import AdminEventsTable from "@/components/admin/AdminEventsTable";

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
  createdAt: event.createdAt
    ? new Date(event.createdAt).toISOString()
    : null,
}));


  
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
          className="mt-8 rounded-2xl border p-5"
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

