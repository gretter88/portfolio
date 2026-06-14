"use client";

import { useState } from "react";

type Props = {
  project: string;
  projectName: string;
  interest: string;
  interestLabel: string;
};

export default function LeadRequestForm({
  project,
  projectName,
  interest,
  interestLabel,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    setLoading(true);

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project,
        interest,
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company"),
        country: form.get("country"),
        message: form.get("message"),
        sourcePath: window.location.pathname + window.location.search,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      
    } else {
      alert("No se pudo enviar la solicitud.");
    }
  }

  if (sent) {
    return (
      <div
        className="mt-8 rounded-2xl border p-5"
        style={{
          borderColor: "rgba(34,197,94,0.35)",
          background: "rgba(34,197,94,0.10)",
        }}
      >
        <h2 className="text-lg font-semibold">Solicitud enviada</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Gracias. Tu solicitud sobre {projectName} fue registrada correctamente.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Nombre" className="rounded-xl border px-4 py-3" />
        <input name="email" required type="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input name="company" placeholder="Empresa" className="rounded-xl border px-4 py-3" />
        <input name="country" placeholder="País" className="rounded-xl border px-4 py-3" />
      </div>

      <textarea
        name="message"
        placeholder={`Contame brevemente qué te interesa sobre ${projectName} (${interestLabel})`}
        rows={5}
        className="rounded-xl border px-4 py-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl px-5 py-3 text-sm font-medium"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}