"use client";

import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";

    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-xl border px-4 py-2 text-sm"
        style={{
          background: "var(--card)",
          borderColor: "var(--card-border)",
          opacity: 0.85,
        }}
        aria-label="Theme"
        title="Theme"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-xl border px-4 py-2 text-sm"
      style={{
        background: "var(--card)",
        borderColor: "var(--card-border)",
      }}
      aria-label="Theme"
      title="Theme"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

