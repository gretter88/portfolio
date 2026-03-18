import React from "react";

type CommercialProjectItem = {
  title: string;
  status: string;
  description: string;
  model: string;
  idealFor: string;
  tags: string[];
  requestHref: string;
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

  return {
    borderColor: "var(--card-border)",
    background: "rgba(255,255,255,0.04)",
    color: "var(--muted)",
  };
}

export default function CommercialProjectsSection({ i, lang }: Props) {

  return (
    <section id="commercial-projects" className="mt-16">
      <div
        className="rounded-3xl border overflow-hidden"
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
            {i.commercialProjectsItems.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border p-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "var(--card-border)",
                }}
              >
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

                <h4 className="mt-4 text-lg font-semibold">{project.title}</h4>

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
                  <div className="mt-1 text-sm font-medium">{project.model}</div>
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


<div className="mt-5">
  <a
    href={project.requestHref}
    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition"
    style={{
      borderColor: "var(--card-border)",
      background: "rgba(255,255,255,0.04)",
      color: "var(--foreground)",
    }}
  >
    {i.commercialProjectsCardRequest}
  </a>
</div>


              </article>
            ))}
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
              <div className="mt-1">{i.commercialProjectsSecondaryNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
