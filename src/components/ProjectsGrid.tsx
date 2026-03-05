"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { Lang, Project } from "@/lib/i18n";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

type Props = {
  lang: Lang;
  projects: Project[];
  emailTo?: string; // default: tu mail
};

export default function ProjectsGrid({
  lang,
  projects,
  emailTo = "gretter88@gmail.com",
}: Props) {
  const isEs = lang === "es";

  // ✅ mismos helpers de estilos que tu page.tsx
  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };
  const mutedStyle: React.CSSProperties = { color: "var(--muted)" };
  const muted2Style: React.CSSProperties = { color: "var(--muted-2)" };

  const ghostBtnClass = "rounded-xl border px-4 py-2 transition text-sm";
  const ghostBtnStyle: React.CSSProperties = {
    background: "transparent",
    borderColor: "var(--card-border)",
  };

  const softBtnClass = "rounded-xl border px-4 py-2 transition text-sm";
  const softBtnStyle: React.CSSProperties = {
    background: "var(--card)",
    borderColor: "var(--card-border)",
  };

  const primaryBtnClass = "rounded-xl px-4 py-2 transition text-sm font-medium";
  const primaryBtnStyle: React.CSSProperties = {
    background: "var(--foreground)",
    color: "var(--background)",
  };

  const getDotClass = (badge?: string) => {
    const b = (badge || "").toLowerCase();
    if (b.includes("restricted")) return "bg-zinc-400";
    if (b.includes("testing")) return "bg-amber-400";
    if (b.includes("live")) return "bg-green-400";
    return "bg-zinc-500";
  };

  const isRestrictedProject = (p: Project) =>
    p.title.includes("Kiosco") || p.title.includes("Kiosk");

  const buildMailto = (p: Project) => {
    const subject = encodeURIComponent(
      isEs ? `Solicitud de acceso demo: ${p.title}` : `Request: demo access — ${p.title}`
    );

    const body = encodeURIComponent(
      isEs
        ? `Hola Santiago,\n\nMe gustaría acceder a la demo de "${p.title}".\nURL: ${
            p.links?.demo || ""
          }\n\nNombre:\nEmpresa:\nMotivo:\n\nGracias!`
        : `Hi Santiago,\n\nI'd like access to the "${p.title}" demo.\nURL: ${
            p.links?.demo || ""
          }\n\nName:\nCompany:\nReason:\n\nThanks!`
    );

    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [projects]);

  // =========================
  // Modal state
  // =========================
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [shotIndex, setShotIndex] = useState(0);

  const closeModal = () => {
    setOpen(false);
    setShotIndex(0);
    setActiveProject(null);
  };

  const openModal = (p: Project) => {
    setActiveProject(p);
    setShotIndex(0);
    setOpen(true);
  };

  // ESC para cerrar + lock scroll
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") setShotIndex((v) => Math.max(0, v - 1));
      if (e.key === "ArrowRight") {
        const max = Math.max(0, (activeProject?.screenshots?.length ?? 1) - 1);
        setShotIndex((v) => Math.min(max, v + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, activeProject]);

  // screenshots: si no hay, usa la image como 1 slide
  const modalShots = useMemo(() => {
    if (!activeProject) return [];
    const arr = activeProject.screenshots?.filter(Boolean) ?? [];
    if (arr.length > 0) return arr.slice(0, 6);
    if (activeProject.image?.src) return [{ src: activeProject.image.src, alt: activeProject.image.alt }];
    return [];
  }, [activeProject]);

  const activeShot = modalShots[shotIndex];

  return (
    <>
      {/* GRID (idéntico a tu versión alineada) */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sortedProjects.map((p) => {
          const isRestricted = isRestrictedProject(p);

          return (
            <div
              key={p.title}
              role="button"
              tabIndex={0}
              onClick={() => openModal(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(p);
              }}
              className={clsx(
                "rounded-2xl border p-5 transition cursor-pointer select-none",
                "hover:opacity-[0.98]"
              )}
              style={cardStyle}
            >
              {/* ✅ Imagen siempre primero */}
              {p.image?.src ? (
                <div className="mb-4 overflow-hidden rounded-xl border" style={cardStyle}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    loading="lazy"
                     className="h-44 w-full object-cover object-top transition duration-300 hover:scale-[1.03]"
                    style={{
                      height: 220,
                      objectFit: "contain",
                      background: "var(--background)",
                      display: "block",
                    }}
                  />
                </div>
              ) : null}

              {/* Badge pill */}
              {p.badge ? (
                <div className="mb-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200">
                    <span className={clsx("h-2 w-2 rounded-full", getDotClass(p.badge))} />
                    {p.badge}
                  </span>
                </div>
              ) : null}

              <h4 className="text-lg font-semibold">{p.title}</h4>

              <p className="mt-2 text-sm leading-relaxed" style={mutedStyle}>
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full border px-3 py-1"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--muted)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                {/* DEMO / ACCESO */}
                {p.links?.demo ? (
                  isRestricted ? (
                    <a
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      href={buildMailto(p)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEs ? "Solicitar acceso" : "Request access"}
                    </a>
                  ) : (
                    <a
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )
                ) : (
                  <span
                    className="rounded-xl border px-4 py-2"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--muted-2)",
                    }}
                  >
                    {isEs ? "Demo (próximamente)" : "Demo (coming soon)"}
                  </span>
                )}

                {/* REPO */}
                {p.links?.repo ? (
                  <a
                    className={softBtnClass}
                    style={softBtnStyle}
                    href={p.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Repo
                  </a>
                ) : (
                  <span
                    className="rounded-xl border px-4 py-2"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--muted)",
                    }}
                  >
                    {isEs ? "Repo: Privado" : "Repo: Private"}
                  </span>
                )}

                <span className="ml-auto text-xs" style={muted2Style}>
                  {isEs ? "Click para ver detalles" : "Click to view details"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {open && activeProject ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* backdrop */}
          <div
            className="absolute inset-0"
            onClick={closeModal}
            style={{ background: "rgba(0,0,0,0.55)" }}
          />

          {/* panel */}
          <div
            className="relative w-full max-w-4xl rounded-2xl border"
            style={{
              background: "var(--card)",
              borderColor: "var(--card-border)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.45)",
            }}
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 p-5 border-b" style={{ borderColor: "var(--card-border)" }}>
              <div className="min-w-0">
                {activeProject.badge ? (
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-200">
                      <span className={clsx("h-2 w-2 rounded-full", getDotClass(activeProject.badge))} />
                      {activeProject.badge}
                    </span>
                  </div>
                ) : null}

                <h3 className="text-xl font-semibold truncate">{activeProject.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={mutedStyle}>
                  {activeProject.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-xl border px-3 py-2 text-sm"
                style={ghostBtnStyle}
                aria-label={isEs ? "Cerrar" : "Close"}
                title="Esc"
              >
                ✕
              </button>
            </div>

            {/* content */}
            <div className="grid gap-5 p-5 md:grid-cols-[1.25fr_0.75fr]">
              {/* left: screenshots */}
              <div>
                <div className="overflow-hidden rounded-xl border" style={cardStyle}>
                  {activeShot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={activeShot.src}
                      alt={activeShot.alt}
                      className="w-full"
                      style={{
                        height: 360,
                        objectFit: "contain",
                        background: "var(--background)",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid place-items-center" style={{ height: 360, color: "var(--muted)" }}>
                      {isEs ? "Sin screenshots todavía" : "No screenshots yet"}
                    </div>
                  )}
                </div>

                {modalShots.length > 1 ? (
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      onClick={() => setShotIndex((v) => Math.max(0, v - 1))}
                      disabled={shotIndex === 0}
                      aria-label={isEs ? "Anterior" : "Previous"}
                    >
                      ←
                    </button>

                    <div className="flex flex-1 items-center gap-2 overflow-x-auto">
                      {modalShots.slice(0, 6).map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setShotIndex(idx)}
                          className="h-2.5 w-2.5 rounded-full border transition"
                          style={{
                            borderColor: "var(--card-border)",
                            background: idx === shotIndex ? "var(--foreground)" : "transparent",
                            opacity: idx === shotIndex ? 1 : 0.6,
                          }}
                          aria-label={`Screenshot ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      onClick={() => setShotIndex((v) => Math.min(modalShots.length - 1, v + 1))}
                      disabled={shotIndex >= modalShots.length - 1}
                      aria-label={isEs ? "Siguiente" : "Next"}
                    >
                      →
                    </button>
                  </div>
                ) : (
                  <div className="mt-3 text-xs" style={muted2Style}>
                    {isEs ? "Tip: podés navegar con ← →" : "Tip: use ← → to navigate"}
                  </div>
                )}
              </div>

              {/* right: features + links */}
              <div className="min-w-0">
                <h4 className="font-semibold">{isEs ? "Highlights" : "Highlights"}</h4>

                {activeProject.features?.length ? (
                  <ul className="mt-3 space-y-2 text-sm" style={mutedStyle}>
                    {activeProject.features.slice(0, 10).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--muted-2)" }} />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm" style={mutedStyle}>
                    {isEs
                      ? "Agregá `features` en el proyecto para mostrar bullets acá."
                      : "Add `features` to the project to show bullets here."}
                  </p>
                )}

                <div className="mt-5">
                  <h4 className="font-semibold">{isEs ? "Links" : "Links"}</h4>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {/* DEMO */}
                    {activeProject.links?.demo ? (
                      isRestrictedProject(activeProject) ? (
                        <a className={primaryBtnClass} style={primaryBtnStyle} href={buildMailto(activeProject)}>
                          {isEs ? "Solicitar acceso" : "Request access"}
                        </a>
                      ) : (
                        <a
                          className={primaryBtnClass}
                          style={primaryBtnStyle}
                          href={activeProject.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )
                    ) : (
                      <span
                        className="rounded-xl border px-4 py-2 text-sm"
                        style={{ borderColor: "var(--card-border)", color: "var(--muted-2)" }}
                      >
                        {isEs ? "Demo (próximamente)" : "Demo (coming soon)"}
                      </span>
                    )}

                    {/* Repo */}
                    {activeProject.links?.repo ? (
                      <a className={softBtnClass} style={softBtnStyle} href={activeProject.links.repo} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    ) : (
                      <span
                        className="rounded-xl border px-4 py-2 text-sm"
                        style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
                      >
                        {isEs ? "Repo: Privado" : "Repo: Private"}
                      </span>
                    )}

                    <button type="button" className={ghostBtnClass} style={ghostBtnStyle} onClick={closeModal}>
                      {isEs ? "Cerrar" : "Close"}
                    </button>
                  </div>

                  <div className="mt-4 text-xs" style={muted2Style}>
                    {isEs ? "Esc: cerrar · ←/→: cambiar screenshot" : "Esc: close · ←/→: change screenshot"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
