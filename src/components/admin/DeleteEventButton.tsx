//src/components/admin/DeleteEventButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  eventId: string;
};

export default function DeleteEventButton({ eventId }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm("¿Eliminar este evento?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/events/${eventId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        alert("No se pudo eliminar el evento.");
        setLoading(false);
        return;
      }

      router.refresh();
    } catch {
      alert("Error al eliminar el evento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-lg border px-3 py-1 text-xs transition"
      style={{
        borderColor: "var(--card-border)",
        background: "transparent",
        opacity: loading ? 0.6 : 1,
      }}
    >
      {loading ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
