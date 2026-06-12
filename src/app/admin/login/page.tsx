"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.message || "No se pudo iniciar sesión");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center px-6">
      <div
        className="w-full max-w-md rounded-2xl border p-6"
        style={{
          background: "var(--card)",
          borderColor: "var(--card-border)",
        }}
      >
        <h1 className="text-2xl font-semibold">Admin login</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Acceso privado al panel del portfolio.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Usuario</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 outline-none"
              style={{
                background: "var(--background)",
                borderColor: "var(--card-border)",
              }}
              autoComplete="username"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 outline-none"
              style={{
                background: "var(--background)",
                borderColor: "var(--card-border)",
              }}
              autoComplete="current-password"
            />
          </div>

          {error ? <div className="text-sm text-red-500">{error}</div> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl px-4 py-3 font-medium transition"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Entrando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </main>
  );
}