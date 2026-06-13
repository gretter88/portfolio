"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteEventButton from "@/components/admin/DeleteEventButton";

const PAGE_SIZE = 20;

const COMMERCIAL_TYPES = [
  "pdf_download",
  "request_demo",
  "request_license",
  "request_partnership",
  "request_project_info",
];

type AdminEvent = {
  _id?: string;
  type?: string | null;
  path?: string | null;
  lang?: string | null;
  project?: string | null;
  visitorId?: string | null;
  ip?: string | null;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  createdAt?: string | Date | null;
};

type Props = {
  events: AdminEvent[];
};

function getProjectLabel(event: AdminEvent) {
  const project = (event.project || "").toLowerCase();
  const path = (event.path || "").toLowerCase();

  if (project === "radar" || project === "radarsocial" || path.includes("/radar")) {
    return "RadarSocial";
  }

  if (project === "nutrimvp" || path.includes("/nutrimvp")) {
    return "NutriMVP";
  }

  if (project === "sg-copilot-crm" || path.includes("/sg-copilot-crm")) {
    return "SG Copilot CRM";
  }

  if (project === "playduel" || path.includes("/playduel")) {
    return "PlayDuel";
  }

  if (
    project === "museo-canario-kiosco" ||
    project === "kiosco" ||
    path.includes("/museo-canario-kiosco") ||
    path.includes("/kiosco")
  ) {
    return "Museo Canario Kiosco";
  }

  if (
    project === "museo-canario-web" ||
    project === "museo" ||
    path.includes("/museo-canario-web") ||
    path.includes("/museo")
  ) {
    return "Museo Canario Web";
  }

  if (project === "marketplace" || path.includes("/marketplace")) {
    return "Marketplace";
  }

  if (project === "sg-saas-starter" || path.includes("/sg-saas-starter")) {
    return "SG SaaS Starter";
  }

  if (project === "intranet-wordpress" || project === "intranet" || path.includes("/intranet")) {
    return "Intranet WordPress";
  }

  return "-";
}


function getEventLabel(type?: string | null) {
  switch (type) {
    case "pageview":
      return "Pageview";
    case "click":
      return "Click";
    case "pdf_download":
      return "PDF";
    case "request_demo":
      return "Demo";
    case "request_license":
      return "Licencia";
    case "request_partnership":
      return "Partnership";
    case "request_project_info":
      return "Info";
    default:
      return type || "-";
  }
}

function getEventBadgeStyle(type?: string | null): React.CSSProperties {
  switch (type) {
    case "pageview":
      return {
        borderColor: "rgba(148,163,184,0.35)",
        background: "rgba(148,163,184,0.10)",
        color: "var(--muted)",
      };
    case "click":
      return {
        borderColor: "rgba(59,130,246,0.35)",
        background: "rgba(59,130,246,0.10)",
        color: "#93c5fd",
      };
    case "pdf_download":
      return {
        borderColor: "rgba(245,158,11,0.35)",
        background: "rgba(245,158,11,0.10)",
        color: "#fbbf24",
      };
    case "request_demo":
      return {
        borderColor: "rgba(34,197,94,0.35)",
        background: "rgba(34,197,94,0.10)",
        color: "#4ade80",
      };
    case "request_license":
      return {
        borderColor: "rgba(168,85,247,0.35)",
        background: "rgba(168,85,247,0.10)",
        color: "#c084fc",
      };
    case "request_partnership":
      return {
        borderColor: "rgba(59,130,246,0.35)",
        background: "rgba(59,130,246,0.10)",
        color: "#93c5fd",
      };
    case "request_project_info":
      return {
        borderColor: "rgba(148,163,184,0.35)",
        background: "rgba(148,163,184,0.10)",
        color: "var(--muted)",
      };
    default:
      return {
        borderColor: "var(--card-border)",
        background: "var(--background)",
        color: "var(--muted)",
      };
  }
}

function getLocation(event: AdminEvent) {
  return [event.country, event.region, event.city].filter(Boolean).join(" · ") || "-";
}

function formatMontevideoDate(value?: string | Date | null) {
  if (!value) return "-";

  const date = new Date(value);

  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Montevideo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value || "00";

  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

function formatTimeAgo(value: string | Date | null | undefined, now: number) {
  if (!value) return "-";

  const date = new Date(value);
  const diffMs = now - date.getTime();

  if (diffMs < 0) return "-";

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diffMs < minute) return "hace unos segundos";

  if (diffMs < hour) {
    const mins = Math.floor(diffMs / minute);
    return mins === 1 ? "hace 1 min" : `hace ${mins} min`;
  }

  if (diffMs < day) {
    const hours = Math.floor(diffMs / hour);
    return hours === 1 ? "hace 1 hora" : `hace ${hours} horas`;
  }

  const days = Math.floor(diffMs / day);
  return days === 1 ? "hace 1 día" : `hace ${days} días`;
}

export default function AdminEventsTable({ events }: Props) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectOptions = [
  "RadarSocial",
  "NutriMVP",
  "SG Copilot CRM",
  "PlayDuel",
  "Museo Canario Kiosco",
  "Museo Canario Web",
  "Marketplace",
  "SG SaaS Starter",
  "Intranet WordPress",
  "-",
];

  const filteredEvents = useMemo(() => {
    const currentNow = Date.now();

   const filtered = events.filter((event) => {
  const eventType = event.type || "";
  const project = getProjectLabel(event);
  const createdAt = event.createdAt ? new Date(event.createdAt).getTime() : 0;

  if (typeFilter === "commercial" && !COMMERCIAL_TYPES.includes(eventType)) {
    return false;
  }

  if (typeFilter !== "all" && typeFilter !== "commercial" && eventType !== typeFilter) {
    return false;
  }

  if (projectFilter !== "all" && project !== projectFilter) return false;

  if (dateFilter === "today") {
    const oneDay = 24 * 60 * 60 * 1000;
    if (!createdAt || currentNow - createdAt > oneDay) return false;
  }

  if (dateFilter === "7d") {
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (!createdAt || currentNow - createdAt > sevenDays) return false;
  }

  if (dateFilter === "30d") {
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    if (!createdAt || currentNow - createdAt > thirtyDays) return false;
  }

  return true;
});

return filtered.sort((a, b) => {
  const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
  const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;

  return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
});
  }, [events, typeFilter, projectFilter, dateFilter, sortOrder]);

  useEffect(() => {
    setPage(1);
    setSelectedIds([]);
  }, [typeFilter, projectFilter, dateFilter, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / PAGE_SIZE));

  const paginatedEvents = filteredEvents.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const visibleIds = paginatedEvents.map((event) => event._id || "").filter(Boolean);

  const allVisibleSelected =
    visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));

  function toggleOne(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function toggleAllVisible() {
    if (allVisibleSelected) {
      setSelectedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
      return;
    }

    setSelectedIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
  }

  async function handleDeleteSelected() {
    if (selectedIds.length === 0) return;

    const confirmed = window.confirm(
      `¿Eliminar ${selectedIds.length} evento(s) seleccionado(s)?`
    );

    if (!confirmed) return;

    setBulkDeleting(true);

    try {
      const res = await fetch("/api/admin/events/bulk-delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedIds }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudieron eliminar los eventos seleccionados.");
        setBulkDeleting(false);
        return;
      }

      setSelectedIds([]);
      router.refresh();
    } catch {
      alert("Error al eliminar eventos seleccionados.");
    } finally {
      setBulkDeleting(false);
    }
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 30000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{
            background: "var(--background)",
            borderColor: "var(--card-border)",
          }}
        >
          <option value="all">Todos los tipos</option>
          <option value="commercial">Comerciales</option>
          <option value="pageview">Pageview</option>
          <option value="click">Click</option>
          <option value="pdf_download">PDF</option>
          <option value="request_demo">Demo</option>
          <option value="request_license">Licencia</option>
          <option value="request_partnership">Partnership</option>
          <option value="request_project_info">Info</option>
        </select>

        <select
          value={projectFilter}
          onChange={(e) => setProjectFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{
            background: "var(--background)",
            borderColor: "var(--card-border)",
          }}
        >
          <option value="all">Todos los proyectos</option>
          {projectOptions.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>

        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{
            background: "var(--background)",
            borderColor: "var(--card-border)",
          }}
        >
          <option value="all">Todas las fechas</option>
          <option value="today">Hoy</option>
          <option value="7d">Últimos 7 días</option>
          <option value="30d">Últimos 30 días</option>
        </select>
<select
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
  className="rounded-xl border px-3 py-2 text-sm"
  style={{
    background: "var(--background)",
    borderColor: "var(--card-border)",
  }}
>
  <option value="newest">Más recientes primero</option>
  <option value="oldest">Más viejos primero</option>
</select>
        <button
          type="button"
          onClick={handleDeleteSelected}
          disabled={bulkDeleting || selectedIds.length === 0}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{
            borderColor: "rgba(239,68,68,0.35)",
            background: "rgba(239,68,68,0.08)",
            opacity: bulkDeleting || selectedIds.length === 0 ? 0.6 : 1,
          }}
        >
          {bulkDeleting
            ? "Eliminando..."
            : `Eliminar seleccionados (${selectedIds.length})`}
        </button>
      </div>

      <div className="mb-4 text-sm" style={{ color: "var(--muted)" }}>
        {filteredEvents.length} evento(s) visible(s)
      </div>

      <div className="space-y-3 md:hidden">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => {
            const eventId = event._id || "";

            return (
              <div
                key={eventId || `${event.path}-${String(event.createdAt)}`}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {eventId ? (
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(eventId)}
                        onChange={() => toggleOne(eventId)}
                      />
                    ) : null}

                    <span
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                      style={getEventBadgeStyle(event.type)}
                    >
                      {getEventLabel(event.type)}
                    </span>
                  </div>

                  {eventId ? <DeleteEventButton eventId={eventId} /> : null}
                </div>

                <div className="mt-3 font-semibold">{getProjectLabel(event)}</div>

                <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {event.path || "-"}
                </div>

                <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {getLocation(event)}
                </div>

                <div className="mt-1 text-xs" style={{ color: "var(--muted-2)" }}>
                  IP: {event.ip || "-"}
                </div>

                <div className="mt-1 text-xs" style={{ color: "var(--muted-2)" }}>
                  Visitor:{" "}
                  {event.visitorId ? String(event.visitorId).slice(0, 8) : "-"}
                </div>

                <div
                  className="mt-2 text-xs"
                  style={{ color: "var(--muted-2)" }}
                  suppressHydrationWarning
                >
                  {mounted ? formatMontevideoDate(event.createdAt) : "-"} ·{" "}
                  {formatTimeAgo(event.createdAt, now)}
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="rounded-2xl border p-4 text-sm"
            style={{
              borderColor: "var(--card-border)",
              color: "var(--muted)",
            }}
          >
            No hay eventos para mostrar.
          </div>
        )}
      </div>

      <div
        className="hidden overflow-x-auto rounded-2xl border md:block"
        style={{ borderColor: "var(--card-border)" }}
      >
        <table className="w-full min-w-[1100px] border-separate border-spacing-0 text-sm">
          <thead>
            <tr
              style={{
                textAlign: "left",
                color: "var(--muted-2)",
                background: "var(--background)",
              }}
            >
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={toggleAllVisible}
                />
              </th>
              <th className="px-4 py-3">Evento</th>
              <th className="px-4 py-3">Proyecto</th>
              <th className="px-4 py-3">Path</th>
              <th className="px-4 py-3">Ubicación</th>
              <th className="px-4 py-3">IP</th>
              <th className="px-4 py-3">Visitor</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Hace</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>

          <tbody>
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map((event) => {
                const eventId = event._id || "";

                return (
                  <tr
                    key={eventId || `${event.path}-${String(event.createdAt)}`}
                    style={{
                      borderTop: "1px solid var(--card-border)",
                    }}
                  >
                    <td className="px-4 py-3">
                      {eventId ? (
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(eventId)}
                          onChange={() => toggleOne(eventId)}
                        />
                      ) : null}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                        style={getEventBadgeStyle(event.type)}
                      >
                        {getEventLabel(event.type)}
                      </span>
                    </td>

                    <td className="px-4 py-3 font-medium">{getProjectLabel(event)}</td>

                    <td className="max-w-[260px] truncate px-4 py-3" title={event.path || ""}>
                      {event.path || "-"}
                    </td>

                    <td
                      className="max-w-[180px] truncate px-4 py-3"
                      title={getLocation(event)}
                    >
                      {getLocation(event)}
                    </td>

                    <td className="max-w-[130px] truncate px-4 py-3" title={event.ip || ""}>
                      {event.ip || "-"}
                    </td>

                    <td
                      className="max-w-[110px] truncate px-4 py-3"
                      title={event.visitorId || ""}
                    >
                      {event.visitorId ? String(event.visitorId).slice(0, 8) : "-"}
                    </td>

                    <td className="whitespace-nowrap px-4 py-3" suppressHydrationWarning>
                      {mounted ? formatMontevideoDate(event.createdAt) : "-"}
                    </td>

                    <td className="whitespace-nowrap px-4 py-3">
                      {formatTimeAgo(event.createdAt, now)}
                    </td>

                    <td className="px-4 py-3">
                      {eventId ? <DeleteEventButton eventId={eventId} /> : null}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  className="px-4 py-5 text-sm"
                  colSpan={10}
                  style={{ color: "var(--muted)" }}
                >
                  No hay eventos para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{
            borderColor: "var(--card-border)",
            background: "transparent",
            opacity: page === 1 ? 0.5 : 1,
          }}
        >
          ← Anterior
        </button>

        <span className="text-sm" style={{ color: "var(--muted)" }}>
          Página {page} de {totalPages}
        </span>

        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{
            borderColor: "var(--card-border)",
            background: "transparent",
            opacity: page === totalPages ? 0.5 : 1,
          }}
        >
          Siguiente →
        </button>
      </div>
    </>
  );
}