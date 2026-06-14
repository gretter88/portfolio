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
import { getLatestLeads, getLeadStats } from "@/lib/leads";
import AdminLeadsTable from "@/components/admin/AdminLeadsTable";
import Link from "next/link";
export default async function AdminPage() {
  const ok = await isAdminAuthenticated();

  if (!ok) {
    redirect("/admin/login");
  }

  const stats = await getAnalyticsStats();
  
  const leads = await getLatestLeads(50);
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
    ip: event.ip || null,
    country: event.country || null,
    region: event.region || null,
    city: event.city || null,
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


function getAnalyticsLabel(path?: string | null) {
  const value = String(path || "");

  const labels: Record<string, string> = {
    "/es": "Home Español",
    "/en": "Home Inglés",
    "/go/cv": "Descargar CV",
    "/go/linkedin": "LinkedIn",
    "/go/github": "GitHub",
    "/nav/projects": "Menú · Proyectos",
    "/nav/contact": "Menú · Contacto",
    "/nav/experience": "Menú · Experiencia",
    "/modal/screenshot-next": "Screenshot · Siguiente",
    "/modal/screenshot-prev": "Screenshot · Anterior",
    "/modal/screenshot-dot": "Screenshot · Punto",
  };

  if (labels[value]) return labels[value];

  if (value.startsWith("/go/request-access/")) {
    const project = value.replace("/go/request-access/", "").split("?")[0];
    return `Solicitar acceso · ${project}`;
  }

  if (value.startsWith("/go/open-modal/")) {
    const project = value.replace("/go/open-modal/", "").split("?")[0];
    return `Abrir modal · ${project}`;
  }

  if (value.startsWith("/go/open-video/")) {
    const project = value.replace("/go/open-video/", "").split("?")[0];
    return `Abrir video · ${project}`;
  }

  return value || "-";
}

function getProjectFriendlyName(project?: string | null) {
  const value = String(project || "").toLowerCase();

  const labels: Record<string, string> = {
    radar: "RadarSocial",
    radarsocial: "RadarSocial",
    nutrimvp: "NutriMVP",
    "sg-copilot-crm": "SG Copilot CRM",
    playduel: "PlayDuel",
    kiosco: "Museo Canario Kiosco",
    "museo-canario-kiosco": "Museo Canario Kiosco",
    museo: "Museo Canario Web",
    "museo-canario-web": "Museo Canario Web",
    marketplace: "Marketplace",
    "sg-saas-starter": "SG SaaS Starter",
    intranet: "Intranet WordPress",
    "intranet-wordpress": "Intranet WordPress",
    commercial: "General comercial",
  };

  return labels[value] || project || "-";
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
		  <Link
  href="/admin/leads"
  className="rounded-xl border px-4 py-2 text-sm"
  style={{
    borderColor: "var(--card-border)",
    background: "transparent",
  }}
>
  Ver leads
</Link>
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
		
		<div className="mt-8 grid gap-4 lg:grid-cols-2">
  <div
    className="rounded-2xl border p-5"
    style={{
      background: "var(--card)",
      borderColor: "var(--card-border)",
    }}
  >
    <h2 className="text-lg font-semibold">Top páginas visitadas</h2>
    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
      Páginas con más pageviews.
    </p>

    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ color: "var(--muted-2)", textAlign: "left" }}>
            <th className="border-b px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
              Página
            </th>
            <th className="border-b px-3 py-2 text-right" style={{ borderColor: "var(--card-border)" }}>
              Vistas
            </th>
          </tr>
        </thead>

        <tbody>
          {stats.topPages?.length > 0 ? (
            stats.topPages.map((row: any) => (
              <tr key={row._id || "unknown"}>
                <td
                  className="border-b px-3 py-2 max-w-[320px] truncate"
                  style={{ borderColor: "var(--card-border)" }}
                  title={String(row._id || "")}
                >
                  {getAnalyticsLabel(row._id)}
                </td>
                <td
                  className="border-b px-3 py-2 text-right font-semibold"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  {row.count || 0}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="px-3 py-4 text-sm" style={{ color: "var(--muted)" }}>
                Todavía no hay pageviews.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>

  <div
    className="rounded-2xl border p-5"
    style={{
      background: "var(--card)",
      borderColor: "var(--card-border)",
    }}
  >
    <h2 className="text-lg font-semibold">Top clicks</h2>
    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
      Enlaces o acciones con más clicks.
    </p>

    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ color: "var(--muted-2)", textAlign: "left" }}>
            <th className="border-b px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
              Acción
            </th>
            <th className="border-b px-3 py-2 text-right" style={{ borderColor: "var(--card-border)" }}>
              Clicks
            </th>
          </tr>
        </thead>

        <tbody>
          {stats.topClicks?.length > 0 ? (
            stats.topClicks.map((row: any) => (
              <tr key={row._id || "unknown"}>
                <td
                  className="border-b px-3 py-2 max-w-[320px] truncate"
                  style={{ borderColor: "var(--card-border)" }}
                  title={String(row._id || "")}
                >
                  {String(row._id || "-")}
                </td>
                <td
                  className="border-b px-3 py-2 text-right font-semibold"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  {row.count || 0}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="px-3 py-4 text-sm" style={{ color: "var(--muted)" }}>
                Todavía no hay clicks.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>
		
		
		<div
  className="mt-8 rounded-2xl border p-5"
  style={{
    background: "var(--card)",
    borderColor: "var(--card-border)",
  }}
>
  <h2 className="text-lg font-semibold">Top proyectos por interés comercial</h2>
  <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
    Acciones comerciales agrupadas por proyecto.
  </p>

  <div className="mt-5 overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr style={{ color: "var(--muted-2)", textAlign: "left" }}>
          <th
            className="border-b px-3 py-2"
            style={{ borderColor: "var(--card-border)" }}
          >
            Proyecto
          </th>
          <th
            className="border-b px-3 py-2 text-right"
            style={{ borderColor: "var(--card-border)" }}
          >
            Acciones
          </th>
        </tr>
      </thead>

      <tbody>
        {stats.topCommercialProjects?.length > 0 ? (
          stats.topCommercialProjects.map((row: any) => (
            <tr key={row._id || "unknown"}>
              <td
                className="border-b px-3 py-2"
                style={{ borderColor: "var(--card-border)" }}
                title={String(row._id || "")}
              >
                {getProjectFriendlyName(row._id)}
              </td>
              <td
                className="border-b px-3 py-2 text-right font-semibold"
                style={{ borderColor: "var(--card-border)" }}
              >
                {row.count || 0}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={2}
              className="px-3 py-4 text-sm"
              style={{ color: "var(--muted)" }}
            >
              Todavía no hay acciones comerciales por proyecto.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
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
<div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--card-border)" }}>
  <table className="w-full min-w-[760px] text-sm">
    <thead>
      <tr style={{ color: "var(--muted-2)", textAlign: "left" }}>
        <th className="px-4 py-3">Proyecto</th>
        <th className="px-4 py-3">PDFs</th>
        <th className="px-4 py-3">Demo</th>
        <th className="px-4 py-3">Licencia</th>
        <th className="px-4 py-3">Partnership</th>
        <th className="px-4 py-3">Info</th>
        <th className="px-4 py-3">Total</th>
      </tr>
    </thead>

    <tbody>
      {stats.commercialSummaryByProject.length > 0 ? (
        stats.commercialSummaryByProject.map((row: any) => (
          <tr key={row._id || "unknown"}>
            <td className="border-t px-4 py-3 font-medium" style={{ borderColor: "var(--card-border)" }}>
              {row._id || "-"}
            </td>
            <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
              {row.pdfDownloads || 0}
            </td>
            <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
              {row.demoRequests || 0}
            </td>
            <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
              {row.licenseRequests || 0}
            </td>
            <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
              {row.partnershipRequests || 0}
            </td>
            <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
              {row.infoRequests || 0}
            </td>
            <td className="border-t px-4 py-3 font-semibold" style={{ borderColor: "var(--card-border)" }}>
              {row.total || 0}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="border-t px-4 py-5 text-sm" style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}>
            Todavía no hay resumen comercial.
          </td>
        </tr>
      )}
    </tbody>
  </table>
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
	{/* 
	<div
  className="mt-8 rounded-2xl border p-5"
  style={{
    background: "var(--card)",
    borderColor: "var(--card-border)",
  }}
>
  <h2 className="text-lg font-semibold">Leads</h2>
  <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
    Solicitudes recibidas desde formularios comerciales.
  </p>
<div className="mt-4 flex justify-end">
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
</div>

<div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
  <AdminStatCard label="Total Leads" value={leadStats.totalLeads} hint="Todos" />
  <AdminStatCard label="Nuevos" value={leadStats.newLeads} hint="new" />
  <AdminStatCard label="Contactados" value={leadStats.contactedLeads} hint="contacted" />
  <AdminStatCard label="En conversación" value={leadStats.inConversationLeads} hint="in_conversation" />
  <AdminStatCard label="Cerrados" value={leadStats.closedLeads} hint="closed" />
</div>
<div
  className="mt-6 overflow-x-auto rounded-2xl border"
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
  <div className="mt-5">
    <AdminLeadsTable leads={leadsSerialized} />
  </div>
</div>
	*/}
		<div
  className="mt-8 rounded-2xl border p-5"
  style={{
    background: "var(--card)",
    borderColor: "var(--card-border)",
  }}
>
<div className="mb-4 flex justify-end">
  <a
    href="/api/admin/commercial-events/export"
    className="rounded-xl border px-4 py-2 text-sm font-medium"
    style={{
      borderColor: "rgba(34,197,94,0.35)",
      background: "rgba(34,197,94,0.10)",
    }}
  >
    Exportar eventos comerciales CSV
  </a>
</div>
	<div className="mt-10">
  <h3 className="text-base font-semibold">Últimos eventos comerciales</h3>



  <div className="mt-4">
    <AdminCommercialEventsTable events={latestCommercialEventsSerialized} />
  </div>
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
		<div className="mb-4 flex justify-end">
  <a
    href="/api/admin/events/export"
    className="rounded-xl border px-4 py-2 text-sm font-medium"
    style={{
      borderColor: "rgba(59,130,246,0.35)",
      background: "rgba(59,130,246,0.10)",
    }}
  >
    Exportar todos los eventos CSV
  </a>
</div>
          <h2 className="text-lg font-semibold">Últimos eventos</h2>

         <div className="mt-4">
 <AdminEventsTable events={latestEventsSerialized} />


</div>

        </div>
      </div>
    </main>
  );
}

