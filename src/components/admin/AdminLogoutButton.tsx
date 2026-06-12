"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="rounded-xl border px-4 py-2 text-sm"
      style={{
        borderColor: "var(--card-border)",
        background: "transparent",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Saliendo..." : "Cerrar sesión"}
    </button>
  );
}