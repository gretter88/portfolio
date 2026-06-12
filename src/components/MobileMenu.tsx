"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  lang: string;
  labels: {
    name: string;
    role: string;
    services: string;
    projects: string;
    commercial: string;
    process: string;
    experience: string;
    contact: string;
    linkedin: string;
    github: string;
    switchTo: string;
    switchHref: string;
  };
};

export default function MobileMenu({ labels }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const itemStyle: React.CSSProperties = {
    borderColor: "rgba(96,165,250,0.18)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(96,165,250,0.06))",
    color: "var(--foreground)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
  };

  const itemClass =
    "rounded-xl border px-4 py-3 text-sm transition hover:-translate-y-0.5";

  const menuItems = [
    { href: "#services", label: labels.services },
    { href: "#projects", label: labels.projects },
    { href: "#commercial-projects", label: labels.commercial },
    { href: "#process", label: labels.process },
    { href: "#experience", label: labels.experience },
    { href: "#contact", label: labels.contact },
    { href: "/go/linkedin", label: labels.linkedin },
    { href: "/go/github", label: labels.github },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex md:hidden rounded-xl border px-3 py-2 text-sm transition hover:-translate-y-0.5"
        style={{
          borderColor: "rgba(96,165,250,0.30)",
          background:
            "linear-gradient(135deg, rgba(96,165,250,0.14), rgba(167,139,250,0.10))",
          boxShadow: "0 0 24px rgba(96,165,250,0.08)",
        }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? "×" : "☰"}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              className="fixed inset-0 z-40 md:hidden"
              style={{
                background: "rgba(0,0,0,0.58)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />

            <motion.div
              className="fixed right-4 top-[72px] z-50 w-[min(92vw,340px)] rounded-3xl border p-3 shadow-2xl md:hidden"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at bottom right, rgba(167,139,250,0.16), transparent 32%), rgba(10,10,12,0.96)",
                borderColor: "rgba(96,165,250,0.18)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transformOrigin: "top right",
                boxShadow:
                  "0 24px 80px rgba(0,0,0,0.48), 0 0 34px rgba(96,165,250,0.10)",
              }}
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="mb-3 rounded-2xl border p-3"
                style={{
                  borderColor: "rgba(96,165,250,0.18)",
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.14), rgba(167,139,250,0.08))",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 shrink-0 rounded-xl border grid place-items-center font-semibold"
                    style={{
                      borderColor: "rgba(96,165,250,0.30)",
                      background:
                        "linear-gradient(135deg, rgba(96,165,250,0.20), rgba(167,139,250,0.14))",
                      color: "var(--foreground)",
                    }}
                  >
                    SG
                  </div>

                  <div className="min-w-0">
                    <div
                      className="text-sm font-semibold truncate"
                      style={{ color: "var(--foreground)" }}
                    >
                      {labels.name}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {labels.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={itemClass}
                    style={itemStyle}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.025 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: menuItems.length * 0.025 }}
                >
                  <Link
                    href={labels.switchHref}
                    className={itemClass}
                    style={{
                      ...itemStyle,
                      display: "block",
                    }}
                    onClick={closeMenu}
                  >
                    {labels.switchTo}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}