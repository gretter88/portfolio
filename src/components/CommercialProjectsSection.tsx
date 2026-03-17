import React from "react";

type CommercialProjectItem = {
  title: string;
  status: string;
  description: string;
  model: string;
};

type Props = {
  i: {
    commercialProjectsTitle: string;
    commercialProjectsKicker: string;
    commercialProjectsIntro: string;
    commercialProjectsBadge: string;
    commercialProjectsModelLabel: string;
    commercialProjectsCta: string;
    commercialProjectsContact: string;
    commercialProjectsRequest: string;
    commercialProjectsItems: CommercialProjectItem[];
  };
};

export default function CommercialProjectsSection({ i }: Props) {
  return (
    <section id="commercial-projects" className="mt-16">
      <div
        className="rounded-3xl border p-6 md:p-8"
        style={{
          background: "var(--card)",
          borderColor: "var(--card-border)",
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

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {i.commercialProjectsItems.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border p-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "var(--card-border)",
              }}
            >
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
            </article>
          ))}
        </div>

        <div
          className="mt-6 rounded-2xl border p-5 md:flex md:items-center md:justify-between md:gap-6"
          style={{
            borderColor: "var(--card-border)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <p
            className="text-sm leading-relaxed md:max-w-3xl"
            style={{ color: "var(--muted)" }}
          >
            {i.commercialProjectsCta}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:flex-none">
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
              href="/go/request-access/radar"
              className="rounded-xl border px-4 py-2 text-sm"
              style={{
                background: "transparent",
                borderColor: "var(--card-border)",
              }}
            >
              {i.commercialProjectsRequest}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
