"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  lang: string;
  labels: {
    name: string;
    role: string;
    projects: string;
    commercial: string;
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
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  const itemStyle: React.CSSProperties = {
    borderColor: "rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.06)",
    color: "var(--foreground)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex md:hidden rounded-xl border px-3 py-2 text-sm"
        style={{
          borderColor: "var(--card-border)",
          background: "var(--card)",
        }}
        aria-label="Open menu"
      >
        ☰
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-200"
            style={{
              background: "rgba(0,0,0,0.52)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />

          <div
            className="fixed right-4 top-[72px] z-50 w-[min(92vw,320px)] rounded-2xl border p-3 shadow-2xl md:hidden"
            style={{
              background: "rgba(10,10,12,0.96)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              transformOrigin: "top right",
              boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
            }}
          >
            <div
              className="mb-3 rounded-2xl border p-3"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 shrink-0 rounded-xl border grid place-items-center font-semibold"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(0,0,0,0.28)",
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
              <a
                href="#projects"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.projects}
              </a>

              <a
                href="#commercial-projects"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.commercial}
              </a>

              <a
                href="#experience"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.experience}
              </a>

              <a
                href="#contact"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.contact}
              </a>

              <Link
                href={labels.switchHref}
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.switchTo}
              </Link>

              <a
                href="/go/linkedin"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.linkedin}
              </a>

              <a
                href="/go/github"
                className="rounded-xl border px-4 py-3 text-sm transition"
                style={itemStyle}
                onClick={closeMenu}
              >
                {labels.github}
              </a>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

