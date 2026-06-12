"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
};

type Props = {
  i: {
    sectionExperienceTitle: string;
    sectionExperienceKicker: string;
    experience: ExperienceItem[];
  };
};

export default function ExperienceSection({ i }: Props) {
  return (
    <section id="experience" className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Portfolio profesional
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.sectionExperienceTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {i.sectionExperienceKicker}
      </p>

      <div className="relative mt-8 grid gap-6">
        <div
          className="absolute left-4 top-0 hidden h-full w-px md:block"
          style={{ background: "linear-gradient(var(--card-border), transparent)" }}
        />

        {i.experience.map((e, index) => (
          <motion.div
            key={`${e.company}-${e.period}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative rounded-2xl border p-5 md:ml-10"
            style={{
              background:
                "linear-gradient(135deg, var(--card), color-mix(in srgb, var(--card) 88%, #ffffff 12%))",
              borderColor: "var(--card-border)",
            }}
          >
            <span
              className="absolute -left-[47px] top-6 hidden h-3 w-3 rounded-full border md:block"
              style={{
                background: "#60a5fa",
                borderColor: "var(--background)",
                boxShadow: "0 0 20px rgba(96,165,250,0.45)",
              }}
            />

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="text-lg font-semibold">{e.company}</h4>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {e.role}
                </p>
              </div>

              <span
                className="rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: "rgba(96,165,250,0.25)",
                  background: "rgba(96,165,250,0.08)",
                  color: "var(--muted)",
                }}
              >
                {e.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {e.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {e.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--background)",
                    color: "var(--muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}