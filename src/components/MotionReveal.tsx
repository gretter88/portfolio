"use client";

import { motion } from "framer-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}