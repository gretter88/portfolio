"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type LeadStatus = "new" | "contacted" | "in_conversation" | "closed";

type Lead = {
  _id?: string;
  project?: string | null;
  interest?: string | null;
  name?: string | null;
  email?: string | null;
  company?: string | null;
  country?: string | null;
  message?: string | null;
  sourcePath?: string | null;
  ip?: string | null;
  status?: LeadStatus | string | null;
  internalNotes?: string | null;
  createdAt?: string | null;
};

type Props = {
  leads: Lead[];
};

function getInterestLabel(interest?: string | null) {
  const labels: Record<string, string> = {
    demo: "Demo",
    license: "Licencia",
    partnership: "Partnership",
    deployment: "Implementación",
    info: "Info",
  };

  return labels[interest || ""] || interest || "-";
}

export default function AdminLeadsTable({ leads }: Props) {
  const router = useRouter();

  const [projectFilter, setProjectFilter] = useState("all");
  const [interestFilter, setInterestFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>(
    Object.fromEntries(
      leads.map((lead) => [lead._id || "", lead.internalNotes || ""])
    )
  );

  const projectOptions = useMemo(() => {
    return Array.from(new Set(leads.map((lead) => lead.project || "-"))).sort();
  }, [leads]);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (projectFilter !== "all" && (lead.project || "-") !== projectFilter) return false;
      if (interestFilter !== "all" && (lead.interest || "-") !== interestFilter) return false;
      if (statusFilter !== "all" && (lead.status || "new") !== statusFilter) return false;
      return true;
    });
  }, [leads, projectFilter, interestFilter, statusFilter]);

  async function updateStatus(id: string, status: LeadStatus) {
    setUpdatingId(id);

    try {
      const res = await fetch("/api/admin/leads/update-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudo actualizar el estado.");
        return;
      }

      router.refresh();
    } catch {
      alert("Error al actualizar estado.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function saveNotes(id: string) {
    setUpdatingId(id);

    try {
      const res = await fetch("/api/admin/leads/update-notes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          internalNotes: notes[id] || "",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudo guardar la nota.");
        return;
      }

      router.refresh();
    } catch {
      alert("Error al guardar nota.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function deleteLead(id: string) {
    const confirmed = window.confirm("¿Eliminar este lead?");
    if (!confirmed) return;

    setUpdatingId(id);

    try {
      const res = await fetch("/api/admin/leads/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudo eliminar el lead.");
        return;
      }

      router.refresh();
    } catch {
      alert("Error al eliminar lead.");
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <select
          value={projectFilter}
          onChange={(e) => setProjectFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{ background: "var(--background)", borderColor: "var(--card-border)" }}
        >
          <option value="all">Todos los proyectos</option>
          {projectOptions.map((project) => (
            <option key={project} value={project}>{project}</option>
          ))}
        </select>

        <select
          value={interestFilter}
          onChange={(e) => setInterestFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{ background: "var(--background)", borderColor: "var(--card-border)" }}
        >
          <option value="all">Todos los intereses</option>
          <option value="demo">Demo</option>
          <option value="license">Licencia</option>
          <option value="partnership">Partnership</option>
          <option value="deployment">Implementación</option>
          <option value="info">Info</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
          style={{ background: "var(--background)", borderColor: "var(--card-border)" }}
        >
          <option value="all">Todos los estados</option>
          <option value="new">Nuevo</option>
          <option value="contacted">Contactado</option>
          <option value="in_conversation">En conversación</option>
          <option value="closed">Cerrado</option>
        </select>

        <button
          type="button"
          onClick={() => {
            setProjectFilter("all");
            setInterestFilter("all");
            setStatusFilter("all");
          }}
          className="rounded-xl border px-4 py-2 text-sm"
          style={{ borderColor: "var(--card-border)", background: "transparent" }}
        >
          Limpiar filtros
        </button>
      </div>

      <div className="mb-3 text-sm" style={{ color: "var(--muted)" }}>
        {filteredLeads.length} lead(s) visible(s)
      </div>


<div className="md:hidden space-y-4">
  {filteredLeads.map((lead) => {
    const leadId = lead._id || "";

    return (
      <div
        key={leadId}
        className="rounded-2xl border p-4"
        style={{
          borderColor: "var(--card-border)",
          background: "var(--card)",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-semibold">
              {lead.project || "-"}
            </div>

            <div
              className="text-xs"
              style={{ color: "var(--muted)" }}
            >
              {getInterestLabel(lead.interest)}
            </div>
          </div>

          <select
            value={lead.status || "new"}
            disabled={!leadId || updatingId === leadId}
            onChange={(e) =>
              updateStatus(
                leadId,
                e.target.value as LeadStatus
              )
            }
            className="rounded-xl border px-2 py-1 text-xs"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          >
            <option value="new">Nuevo</option>
            <option value="contacted">Contactado</option>
            <option value="in_conversation">
              En conversación
            </option>
            <option value="closed">Cerrado</option>
          </select>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div>
            <strong>Nombre:</strong> {lead.name || "-"}
          </div>

          <div>
            <strong>Email:</strong> {lead.email || "-"}
          </div>

          <div>
            <strong>Empresa:</strong> {lead.company || "-"}
          </div>

          <div>
            <strong>País:</strong> {lead.country || "-"}
          </div>

          <div>
            <strong>Mensaje:</strong>
            <div
              className="mt-1 text-xs"
              style={{ color: "var(--muted)" }}
            >
              {lead.message || "-"}
            </div>
          </div>

          <div>
            <strong>Fecha:</strong> {lead.createdAt || "-"}
          </div>
        </div>

        <div className="mt-4">
          <input
            value={notes[leadId] || ""}
            onChange={(e) =>
              setNotes((prev) => ({
                ...prev,
                [leadId]: e.target.value,
              }))
            }
            placeholder="Nota interna..."
            className="w-full rounded-xl border px-3 py-2 text-sm"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          />
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => saveNotes(leadId)}
            className="rounded-xl border px-3 py-2 text-xs"
            style={{
              borderColor: "rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.08)",
            }}
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => deleteLead(leadId)}
            className="rounded-xl border px-3 py-2 text-xs"
            style={{
              borderColor: "rgba(239,68,68,0.35)",
              background: "rgba(239,68,68,0.08)",
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  })}
</div>


      <div className="hidden md:block overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--card-border)" }}>
        <table className="w-full min-w-[1300px] text-sm">
          <thead>
            <tr style={{ textAlign: "left", color: "var(--muted-2)" }}>
              <th className="px-4 py-3">Proyecto</th>
              <th className="px-4 py-3">Interés</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Empresa</th>
              <th className="px-4 py-3">País</th>
              <th className="px-4 py-3">Mensaje</th>
              <th className="px-4 py-3">Notas internas</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => {
                const leadId = lead._id || "";

                return (
                  <tr key={leadId}>
                    <td className="border-t px-4 py-3 font-medium" style={{ borderColor: "var(--card-border)" }}>
                      {lead.project || "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      {getInterestLabel(lead.interest)}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      <select
                        value={lead.status || "new"}
                        disabled={!leadId || updatingId === leadId}
                        onChange={(e) => updateStatus(leadId, e.target.value as LeadStatus)}
                        className="rounded-xl border px-3 py-2 text-xs"
                        style={{ background: "var(--background)", borderColor: "var(--card-border)" }}
                      >
                        <option value="new">Nuevo</option>
                        <option value="contacted">Contactado</option>
                        <option value="in_conversation">En conversación</option>
                        <option value="closed">Cerrado</option>
                      </select>
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      {lead.name || "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      {lead.email ? (
                        <a href={`mailto:${lead.email}`} className="underline underline-offset-4">
                          {lead.email}
                        </a>
                      ) : "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      {lead.company || "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      {lead.country || "-"}
                    </td>

                    <td
                      className="border-t px-4 py-3 max-w-[240px] truncate"
                      title={lead.message || ""}
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      {lead.message || "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      <div className="flex min-w-[260px] gap-2">
                        <input
                          value={notes[leadId] || ""}
                          onChange={(e) =>
                            setNotes((prev) => ({
                              ...prev,
                              [leadId]: e.target.value,
                            }))
                          }
                          placeholder="Nota interna..."
                          className="w-full rounded-xl border px-3 py-2 text-xs"
                          style={{
                            background: "var(--background)",
                            borderColor: "var(--card-border)",
                          }}
                        />

                        <button
                          type="button"
                          disabled={!leadId || updatingId === leadId}
                          onClick={() => saveNotes(leadId)}
                          className="rounded-xl border px-3 py-2 text-xs"
                          style={{
                            borderColor: "rgba(34,197,94,0.35)",
                            background: "rgba(34,197,94,0.08)",
                          }}
                        >
                          Guardar
                        </button>
                      </div>
                    </td>

                    <td className="border-t px-4 py-3 whitespace-nowrap" style={{ borderColor: "var(--card-border)" }}>
                      {lead.createdAt || "-"}
                    </td>

                    <td className="border-t px-4 py-3" style={{ borderColor: "var(--card-border)" }}>
                      <button
                        type="button"
                        disabled={!leadId || updatingId === leadId}
                        onClick={() => deleteLead(leadId)}
                        className="rounded-xl border px-3 py-2 text-xs"
                        style={{
                          borderColor: "rgba(239,68,68,0.35)",
                          background: "rgba(239,68,68,0.08)",
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={11} className="px-4 py-5" style={{ color: "var(--muted)" }}>
                  Todavía no hay leads registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}