"use client";

import { motion } from "framer-motion";

type Props = {
  i: {
    toolLogosTitle: string;
    toolLogosKicker: string;
    toolLogosItems: string[];
  };
};

export default function ToolLogosSection({ i }: Props) {
  return (
    <section className="mt-16">
      <p className="text-sm font-medium" style={{ color: "var(--muted-2)" }}>
        Stack profesional
      </p>

      <h3 className="mt-3 text-2xl font-semibold">{i.toolLogosTitle}</h3>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {i.toolLogosKicker}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {i.toolLogosItems.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.025 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="rounded-2xl border px-4 py-3 text-sm font-medium"
            style={{
              borderColor: "rgba(96,165,250,0.24)",
              background:
                "linear-gradient(135deg, rgba(96,165,250,0.10), rgba(167,139,250,0.07))",
              color: "var(--foreground)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}