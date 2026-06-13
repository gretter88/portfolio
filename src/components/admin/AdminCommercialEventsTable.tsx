"use client";

import { useEffect, useState } from "react";

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

  const date = new Date(value);

  return new Intl.DateTimeFormat("es-UY", {
    timeZone: "America/Montevideo",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(date);
}

export default function AdminCommercialEventsTable({ events }: Props) {
	
	const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  return (
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
            <th className="py-2">Tipo</th>
            <th className="py-2">Proyecto</th>
			<th className="py-2">Ubicación</th>
<th className="py-2">IP</th>
            <th className="py-2">Path</th>
            <th className="py-2">Lang</th>
            <th className="py-2">Visitor</th>
            <th className="py-2">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr
                key={event._id || `${event.type}-${event.path}-${event.createdAt}`}
                style={{
                  borderBottom: "1px solid var(--card-border)",
                }}
              >
                <td className="py-2">{event.type || "-"}</td>
                <td className="py-2">{event.project || "-"}</td>
				<td className="py-2">
  {[event.country, event.region, event.city].filter(Boolean).join(" · ") || "-"}
</td>

<td className="py-2">
  {event.ip || "-"}
</td>
                <td className="py-2">{event.path || "-"}</td>
                <td className="py-2">{event.lang || "-"}</td>
                <td className="py-2">
                  {event.visitorId ? String(event.visitorId).slice(0, 8) : "-"}
                </td>
                <td className="py-2" suppressHydrationWarning>
  {mounted ? formatMontevideoDate(event.createdAt) : "-"}
</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-4" colSpan={6} style={{ color: "var(--muted)" }}>
                Todavía no hay eventos comerciales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}