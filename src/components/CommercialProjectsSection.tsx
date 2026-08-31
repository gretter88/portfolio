"use client";

// src/components/CommercialProjectsSection.tsx

import React from "react";
import AnimatedCard from "@/components/AnimatedCard";
import { trackPortfolioEvent } from "@/lib/track-client";
import { buildSgHubPortfolioUrl } from "@/lib/sghub-portfolio-links";

type CommercialProjectItem = {
  title: string;
  status: string;
  description: string;
  model: string;
  idealFor: string;
  tags: string[];
  requestHref: string;
  pdfHref?: string;
  featuredLabel?: string;
  marketProduct?: boolean;
};

type Props = {
  lang: "es" | "en";
  i: {
    commercialProjectsTitle: string;
    commercialProjectsKicker: string;
    commercialProjectsIntro: string;
    commercialProjectsBadge: string;
    commercialProjectsModelLabel: string;
    commercialProjectsIdealForLabel: string;
    commercialProjectsCta: string;
    commercialProjectsContact: string;
    commercialProjectsCardRequest: string;
    commercialProjectsRequest: string;
    commercialProjectsBottomNote: string;
    commercialProjectsSecondaryNote: string;
    commercialProjectsPdf: string;
    commercialProjectsItems: CommercialProjectItem[];
  };
};

function getTagStyle(tag: string): React.CSSProperties {
  const t = tag.toLowerCase();

  if (
    t.includes("licencia") ||
    t.includes("license") ||
    t.includes("licensing")
  ) {
    return {
      borderColor: "rgba(59,130,246,0.28)",
      background: "rgba(59,130,246,0.10)",
      color: "#60a5fa",
    };
  }

  if (
    t.includes("white-label") ||
    t.includes("white label") ||
    t.includes("adaptación") ||
    t.includes("adaptation")
  ) {
    return {
      borderColor: "rgba(168,85,247,0.28)",
      background: "rgba(168,85,247,0.10)",
      color: "#c084fc",
    };
  }

  if (
    t.includes("partnership") ||
    t.includes("alianza") ||
    t.includes("implementación") ||
    t.includes("deployment")
  ) {
    return {
      borderColor: "rgba(34,197,94,0.28)",
      background: "rgba(34,197,94,0.10)",
      color: "#4ade80",
    };
  }

  if (
    t.includes("adquisición") ||
    t.includes("acquisition") ||
    t.includes("venta")
  ) {
    return {
      borderColor: "rgba(245,158,11,0.28)",
      background: "rgba(245,158,11,0.10)",
      color: "#fbbf24",
    };
  }

  if (
    t.includes("saas") ||
    t.includes("crm") ||
    t.includes("business")
  ) {
    return {
      borderColor: "rgba(14,165,233,0.28)",
      background: "rgba(14,165,233,0.10)",
      color: "#38bdf8",
    };
  }

  if (
    t.includes("gaming") ||
    t.includes("realtime") ||
    t.includes("real-time")
  ) {
    return {
      borderColor: "rgba(245,158,11,0.28)",
      background: "rgba(245,158,11,0.10)",
      color: "#fbbf24",
    };
  }

  if (t.includes("mvp") || t.includes("smart shopping")) {
    return {
      borderColor: "rgba(34,197,94,0.28)",
      background: "rgba(34,197,94,0.10)",
      color: "#4ade80",
    };
  }

  if (t.includes("booking") || t.includes("reservas")) {
    return {
      borderColor: "rgba(14,165,233,0.28)",
      background: "rgba(14,165,233,0.10)",
      color: "#38bdf8",
    };
  }

  if (
    t.includes("sg hub market") ||
    t.includes("código fuente") ||
    t.includes("source code")
  ) {
    return {
      borderColor: "rgba(34,211,238,0.28)",
      background: "rgba(34,211,238,0.10)",
      color: "#67e8f9",
    };
  }

  return {
    borderColor: "var(--card-border)",
    background: "rgba(255,255,255,0.04)",
    color: "var(--muted)",
  };
}

function getMarketContent(project: CommercialProjectItem) {
  const title = project.title.toLowerCase();

  if (title.includes("sg saas starter")) {
    return "commercial_projects_sg_saas_starter_pro";
  }

  return "commercial_projects_market_product";
}

export default function CommercialProjectsSection({ i, lang }: Props) {
  const isEs = lang === "es";

  const marketUrl = buildSgHubPortfolioUrl(
    isEs ? "/market" : "/en/market",
    "commercial_projects_market"
  );

  const getProjectHref = (project: CommercialProjectItem) => {
    if (!project.marketProduct) {
      return project.requestHref;
    }

    return buildSgHubPortfolioUrl(
      project.requestHref,
      getMarketContent(project)
    );
  };

  const trackSgHubOutbound = (
    path: string,
    project: string
  ) => {
    trackPortfolioEvent({
      type: "click",
      path,
      lang,
      project,
    });
  };

  return (
    <section id="commercial-projects" className="mt-16">
      <div
        className="overflow-hidden rounded-3xl border"
        style={{
          background: "var(--card)",
          borderColor: "var(--card-border)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.12)",
        }}
      >
        <div
          className="border-b px-6 py-6 md:px-8"
          style={{
            borderColor: "var(--card-border)",
            background:
              "linear-gradient(135deg, rgba(34,197,94,0.10), rgba(59,130,246,0.07), rgba(168,85,247,0.06))",
          }}
        >
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: "rgba(34,197,94,0.35)",
                background: "rgba(34,197,94,0.10)",
                color: "var(--foreground)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 0 4px rgba(34,197,94,0.12)" }}
              />
              {i.commercialProjectsBadge}
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
              {i.commercialProjectsTitle}
            </h3>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {i.commercialProjectsKicker}
            </p>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--muted-2)" }}
            >
              {i.commercialProjectsIntro}
            </p>
          </div>
        </div>

        <div className="px-6 py-6 md:px-8 md:py-8">
          <div className="grid gap-4 md:grid-cols-3">
            {i.commercialProjectsItems.map((project) => {
              const projectHref = getProjectHref(project);

              return (
                <AnimatedCard key={project.title}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
                      style={{
                        borderColor: "rgba(34,197,94,0.25)",
                        background: "rgba(34,197,94,0.08)",
                        color: "var(--foreground)",
                      }}
                    >
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      {project.status}
                    </div>
                  </div>

                  {project.featuredLabel ? (
                    <div className="mt-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px]"
                        style={{
                          borderColor: project.marketProduct
                            ? "rgba(34,211,238,0.28)"
                            : "rgba(59,130,246,0.22)",
                          background: project.marketProduct
                            ? "rgba(34,211,238,0.08)"
                            : "rgba(59,130,246,0.08)",
                          color: project.marketProduct ? "#67e8f9" : "#93c5fd",
                        }}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: "currentColor", opacity: 0.9 }}
                        />
                        {project.featuredLabel}
                      </span>
                    </div>
                  ) : null}

                  <h4
                    className="mt-4 text-lg font-semibold"
                    style={{
                      background: project.marketProduct
                        ? "linear-gradient(90deg,#22d3ee,#60a5fa)"
                        : "linear-gradient(90deg,#60a5fa,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {project.title}
                  </h4>

                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {i.commercialProjectsModelLabel}
                    </div>
                    <div className="mt-1 text-sm font-medium">
                      {project.model}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {i.commercialProjectsIdealForLabel}
                    </div>
                    <div
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {project.idealFor}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs"
                        style={getTagStyle(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={projectHref}
                      target={project.marketProduct ? "_blank" : undefined}
                      rel={project.marketProduct ? "noreferrer" : undefined}
                      onClick={() => {
                        if (!project.marketProduct) return;

                        trackSgHubOutbound(
                          "/outbound/sghub/commercial-project",
                          "sg-saas-starter"
                        );
                      }}
                      className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
                      style={{
                        borderColor: project.marketProduct
                          ? "rgba(34,211,238,0.38)"
                          : "rgba(96,165,250,0.35)",
                        background: project.marketProduct
                          ? "rgba(34,211,238,0.10)"
                          : "rgba(96,165,250,0.10)",
                        color: "var(--foreground)",
                      }}
                    >
                      {project.marketProduct
                        ? isEs
                          ? "Comprar en SG Hub Market"
                          : "Buy on SG Hub Market"
                        : i.commercialProjectsCardRequest}
                    </a>

                    {project.pdfHref ? (
                      <a
                        href={project.pdfHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
                        style={{
                          borderColor: "rgba(59,130,246,0.35)",
                          background: "rgba(59,130,246,0.10)",
                          color: "var(--foreground)",
                        }}
                      >
                        {i.commercialProjectsPdf}
                      </a>
                    ) : null}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          <div
            className="mt-6 rounded-2xl border p-5 md:p-6"
            style={{
              borderColor: "rgba(34,211,238,0.24)",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.06))",
            }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{ color: "#67e8f9" }}
                >
                  SG Hub Market
                </div>

                <h4 className="mt-2 text-lg font-semibold">
                  {isEs
                    ? "Productos digitales disponibles para compra directa"
                    : "Digital products available for direct purchase"}
                </h4>

                <p
                  className="mt-2 max-w-2xl text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {isEs
                    ? "Los productos descargables de Santiago Gretter Software Studio se publican en SG Hub Market. Las plataformas de mayor alcance continúan disponibles mediante licenciamiento, white-label, partnership o implementación."
                    : "Downloadable products from Santiago Gretter Software Studio are published on SG Hub Market. Larger platforms remain available through licensing, white-label, partnership, or custom deployment."}
                </p>
              </div>

              <a
                href={marketUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackSgHubOutbound(
                    "/outbound/sghub/commercial-market",
                    "sghub"
                  )
                }
                className="inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {isEs ? "Visitar SG Hub Market" : "Visit SG Hub Market"}
              </a>
            </div>
          </div>

          <div
            className="mt-6 rounded-2xl border p-5"
            style={{
              borderColor: "var(--card-border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {i.commercialProjectsCta}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl px-4 py-2 text-sm font-medium"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {i.commercialProjectsContact}
              </a>

              <a
                href={`/go/request-access/commercial?lang=${lang}`}
                className="rounded-xl border px-4 py-2 text-sm font-medium"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  borderColor: "rgba(34,197,94,0.35)",
                  color: "var(--foreground)",
                }}
              >
                {i.commercialProjectsRequest}
              </a>
            </div>

            <div
              className="mt-4 text-xs leading-relaxed"
              style={{ color: "var(--muted-2)" }}
            >
              <div>{i.commercialProjectsBottomNote}</div>
              <div className="mt-1">
                {i.commercialProjectsSecondaryNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
