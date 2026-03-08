"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { Lang, Project } from "@/lib/i18n";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

const SITE_ORIGIN = "https://www.santiagogretter.com.uy";
const YT_EMBED_BASE = "https://www.youtube-nocookie.com/embed";

type Props = {
  lang: Lang;
  projects: Project[];
  emailTo?: string;
  initialProjectSlug?: string | null;
  initialVideo?: boolean;
};

export default function ProjectsGrid({
  lang,
  projects,
  initialProjectSlug = null,
  initialVideo = false,
}: Props) {
  const isEs = lang === "es";

  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [shotIndex, setShotIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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
    if (b.includes("internal")) return "bg-zinc-400";
    if (b.includes("testing")) return "bg-amber-400";
    if (b.includes("live")) return "bg-green-400";
    return "bg-zinc-500";
  };

  const isIntranetProject = (p: Project) => {
    const t = (p.title || "").toLowerCase();
    return t.includes("intranet");
  };

  const isRestrictedProject = (p: Project) =>
    p.title.includes("Kiosco") || p.title.includes("Kiosk");

  const isInternalProject = (p: Project) =>
    (p.badge || "").toLowerCase().includes("internal");

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const getProjectSlug = (p: Project) => {
    const title = (p.title || "").toLowerCase();

    if (title.includes("kiosco") || title.includes("kiosk")) return "kiosco";
    if (title.includes("intranet")) return "intranet";
    if (title.includes("radarsocial")) return "radar";
    if (title.includes("museo")) return "museo";

    return slugify(p.title || "demo");
  };

  const getOpenModalPath = (p: Project) =>
    `/go/open-modal/${getProjectSlug(p)}?lang=${lang}`;

  const getOpenVideoPath = (p: Project) =>
    `/go/open-video/${getProjectSlug(p)}?lang=${lang}`;

  const getRequestAccessPath = (p: Project) =>
    `/go/request-access/${getProjectSlug(p)}`;

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [projects]);

  const closeModal = () => {
    setOpen(false);
    setShotIndex(0);
    setActiveProject(null);
    setShowVideo(false);
  };

  const openModal = (p: Project) => {
    setActiveProject(p);
    setShotIndex(0);

    const hasYoutubeVideo = p.video?.provider === "youtube" && !!p.video?.id;

    if (hasYoutubeVideo && isIntranetProject(p)) {
      setShowVideo(true);
    } else {
      setShowVideo(false);
    }

    setOpen(true);
  };
  
  const getPublicDemoPath = (p: Project) => {
  const slug = getProjectSlug(p);

  if (slug === "radar") return "/go/demo/radar";
  if (slug === "museo") return "/go/demo/museo";

  return p.links?.demo || "#";
};


  useEffect(() => {
    if (!initialProjectSlug) return;

    const match = sortedProjects.find(
      (p) => getProjectSlug(p) === initialProjectSlug.toLowerCase()
    );

    if (!match) return;

    setActiveProject(match);
    setOpen(true);
    setShotIndex(0);

    if (initialVideo && match.video?.provider === "youtube" && match.video?.id) {
      setShowVideo(true);
    } else if (match.video?.provider === "youtube" && match.video?.id && isIntranetProject(match)) {
      setShowVideo(true);
    } else {
      setShowVideo(false);
    }

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [initialProjectSlug, initialVideo, sortedProjects]);

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

  const modalShots = useMemo(() => {
    if (!activeProject) return [];
    const arr = activeProject.screenshots?.filter(Boolean) ?? [];
    if (arr.length > 0) return arr.slice(0, 6);
    if (activeProject.image?.src) {
      return [{ src: activeProject.image.src, alt: activeProject.image.alt }];
    }
    return [];
  }, [activeProject]);

  const activeShot = modalShots[shotIndex];

  return (
    <>
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
              {p.image?.src ? (
                <div className="mb-4 overflow-hidden rounded-xl border" style={cardStyle}>
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
                {isInternalProject(p) ? (
                  <>
                    <a
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      href={getOpenModalPath(p)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEs ? "Ver screenshots" : "View screenshots"}
                    </a>

                    <a
                      className={softBtnClass}
                      style={softBtnStyle}
                      href={getRequestAccessPath(p)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEs ? "Consultar" : "Contact"}
                    </a>
                  </>
                ) : p.links?.demo ? (
                  isRestricted ? (
                    <a
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      href={getRequestAccessPath(p)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEs ? "Solicitar acceso" : "Request access"}
                    </a>
                  ) : (
                    <a
                      className={ghostBtnClass}
                      style={ghostBtnStyle}
                      href={getPublicDemoPath(p)}

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

                <a
                  href={getOpenModalPath(p)}
                  className="ml-auto text-xs underline underline-offset-4"
                  style={muted2Style}
                  onClick={(e) => e.stopPropagation()}
                >
                  {isEs ? "Ver detalles" : "View details"}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {open && activeProject ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0"
            onClick={closeModal}
            style={{ background: "rgba(0,0,0,0.55)" }}
          />

          <div
            className="relative z-[210] w-full max-w-4xl rounded-2xl border flex flex-col"
            style={{
              background: "var(--card)",
              borderColor: "var(--card-border)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.45)",
              maxHeight: "calc(100vh - 32px)",
            }}
          >
            <div
              className="flex-none flex items-start justify-between gap-4 p-5 border-b"
              style={{ borderColor: "var(--card-border)" }}
            >
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

            <div
              className="flex-1 overflow-y-auto p-5"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
                <div>
                  {activeProject?.video?.provider === "youtube" && activeProject?.video?.id ? (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {isIntranetProject(activeProject) && !showVideo ? (
                        <a
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          href={getOpenVideoPath(activeProject)}
                        >
                          {activeProject.video.label || (isEs ? "Ver video" : "View video")}
                        </a>
                      ) : (
                        <button
                          type="button"
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowVideo((v) => !v);
                          }}
                        >
                          {showVideo
                            ? isEs
                              ? "Ver screenshots"
                              : "View screenshots"
                            : activeProject.video.label || (isEs ? "Ver video" : "View video")}
                        </button>
                      )}

                      <span className="text-xs inline-flex items-center gap-2" style={muted2Style}>
                        {activeProject?.video?.provider === "youtube" &&
                        activeProject?.video?.id &&
                        isIntranetProject(activeProject) ? (
                          <>
                            <span style={{ opacity: 0.9 }}>▶</span>
                            <span>
                              Video demo
                              {activeProject.video.duration
                                ? ` (${activeProject.video.duration})`
                                : " (50s)"}
                            </span>
                          </>
                        ) : (
                          <span>
                            {isEs
                              ? "Tip: podés usar ←/→ para screenshots"
                              : "Tip: use ←/→ for screenshots"}
                          </span>
                        )}
                      </span>
                    </div>
                  ) : null}

                  <div className="overflow-hidden rounded-xl border relative z-[220]" style={cardStyle}>
                    {showVideo &&
                    activeProject?.video?.provider === "youtube" &&
                    activeProject?.video?.id ? (
                      <div
                        className="relative z-[230]"
                        style={{ height: 360, background: "var(--background)" }}
                      >
                        <iframe
                          title={`${activeProject.title} video`}
                          width="100%"
                          height="100%"
                          src={`${YT_EMBED_BASE}/${activeProject.video.id}?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=1&controls=1&origin=${encodeURIComponent(
                            SITE_ORIGIN
                          )}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          referrerPolicy="strict-origin-when-cross-origin"
                          style={{ border: 0, display: "block" }}
                        />
                      </div>
                    ) : activeShot ? (
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
                      <div
                        className="grid place-items-center"
                        style={{ height: 360, color: "var(--muted)" }}
                      >
                        {isEs ? "Sin screenshots todavía" : "No screenshots yet"}
                      </div>
                    )}
                  </div>

                  {!showVideo && modalShots.length > 1 ? (
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
                        onClick={() =>
                          setShotIndex((v) => Math.min(modalShots.length - 1, v + 1))
                        }
                        disabled={shotIndex >= modalShots.length - 1}
                        aria-label={isEs ? "Siguiente" : "Next"}
                      >
                        →
                      </button>
                    </div>
                  ) : !showVideo ? (
                    <div className="mt-3 text-xs" style={muted2Style}>
                      {isEs ? "Tip: podés navegar con ← →" : "Tip: use ← → to navigate"}
                    </div>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold">{isEs ? "Highlights" : "Highlights"}</h4>

                  {activeProject.features?.length ? (
                    <ul className="mt-3 space-y-2 text-sm" style={mutedStyle}>
                      {activeProject.features.slice(0, 10).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--muted-2)" }}
                          />
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
                      {activeProject.links?.demo ? (
                        isRestrictedProject(activeProject) ? (
                          <a
                            className={primaryBtnClass}
                            style={primaryBtnStyle}
                            href={getRequestAccessPath(activeProject)}
                          >
                            {isEs ? "Solicitar acceso" : "Request access"}
                          </a>
                        ) : (
                          <a
                            className={primaryBtnClass}
                            style={primaryBtnStyle}
                            href={getPublicDemoPath(activeProject)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Demo
                          </a>
                        )
                      ) : (
                        <span
                          className="rounded-xl border px-4 py-2 text-sm"
                          style={{
                            borderColor: "var(--card-border)",
                            color: "var(--muted-2)",
                          }}
                        >
                          {isEs ? "Demo (próximamente)" : "Demo (coming soon)"}
                        </span>
                      )}

                      {activeProject.links?.repo ? (
                        <a
                          className={softBtnClass}
                          style={softBtnStyle}
                          href={activeProject.links.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Repo
                        </a>
                      ) : (
                        <span
                          className="rounded-xl border px-4 py-2 text-sm"
                          style={{
                            borderColor: "var(--card-border)",
                            color: "var(--muted)",
                          }}
                        >
                          {isEs ? "Repo: Privado" : "Repo: Private"}
                        </span>
                      )}

                      <button
                        type="button"
                        className={ghostBtnClass}
                        style={ghostBtnStyle}
                        onClick={closeModal}
                      >
                        {isEs ? "Cerrar" : "Close"}
                      </button>
                    </div>

                    <div className="mt-4 text-xs" style={muted2Style}>
                      {isEs
                        ? "Esc: cerrar · ←/→: cambiar screenshot"
                        : "Esc: close · ←/→: change screenshot"}
                    </div>
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

