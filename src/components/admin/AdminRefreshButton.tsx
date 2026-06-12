//src/components/admin/AdminRefreshButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminRefreshButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleRefresh() {
    setLoading(true);
    router.refresh();
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <button
      type="button"
      onClick={handleRefresh}
      disabled={loading}
      className="rounded-xl border px-4 py-2 text-sm"
      style={{
        borderColor: "var(--card-border)",
        background: "transparent",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Actualizando..." : "Refrescar"}
    </button>
  );
}
