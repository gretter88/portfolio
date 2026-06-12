//src/components/admin/DeleteOldEventsButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  days?: number;
};

export default function DeleteOldEventsButton({ days = 30 }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `¿Eliminar todos los eventos con más de ${days} días?`
    );
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/events/cleanup?days=${days}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudieron eliminar los eventos viejos.");
        setLoading(false);
        return;
      }

      alert(`Eventos eliminados: ${data.deletedCount ?? 0}`);
      router.refresh();
    } catch {
      alert("Error al eliminar eventos viejos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-xl border px-4 py-2 text-sm"
      style={{
        borderColor: "var(--card-border)",
        background: "transparent",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Eliminando..." : `Eliminar > ${days} días`}
    </button>
  );
}
