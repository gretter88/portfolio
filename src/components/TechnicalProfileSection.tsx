"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

type Props = {
  i: {
    sectionSkillsTitle: string;
    sectionSkillsKicker: string;
    skills: SkillGroup[];
  };
};

const icons = ["</>", "📱", "⚙️"];

export default function TechnicalProfileSection({ i }: Props) {
  return (
    <section className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Perfil personal
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.sectionSkillsTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {i.sectionSkillsKicker}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {i.skills.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border p-5"
            style={{
              background: "var(--card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold"
              style={{
                borderColor: "rgba(167,139,250,0.28)",
                background: "rgba(167,139,250,0.08)",
              }}
            >
              {icons[index] ?? "•"}
            </div>

            <h4 className="font-semibold">{s.title}</h4>

            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}