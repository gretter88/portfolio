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
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-200"
            style={{
              background: "rgba(0,0,0,0.38)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />

          <div
            className="fixed right-4 top-[72px] z-50 w-[min(92vw,320px)] rounded-2xl border p-3 shadow-2xl md:hidden animate-[mobileMenuIn_.22s_ease-out]"
            style={{
              background: "color-mix(in srgb, var(--card) 92%, transparent)",
              borderColor: "var(--card-border)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              transformOrigin: "top right",
            }}
          >
            <div
              className="mb-3 rounded-2xl border p-3"
              style={{
                borderColor: "var(--card-border)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 shrink-0 rounded-xl border grid place-items-center font-semibold"
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--background)",
                  }}
                >
                  SG
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">
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
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.projects}
              </a>

              <a
                href="#commercial-projects"
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.commercial}
              </a>

              <a
                href="#experience"
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.experience}
              </a>

              <a
                href="#contact"
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.contact}
              </a>

              <Link
                href={labels.switchHref}
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.switchTo}
              </Link>

              <a
                href="/go/linkedin"
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
              >
                {labels.linkedin}
              </a>

              <a
                href="/go/github"
                className="rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "var(--card-border)",
                  background: "transparent",
                }}
                onClick={() => setOpen(false)}
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
