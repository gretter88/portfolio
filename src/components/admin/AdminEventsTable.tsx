"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteEventButton from "@/components/admin/DeleteEventButton";

type AdminEvent = {
  _id?: string;
  type?: string | null;
  path?: string | null;
  lang?: string | null;
  project?: string | null;
  visitorId?: string | null;
  createdAt?: string | Date | null;
};

type Props = {
  events: AdminEvent[];
};

function getProjectLabel(event: AdminEvent) {
  const project = (event.project || "").toLowerCase();
  const path = (event.path || "").toLowerCase();

  if (project === "kiosco" || path.includes("/kiosco")) return "Kiosco";
  if (project === "intranet" || path.includes("/intranet")) return "Intranet";
  if (project === "museo" || path.includes("/museo")) return "Museo";
  if (project === "radar" || path.includes("/radar")) return "RadarSocial";

  return "-";
}

export default function AdminEventsTable({ events }: Props) {
  const router = useRouter();

  const [typeFilter, setTypeFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkDeleting, setBulkDeleting] = useState(false);

  const filteredEvents = useMemo(() => {
    const now = Date.now();

    return events.filter((event) => {
      const eventType = event.type || "";
      const project = getProjectLabel(event);
      const createdAt = event.createdAt ? new Date(event.createdAt).getTime() : 0;

      if (typeFilter !== "all" && eventType !== typeFilter) return false;
      if (projectFilter !== "all" && project !== projectFilter) return false;

      if (dateFilter === "today") {
        const oneDay = 24 * 60 * 60 * 1000;
        if (!createdAt || now - createdAt > oneDay) return false;
      }

      if (dateFilter === "7d") {
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        if (!createdAt || now - createdAt > sevenDays) return false;
      }

      if (dateFilter === "30d") {
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        if (!createdAt || now - createdAt > thirtyDays) return false;
      }

      return true;
    });
  }, [events, typeFilter, projectFilter, dateFilter]);

  const visibleIds = filteredEvents
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

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3">
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
          <option value="pageview">pageview</option>
          <option value="click">click</option>
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
          <option value="Kiosco">Kiosco</option>
          <option value="Intranet">Intranet</option>
          <option value="Museo">Museo</option>
          <option value="RadarSocial">RadarSocial</option>
          <option value="-">Sin proyecto</option>
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

        <button
          type="button"
          onClick={handleDeleteSelected}
          disabled={bulkDeleting || selectedIds.length === 0}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{
            borderColor: "var(--card-border)",
            background: "transparent",
            opacity: bulkDeleting || selectedIds.length === 0 ? 0.6 : 1,
          }}
        >
          {bulkDeleting
            ? "Eliminando..."
            : `Eliminar seleccionados (${selectedIds.length})`}
        </button>
      </div>

      <div className="mb-3 text-sm" style={{ color: "var(--muted)" }}>
        {filteredEvents.length} evento(s) visible(s)
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              style={{
                textAlign: "left",
                color: "var(--muted-2)",
                borderBottom: "1px solid var(--card-border)",
              }}
            >
              <th className="py-2 pr-3">
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={toggleAllVisible}
                />
              </th>
              <th className="py-2">Tipo</th>
              <th className="py-2">Path</th>
              <th className="py-2">Lang</th>
              <th className="py-2">Proyecto</th>
              <th className="py-2">Visitor ID</th>
              <th className="py-2">Fecha</th>
              <th className="py-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => {
              const eventId = event._id || "";

              return (
                <tr
                  key={eventId || `${event.path}-${String(event.createdAt)}`}
                  style={{
                    borderBottom: "1px solid var(--card-border)",
                  }}
                >
                  <td className="py-2 pr-3">
                    {eventId ? (
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(eventId)}
                        onChange={() => toggleOne(eventId)}
                      />
                    ) : null}
                  </td>
                  <td className="py-2">{event.type || "-"}</td>
                  <td className="py-2">{event.path || "-"}</td>
                  <td className="py-2">{event.lang || "-"}</td>
                  <td className="py-2">{getProjectLabel(event)}</td>
                  <td className="py-2">
                    {event.visitorId ? String(event.visitorId).slice(0, 8) : "-"}
                  </td>
                  <td className="py-2">
                    {event.createdAt
                      ? new Date(event.createdAt).toISOString().replace("T", " ").slice(0, 19)
                      : "-"}
                  </td>
                  <td className="py-2">
                    {eventId ? <DeleteEventButton eventId={eventId} /> : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
