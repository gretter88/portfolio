"use client";

import { motion } from "framer-motion";

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      
      className={`rounded-2xl border p-5 transition ${className}`}
	  whileHover={{
  y: -4,
  scale: 1.01,
  borderColor: "rgba(96,165,250,0.45)",
}}
      style={{
        background:
          "linear-gradient(135deg, var(--card), color-mix(in srgb, var(--card) 82%, #60a5fa 18%))",
        borderColor: "var(--card-border)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.12), 0 0 24px rgba(96,165,250,0.10)",
      }}
    >
      {children}
    </motion.div>
  );
}