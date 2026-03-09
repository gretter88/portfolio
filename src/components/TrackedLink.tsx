"use client";

import React from "react";

function getVisitorId() {
  const cookieName = "visitor_id=";
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith(cookieName)) {
      return trimmed.substring(cookieName.length);
    }
  }

  const id = crypto.randomUUID();
  document.cookie = `visitor_id=${id}; path=/; max-age=31536000; samesite=lax`;
  return id;
}

type Props = {
  href: string;
  trackPath: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function TrackedLink({
  href,
  trackPath,
  lang,
  className,
  style,
  children,
  target,
  rel,
}: Props) {
  async function handleClick() {
    try {
      const visitorId = getVisitorId();

      await fetch("/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "click",
          path: trackPath,
          lang: lang || null,
          visitorId,
          referrer: document.referrer || null,
        }),
        keepalive: true,
      });
    } catch {}
  }

  return (
    <a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

