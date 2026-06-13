"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteEventButton from "@/components/admin/DeleteEventButton";

const PAGE_SIZE = 10;

type CommercialEvent = {
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
  events: CommercialEvent[];
};

function formatMontevideoDate(value?: string | Date | null) {
  if (!value) return "-";

  return new Intl.DateTimeFormat("es-UY", {
    timeZone: "America/Montevideo",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date(value));
}

function getEventLabel(type?: string | null) {
  switch (type) {
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

function getLocation(event: CommercialEvent) {
  return [event.country, event.region, event.city].filter(Boolean).join(" · ") || "-";
}


function getProjectLabel(projectValue?: string | null) {
  const project = (projectValue || "").toLowerCase();

  if (project === "radar" || project === "radarsocial") return "RadarSocial";
  if (project === "nutrimvp") return "NutriMVP";
  if (project === "sg-copilot-crm") return "SG Copilot CRM";
  if (project === "playduel") return "PlayDuel";
  if (project === "museo-canario-kiosco" || project === "kiosco") {
    return "Museo Canario Kiosco";
  }
  if (project === "museo-canario-web" || project === "museo") {
    return "Museo Canario Web";
  }
  if (project === "marketplace") return "Marketplace";
  if (project === "sg-saas-starter") return "SG SaaS Starter";
  if (project === "intranet-wordpress" || project === "intranet") {
    return "Intranet WordPress";
  }

  return projectValue || "-";
}
export default function AdminCommercialEventsTable({ events }: Props) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [page, setPage] = useState(1);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkDeleting, setBulkDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectOptions = useMemo(() => {
    return Array.from(
     new Set(events.map((e) => getProjectLabel(e.project)).filter(Boolean))
    ).sort();
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (typeFilter !== "all" && event.type !== typeFilter) return false;
     if (projectFilter !== "all" && getProjectLabel(event.project) !== projectFilter) {
        return false;
      }

      return true;
    });
  }, [events, typeFilter, projectFilter]);

  useEffect(() => {
    setPage(1);
    setSelectedIds([]);
  }, [typeFilter, projectFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / PAGE_SIZE));

  const paginatedEvents = filteredEvents.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const visibleIds = paginatedEvents
    .map((event) => event._id || "")
    .filter(Boolean);

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
      `¿Eliminar ${selectedIds.length} evento(s) comercial(es) seleccionado(s)?`
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

        <button
          type="button"
          onClick={() => {
            setTypeFilter("all");
            setProjectFilter("all");
          }}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{
            borderColor: "var(--card-border)",
            background: "transparent",
          }}
        >
          Limpiar filtros
        </button>

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
        {filteredEvents.length} evento(s) comercial(es) visible(s)
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => {
            const eventId = event._id || "";

            return (
              <div
                key={eventId || `${event.type}-${event.path}-${event.createdAt}`}
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

                <div className="mt-3 font-semibold">{getProjectLabel(event.project)}</div>

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
                  {mounted ? formatMontevideoDate(event.createdAt) : "-"}
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
            Todavía no hay eventos comerciales.
          </div>
        )}
      </div>

      {/* Desktop table */}
      <div
        className="hidden overflow-x-auto rounded-2xl border md:block"
        style={{ borderColor: "var(--card-border)" }}
      >
        <table className="w-full min-w-[900px] border-separate border-spacing-0 text-sm">
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
              <th className="px-4 py-3">Ubicación</th>
              <th className="px-4 py-3">IP</th>
              <th className="px-4 py-3">Visitor</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>

          <tbody>
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map((event) => {
                const eventId = event._id || "";

                return (
                  <tr
                    key={eventId || `${event.type}-${event.path}-${event.createdAt}`}
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

                    <td className="px-4 py-3 font-medium">{getProjectLabel(event.project)}</td>

                    <td
                      className="max-w-[180px] truncate px-4 py-3"
                      title={getLocation(event)}
                    >
                      {getLocation(event)}
                    </td>

                    <td
                      className="max-w-[130px] truncate px-4 py-3"
                      title={event.ip || ""}
                    >
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
                  colSpan={8}
                  style={{ color: "var(--muted)" }}
                >
                  Todavía no hay eventos comerciales.
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