//ProjectsGrid
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { LINKS, type Lang, type Project } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { trackPortfolioEvent } from "@/lib/track-client";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

const SITE_ORIGIN=
  typeof window !== "undefined"
    ? window.location.origin
    : "https://www.santiagogretter.com.uy";
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
  const [showMobileDetails, setShowMobileDetails] = useState(false);

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
	
if (title === "sg hub" || title.includes("sghub")) return "sghub";
   if (title.includes("sg saas starter")) return "sg-saas-starter";
if (title.includes("sg booking pro")) return "sg-booking-pro";
if (title.includes("sociedad islas canarias")) return "sociedad-canarias-uy";
if (title.includes("sociedad canarias")) return "sociedad-canarias-uy";
if (title.includes("nutrimvp")) return "nutrimvp";

if (title.includes("playduel")) return "playduel";
if (title.includes("play duel")) return "playduel";
if (title.includes("apuestas")) return "playduel";


    if (title.includes("marketplace de servicios")) return "marketplace";
    if (title.includes("services marketplace")) return "marketplace";
    if (title.includes("marketplace")) return "marketplace";
    if (title.includes("kiosco") || title.includes("kiosk")) return "kiosco";
    if (title.includes("intranet")) return "intranet";
    if (title.includes("radarsocial")) return "radar";
    if (title.includes("museo")) return "museo";

    return slugify(p.title || "demo");
  };
  
  const isProductProject = (p: Project) => {
  const slug = getProjectSlug(p);

return [
  "sghub",
  "radar",
  "nutrimvp",
  "playduel",
  "sg-copilot-crm",
  "sg-saas-starter",
  "sg-booking-pro",
  "marketplace",
].includes(slug);
};

const isMobileProject = (p: Project) => {
  const slug = getProjectSlug(p);
  return slug === "marketplace" || slug === "radar" || slug === "nutrimvp";
};

  const isMobileShot = (
    shot?: { src?: string },
    project?: Project | null
  ) => {
    const src = (shot?.src || "").toLowerCase();
    const slug = project ? getProjectSlug(project) : "";

    return (
      slug === "marketplace" ||
	  slug === "nutrimvp" ||
      src.includes("-app-") ||
      src.includes("/app-") ||
      src.includes("mobile") ||
      src.includes("chatscreen") ||
      src.includes("mapscreen") ||
      src.includes("homescreen") ||
      src.includes("contactosguardadosscreen") ||
      src.includes("buscarprofesionalesscreen") ||
      src.includes("radarsocial-app")
    );
  };

 const isLiveWebsiteProject = (p: Project) => {
  const slug = getProjectSlug(p);

  return (
    slug === "sghub" ||
    slug === "radar" ||
    slug === "museo" ||
    slug === "sociedad-canarias-uy"
  );
};

  const isLiveBadgeProject = (p: Project) => {
  const slug = getProjectSlug(p);

  return (
    slug === "sghub" ||
    slug === "radar" ||
    slug === "museo" ||
    slug === "sociedad-canarias-uy"
  );
};

  const getPrimaryLinkLabel = (p: Project) => {
    const slug = getProjectSlug(p);

    if (slug === "sg-saas-starter") {
      return isEs ? "Comprar en SG Hub Market" : "Buy on SG Hub Market";
    }

  if (
  slug === "sghub" ||
  slug === "radar" ||
  slug === "museo" ||
  slug === "sociedad-canarias-uy"
) {
  return isEs ? "Ver sitio" : "View site";
}

    return "Demo";
  };

  const isMarketProduct = (p: Project) => {
    return getProjectSlug(p) === "sg-saas-starter";
  };

  const hasDownloadLinks = (p: Project) => {
    return !!p.downloadLinks?.apk || !!p.downloadLinks?.playTesting;
  };

  const isRadarProject = (p: Project) => {
    return getProjectSlug(p) === "radar";
  };
  
  const isNutriMvpProject = (p: Project) => {
  return getProjectSlug(p) === "nutrimvp";
};



  const isMarketplaceProject = (project?: Project | null) => {
    if (!project) return false;
    return getProjectSlug(project) === "marketplace";
  };

  const getCommercialLabel = (p: Project) => {
    const slug = getProjectSlug(p);

    if (slug === "sghub") {
      return isEs ? "Ecosistema digital" : "Digital ecosystem";
    }

    if (slug === "sg-saas-starter") {
      return isEs ? "Producto digital" : "Digital product";
    }

    if (slug === "radar") {
      return isEs ? "Licenciamiento" : "Licensing";
    }

    if (slug === "sg-booking-pro") {
      return isEs ? "SaaS reservas" : "Booking SaaS";
    }

    if (slug === "marketplace") {
      return isEs ? "White-label / Implementación" : "White-label / Deployment";
    }

    if (slug === "kiosco") {
      return isEs ? "Adaptable" : "Adaptable";
    }

    if (slug === "playduel") {
      return isEs ? "Gaming realtime" : "Realtime gaming";
    }

    return null;
  };

  const getCommercialBadgeStyle = (p: Project): React.CSSProperties => {
    const slug = getProjectSlug(p);

    if (slug === "sghub" || slug === "sg-saas-starter") {
      return {
        border: "1px solid rgba(34,211,238,0.28)",
        background: "rgba(34,211,238,0.10)",
        color: "#67e8f9",
      };
    }

    if (slug === "radar") {
      return {
        border: "1px solid rgba(59,130,246,0.28)",
        background: "rgba(59,130,246,0.10)",
        color: "#60a5fa",
      };
    }

    if (slug === "sg-booking-pro") {
      return {
        border: "1px solid rgba(14,165,233,0.28)",
        background: "rgba(14,165,233,0.10)",
        color: "#38bdf8",
      };
    }

    if (slug === "marketplace") {
      return {
        border: "1px solid rgba(34,197,94,0.28)",
        background: "rgba(34,197,94,0.10)",
        color: "#4ade80",
      };
    }

    if (slug === "kiosco") {
      return {
        border: "1px solid rgba(168,85,247,0.28)",
        background: "rgba(168,85,247,0.10)",
        color: "#c084fc",
      };
    }

    if (slug === "playduel") {
      return {
        border: "1px solid rgba(245,158,11,0.28)",
        background: "rgba(245,158,11,0.10)",
        color: "#fbbf24",
      };
    }

    return {
      border: "1px solid var(--card-border)",
      background: "rgba(255,255,255,0.03)",
      color: "var(--muted)",
    };
  };

  const getOpenModalPath = (p: Project) =>
    `/go/open-modal/${getProjectSlug(p)}?lang=${lang}`;

  const getOpenVideoPath = (p: Project) =>
    `/go/open-video/${getProjectSlug(p)}?lang=${lang}`;

  const getRequestAccessPath = (p: Project) =>
    `/go/request-access/${getProjectSlug(p)}`;

  const getPublicDemoPath = (p: Project) => {
    const slug = getProjectSlug(p);

    if (slug === "sghub") return "https://www.sghub.com.uy";

    if (slug === "sg-saas-starter") {
      return isEs
        ? "https://www.sghub.com.uy/market/sg-saas-starter-pro"
        : "https://www.sghub.com.uy/en/market/sg-saas-starter-pro";
    }

    if (slug === "radar") return "/go/demo/radar";
    if (slug === "museo") return "/go/demo/museo";
	if (slug === "sociedad-canarias-uy") {
  return "https://www.sociedadislascanariasuruguay.com";
}
    if (slug === "marketplace") return "/go/demo/marketplace";
    return p.links?.demo || "#";
  };


const getProjectDetailPath = (p: Project) => {
  const slug = getProjectSlug(p);
  return `/${lang}/projects/${slug}`;
};


  const trackModalEvent = (path: string, project: string) => {
    trackPortfolioEvent({
      type: "click",
      path,
      lang,
      project,
    });
  };

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [projects]);
  
  const groupedProjects = useMemo(() => {
  const productProjects = sortedProjects.filter(isProductProject);
  const clientProjects = sortedProjects.filter((p) => !isProductProject(p));

  return [
    {
      key: "products",
      title: isEs ? "Productos propios" : "Own products",
      desc: isEs
        ? "Plataformas, SaaS, apps y productos digitales desarrollados como base comercial, licenciamiento o evolución."
        : "Platforms, SaaS, apps, and digital products built as commercial bases, licensing opportunities, or product evolution.",
      projects: productProjects,
    },
    {
      key: "client-work",
      title: isEs ? "Casos institucionales y clientes" : "Institutional and client work",
      desc: isEs
        ? "Proyectos reales para instituciones, espacios culturales, intranets, sitios web y soluciones operativas."
        : "Real projects for institutions, cultural spaces, intranets, websites, and operational solutions.",
      projects: clientProjects,
    },
  ].filter((group) => group.projects.length > 0);
}, [sortedProjects, isEs]);

  const closeModal = () => {
    setOpen(false);
    setShotIndex(0);
    setActiveProject(null);
    setShowVideo(false);
    setShowMobileDetails(false);
  };

  const openModal = (p: Project) => {
    setActiveProject(p);
    setShotIndex(0);
    setShowMobileDetails(false);
    const hasYoutubeVideo = p.video?.provider === "youtube" && !!p.video?.id;
    if (hasYoutubeVideo && isIntranetProject(p)) {
      setShowVideo(true);
    } else {
      setShowVideo(false);
    }
    setOpen(true);
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
    setShowMobileDetails(false);

    if (initialVideo && match.video?.provider === "youtube" && match.video?.id) {
      setShowVideo(true);
    } else if (
      match.video?.provider === "youtube" &&
      match.video?.id &&
      isIntranetProject(match)
    ) {
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
    if (arr.length > 0) {
      return [...arr].sort((a, b) => {
        const aMobile = isMobileShot(a, activeProject) ? 0 : 1;
        const bMobile = isMobileShot(b, activeProject) ? 0 : 1;
        return aMobile - bMobile;
      });
    }
    if (activeProject.image?.src) {
      return [{ src: activeProject.image.src, alt: activeProject.image.alt }];
    }
    return [];
  }, [activeProject]);

  const activeShot = modalShots[shotIndex];

  return (
    <>
      <div className="mt-6 grid gap-10">
  {groupedProjects.map((group) => (
    <section key={group.key}>
      <div className="mb-4">
        <h4 className="text-xl font-semibold">{group.title}</h4>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
          {group.desc}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {group.projects.map((p, index) => {
          const isRestricted = isRestrictedProject(p);
          const commercialLabel = getCommercialLabel(p);
          const isFeatured = group.key === "products" && index < 3;

          return (
            // ACÁ DEJÁS TU motion.div DE LA CARD COMO YA LO TENÉS
			 <motion.div
  key={p.title}
  role="button"
  tabIndex={0}
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45 }}
  whileHover={{ y: -5, scale: 1.01 }}
  onClick={() => openModal(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(p);
              }}
              className={clsx(
                "rounded-2xl border p-5 transition cursor-pointer select-none",
                "hover:opacity-[0.98]"
              )}
              style={{
  background:
    "radial-gradient(circle at top left, rgba(96,165,250,0.12), transparent 34%), var(--card)",
  borderColor: "rgba(96,165,250,0.22)",
  boxShadow:
    "0 18px 50px rgba(0,0,0,0.10), 0 0 24px rgba(96,165,250,0.06)",
}}
            >
              {p.image?.src ? (
                <div
                  className="mb-4 overflow-hidden rounded-xl border"
                  style={{
                    ...cardStyle,
                    background: "var(--background)",
                    minHeight: 290,
                    display: "grid",
                    alignItems: "center",
                  }}
                >
                  {isMobileShot(p.image, p) ? (
                    <div
                      className="grid place-items-center"
                      style={{
                        minHeight: isMarketplaceProject(p) ? 360 : 340,
                        padding: isMarketplaceProject(p) ? "26px 0" : "20px 0",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
                      }}
                    >
                      <div
                        style={{
                          width: isMarketplaceProject(p) ? 170 : 182,
                          maxWidth: "78%",
                          borderRadius: isMarketplaceProject(p) ? 30 : 28,
                          padding: isMarketplaceProject(p) ? 8 : 7,
                          background: "#0f0f10",
                          boxShadow:
                            "0 16px 38px rgba(0,0,0,0.36), inset 0 0 0 1px rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            borderRadius: isMarketplaceProject(p) ? 24 : 22,
                            overflow: "hidden",
                            background: "#000",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 7,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: isMarketplaceProject(p) ? 32 : 40,
                              height: isMarketplaceProject(p) ? 7 : 8,
                              borderRadius: 999,
                              background: "#111",
                              zIndex: 2,
                              opacity: 0.96,
                              boxShadow:
                                "0 1px 2px rgba(255,255,255,0.04) inset",
                            }}
                          />
                          <img
                            src={p.image.src}
                            alt={p.image.alt}
                            loading="lazy"
                            className="transition duration-300 hover:scale-[1.03]"
                            style={{
                              width: "100%",
                              height: isMarketplaceProject(p) ? 292 : 305,
                              objectFit: "contain",
                              objectPosition: "top center",
                              display: "block",
                              background: "#000",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      loading="lazy"
                      className="w-full transition duration-300 hover:scale-[1.03]"
                      style={{
                        height: 260,
                        objectFit: "contain",
                        objectPosition: "center",
                        background: "var(--background)",
                        display: "block",
                        padding: "8px 0",
                      }}
                    />
                  )}
                </div>
              ) : null}
{isFeatured ? (
  <div className="mb-3">
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px]"
      style={{
        borderColor: "rgba(96,165,250,0.35)",
        background: "rgba(96,165,250,0.10)",
        color: "#93c5fd",
      }}
    >
      <span className="h-2 w-2 rounded-full bg-sky-400" />
      {isEs ? "Proyecto destacado" : "Featured project"}
    </span>
  </div>
) : null}
              {p.badge ? (
                <div className="mb-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
                    style={
                      isLiveBadgeProject(p)
                        ? {
                            border: "1px solid rgba(34,197,94,0.35)",
                            background: "rgba(34,197,94,0.10)",
                            color: "var(--foreground)",
                          }
                        : {
                            border: "1px solid var(--card-border)",
                            background: "rgba(255,255,255,0.03)",
                            color: "var(--muted)",
                          }
                    }
                  >
                    <span
                      className={clsx("rounded-full", getDotClass(p.badge))}
                      style={{
                        width: isLiveBadgeProject(p) ? 9 : 8,
                        height: isLiveBadgeProject(p) ? 9 : 8,
                        boxShadow: isLiveBadgeProject(p)
                          ? "0 0 0 4px rgba(34,197,94,0.12)"
                          : "none",
                      }}
                    />
                    {p.badge}
                  </span>
                </div>
              ) : null}

              {commercialLabel ? (
                <div className="mb-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px]"
                    style={getCommercialBadgeStyle(p)}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: "currentColor", opacity: 0.9 }}
                    />
                    {commercialLabel}
                  </span>
                </div>
              ) : null}

              <h4
  className="text-lg font-semibold"
  style={{
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  {p.title}
</h4>

<div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
  <div
    className="rounded-xl border px-3 py-2"
    style={{
      borderColor: "rgba(96,165,250,0.20)",
      background: "rgba(96,165,250,0.06)",
      color: "var(--muted)",
    }}
  >
    <div style={{ color: "var(--muted-2)" }}>
      {isEs ? "Rol" : "Role"}
    </div>
    <div className="mt-1 font-medium" style={{ color: "var(--foreground)" }}>
      Full Stack
    </div>
  </div>

  <div
    className="rounded-xl border px-3 py-2"
    style={{
      borderColor: "rgba(167,139,250,0.20)",
      background: "rgba(167,139,250,0.06)",
      color: "var(--muted)",
    }}
  >
    <div style={{ color: "var(--muted-2)" }}>
      {isEs ? "Tipo" : "Type"}
    </div>
    <div className="mt-1 font-medium" style={{ color: "var(--foreground)" }}>
      {isMobileProject(p) ? "Mobile + API" : "Web + Backend"}
    </div>
  </div>

  <div
    className="rounded-xl border px-3 py-2"
    style={{
      borderColor: "rgba(34,197,94,0.20)",
      background: "rgba(34,197,94,0.06)",
      color: "var(--muted)",
    }}
  >
    <div style={{ color: "var(--muted-2)" }}>
      {isEs ? "Estado" : "Status"}
    </div>
    <div className="mt-1 font-medium" style={{ color: "var(--foreground)" }}>
      {p.badge ? p.badge.split("·")[0].trim() : isEs ? "Privado" : "Private"}
    </div>
  </div>
</div>

              <p className="mt-2 text-sm leading-relaxed" style={mutedStyle}>
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full border px-3 py-1"
                    style={{
                      borderColor: "rgba(96,165,250,0.22)",
background: "rgba(96,165,250,0.06)",
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
                      style={
                        isMarketProduct(p)
                          ? {
                              background: "rgba(34,211,238,0.10)",
                              borderColor: "rgba(34,211,238,0.38)",
                              color: "var(--foreground)",
                              boxShadow: "0 10px 24px rgba(34,211,238,0.14)",
                            }
                          : isLiveWebsiteProject(p)
                          ? {
                              background: "rgba(34,197,94,0.10)",
                              borderColor: "rgba(34,197,94,0.35)",
                              color: "var(--foreground)",
                            }
                          : ghostBtnStyle
                      }
                      href={getPublicDemoPath(p)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isMarketProduct(p) ? (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: "#67e8f9" }}
                          />
                          {getPrimaryLinkLabel(p)}
                        </span>
                      ) : isLiveWebsiteProject(p) ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-400" />
                          {getPrimaryLinkLabel(p)}
                        </span>
                      ) : (
                        getPrimaryLinkLabel(p)
                      )}
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

                {hasDownloadLinks(p) ? (
                  <>
                    {p.downloadLinks?.apk ? (
                      <a
                        className={ghostBtnClass}
                        href={p.downloadLinks.apk}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          borderColor: "rgba(59,130,246,0.35)",
                          background: "rgba(59,130,246,0.10)",
                          color: "var(--foreground)",
                        }}
                      >
                        {p.downloadLinks.apkLabel ||
                          (isEs ? "Descargar APK" : "Download APK")}
                      </a>
                    ) : null}

                    {p.downloadLinks?.playTesting ? (
                      <a
                        className={ghostBtnClass}
                        href={p.downloadLinks.playTesting}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          borderColor: "rgba(245,158,11,0.35)",
                          background: "rgba(245,158,11,0.10)",
                          color: "var(--foreground)",
                        }}
                      >
                        {p.downloadLinks.playLabel || "Google Play Testing"}
                      </a>
                    ) : null}
                  </>
                ) : null}

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
  className="ml-auto rounded-xl border px-4 py-2 text-xs font-medium no-underline transition hover:-translate-y-0.5"
  style={{
    borderColor: "rgba(96,165,250,0.30)",
    background: "rgba(96,165,250,0.08)",
    color: "var(--foreground)",
  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {isEs ? "Ver detalles" : "View details"}
                </a>
              </div>

              {isRadarProject(p) && p.downloadLinks?.note ? (
                <div
                  className="mt-3 rounded-xl border px-3 py-3 text-xs leading-relaxed"
                  style={{
                    borderColor: "rgba(245,158,11,0.22)",
                    background: "rgba(245,158,11,0.08)",
                    color: "var(--muted)",
                  }}
                >
                  {p.downloadLinks.note}
                </div>
              ) : null}
           </motion.div>
          );
        })}
      </div>
	  {group.key === "products" ? (
  <div
    className="mt-6 rounded-3xl border p-5 md:p-6"
    style={{
      borderColor: "rgba(96,165,250,0.28)",
      background:
        "radial-gradient(circle at top left, rgba(96,165,250,0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(34,197,94,0.12), transparent 32%), var(--card)",
      boxShadow:
        "0 18px 60px rgba(0,0,0,0.10), 0 0 24px rgba(96,165,250,0.08)",
    }}
  >
    <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
      {isEs ? "Productos disponibles" : "Available products"}
    </p>

    <h4 className="mt-3 text-xl font-semibold">
      {isEs
        ? "¿Te interesa adaptar o licenciar un producto?"
        : "Interested in adapting or licensing a product?"}
    </h4>

    <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={mutedStyle}>
      {isEs
        ? "Podemos conversar sobre licenciamiento, white-label, implementación comercial, evolución de producto o partnership."
        : "We can discuss licensing, white-label, commercial deployment, product evolution, or partnership opportunities."}
    </p>

    <div className="mt-5 flex flex-wrap gap-3">
      <a
        href={LINKS.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        {isEs ? "Agendar reunión" : "Book meeting"}
      </a>

      <a
        href={`/go/request-access/commercial?lang=${lang}`}
        className="rounded-xl border px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5"
        style={{
          borderColor: "rgba(34,197,94,0.35)",
          background: "rgba(34,197,94,0.10)",
          color: "var(--foreground)",
        }}
      >
        {isEs ? "Solicitar ficha comercial" : "Request commercial one-pager"}
      </a>
    </div>
  </div>
) : null}
    </section>
  ))}
</div>

    <AnimatePresence>
  {open && activeProject ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4 overflow-x-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0"
            onClick={closeModal}
            style={{
              background: "rgba(0,0,0,0.82)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          <div
            className="relative z-[210] w-full max-w-5xl rounded-2xl border flex flex-col overflow-hidden"
            style={{
              background: "var(--card)",
              borderColor: "var(--card-border)",
              boxShadow: "0 24px 100px rgba(0,0,0,0.6)",
              width: "min(100%, 1100px)",
              maxHeight: "calc(100dvh - 16px)",
            }}
          >
            <div
              className="flex-none flex items-start justify-between gap-3 p-3 md:p-5 border-b"
              style={{ borderColor: "var(--card-border)" }}
            >
              <div className="min-w-0">
                {activeProject.badge ? (
                  <div className="mb-2">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
                      style={
                        isLiveBadgeProject(activeProject)
                          ? {
                              border: "1px solid rgba(34,197,94,0.35)",
                              background: "rgba(34,197,94,0.10)",
                              color: "var(--foreground)",
                            }
                          : {
                              border: "1px solid var(--card-border)",
                              background: "rgba(255,255,255,0.03)",
                              color: "var(--muted)",
                            }
                      }
                    >
                      <span
                        className={clsx(
                          "rounded-full",
                          getDotClass(activeProject.badge)
                        )}
                        style={{
                          width: isLiveBadgeProject(activeProject) ? 9 : 8,
                          height: isLiveBadgeProject(activeProject) ? 9 : 8,
                          boxShadow: isLiveBadgeProject(activeProject)
                            ? "0 0 0 4px rgba(34,197,94,0.12)"
                            : "none",
                        }}
                      />
                      {activeProject.badge}
                    </span>
                  </div>
                ) : null}

                {getCommercialLabel(activeProject) ? (
                  <div className="mb-2">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px]"
                      style={getCommercialBadgeStyle(activeProject)}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: "currentColor", opacity: 0.9 }}
                      />
                      {getCommercialLabel(activeProject)}
                    </span>
                  </div>
                ) : null}

               <h3
  className="text-lg md:text-xl font-semibold truncate"
  style={{
    background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  {activeProject.title}
</h3>

                <p
                  className="mt-1 text-[13px] leading-6 md:text-sm md:leading-relaxed md:max-w-none"
                  style={{
                    ...mutedStyle,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {activeProject.desc}
                </p>

                {isLiveWebsiteProject(activeProject) ? (
                  <div className="mt-3 md:hidden">
                    <a
                      href={getPublicDemoPath(activeProject)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
                      style={{
                        background: "#16a34a",
                        color: "#ffffff",
                        boxShadow: "0 10px 24px rgba(22,163,74,0.22)",
                      }}
                    >
                      <span className="h-2 w-2 rounded-full bg-white/90" />
                      {getPrimaryLinkLabel(activeProject)}
                    </a>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-xl border px-2.5 py-2 text-sm"
                style={ghostBtnStyle}
                aria-label={isEs ? "Cerrar" : "Close"}
                title="Esc"
              >
                ✕
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto p-3 md:p-5"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-[1.35fr_0.65fr]">
                <div className="order-1">
                  {activeProject?.video?.provider === "youtube" &&
                  activeProject?.video?.id ? (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {isIntranetProject(activeProject) && !showVideo ? (
                        <a
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          href={getOpenVideoPath(activeProject)}
                        >
                          {activeProject.video.label ||
                            (isEs ? "Ver video" : "View video")}
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
                            : activeProject.video.label ||
                              (isEs ? "Ver video" : "View video")}
                        </button>
                      )}

                      <span
                        className="text-xs inline-flex items-center gap-2"
                        style={muted2Style}
                      >
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

                  <div
                    className="overflow-hidden rounded-xl border relative z-[220]"
                    style={{
                      ...cardStyle,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
                    }}
                  >
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
                      isMobileShot(activeShot, activeProject) ? (
                        <div
                          className="grid place-items-center"
                          style={{
                            minHeight: isMarketplaceProject(activeProject)
                              ? 700
                              : 680,
                            padding: isMarketplaceProject(activeProject)
                              ? "28px 0 20px"
                              : "20px 0 16px",
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
                          }}
                        >
                          <div
                            style={{
                              width: isMarketplaceProject(activeProject)
                                ? 282
                                : 304,
                              maxWidth: "min(86vw, 334px)",
                              borderRadius: isMarketplaceProject(activeProject)
                                ? 38
                                : 36,
                              padding: isMarketplaceProject(activeProject)
                                ? 11
                                : 10,
                              background: "#0f0f10",
                              boxShadow:
                                "0 20px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                borderRadius: isMarketplaceProject(activeProject)
                                  ? 30
                                  : 28,
                                overflow: "hidden",
                                background: "#000",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: 10,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  width: isMarketplaceProject(activeProject)
                                    ? 52
                                    : 80,
                                  height: isMarketplaceProject(activeProject)
                                    ? 12
                                    : 18,
                                  borderRadius: 999,
                                  background: "#111",
                                  zIndex: 2,
                                  opacity: 0.96,
                                  boxShadow:
                                    "0 1px 3px rgba(255,255,255,0.05) inset",
                                }}
                              />
                              <img
                                src={activeShot.src}
                                alt={activeShot.alt}
                                loading="lazy"
                                style={{
                                  width: "100%",
                                  height: isMarketplaceProject(activeProject)
                                    ? 590
                                    : 610,
                                  objectFit: "contain",
                                  objectPosition: "center top",
                                  display: "block",
                                  background: "#000",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={activeShot.src}
                          alt={activeShot.alt}
                          className="w-full"
                          style={{
                            height: 360,
                            objectFit: "contain",
                            objectPosition: "center",
                            background: "var(--background)",
                            display: "block",
                          }}
                          loading="lazy"
                        />
                      )
                    ) : (
                      <div
                        className="grid place-items-center"
                        style={{ height: 360, color: "var(--muted)" }}
                      >
                        {isEs ? "Sin screenshots todavía" : "No screenshots yet"}
                      </div>
                    )}

                    {!showVideo && modalShots.length > 1 ? (
                      <>
                        <button
                          type="button"
                          className="absolute left-3 top-1/2 z-[240] -translate-y-1/2 rounded-full border px-3 py-2 text-sm transition disabled:opacity-35"
                          style={{
                            background: "rgba(15,15,16,0.72)",
                            borderColor: "rgba(255,255,255,0.12)",
                            color: "#fff",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                          }}
                          onClick={async () => {
                            if (!activeProject) return;
                            await trackModalEvent(
                              "/modal/screenshot-prev",
                              getProjectSlug(activeProject)
                            );
                            setShotIndex((v) => Math.max(0, v - 1));
                          }}
                          disabled={shotIndex === 0}
                          aria-label={isEs ? "Anterior" : "Previous"}
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          className="absolute right-3 top-1/2 z-[240] -translate-y-1/2 rounded-full border px-3 py-2 text-sm transition disabled:opacity-35"
                          style={{
                            background: "rgba(15,15,16,0.72)",
                            borderColor: "rgba(255,255,255,0.12)",
                            color: "#fff",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                          }}
                          onClick={async () => {
                            if (!activeProject) return;
                            await trackModalEvent(
                              "/modal/screenshot-next",
                              getProjectSlug(activeProject)
                            );
                            setShotIndex((v) =>
                              Math.min(modalShots.length - 1, v + 1)
                            );
                          }}
                          disabled={shotIndex >= modalShots.length - 1}
                          aria-label={isEs ? "Siguiente" : "Next"}
                        >
                          →
                        </button>
                      </>
                    ) : null}
                  </div>

                  {!showVideo && modalShots.length > 1 ? (
                    <div className="mt-3 flex justify-center">
                      <div className="flex items-center gap-2 overflow-x-auto">
                        {modalShots.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={async () => {
                              if (!activeProject) return;
                              await trackModalEvent(
                                "/modal/screenshot-dot",
                                getProjectSlug(activeProject)
                              );
                              setShotIndex(idx);
                            }}
                            className="h-2.5 w-2.5 rounded-full border transition"
                            style={{
                              borderColor: "var(--card-border)",
                              background:
                                idx === shotIndex
                                  ? "var(--foreground)"
                                  : "transparent",
                              opacity: idx === shotIndex ? 1 : 0.6,
                            }}
                            aria-label={`Screenshot ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : !showVideo ? (
                    <div className="mt-3 text-xs" style={muted2Style}>
                      {isEs
                        ? "Tip: podés navegar con ← →"
                        : "Tip: use ← → to navigate"}
                    </div>
                  ) : null}
                </div>

                <div className="min-w-0 order-2 pt-1 md:pt-0">
                  <div className="md:hidden">
                    <button
                      type="button"
                      onClick={() => setShowMobileDetails((v) => !v)}
                      className="w-full rounded-xl border px-4 py-3 text-sm font-medium transition"
                      style={{
                        borderColor: "var(--card-border)",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                        color: "var(--foreground)",
                      }}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>
                          {showMobileDetails
                            ? isEs
                              ? "Ver menos"
                              : "Show less"
                            : isEs
                            ? "Ver más"
                            : "Show more"}
                        </span>

                        <span
                          className="inline-block transition-transform duration-300"
                          style={{
                            transform: showMobileDetails
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          ▾
                        </span>
                      </span>
                    </button>
                  </div>

                  <div className={showMobileDetails ? "mt-4 md:mt-0" : "hidden md:block"}>
                    {activeProject.statusNote ? (
                      <div
                        className="mb-4 rounded-xl border px-4 py-3 text-sm leading-relaxed"
                        style={{
                          borderColor: "rgba(34,197,94,0.22)",
                          background: "rgba(34,197,94,0.08)",
                          color: "var(--muted)",
                        }}
                      >
                        {activeProject.statusNote}
                      </div>
                    ) : null}

                    <h4 className="text-sm md:text-base font-semibold">
                      {isEs ? "Puntos clave" : "Key points"}
                    </h4>

                    {activeProject.features?.length ? (
                      <ul
                        className="mt-2 space-y-2 text-[13px] md:text-sm"
                        style={mutedStyle}
                      >
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

                    <div className="mt-4 md:mt-5">
                      <h4 className="font-semibold">{isEs ? "Links" : "Links"}</h4>

                      <div className="mt-3 flex flex-wrap gap-3">
					 {[
  "sghub",
  "nutrimvp",
  "playduel",
  "sg-copilot-crm",
  "radar",
  "kiosco",
  "museo",
  "marketplace",
  "sg-saas-starter",
  "sg-booking-pro",
  "sociedad-canarias-uy",
  "intranet",
].includes(getProjectSlug(activeProject)) ? (

  <a
    className={primaryBtnClass}
    style={{
      background: "rgba(34,197,94,0.95)",
      color: "#ffffff",
    }}
    href={getProjectDetailPath(activeProject)}
  >
    {isEs ? "Ver caso completo" : "View full case study"}
  </a>
) : null}
{isMobileProject(activeProject) ? (
  <a
    className={softBtnClass}
    style={{
      borderColor: "rgba(59,130,246,0.35)",
      background: "rgba(59,130,246,0.10)",
      color: "var(--foreground)",
    }}
    href={getRequestAccessPath(activeProject)}
  >
    {isEs ? "Solicitar APK Preview" : "Request APK Preview"}
  </a>
) : null}



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
                              style={
                                isMarketProduct(activeProject)
                                  ? {
                                      background: "#0891b2",
                                      color: "#ffffff",
                                    }
                                  : isLiveWebsiteProject(activeProject)
                                  ? {
                                      background: "#16a34a",
                                      color: "#ffffff",
                                    }
                                  : primaryBtnStyle
                              }
                              href={getPublicDemoPath(activeProject)}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {isMarketProduct(activeProject) ||
                              isLiveWebsiteProject(activeProject) ? (
                                <span className="inline-flex items-center gap-2">
                                  <span className="h-2 w-2 rounded-full bg-white/90" />
                                  {getPrimaryLinkLabel(activeProject)}
                                </span>
                              ) : (
                                getPrimaryLinkLabel(activeProject)
                              )}
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

                        {activeProject.downloadLinks?.apk ? (
                          <a
                            className={softBtnClass}
                            style={{
                              borderColor: "rgba(59,130,246,0.35)",
                              background: "rgba(59,130,246,0.10)",
                              color: "var(--foreground)",
                            }}
                            href={activeProject.downloadLinks.apk}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {activeProject.downloadLinks.apkLabel ||
                              (isEs ? "Descargar APK" : "Download APK")}
                          </a>
                        ) : null}

                        {activeProject.downloadLinks?.playTesting ? (
                          <a
                            className={softBtnClass}
                            style={{
                              borderColor: "rgba(245,158,11,0.35)",
                              background: "rgba(245,158,11,0.10)",
                              color: "var(--foreground)",
                            }}
                            href={activeProject.downloadLinks.playTesting}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {activeProject.downloadLinks.playLabel ||
                              "Google Play Testing"}
                          </a>
                        ) : null}

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
<a
  className={softBtnClass}
  style={{
    borderColor: "rgba(96,165,250,0.35)",
    background: "rgba(96,165,250,0.10)",
    color: "var(--foreground)",
  }}
  href="#contact"
  onClick={closeModal}
>
  {isEs ? "Quiero algo similar" : "I want something similar"}
</a>
                        <button
                          type="button"
                          className={ghostBtnClass}
                          style={ghostBtnStyle}
                          onClick={closeModal}
                        >
                          {isEs ? "Cerrar" : "Close"}
                        </button>
                      </div>

                      {activeProject.downloadLinks?.note ? (
                        <div
                          className="mt-4 rounded-xl border px-4 py-3 text-xs leading-relaxed"
                          style={{
                            borderColor: "rgba(245,158,11,0.22)",
                            background: "rgba(245,158,11,0.08)",
                            color: "var(--muted)",
                          }}
                        >
                          {activeProject.downloadLinks.note}
                        </div>
                      ) : null}

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
       </motion.div>
      ) : null}
</AnimatePresence>
    </>
  );
}
