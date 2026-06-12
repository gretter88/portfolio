"use client";

import { motion } from "framer-motion";

type AvailabilitySectionProps = {
  i: {
    sectionNowTitle: string;
    sectionNowDesc: string;
    nowChipsLabel: string;
    nowChips: string[];
    bestFitLabel: string;
    bestFitItems: string[];
    nowPoints: string[];
    nowCtaPrimary: string;
    nowCtaSecondary: string;
    nowResponseTime: string;
  };
};

function getDotColor(value: string) {
  const key = value.toLowerCase();

  if (key.includes("full") || key.includes("empleado") || key.includes("empresa")) {
    return "#22c55e";
  }

  if (key.includes("part") || key.includes("freelance")) {
    return "#f59e0b";
  }

  if (key.includes("mobile")) {
    return "#a78bfa";
  }

  return "#60a5fa";
}

export default function AvailabilitySection({ i }: AvailabilitySectionProps) {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden rounded-3xl border p-6 md:p-8"
        style={{
          borderColor: "rgba(96,165,250,0.25)",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(34,197,94,0.14), transparent 32%), var(--card)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.12), 0 0 30px rgba(96,165,250,0.08)",
        }}
      >
        <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
          Disponibilidad
        </p>

        <h3 className="mt-3 text-2xl font-semibold">{i.sectionNowTitle}</h3>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {i.sectionNowDesc}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span style={{ color: "var(--muted-2)" }}>{i.nowChipsLabel}</span>

          {i.nowChips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{
                borderColor: "rgba(96,165,250,0.25)",
                background: "rgba(96,165,250,0.08)",
                color: "var(--muted)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: getDotColor(c) }} />
              {c}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span style={{ color: "var(--muted-2)" }}>{i.bestFitLabel}</span>

          {i.bestFitItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
              style={{
                borderColor: "rgba(167,139,250,0.25)",
                background: "rgba(167,139,250,0.08)",
                color: "var(--muted)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: getDotColor(item) }} />
              {item}
            </span>
          ))}
        </div>

        <ul className="mt-5 grid gap-3 text-sm md:grid-cols-2" style={{ color: "var(--muted)" }}>
          {i.nowPoints.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-2 font-medium transition hover:-translate-y-0.5"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            {i.nowCtaPrimary}
          </a>

          <a
            href="/go/cv"
            className="rounded-xl border px-5 py-2 font-medium transition hover:-translate-y-0.5"
            style={{
              borderColor: "rgba(96,165,250,0.25)",
              background: "rgba(96,165,250,0.08)",
            }}
          >
            {i.nowCtaSecondary}
          </a>

          <span className="text-sm" style={{ color: "var(--muted-2)" }}>
            {i.nowResponseTime}
          </span>
        </div>
      </motion.div>
    </section>
  );
}