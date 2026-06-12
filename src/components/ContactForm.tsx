"use client";

import { useState } from "react";

type ContactFormProps = {
  i: {
    contactFormName: string;
    contactFormEmail: string;
    contactFormProjectType: string;
    contactFormMessage: string;
    contactFormSubmit: string;
    contactFormSending: string;
    contactFormSuccess: string;
    contactFormError: string;
  };
};

export default function ContactForm({ i }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error sending form");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--background)",
    borderColor: "var(--card-border)",
    color: "var(--foreground)",
  };

  const primaryBtnStyle: React.CSSProperties = {
    background: "var(--foreground)",
    color: "var(--background)",
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder={i.contactFormName}
          className="rounded-xl border px-4 py-3 text-sm outline-none"
          style={inputStyle}
        />

        <input
          name="email"
          required
          type="email"
          placeholder={i.contactFormEmail}
          className="rounded-xl border px-4 py-3 text-sm outline-none"
          style={inputStyle}
        />
      </div>

      <input
        name="projectType"
        placeholder={i.contactFormProjectType}
        className="rounded-xl border px-4 py-3 text-sm outline-none"
        style={inputStyle}
      />

      <textarea
        name="message"
        required
        placeholder={i.contactFormMessage}
        rows={5}
        className="rounded-xl border px-4 py-3 text-sm outline-none resize-none"
        style={inputStyle}
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl px-5 py-2 font-medium transition disabled:opacity-60"
          style={primaryBtnStyle}
        >
          {status === "sending" ? i.contactFormSending : i.contactFormSubmit}
        </button>

        {status === "success" ? (
          <span className="text-sm text-green-500">{i.contactFormSuccess}</span>
        ) : null}

        {status === "error" ? (
          <span className="text-sm text-red-500">{i.contactFormError}</span>
        ) : null}
      </div>
    </form>
  );
}